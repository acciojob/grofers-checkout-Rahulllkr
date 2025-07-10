const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

// Optional: Create reset button
// const resetBtn = document.createElement("button");
// resetBtn.append("Reset Total");
// document.body.appendChild(resetBtn);

const getSum = () => {
	const priceElements = document.querySelectorAll(".price");
	let total = 0;

	priceElements.forEach((ele) => {
		total += Number(ele.textContent);
	});

	const table = document.querySelector("table");
	let existingRow = document.getElementById("totalRow");

	if (existingRow) {
		// Update content if total row already exists
		existingRow.firstChild.textContent = `Total Price: ${total}`;
	} else {
		// Create new row
		const newRow = document.createElement("tr");
		newRow.id = "totalRow";

		const newCell = document.createElement("td");
		newCell.colSpan = 2;
		newCell.textContent = `Total Price: ${total}`;

		newRow.appendChild(newCell);
		table.appendChild(newRow);
	}
};

// const resetTotal = () => {
// 	const existingRow = document.getElementById("totalRow");
// 	if (existingRow) {
// 		existingRow.remove();
// 	}
// };

// Event listeners
getSumBtn.addEventListener("click", getSum);
// resetBtn.addEventListener("click", resetTotal);
