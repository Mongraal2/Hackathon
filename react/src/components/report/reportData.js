import ActionCell from "./ActionCell";

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
    headerName: "Patient Name",
    filter: true,
    filterParams: filterTextParams,
  },
  {
    field: "description",
    headerName: "Description",
    filter: true,
    filterParams: filterTextParams,
    width: "500px",
  },
  {
    field: "batchCode",
    headerName: "Batch Code",
    filter: true,
    filterParams: filterTextParams,
  },
  {
    field: "action",
    headerName: "Action",
    cellRenderer: ActionCell,
  },
];

export const rows = [
  {
    id: "25",
    name: "Jon",
    description: "Lorem Ipsum is simple dummy text to be printed",
    batchCode: "195ga58",
    action: "nothing",
  },
  {
    id: "885",
    name: "Cersei",
    description: "Lorem Ipsum is simple dummy text to be printed",
    batchCode: "195ga58",
    action: "nothing",
  },
  {
    id: "78",
    name: "Jaime",
    description: "Lorem Ipsum is simple dummy text to be printed",
    batchCode: "195ga58",
    action: "nothing",
  },
  {
    id: "23",
    name: "Arya",
    description: "Lorem Ipsum is simple dummy text to be printed",
    batchCode: "195ga58",
    action: "nothing",
  },
  {
    id: "55",
    name: "Daenerys",
    description: "Lorem Ipsum is simple dummy text to be printed",
    batchCode: "195ga58",
    action: "nothing",
  },
  {
    id: "66",
    name: "Hommie",
    description: "Lorem Ipsum is simple dummy text to be printed",
    batchCode: "195ga58",
    action: "nothing",
  },
  {
    id: "77",
    name: "Ferrara",
    description: "Lorem Ipsum is simple dummy text to be printed",
    batchCode: "195ga58",
    action: "nothing",
  },
  {
    id: "88",
    name: "Rossini",
    description: "Lorem Ipsum is simple dummy text to be printed",
    batchCode: "195ga58",
    action: "nothing",
  },
  {
    id: "44",
    name: "Harvey",
    description: "Lorem Ipsum is simple dummy text to be printed",
    batchCode: "195ga58",
    action: "nothing",
  },
  {
    id: "78",
    name: "Harvey",
    description: "Lorem Ipsum is simple dummy text to be printed",
    batchCode: "195ga58",
    action: "nothing",
  },
  {
    id: "79",
    name: "Harvey",
    description: "Lorem Ipsum is simple dummy text to be printed",
    batchCode: "195ga58",
    action: "nothing",
  },
  {
    id: "29",
    name: "Harvey",
    description: "Lorem Ipsum is simple dummy text to be printed",
    batchCode: "195ga58",
    action: "nothing",
  },
];

const data = {
  rows,
  columns,
};
export default data;
