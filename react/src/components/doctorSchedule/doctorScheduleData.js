import ActionCell from "./cells/ActionCell";
import StatusCell from "./cells/StatusCell";

let filterTextParams = {
  filterOptions: ["contains", "notContains"],
  textFormatter: (r) => {
    if (r == null) return null;
    return r
      .toLowerCase()
      .replace(/[àáâãäå]/g, "a")
      .replace(/æ/g, "ae")
      .replace(/ç/g, "c")
      .replace(/[èéêë]/g, "e")
      .replace(/[ìíîï]/g, "i")
      .replace(/ñ/g, "n")
      .replace(/[òóôõö]/g, "o")
      .replace(/œ/g, "oe")
      .replace(/[ùúûü]/g, "u")
      .replace(/[ýÿ]/g, "y");
  },
  debounceMs: 200,
  suppressAndOrCondition: true,
};

export const columns = [
  {
    headerName: "S.No",
    valueGetter: "node.rowIndex + 1",
    width: "70px",
  },
  {
    field: "id",
    headerName: "ID",
    width: "70px",
    filter: true,
    filterParams: filterTextParams,
  },
  {
    field: "name",
    headerName: "Name",
    width: "150px",
    filter: true,
    filterParams: filterTextParams,
  },
  {
    field: "department",
    headerName: "Department",
  },
  {
    field: "open",
    headerName: "Open Time",
    width: "150px",
    filter: true,
    filterParams: filterTextParams,
  },
  {
    field: "close",
    headerName: "Close Time",
    width: "150px",
    filter: true,
    filterParams: filterTextParams,
  },

  {
    field: "day",
    headerName: "Day",
    width: "100px",
  },
  {
    field: "status",
    headerName: "Status",
    width: "100px",
    cellRenderer: StatusCell,
  },
  {
    field: "action",
    headerName: "Action",
    cellRenderer: ActionCell,
    width: "100px",
  },
];

export const rows = [
  {
    id: "25",
    name: "Jon",
    open: "09:00:00",
    close: "05:00 PM",
    department: "Radiology",
    day: "Sunday",
    status: "active",
    action: "delete",
  },
  {
    id: "885",
    name: "Cersei",
    open: "09:00:00",
    close: "05:00 PM",
    department: "Radiology",
    day: "Sunday",
    status: "inactive",
    action: "delete",
  },
  {
    id: "78",
    name: "Jaime",
    open: "09:00:00",
    close: "05:00 PM",
    department: "Radiology",
    day: "Sunday",
    status: "active",
    action: "delete",
  },
  {
    id: "23",
    name: "Arya",
    open: "09:00:00",
    close: "05:00 PM",
    department: "Radiology",
    day: "Sunday",
    status: "active",
    action: "delete",
  },
  {
    id: "55",
    name: "Daenerys",
    open: "09:00:00",
    close: "05:00 PM",
    department: "Radiology",
    day: "Sunday",
    status: "active",
    action: "delete",
  },
  {
    id: "66",
    name: "Hommie",
    open: "09:00:00",
    close: "05:00 PM",
    department: "Radiology",
    day: "Sunday",
    status: "inactive",
    action: "delete",
  },
  {
    id: "77",
    name: "Ferrara",
    open: "09:00:00",
    close: "05:00 PM",
    department: "Radiology",
    day: "Sunday",
    status: "active",
    action: "delete",
  },
  {
    id: "88",
    name: "Rossini",
    open: "09:00:00",
    close: "05:00 PM",
    department: "Radiology",
    day: "Sunday",
    status: "active",
    action: "delete",
  },
  {
    id: "44",
    name: "Harvey",
    open: "09:00:00",
    close: "05:00 PM",
    department: "Radiology",
    day: "Sunday",
    status: "active",
    action: "delete",
  },
  {
    id: "78",
    name: "Harvey",
    open: "09:00:00",
    close: "05:00 PM",
    department: "Radiology",
    day: "Sunday",
    status: "active",
    action: "delete",
  },
  {
    id: "79",
    name: "Harvey",
    open: "09:00:00",
    close: "05:00 PM",
    department: "Radiology",
    day: "Sunday",
    status: "active",
    action: "delete",
  },
  {
    id: "29",
    name: "Harvey",
    open: "09:00:00",
    close: "05:00 PM",
    department: "Radiology",
    day: "Sunday",
    officeAddress: "27 Houston California",
  },
];
