import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import StorageUnitsTableFilter from "../StorageUnitsPageComponents/StorageUnitsTableFilter";

import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { RxCross2 } from "react-icons/rx";
import { BsCheck2 } from "react-icons/bs";
import { deleteRoom } from "../../../../actions/roomsActions";

const StorageUnitsRoomsTable = ({ storageUnits }) => {
  const dispatch = useDispatch();

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

  const columnsStorageUnitRooms = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Facility",
      accessor: "storage_facility",
    },
    {
      Header: "Created At",
      accessor: "created_at",
      Cell: ({ value }) => {
        return format(new Date(value), "dd/mm/yyyy");
      },
    },
    {
      Header: "Total Space",
      accessor: "total_space",
    },
    {
      Header: "Occupied Space",
      accessor: "occupied_space",
    },
    {
      Header: "Price",
      accessor: "per_unit_price",
    },
    {
      Header: "Is Available",
      accessor: "is_available",
      Cell: ({ value }) => {
        return value ? (
          <BsCheck2 className="text-success" />
        ) : (
          <RxCross2 className="text-danger" />
        );
      },
    },
    {
      Header: "",
      accessor: "id",
      Cell: ({ value }) => {
        return (
          <div className="dropdown">
            <button
              className="bg-white border border-0 rounded"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <BsThreeDots size={30} />
            </button>

            <ul className="dropdown-menu">
              <Link
                className="dropdown-item"
                to={`/service-provider-dashboard/editRoom/${value}`}
              >
                Edit
              </Link>
              <li
                className="dropdown-item pointer"
                onClick={() => dispatch(deleteRoom(value))}
              >
                Delete
              </li>
            </ul>
          </div>
        );
      },
    },
  ];

  const columns = useMemo(() => columnsStorageUnitRooms, []);
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

export default StorageUnitsRoomsTable;
