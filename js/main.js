
// Definieren von Farbvariablen für verschiedene Farben
var red =   "#ff0000";
var green = "#00ff00";
var white = "#ffffff";
var black = "#000000";
var blue =  "#0000ff";
var grey =  "#808080 ";

// Selektieren aller Rechtecke im Dokument
let rects = [...document.querySelectorAll("rect")];

// Iteration über jedes Rechteck
rects.forEach(function(rects){
  // Rechteck-Stil anpassen
  rects.style.fillOpacity='0';
  rects.style.fill=white;

  // Bestimmte Rechtecke basierend auf ihrer ID einfärben
  if(rects.id.includes('Pin')){rects.style.fillOpacity='1';rects.style.fill=grey;};
  if(rects.id.includes("RA2")){ rects.style.fillOpacity='1'; rects.style.fill=black  };
  if(rects.id.includes("RA1")){ rects.style.fillOpacity='1'; rects.style.fill=black  }; 

})

// Definieren von Arrays für Eingänge, Ausgänge und Kreise
var inputs = [
  document.getElementById("rect-A-0"), //
  document.getElementById("rect-B-0"), // 
  document.getElementById("rect-C-0"), //
  document.getElementById("rect-D-0"), //
]

// Ausgänge
var outputs = [
  document.getElementById("rect-Dec-0"),
  document.getElementById("rect-Dec-1"),
  document.getElementById("rect-Dec-2"),
  document.getElementById("rect-Dec-3"),
  document.getElementById("rect-Dec-4"),
  document.getElementById("rect-Dec-5"),
  document.getElementById("rect-Dec-6"),
  document.getElementById("rect-Dec-7"),
  document.getElementById("rect-Dec-8"),
  document.getElementById("rect-Dec-9"),
]

const circles = document.querySelectorAll('circle');

// Iteration über alle Kreise
circles.forEach(function(circle) {
  // Kreis-Stil anpassen
  circle.style.fillOpacity='1';
  circle.style.fill=white;
});

// Kreise für Ausgänge
var circle_out =[
  document.getElementById("Output-0"),
  document.getElementById("Output-1"),
  document.getElementById("Output-2"),
  document.getElementById("Output-3"),
  document.getElementById("Output-4"),
  document.getElementById("Output-5"),
  document.getElementById("Output-6"),
  document.getElementById("Output-7"),
  document.getElementById("Output-8"),
  document.getElementById("Output-9"),
]

let lines = [...document.querySelectorAll("line")];

// Iteration über alle Linien und Anpassung des Stils
lines.forEach(function(lines){
 lines.style.strokeOpacity='0';
})

//console.log(lines.map(elem => elem.id));

// Funktion zur Umwandlung eines binären Werts in Dezimalwert
function binaryToPriorityCode(binary) {
  let priorityCode = 0;
  let weight = 1;

  while (binary > 0) {
    const bit = binary % 2; 
    priorityCode += bit * weight;
    weight *= 2;
    binary = Math.floor(binary / 2); 
  }

  return priorityCode;
}


let binArray = ['0','0','0','0'];

let D=binArray[0];  //0
let C=binArray[1];  //1
let B=binArray[2];  //2
let A=binArray[3];  //3

let binaryNumber = D+C+B+A;



// Funktion zum Aktualisieren der Rechtecke basierend auf dem Binärwert
function updateRects() {
//0b1000

 D=binArray[0]; //0
 C=binArray[1]; //1
 B=binArray[2]; //2
 A=binArray[3]; //3

 binaryNumber = D+C+B+A;

binaryValue = '0b' + binaryNumber;

// Eingänge
if(inputs[0] && binArray[3]=='1'){inputs[0].style.fillOpacity='1'; inputs[0].style.fill=green} else inputs[0].style.fill=white; //3
if(inputs[1] && binArray[2]=='1'){inputs[1].style.fillOpacity='1'; inputs[1].style.fill=green} else inputs[1].style.fill=white; //2
if(inputs[2] && binArray[1]=='1'){inputs[2].style.fillOpacity='1'; inputs[2].style.fill=green} else inputs[2].style.fill=white; //1
if(inputs[3] && binArray[0]=='1'){inputs[3].style.fillOpacity='1'; inputs[3].style.fill=green} else inputs[3].style.fill=white; //0

// Iteration über Ausgänge
// basierend auf dem Binärwert
for(i=0;i<outputs.length;i++) {
  if(outputs[i] && binaryToPriorityCode(binaryValue)==i) {outputs[i].style.fillOpacity='1'; outputs[i].style.fill=green; circle_out[i].style.fill=green } else {outputs[i].style.fill=white; circle_out[i].style.fill=white}
}



}

