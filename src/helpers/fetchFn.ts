type ModeTypes = 'json' | 'blob' | undefined;

/**
 * @param T is the (data) adapter return type, or Blob if it is a File
 * @param [Mode] is the mode of the fetch function. "json" (default) | "blob"
 */
interface Result<T> {
  isSuccess: boolean;
  isError: boolean;
  error: unknown;
  data: T | null;
}

/**
 * T is the adapter return type, or Blob if it is a File.
 */
interface FetchFnProps<T> {
  baseUrl?: string;
  url: RequestInfo;
  options?: RequestInit;
  mode?: ModeTypes;
  adapter?: (data: unknown) => T;
  skip?: boolean;
}

const envBaseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

/**
 * **Fetch function** - Use this wrapper to fetch data from **server components**.
 * @param {string} [props.baseUrl] *Optional*. Base URL to concat with the URL. If not sent, it will use `NEXT_PUBLIC_API_BASE_URL` from Env variables. If not defined, it will throw an error.
 * @param {string} props.url URL to be send the request, concatenated with the baseUrl.
 * @param {RequestInit} [props.options] *Optional*. Options to be passed to the fetch function. See https://nextjs.org/docs/app/api-reference/functions/fetch#fetchurl-options
 * @param {ModeTypes} [props.mode] *Optional*. `"json"` (default) | `"blob"`
 * @param {Function} [props.adapter] *Optional*. Function to be used to parse the data. Use this to return only the data you need.
 * @param {boolean} [props.skip] *Optional*. If true, the fetch will not be executed.
 * @returns {Promise<any>} Returns a promise with the result of the fetch. Data will have the type of the generic passed, or `object` if not.
 * @example const { data, isSuccess, isError, error } = await fetchFn<HelloResponseType>({
 *              baseUrl: 'https://example.com',
 *              url: '/api/hello',
 *              options: { // this is the default behavior - no "options" object is needed
 *                method: 'GET',
 *              },
 *              mode: 'json', // this is the default behavior - no "mode" option is needed
 *              adapter: (data) => { // Here you should pass a defined function
 *                return {
 *                  text: data.text,
 *                };
 *              },
 *              skip: false, // this is the default behavior - no "skip" option is needed
 *          });
 */
export async function fetchFn<T extends object | Blob>({
  baseUrl,
  url,
  options,
  mode = 'json',
  adapter,
  skip = false,
}: FetchFnProps<T>): Promise<Result<T extends Blob ? Blob : T>> {
  if (skip) {
    return {
      isSuccess: false,
      isError: false,
      error: null,
      data: null,
    };
  }

  try {
    let data: Result<T>['data'] = null;

    let path = url;
    if (baseUrl) {
      path = `${baseUrl}${url}`;
    } else {
      // To concat, baseUrl must be defined
      if (!envBaseURL) {
        throw new Error(
          'NEXT_PUBLIC_API_BASE_URL is not defined in your .env file'
        );
      }
      path = `${envBaseURL}${url}`;
    }

    const response = await fetch(path, options);

    if (!response.ok) {
      throw new Error('An error occurred');
    }

    switch (mode) {
      case 'blob':
        // @ts-expect-error - TODO: SHOULD BE FIXED
        data = await response.blob();
        break;
      case 'json':
      default:
        data = await response.json();
        break;
    }

    if (adapter) {
      data = adapter(data);
    }

    return {
      isSuccess: true,
      isError: false,
      error: null,
      // @ts-expect-error - TODO: SHOULD BE FIXED
      data,
    };
  } catch (error) {
    return {
      isSuccess: false,
      isError: true,
      error,
      data: null,
    };
  }
}

// TODO: REFETCH
