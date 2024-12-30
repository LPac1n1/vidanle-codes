// function draw() {
//   const canvas = document.getElementById('content-bg-lights')
//   const content = document.querySelector('#content')
  
//   canvas.width = content.clientWidth
//   canvas.height = content.clientHeight

//   if(canvas.getContext) {
//     const ctx = canvas.getContext('2d')

//     let coords = [
//       [1700,-150], [700,0], [1200,650],  [0, 750], [2000, 1100],
//       [750, 1300], [1500, 1900], [150, 2000], [1000, 2500], [1600, 3000],
//       [200, 3400], [1100, 3800]
//     ];

//     ctx.filter = "blur(124px)";
//     ctx.fillStyle = "rgba(255, 255, 255, 0.04)";

//     ctx.beginPath();
//     for(let i = 0; i < coords.length; i++){
//         ctx.moveTo(coords[i][0], coords[i][1]);
//         ctx.arc(coords[i][0], coords[i][1], 200, 0, Math.PI * 2, true);
//     }
//     ctx.fill();
//   }
// }
// draw()