// Funktion zum Aktualisieren der Linien basierend auf den Eingängen
function updateLines() {
  // Logik zur Aktualisierung der Linien basierend auf den Eingängen (A, B, C, D)
  // Hier wird der Stil der Linien basierend auf den Werten der Eingänge geändert

  if(A=='0')
  {

    //A0
    lines.forEach(function(lines){
      if(lines.id.includes('A0-Route-00')){lines.style.strokeOpacity='1'} 
      if(lines.id.includes('A0-Route-01')){lines.style.strokeOpacity='1'}
      if(lines.id.includes('A0D0'))       {lines.style.strokeOpacity='1'}

      if(lines.id.includes('A0-Route-02')){lines.style.strokeOpacity='1'}
      if(lines.id.includes('A0D2'))       {lines.style.strokeOpacity='1'}

      if(lines.id.includes('A0-Route-03')){lines.style.strokeOpacity='1'}
      if(lines.id.includes('A0D4'))       {lines.style.strokeOpacity='1'}

      if(lines.id.includes('A0-Route-04')){lines.style.strokeOpacity='1'}
      if(lines.id.includes('A0D6'))       {lines.style.strokeOpacity='1'}

      if(lines.id.includes('A0-Route-05')){lines.style.strokeOpacity='1'}
      if(lines.id.includes('A0D8'))       {lines.style.strokeOpacity='1'}
      //-------------------------
      if(lines.id.includes('A1-Route-00')) {lines.style.strokeOpacity='0'}
      if(lines.id.includes('A1-Route-01')) {lines.style.strokeOpacity='0'}
      if(lines.id.includes('A1-Route-02')) {lines.style.strokeOpacity='0'}
      if(lines.id.includes('A1-Route-03')) {lines.style.strokeOpacity='0'}
      if(lines.id.includes('A1-Route-04')) {lines.style.strokeOpacity='0'}
      if(lines.id.includes('A1-Route-05')) {lines.style.strokeOpacity='0'}
      if(lines.id.includes('A1-Route-06')) {lines.style.strokeOpacity='0'}

      if(lines.id.includes('A1D1')) {lines.style.strokeOpacity='0'}
      if(lines.id.includes('A1D3')) {lines.style.strokeOpacity='0'}
      if(lines.id.includes('A1D5')) {lines.style.strokeOpacity='0'}
      if(lines.id.includes('A1D7')) {lines.style.strokeOpacity='0'}
      if(lines.id.includes('A1D9')) {lines.style.strokeOpacity='0'}
    })
  }
  else {
    //A1
      lines.forEach(function(lines){
      if(lines.id.includes('A1-Route-00')){lines.style.strokeOpacity='1'}
      if(lines.id.includes('A1-Route-01')){lines.style.strokeOpacity='1'}
      if(lines.id.includes('A1-Route-02')){lines.style.strokeOpacity='1'}
      if(lines.id.includes('A1-Route-03')){lines.style.strokeOpacity='1'}
      if(lines.id.includes('A1-Route-04')){lines.style.strokeOpacity='1'}
      if(lines.id.includes('A1-Route-05')){lines.style.strokeOpacity='1'}
      if(lines.id.includes('A1-Route-06')){lines.style.strokeOpacity='1'}

      if(lines.id.includes('A1D1')){lines.style.strokeOpacity='1'}
      if(lines.id.includes('A1D3')){lines.style.strokeOpacity='1'}
      if(lines.id.includes('A1D5')){lines.style.strokeOpacity='1'}
      if(lines.id.includes('A1D7')){lines.style.strokeOpacity='1'}
      if(lines.id.includes('A1D9')){lines.style.strokeOpacity='1'}
      //--------------------------------
      if(lines.id.includes('A0-Route-00')){lines.style.strokeOpacity='0'}
      if(lines.id.includes('A0-Route-01')){lines.style.strokeOpacity='0'}
      if(lines.id.includes('A0D0'))       {lines.style.strokeOpacity='0'}

      if(lines.id.includes('A0-Route-02')){lines.style.strokeOpacity='0'}
      if(lines.id.includes('A0D2'))       {lines.style.strokeOpacity='0'}

      if(lines.id.includes('A0-Route-03')){lines.style.strokeOpacity='0'}
      if(lines.id.includes('A0D4'))       {lines.style.strokeOpacity='0'}

      if(lines.id.includes('A0-Route-04')){lines.style.strokeOpacity='0'}
      if(lines.id.includes('A0D6'))       {lines.style.strokeOpacity='0'}

      if(lines.id.includes('A0-Route-05')){lines.style.strokeOpacity='0'}
      if(lines.id.includes('A0D8'))       {lines.style.strokeOpacity='0'}
      })
      }




//---------------
   
  if(B=='0'){
      //B0
      lines.forEach(function(lines){
        if(lines.id.includes('B0-Route-00')){lines.style.strokeOpacity='1'}
        if(lines.id.includes('B0-Route-01')){lines.style.strokeOpacity='1'}
        if(lines.id.includes('B0-Route-02')){lines.style.strokeOpacity='1'}
        if(lines.id.includes('B0-Route-03')){lines.style.strokeOpacity='1'}
        if(lines.id.includes('B0-Route-04')){lines.style.strokeOpacity='1'}
        if(lines.id.includes('B0-Route-05')){lines.style.strokeOpacity='1'}
        if(lines.id.includes('B0-Route-06')){lines.style.strokeOpacity='1'}
        if(lines.id.includes('B0-Route-07')){lines.style.strokeOpacity='1'}

        if(lines.id.includes('B0D0')){lines.style.strokeOpacity='1'}
        if(lines.id.includes('B0D1')){lines.style.strokeOpacity='1'}
        if(lines.id.includes('B0D4')){lines.style.strokeOpacity='1'}
        if(lines.id.includes('B0D5')){lines.style.strokeOpacity='1'}
        if(lines.id.includes('B0D8')){lines.style.strokeOpacity='1'}
        if(lines.id.includes('B0D9')){lines.style.strokeOpacity='1'}
        //----------------------------------
        if(lines.id.includes('B1-Route-00')){lines.style.strokeOpacity='0'}
        if(lines.id.includes('B1-Route-01')){lines.style.strokeOpacity='0'}
        if(lines.id.includes('B1-Route-02')){lines.style.strokeOpacity='0'}
        if(lines.id.includes('B1-Route-03')){lines.style.strokeOpacity='0'}
        if(lines.id.includes('B1-Route-04')){lines.style.strokeOpacity='0'}
    
        if(lines.id.includes('B1D2')){lines.style.strokeOpacity='0'}
        if(lines.id.includes('B1D3')){lines.style.strokeOpacity='0'}
        if(lines.id.includes('B1D6')){lines.style.strokeOpacity='0'}
        if(lines.id.includes('B1D7')){lines.style.strokeOpacity='0'}
      })
  }
  else {
    lines.forEach(function(lines){
    if(lines.id.includes('B1-Route-00')){lines.style.strokeOpacity='1'}
    if(lines.id.includes('B1-Route-01')){lines.style.strokeOpacity='1'}
    if(lines.id.includes('B1-Route-02')){lines.style.strokeOpacity='1'}
    if(lines.id.includes('B1-Route-03')){lines.style.strokeOpacity='1'}
    if(lines.id.includes('B1-Route-04')){lines.style.strokeOpacity='1'}

    if(lines.id.includes('B1D2')){lines.style.strokeOpacity='1'}
    if(lines.id.includes('B1D3')){lines.style.strokeOpacity='1'}
    if(lines.id.includes('B1D6')){lines.style.strokeOpacity='1'}
    if(lines.id.includes('B1D7')){lines.style.strokeOpacity='1'}
    //----------------------------------
    if(lines.id.includes('B0-Route-00')){lines.style.strokeOpacity='0'}
    if(lines.id.includes('B0-Route-01')){lines.style.strokeOpacity='0'}
    if(lines.id.includes('B0-Route-02')){lines.style.strokeOpacity='0'}
    if(lines.id.includes('B0-Route-03')){lines.style.strokeOpacity='0'}
    if(lines.id.includes('B0-Route-04')){lines.style.strokeOpacity='0'}
    if(lines.id.includes('B0-Route-05')){lines.style.strokeOpacity='0'}
    if(lines.id.includes('B0-Route-06')){lines.style.strokeOpacity='0'}
    if(lines.id.includes('B0-Route-07')){lines.style.strokeOpacity='0'}

    if(lines.id.includes('B0D0')){lines.style.strokeOpacity='0'}
    if(lines.id.includes('B0D1')){lines.style.strokeOpacity='0'}
    if(lines.id.includes('B0D4')){lines.style.strokeOpacity='0'}
    if(lines.id.includes('B0D5')){lines.style.strokeOpacity='0'}
    if(lines.id.includes('B0D8')){lines.style.strokeOpacity='0'}
    if(lines.id.includes('B0D9')){lines.style.strokeOpacity='0'}
    })
  }
  



  
  if(C=='0'){
//C0
lines.forEach(function(lines){
  if(lines.id.includes('C0-Route-00')){lines.style.strokeOpacity='1'}
  if(lines.id.includes('C0-Route-01')){lines.style.strokeOpacity='1'}
  if(lines.id.includes('C0-Route-02')){lines.style.strokeOpacity='1'}
  if(lines.id.includes('C0-Route-03')){lines.style.strokeOpacity='1'}
  if(lines.id.includes('C0-Route-04')){lines.style.strokeOpacity='1'}
  if(lines.id.includes('C0-Route-05')){lines.style.strokeOpacity='1'}
  if(lines.id.includes('C0-Route-06')){lines.style.strokeOpacity='1'}
  if(lines.id.includes('C0-Route-07')){lines.style.strokeOpacity='1'}

  if(lines.id.includes('C0D0')){lines.style.strokeOpacity='1'}
  if(lines.id.includes('C0D1')){lines.style.strokeOpacity='1'}
  if(lines.id.includes('C0D2')){lines.style.strokeOpacity='1'}
  if(lines.id.includes('C0D3')){lines.style.strokeOpacity='1'}
  if(lines.id.includes('C0D8')){lines.style.strokeOpacity='1'}
  if(lines.id.includes('C0D9')){lines.style.strokeOpacity='1'}
  //---------------------------
  if(lines.id.includes('C1-Route-00')){lines.style.strokeOpacity='0'}
  if(lines.id.includes('C1-Route-01')){lines.style.strokeOpacity='0'}
  if(lines.id.includes('C1-Route-02')){lines.style.strokeOpacity='0'}
  if(lines.id.includes('C1-Route-03')){lines.style.strokeOpacity='0'}
  if(lines.id.includes('C1-Route-04')){lines.style.strokeOpacity='0'}

  if(lines.id.includes('C1D4')){lines.style.strokeOpacity='0'}
  if(lines.id.includes('C1D5')){lines.style.strokeOpacity='0'}
  if(lines.id.includes('C1D6')){lines.style.strokeOpacity='0'}
  if(lines.id.includes('C1D7')){lines.style.strokeOpacity='0'}
})
  }
  else {
    lines.forEach(function(lines){
      if(lines.id.includes('C1-Route-00')){lines.style.strokeOpacity='1'}
      if(lines.id.includes('C1-Route-01')){lines.style.strokeOpacity='1'}
      if(lines.id.includes('C1-Route-02')){lines.style.strokeOpacity='1'}
      if(lines.id.includes('C1-Route-03')){lines.style.strokeOpacity='1'}
      if(lines.id.includes('C1-Route-04')){lines.style.strokeOpacity='1'}

      if(lines.id.includes('C1D4')){lines.style.strokeOpacity='1'}
      if(lines.id.includes('C1D5')){lines.style.strokeOpacity='1'}
      if(lines.id.includes('C1D6')){lines.style.strokeOpacity='1'}
      if(lines.id.includes('C1D7')){lines.style.strokeOpacity='1'}
      //---------------------------------------
      if(lines.id.includes('C0-Route-00')){lines.style.strokeOpacity='0'}
      if(lines.id.includes('C0-Route-01')){lines.style.strokeOpacity='0'}
      if(lines.id.includes('C0-Route-02')){lines.style.strokeOpacity='0'}
      if(lines.id.includes('C0-Route-03')){lines.style.strokeOpacity='0'}
      if(lines.id.includes('C0-Route-04')){lines.style.strokeOpacity='0'}
      if(lines.id.includes('C0-Route-05')){lines.style.strokeOpacity='0'}
      if(lines.id.includes('C0-Route-06')){lines.style.strokeOpacity='0'}
      if(lines.id.includes('C0-Route-07')){lines.style.strokeOpacity='0'}
    
      if(lines.id.includes('C0D0')){lines.style.strokeOpacity='0'}
      if(lines.id.includes('C0D1')){lines.style.strokeOpacity='0'}
      if(lines.id.includes('C0D2')){lines.style.strokeOpacity='0'}
      if(lines.id.includes('C0D3')){lines.style.strokeOpacity='0'}
      if(lines.id.includes('C0D8')){lines.style.strokeOpacity='0'}
      if(lines.id.includes('C0D9')){lines.style.strokeOpacity='0'}
    })
  }
  


  
  if(D=='0'){
//D0
lines.forEach(function(lines){
  if(lines.id.includes('D0-Route-00')){lines.style.strokeOpacity='1'}
  if(lines.id.includes('D0-Route-01')){lines.style.strokeOpacity='1'}
  if(lines.id.includes('D0-Route-02')){lines.style.strokeOpacity='1'}
  if(lines.id.includes('D0-Route-03')){lines.style.strokeOpacity='1'}
  if(lines.id.includes('D0-Route-04')){lines.style.strokeOpacity='1'}
  if(lines.id.includes('D0-Route-05')){lines.style.strokeOpacity='1'}
  if(lines.id.includes('D0-Route-06')){lines.style.strokeOpacity='1'}
  if(lines.id.includes('D0-Route-07')){lines.style.strokeOpacity='1'}
  if(lines.id.includes('D0-Route-08')){lines.style.strokeOpacity='1'}

  if(lines.id.includes('D0D0')){lines.style.strokeOpacity='1'}
  if(lines.id.includes('D0D1')){lines.style.strokeOpacity='1'}
  if(lines.id.includes('D0D2')){lines.style.strokeOpacity='1'}
  if(lines.id.includes('D0D3')){lines.style.strokeOpacity='1'}
  if(lines.id.includes('D0D4')){lines.style.strokeOpacity='1'}
  if(lines.id.includes('D0D5')){lines.style.strokeOpacity='1'}
  if(lines.id.includes('D0D6')){lines.style.strokeOpacity='1'}
  if(lines.id.includes('D0D7')){lines.style.strokeOpacity='1'}
  //-----------------------------------------
  if(lines.id.includes('D1-Route-00')){lines.style.strokeOpacity='0'}
  if(lines.id.includes('D1-Route-01')){lines.style.strokeOpacity='0'}

  if(lines.id.includes('D1D8')){lines.style.strokeOpacity='0'}
  if(lines.id.includes('D1D9')){lines.style.strokeOpacity='0'}
})
  }
  else {
    lines.forEach(function(lines){
      if(lines.id.includes('D1-Route-00')){lines.style.strokeOpacity='1'}
      if(lines.id.includes('D1-Route-01')){lines.style.strokeOpacity='1'}

      if(lines.id.includes('D1D8')){lines.style.strokeOpacity='1'}
      if(lines.id.includes('D1D9')){lines.style.strokeOpacity='1'}
      //-----------------------------------------
      if(lines.id.includes('D0-Route-00')){lines.style.strokeOpacity='0'}
      if(lines.id.includes('D0-Route-01')){lines.style.strokeOpacity='0'}
      if(lines.id.includes('D0-Route-02')){lines.style.strokeOpacity='0'}
      if(lines.id.includes('D0-Route-03')){lines.style.strokeOpacity='0'}
      if(lines.id.includes('D0-Route-04')){lines.style.strokeOpacity='0'}
      if(lines.id.includes('D0-Route-05')){lines.style.strokeOpacity='0'}
      if(lines.id.includes('D0-Route-06')){lines.style.strokeOpacity='0'}
      if(lines.id.includes('D0-Route-07')){lines.style.strokeOpacity='0'}
      if(lines.id.includes('D0-Route-08')){lines.style.strokeOpacity='0'}
    
      if(lines.id.includes('D0D0')){lines.style.strokeOpacity='0'}
      if(lines.id.includes('D0D1')){lines.style.strokeOpacity='0'}
      if(lines.id.includes('D0D2')){lines.style.strokeOpacity='0'}
      if(lines.id.includes('D0D3')){lines.style.strokeOpacity='0'}
      if(lines.id.includes('D0D4')){lines.style.strokeOpacity='0'}
      if(lines.id.includes('D0D5')){lines.style.strokeOpacity='0'}
      if(lines.id.includes('D0D6')){lines.style.strokeOpacity='0'}
      if(lines.id.includes('D0D7')){lines.style.strokeOpacity='0'}
    })
  }

}



