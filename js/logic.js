"use strict";

// Event-Listener für das Laden des Dokuments
document.addEventListener("DOMContentLoaded", function() {
  // Selektieren aller Elemente mit der Klasse 'js-switch' und Erstellung von Schalter-Objekten. Nur Schalter, die mit einer Tabell in Verbindung stehen
  let elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
  elems.forEach(function(html) {
    let switchery = new Switchery(html);
  });

  // Selektieren aller Checkboxen im Dokument
 let checkboxes = document.querySelectorAll("input[type='checkbox']");

 // Event-Listener für Änderungen an Checkboxen
  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function(e) {
      let box = e.target.parentNode;
       // Aktualisierung der Ansicht basierend auf der geänderten Checkbox
      updateView(box);
    });
  });

  // Initialisierung der Ansicht für alle Checkboxen
  checkboxes.forEach(function(checkbox) {
    updateView(checkbox.parentNode);
  });
});

// Funktion zur Aktualisierung der Ansicht basierend auf den Checkbox-Werten
function updateView(box) {
  let container = box.parentNode;
   // Überprüfen, ob die Container ein Tabellen-Element enthalten
  if (container.parentNode.querySelector("table")) {
  let b2;
  let mode = container.dataset.mode;
  let b1 = box.querySelector("input").checked;
  if (box.querySelectorAll("input").length > 1)
    b2 = box.querySelectorAll("input")[1].checked;

    // Logik-Funktion aufrufen, um das Ergebnis zu berechnen
  let erg = logic(b1, b2, mode);
  // Aktualisierung der Lichter in der Ansicht basierend auf dem Ergebnis der Logik
  container.querySelectorAll("div .light").forEach(function(light) {
    light.classList.remove("light-on", "light-off");
    light.classList.add("light-" + (erg ? "on" : "off"));
  });

  // Hervorheben der Zelle in der Tabelle basierend auf dem Modus und den Checkbox-Werten
  let highlightCellNr = mode == "not" ? b1 : b1 * 2 + b2;
  highlightCellNr++; // skip table header
  let rows = container.parentNode.querySelector("table").querySelectorAll("tr");

   // Hervorheben der entsprechenden Zeile in der Tabelle
  if (rows) {
    rows.forEach(function(row) {
      row.classList.remove("highlight");
    });
    rows[highlightCellNr].classList.add("highlight");
  }
}
}

// Funktion zur logischen Berechnung basierend auf den Checkbox-Werten und dem Modus
function logic(b1, b2, mode) {
  switch (mode) {
    case "and":
      return b1 && b2;
    case "not":
      return !b1;
    case "or":
      return b1 || b2;
    case "nand":
      return !(b1 && b2);
    case "nor":
      return !(b1 || b2);
    case "xor":
      return (b1 && !b2) || (!b1 && b2);
  }
};


