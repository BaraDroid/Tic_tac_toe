// Das Array für den Zustand des Spiels
let fields = [null, null, null, null, null, null, null, null, null];

fields = [
  "circle",
  null,
  "cross",
  "cross",
  "circle",
  null,
  null,
  "cross",
  "circle",
];

function init() {
    render(); // Render die Tabelle beim Laden der Seite
}

function render() {
  let tableHTML = "<table>";
  for (let row = 0; row < 3; row++) {
    tableHTML += "<tr>";
    for (let col = 0; col < 3; col++) {
      let index = row * 3 + col;
      let content = "";
      if (fields[index] === "circle") {
        content = "o";
      } else if (fields[index] === "cross") {
        content = "x";
      }
      tableHTML += `<td>${content}</td>`;
    }
    tableHTML += "</tr>";
  }
  tableHTML += "</table>";
  document.getElementById("content").innerHTML = tableHTML;
}