// Event-Listener für das Laden des Dokuments
document.addEventListener("DOMContentLoaded", function() {
  
  let elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch:not(.table-switch)')); // Nur Schalter ohne die Klasse "table-switch" auswählen

  let checkboxes = document.querySelectorAll("input[type='checkbox'].table-switch"); 

  let isToggled = true;

  // Iteration über alle Schalter
  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function(e) {
      let box = e.target.parentNode;
      
      // Schalter-Logik für die Aktualisierung der Binärzahl und der Rechtecke/Linien
      // basierend auf dem Schalter, der geändert wurde
      if (checkbox.id === "switch1") {
        let index =3; let b=0;
        binArray[index] = binArray[index] === '0' ? '1' : '0';
        updateRects();
        updateLines();
        
      }
      
      else if (checkbox.id === "switch2") {
        let index =2; let b=1;
        binArray[index] = binArray[index] === '0' ? '1' : '0';
        updateRects();
        updateLines();
       
      }
      
      else if (checkbox.id === "switch3") {
        let index =1; let b=2;
        binArray[index] = binArray[index] === '0' ? '1' : '0';
        updateRects();
        updateLines();
       
      }
      
      else if (checkbox.id === "switch4") {
        let index =0; let b=3;
        binArray[index] = binArray[index] === '0' ? '1' : '0';
        updateRects();
        updateLines();
        
      }

      //overlay Switch
      else if (checkbox.id === "switch5") {
      
        isToggled = !isToggled;
        if (isToggled) {
          rects.forEach(function(rects){
            if(rects.id.includes("RA2")){ rects.style.fillOpacity='1'; rects.style.fill=black  };
            if(rects.id.includes("RA1")){ rects.style.fillOpacity='1'; rects.style.fill=black  }; 
          })
          lines.forEach(function(lines){
            lines.style.strokeOpacity='0';
           })
           updateRects();updateLines();
        } else {
          rects.forEach(function(rects){
            if(rects.id.includes("RA2")){ rects.style.fillOpacity='0'; rects.style.fill=black  };
            if(rects.id.includes("RA1")){ rects.style.fillOpacity='0'; rects.style.fill=black  }; 
          })
          lines.forEach(function(lines){
            lines.style.strokeOpacity='1';
           })
           updateRects();updateLines();
        }
      }

    });
  });

});

