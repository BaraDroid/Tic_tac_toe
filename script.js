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
          content = generateCircle();
        } else if (fields[index] === "cross") {
          content = generateCross();
        }
        tableHTML += `<td>${content}</td>`;
      }
      tableHTML += "</tr>";
    }
    tableHTML += "</table>";
    document.getElementById("content").innerHTML = tableHTML;
  
    // Animationen starten
    animateCircles();
    animateCrosses();
  }

  function animateCircles() {
    const circles = document.querySelectorAll(".circle circle");
    circles.forEach((circle) => {
      setTimeout(() => {
        circle.style.strokeDashoffset = "0";
      }, 100); // Kleine Verzögerung für Animation
    });
  }
  
  function generateCircle() {
    return `<svg class="circle" width="60" height="60" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
              <circle
                cx="35" cy="35" r="30"
                fill="none"
                stroke="white"
                stroke-width="8"
                stroke-dasharray="188.4" /* Länge des Umfangs (2 * π * r) */
                stroke-dashoffset="-188.4"
                style="transition: stroke-dashoffset 1s linear;"
                transform="rotate(-90 35 35)" /* Startpunkt nach oben verschieben */
              ></circle>
            </svg>`;
  }

  function generateCross() {
    return `
        <svg width="60" height="60" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
            <!-- Erste Linie des Kreuzes -->
            <line
                x1="15" y1="15" x2="55" y2="55"
                stroke="white"
                stroke-width="8"
                stroke-linecap="round"
                stroke-dasharray="56" /* Länge der Linie */
                stroke-dashoffset="56" /* Vollständig ausgeblendet */
                style="transition: stroke-dashoffset 0.5s linear 0.2s;"
            ></line>
            <!-- Zweite Linie des Kreuzes -->
            <line
                x1="55" y1="15" x2="15" y2="55"
                stroke="white"
                stroke-width="8"
                stroke-linecap="round"
                stroke-dasharray="56" /* Länge der Linie */
                stroke-dashoffset="56" /* Vollständig ausgeblendet */
                style="transition: stroke-dashoffset 0.5s linear 0.7s;"
            ></line>
        </svg>
    `;
}

function animateCrosses() {
    const lines = document.querySelectorAll("line");
    lines.forEach((line) => {
        setTimeout(() => {
            line.style.strokeDashoffset = "0";
        }, 100);
    });
}
