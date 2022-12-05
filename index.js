const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};
const tableL = document.querySelector(".tableL");
const table = document.createElement("table");
const th = tableInfo.tableHeader;
const data = tableInfo.tableContent;
let html = "<tr>";
th.forEach((i) => {
  html += "<td>" + i + "</td>";
});
html += "</tr>";
for (let i = 0; i < data.length; i++) {
  html += "<tr>";
  html += "<td>" + data[i]["Student Name"] + "</td>";
  html += "<td>" + data[i].Age + "</td>";
  html += "<td>" + data[i].Phone + "</td>";
  html += "<td>" + data[i].Address + "</td>";
  html += "</tr>";
}
table.innerHTML = html;
tableL.appendChild(table);

// ordered list and unordered list
const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];
const ol = document.querySelector(".ol");
const ul = document.querySelector(".ul");
const orderList = document.createElement("ol");
const unorderList = document.createElement("ul");
list.forEach((i) => {
  let data = document.createElement("li");
  data.innerHTML = i;
  orderList.appendChild(data);
});
list.forEach((i) => {
  let data = document.createElement("li");
  data.innerHTML = i;
  unorderList.appendChild(data);
});
ol.appendChild(orderList);
ul.appendChild(unorderList);
// drop down
const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];
const dropdown = document.querySelector(".dropdown");
const select = document.createElement("select");
dropDownList.forEach((i) => {
  let option = document.createElement("option");
  option.value = i.value;
  option.innerText = i.content;
  select.appendChild(option);
});
dropdown.appendChild(select);
