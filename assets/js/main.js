
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
// while(event.keyCode == 16){
//   console.log(event.ClientX,event.ClientY)
// }

window.addEventListener("keydown",function(event){
  if(event.key = "n"){
    console.log("X position: " + event.screenX + " Y position: " + event.screenY);
  }

  event.preventDefault();
},false);