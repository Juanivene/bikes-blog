/* eslint-disable no-console */
import { store } from '@/redux/store/store';

import type { FetchFnProps, FetchFnResult } from './interface';

let statusCode: number | null = null;

async function fetchFn<T extends object | Blob>({
  adapter,
  baseUrl,
  cache = false,
  log = false,
  mode = 'json',
  skip = false,
  options,
  params = {},
  url,
  useToken = false,
  useCredentials = false,
}: FetchFnProps<T>): Promise<FetchFnResult<T extends Blob ? Blob : T>> {
  if (skip) {
    return {
      isSuccess: false,
      isError: false,
      error: null,
      data: null,
      statusCode,
    };
  }

  const { token } = store.getState().auth;

  try {
    let data: FetchFnResult<T>['data'] = null;

    // remove empty params from req
    const paramsToSearch = Object.entries(params)
      .filter(([, value]) => value !== '')
      .reduce<Record<string, string>>((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});

    const searchParams = new URLSearchParams(paramsToSearch).toString();

    let path = url;
    if (baseUrl) {
      path = `${baseUrl}${url}`;
    }
    if (searchParams) {
      path += `?${searchParams}`;
    }

    let reqOptions = {
      ...options,
      ...(useCredentials ? { credentials: 'include' as const } : {}),
      headers: {
        ...options?.headers,
        ...(useToken && token ? { Authorization: `Bearer ${token}` } : {}),
      },
    };
    if (!options?.next?.revalidate) {
      reqOptions = {
        ...reqOptions,
        cache: cache ? 'force-cache' : 'no-store',
      };
    }

    if (log) console.log('🚀 fetchFn - PATH:', path);

    const response = await fetch(path, reqOptions);
    statusCode = response.status;

    if (log) console.log('🚀 fetchFn - RESPONSE:', response);

    if (!response.ok) {
      if (response.status !== 401)
        console.error(`⚠️ Error in fetchFn while connecting to: ${path}`);
      try {
        const errorData = response.json() as Promise<{
          message?: string | null;
        } | null>;
        if (await errorData) {
          const errorMessage =
            'message' in errorData && typeof errorData.message === 'string'
              ? errorData.message
              : undefined;
          throw new Error(errorMessage);
        }
        throw new Error();
      } catch (e) {
        console.error(`${response.status.toString()} - ${response.statusText}`);
        throw new Error(
          (e instanceof Error && e.message) ||
            `${response.status.toString()} - ${
              response.statusText
            }: An error occurred`
        );
      }
    }

    switch (mode) {
      case 'blob':
        // @ts-expect-error - TODO: TS SHOULD BE FIXED
        data = await response.blob();
        break;
      case 'json':
      default:
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        data = await response.json();
        break;
    }

    if (log) console.log('🚀 fetchFn - DATA:', data);

    if (adapter) {
      data = adapter(data);
    }

    if (log) console.log('🚀 fetchFn - ADAPTED DATA:', data);

    // TODO: Make data be null type only if isError is true
    return {
      isSuccess: true,
      isError: false,
      error: null,
      // @ts-expect-error - TODO: TS SHOULD BE FIXED
      data,
      statusCode,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        isSuccess: false,
        isError: true,
        error,
        data: null,
        statusCode,
      };
    }

    return {
      isSuccess: false,
      isError: true,
      error: new Error('Unknown error'),
      data: null,
      statusCode,
    };
  }
}

// TODO: REFETCH

export default fetchFn;
