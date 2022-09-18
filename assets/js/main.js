/* javascript */

var bauhaus = `

Staaatliches Bauhaus (1919-1933)

      ..-""T-..
    ,'__   |   '.
   /   N|  |     !
  :     '  |      :
  [      __|      ]
  :      _I       :
   !   ___I      /
    '.  N]     ,'
      "-"!..--"

`;

console.log(bauhaus);
document.addEventListener("mousemove", () => {
  let mouseX = event.clientX;
  let mouseY = event.clientY;
  document.getElementById("pos").innerHTML = "The current position of the mouse is at X: " + mouseX + ", Y: " + mouseY;

});

let totalImgElem = document.querySelectorAll('.content')[0].querySelectorAll("div").length;
console.log("There are a total of " + totalImgElem + " elements used in the creation of this image");

document.getElementById("elem").innerHTML = "There is a total of " + totalImgElem +" elements in use to create this image";

document.body.style.zoom = "80%";