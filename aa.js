const a = "Fri, 28 Jan 2022 00:00:00 GMT";
const b = new Date(a);
const year = b.getFullYear();
const month = b.getMonth() + 1;
const date = b.getDate();
console.log(
  `${year}-${month >= 10 ? month : "0" + month}-${
    date >= 10 ? date : "0" + date
  }`
);
