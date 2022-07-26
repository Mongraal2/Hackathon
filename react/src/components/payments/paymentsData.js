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
    headerName: "Patient Name",
    filter: true,
    filterParams: filterTextParams,
    width: "150px",
  },
  {
    field: "bookingId",
    headerName: "Booking Id",
    width: "150px",
    filter: true,
    filterParams: filterTextParams,
  },

  {
    field: "date",
    headerName: "Date",
    filter: true,
    filterParams: filterTextParams,
    width: "120px",
  },
  {
    field: "mop",
    headerName: "MOP",
    filter: true,
    filterParams: filterTextParams,
    width: "100px",
  },
  {
    field: "amount",
    headerName: "Amount",
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
    bookingId: "871625",
    mop: "Cash",
    date: "14 June 2022",
    amount: "500",
    doctor: "Alexander",
  },
  {
    id: "885",
    name: "Cersei",
    bookingId: "871625",
    mop: "Cash",
    date: "14 June 2022",
    amount: "500",
    doctor: "Alexander",
  },
  {
    id: "78",
    name: "Jaime",
    bookingId: "871625",
    mop: "Cash",
    date: "14 June 2022",
    amount: "500",
    doctor: "Alexander",
  },
  {
    id: "23",
    name: "Arya",
    bookingId: "871625",
    mop: "Cash",
    date: "14 June 2022",
    amount: "500",
    doctor: "Alexander",
  },
  {
    id: "55",
    name: "Daenerys",
    bookingId: "871625",
    mop: "Cash",
    date: "14 June 2022",
    amount: "500",
    doctor: "Alexander",
  },
  {
    id: "66",
    name: "Hommie",
    bookingId: "871625",
    mop: "Cash",
    date: "14 June 2022",
    amount: "500",
    doctor: "Alexander",
  },
  {
    id: "77",
    name: "Ferrara",
    bookingId: "871625",
    mop: "Cash",
    date: "14 June 2022",
    amount: "500",
    doctor: "Alexander",
  },
  {
    id: "88",
    name: "Rossini",
    bookingId: "871625",
    mop: "Cash",
    date: "14 June 2022",
    amount: "500",
    doctor: "Alexander",
  },
  {
    id: "44",
    name: "Harvey",
    bookingId: "871625",
    mop: "Cash",
    date: "14 June 2022",
    amount: "500",
    doctor: "Alexander",
  },
  {
    id: "78",
    name: "Harvey",
    bookingId: "871625",
    mop: "Cash",
    date: "14 June 2022",
    amount: "500",
    doctor: "Alexander",
  },
  {
    id: "79",
    name: "Harvey",
    bookingId: "871625",
    mop: "Cash",
    date: "14 June 2022",
    amount: "500",
    doctor: "Alexander",
  },
  {
    id: "29",
    name: "Harvey",
    bookingId: "871625",
    mop: "Cash",
    date: "14 June 2022",
    amount: "500",
    doctor: "Alexander",
  },
];

const data = {
  rows,
  columns,
};
export default data;
