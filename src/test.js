let columnArr = [];
for (let i = 1; i < 8; i++) {
	columnArr.push(document.getElementById(`${col}${row + i}`));
}
console.log(columnArr);
// // columnArr.filter(() => {})
// columnArr.forEach((item) => {
// 	while (!item.hasChildNodes()) {}
// });

// console.log(columnArr);
