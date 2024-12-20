'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import IconButton from '../IconButton/IconButton';
import {
  MdChevronLeft,
  MdChevronRight,
  MdFirstPage,
  MdLastPage,
} from 'react-icons/md';

import { DTI, DTI_LIST } from '@/dti';

import type { PaginationPropsType } from './Pagination.types';

/**
 * A custom Pagination component.
 *
 * @param props - The props for the Pagination component.
 * @param totalElements - Number of elements.
 * @param onPageChange - Callback fired when the page is changed.
 * @returns React.ReactElement The Pagination element.
 */

const Pagination = (props: PaginationPropsType): React.ReactElement => {
  const { totalElements, onPageChange = () => {} } = props;

  const router = useRouter();
  const pathname = usePathname();

  // ----------------------------------------------
  // SEARCH PARAMS VALIDATION
  // ----------------------------------------------

  const [...arraySearchParams] = useSearchParams();
  const searchParams = Object.fromEntries(arraySearchParams);
  const page = Number(searchParams.page) || 0;

  const availablePages = Math.ceil(
    totalElements / Number(searchParams.entries || 1)
  );

  if (page > availablePages - 1) {
    throw new Error('PaginationError: Page cannot be greater than count');
  }

  // ----------------------------------------------
  // HANDLERS
  // ----------------------------------------------

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    const newPage = '0';
    const newSearchParams = { ...searchParams, page: newPage };
    const newSearchString = new URLSearchParams(newSearchParams).toString();

    router.push(`${pathname}?${newSearchString}`);

    onPageChange(event, 0);
  };
  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    const newPage = String(page - 1);
    const newSearchParams = { ...searchParams, page: newPage };
    const newSearchString = new URLSearchParams(newSearchParams).toString();
    router.push(`${pathname}?${newSearchString}`);

    onPageChange(event, page - 1);
  };
  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    const newPage = String(page + 1);
    const newSearchParams = { ...searchParams, page: newPage };
    const newSearchString = new URLSearchParams(newSearchParams).toString();
    router.push(`${pathname}?${newSearchString}`);

    onPageChange(event, page + 1);
  };
  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    const newPage = String(availablePages - 1);
    const newSearchParams = { ...searchParams, page: newPage };
    const newSearchString = new URLSearchParams(newSearchParams).toString();
    router.push(`${pathname}?${newSearchString}`);

    onPageChange(event, availablePages - 1);
  };

  // ----------------------------------------------
  // USEEFFECT
  // ----------------------------------------------

  // If no page or entries are defined, set them to default values
  useEffect(() => {
    if (!('page' in searchParams) || !('entries' in searchParams)) {
      const newPage = '0';
      const newEntries = '10';
      const newSearchParams = {
        ...searchParams,
        page: newPage,
        entries: newEntries,
      };
      const newSearchString = new URLSearchParams(newSearchParams).toString();
      router.push(`${pathname}?${newSearchString}`);
    }
  }, [pathname, router, searchParams]);

  // ----------------------------------------------
  // RENDER
  // ----------------------------------------------

  return (
    <div
      className="flow-root w-full"
      data-testid={DTI(DTI_LIST.PAGINATION.PAGE_SELECTOR)}
    >
      <IconButton
        className={`float-left *:text-black dark:*:text-white ${
          !(page === 0) ? 'hover:bg-gray-200 dark:hover:bg-slate-500' : ''
        } m-2`}
        colorDark="dark:bg-slate-700"
        colorLight="bg-white"
        disabled={page === 0}
        dti={DTI(DTI_LIST.BUTTON('first'))}
        iconComponent={<MdFirstPage />}
        label="Primera Página"
        onClick={handleFirstPageButtonClick}
      />
      <IconButton
        className={`float-left *:text-black dark:*:text-white ${
          !(page === 0) ? 'hover:bg-gray-200 dark:hover:bg-slate-500' : ''
        } m-2`}
        colorDark="dark:bg-slate-700"
        colorLight="bg-white"
        disabled={page === 0}
        dti={DTI(DTI_LIST.BUTTON('prev'))}
        iconComponent={<MdChevronLeft />}
        label="Página Anterior"
        onClick={handleBackButtonClick}
      />
      <IconButton
        className={`float-right *:text-black dark:*:text-white ${
          !(page === availablePages - 1)
            ? 'hover:bg-gray-200 dark:hover:bg-slate-500'
            : ''
        } m-2`}
        colorDark="dark:bg-slate-700"
        colorLight="bg-white"
        disabled={page === availablePages - 1}
        dti={DTI(DTI_LIST.BUTTON('last'))}
        iconComponent={<MdLastPage />}
        label="Última Página"
        onClick={handleLastPageButtonClick}
      />
      <IconButton
        className={`float-right *:text-black dark:*:text-white ${
          !(page === availablePages - 1)
            ? 'hover:bg-gray-200 dark:hover:bg-slate-500'
            : ''
        } m-2`}
        colorDark="dark:bg-slate-700"
        colorLight="bg-white"
        disabled={page === availablePages - 1}
        dti={DTI(DTI_LIST.BUTTON('next'))}
        iconComponent={<MdChevronRight />}
        label="Próxima Página"
        onClick={handleNextButtonClick}
      />
    </div>
  );
};

export default Pagination;
