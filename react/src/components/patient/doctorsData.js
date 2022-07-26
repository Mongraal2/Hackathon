let firstNameFilterParams = {
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

export const columnDefs = [
  {
    headerName: "S.No",
    valueGetter: "node.rowIndex + 1",
    width: "70px",
  },
  {
    field: "id",
    filter: true,
    filterParams: firstNameFilterParams,
    width: "70px",
  },
  {
    field: "firstName",
    filter: true,
    filterParams: firstNameFilterParams,
    width: "130px",
  },
  {
    field: "lastName",
    filter: true,
    filterParams: firstNameFilterParams,
    width: "130px",
  },
  { field: "clinic", filter: true, filterParams: firstNameFilterParams },
  { field: "address", filter: true, filterParams: firstNameFilterParams },
  { field: "contact", headerName: "Contact Details" },
];

export const rowData = [
  {
    id: "1",
    lastName: "Snow",
    firstName: "Jon",
    clinic: "Afar Labs",
    address: "Sagipora Sopore",
    contact: "+9149575307",
  },
  {
    id: "2",
    lastName: "Lannister",
    firstName: "Cersei",
    clinic: "Afar Labs",
    address: "Sagipora Sopore",
    contact: "+9149575307",
  },
  {
    id: "3",
    lastName: "Lannister",
    firstName: "Jaime",
    clinic: "Afar Labs",
    address: "Sagipora Sopore",
    contact: "+9149575307",
  },
  {
    id: "4",
    lastName: "Stark",
    firstName: "Arya",
    clinic: "Afar Labs",
    address: "Sagipora Sopore",
    contact: "+9149575307",
  },
  {
    id: "5",
    lastName: "Targaryen",
    firstName: "Daenerys",
    clinic: "Afar Labs",
    address: "Sagipora Sopore",
    contact: "+9149575307",
  },
  {
    id: "6",
    lastName: "Melisandre",
    firstName: "Yenni",
    clinic: "Afar Labs",
    address: "Sagipora Sopore",
    contact: "+9149575307",
  },
  {
    id: "7",
    lastName: "Clifford",
    firstName: "Ferrara",
    clinic: "Afar Labs",
    address: "Sagipora Sopore",
    contact: "+9149575307",
  },
  {
    id: "8",
    lastName: "Frances",
    firstName: "Rossini",
    clinic: "Afar Labs",
    address: "Sagipora Sopore",
    contact: "+9149575307",
  },
  {
    id: "9",
    lastName: "Roxie",
    firstName: "Harvey",
    clinic: "Afar Labs",
    address: "Sagipora Sopore",
    contact: "+9149575307",
  },
];
