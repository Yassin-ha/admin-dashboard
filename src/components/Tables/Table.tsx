import React from 'react';
import {
  useTable,
  useGlobalFilter,
  usePagination,
  Column,
  TableInstance,
  UsePaginationInstanceProps,
  UsePaginationState,
} from 'react-table';

interface TableProps<T extends object> {
  columns: Column<T>[];
  data: T[];
  globalFilter: string | number;
}

const Table = <T extends object>({
  columns,
  data,
  globalFilter,
}: TableProps<T>) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page, // Instead of rows, we use page
    prepareRow,
    setGlobalFilter,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 }, // Set the initial page index to 0
    },
    useGlobalFilter, // Use the useGlobalFilter plugin hook
    usePagination, // Use the usePagination plugin hook
  ) as TableInstance<T> & UsePaginationInstanceProps<T>;

  React.useEffect(() => {
    setGlobalFilter(globalFilter);
  }, [globalFilter, setGlobalFilter]);


  return (
    <>
      <div className=' overflow-x-auto'>

        <table
          {...getTableProps()}
          className="border w-full border-collapse border-transparent shadow-4 p-2 dark:bg-[#24303f] overflow-scroll"
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    className=" px-3 py-4 bg-[#f7f9fc] dark:text-white dark:bg-[#313d4a]"
                    {...column.getHeaderProps()}
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td
                      className="text-center px-3 py-3 dark:text-white border-[#f7f9fc] w-1/12"
                      {...cell.getCellProps()}
                    >
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className=" flex justify-center my-4 gap-2">
          <button
            className=" cursor-pointer"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            {'<<'}
          </button>{' '}
          <button
            className=" cursor-pointer"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            {'<'}
          </button>{' '}
          <span>
            صفحة{' '}
            <strong>
              {pageIndex + 1} من {pageOptions.length}
            </strong>{' '}
          </span>
          <button
            className=" cursor-pointer"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            {'>'}
          </button>{' '}
          <button
            className=" cursor-pointer"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {'>>'}
          </button>{' '}
        </div>
      </div>
    </>
  );
};

export default Table;
