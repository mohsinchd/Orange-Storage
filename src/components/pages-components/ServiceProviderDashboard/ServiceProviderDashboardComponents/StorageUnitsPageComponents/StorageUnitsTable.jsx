import React, { useMemo } from "react";
import { COLUMNS } from "./columns";

import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import StorageUnitsTableFilter from "./StorageUnitsTableFilter";

const StorageUnitsTable = ({ storageUnits }) => {
  let unitsData = storageUnits.results.map((unit) => {
    return {
      id: unit.id,
      name: unit.name,
      storage_facility: unit.storage_facility.name,
      created_at: unit.created_at,
      total_space: unit.size_field,
      occupied_space: unit.occupied_space_field,
      per_unit_price: unit.per_unit_price,
      is_available: unit.is_available,
    };
  });

  console.log(unitsData);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => unitsData, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },

    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    page,
    headerGroups,
    state,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    setGlobalFilter,
    prepareRow,
    pageOptions,
  } = tableInstance;

  const { globalFilter, pageIndex } = state;

  return (
    <div className="table-responsive">
      <StorageUnitsTableFilter
        filter={globalFilter}
        setFilter={setGlobalFilter}
      />
      <table className="table table-hover table-striped" {...getTableProps()}>
        <thead className="text-center">
          {headerGroups.map((headerGroup) => (
            <tr
              className="bg-orange text-light"
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => (
                <>
                  <th
                    colSpan={1}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? "🔽"
                          : "🔼"
                        : ""}
                    </span>
                  </th>
                </>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="text-center" {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="d-flex justify-content-center align-items-center">
        <span className="me-2">
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <button
          className={`border border-0 rounded p-2 me-2 ${
            !canPreviousPage ? "text-dark bg-light" : "bg-orange text-light"
          }`}
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Prev
        </button>
        <button
          className={`border border-0 rounded p-2 me-2 ${
            !canNextPage ? "text-dark bg-light" : "bg-orange text-light"
          }`}
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StorageUnitsTable;
