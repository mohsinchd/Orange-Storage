import { format } from "date-fns";
import { RxCross2 } from "react-icons/rx";
import { BsCheck2 } from "react-icons/bs";

export const COLUMNS = [
  {
    Header: "ID",
    accessor: "id",
  },
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
];
