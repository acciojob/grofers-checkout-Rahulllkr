const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	const priceElements = document.querySelectorAll(".price");
	let total = 0;

	priceElements.forEach((ele) => {
		total += Number(ele.textContent);
	});

	const newRow = document.createElement("tr");
	const newCell = document.createElement("td");
	newCell.colSpan = 2;
	newCell.textContent = `Total Price: ${total}`;

	newRow.appendChild(newCell);

	const table = document.querySelector("table");
	table.appendChild(newRow);

	// Correct property to disable
	getSumBtn.disabled = true;
};

getSumBtn.addEventListener("click", getSum);
