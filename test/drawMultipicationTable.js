// Create a function which prints the Multipication table and places a '*' on the diagonal
// Example (size=10):
// *  2   3   4   5   6   7   8   9   10
// 2  *   6   8   10  12  14  16  18  20
// 3  6   *   12  15  18  21  24  27  30
// 4  8   12  *   20  24  28  32  36  40
// 5  10  15  20  *   30  35  40  45  50
// 6  12  18  24  30  *   42  48  54  60
// 7  14  21  28  35  42  *   56  63  70
// 8  16  24  32  40  48  56  *   72  80
// 9  18  27  36  45  54  63  72  *   90
// 10 20  30  40  50  60  70  80  90  *

function drawMultipicationTable(size) {
  let res = "";
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      if (i === j) {
        res += "*" + " ";
      } else res += i * j + " ";
    }
    res += "\n";
  }
  console.log(res);
}

drawMultipicationTable(10);

// function drawMultipicationTable(size) {
//   for (let i = 1; i <= size; i++) {
//     let row = [];

//     for (let j = 1; j <= size; j++) {
//       if (i === j) {
//         row.push("*");
//         // console.log("*");
//       } else row.push(i * j);
//       // console.log(i*j);
//     }
//     console.log(row);
//     console.log("");
//   }
// }

// drawMultipicationTable(10);
