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
    filter: true,
    filterParams: filterTextParams,
    width: "70px",
  },
  {
    field: "name",
    headerName: "Name",
    filter: true,
    filterParams: filterTextParams,
  },
  {
    field: "fees",
    headerName: "Commission",
    filter: true,
    filterParams: filterTextParams,
    width: "130px",
  },
  {
    field: "clinic",
    headerName: "Clinic",
    filter: true,
    filterParams: filterTextParams,
  },
  {
    field: "date",
    headerName: "Date",
    filter: true,
    filterParams: filterTextParams,
  },
  {
    field: "status",
    headerName: "Status",
    filter: true,
    filterParams: filterTextParams,
  },
  {
    field: "doctor",
    headerName: "Doctor",
    filter: true,
    filterParams: filterTextParams,
  },
];

export const rows = [
  {
    id: "25",
    name: "Jon",
    fees: "$14",
    clinic: "Tripmax",
    date: "14 June 2022",
    status: "Success",
    doctor: "Alexander",
  },
  {
    id: "885",
    name: "Cersei",
    fees: "$14",
    clinic: "Tripmax",
    date: "14 June 2022",
    status: "Success",
    doctor: "Alexander",
  },
  {
    id: "78",
    name: "Jaime",
    fees: "$14",
    clinic: "Tripmax",
    date: "14 June 2022",
    status: "Success",
    doctor: "Alexander",
  },
  {
    id: "23",
    name: "Arya",
    fees: "$14",
    clinic: "Tripmax",
    date: "14 June 2022",
    status: "Success",
    doctor: "Alexander",
  },
  {
    id: "55",
    name: "Daenerys",
    fees: "$14",
    clinic: "Tripmax",
    date: "14 June 2022",
    status: "Success",
    doctor: "Alexander",
  },
  {
    id: "66",
    name: "Hommie",
    fees: "$14",
    clinic: "Tripmax",
    date: "14 June 2022",
    status: "Success",
    doctor: "Alexander",
  },
  {
    id: "77",
    name: "Ferrara",
    fees: "$14",
    clinic: "Tripmax",
    date: "14 June 2022",
    status: "Success",
    doctor: "Alexander",
  },
  {
    id: "88",
    name: "Rossini",
    fees: "$14",
    clinic: "Tripmax",
    date: "14 June 2022",
    status: "Success",
    doctor: "Alexander",
  },
  {
    id: "44",
    name: "Harvey",
    fees: "$14",
    clinic: "Tripmax",
    date: "14 June 2022",
    status: "Success",
    doctor: "Alexander",
  },
  {
    id: "78",
    name: "Harvey",
    fees: "$14",
    clinic: "Tripmax",
    date: "14 June 2022",
    status: "Success",
    doctor: "Alexander",
  },
  {
    id: "79",
    name: "Harvey",
    fees: "$14",
    clinic: "Tripmax",
    date: "14 June 2022",
    status: "Success",
    doctor: "Alexander",
  },
  {
    id: "29",
    name: "Harvey",
    fees: "$14",
    clinic: "Tripmax",
    date: "14 June 2022",
    status: "Success",
    doctor: "Alexander",
  },
];

const data = {
  rows,
  columns,
};
export default data;
