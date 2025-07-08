const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const priceElement = document.querySelectorAll(".prices")
	let total = 0;

	priceElement.forEach((ele) => {
		total += Number(ele.textContent);
	});
	const newRow = document.createElement("tr");
	const newCell = document.createElement("td");
	newCell.colSpan = 2;
	// newCell.style.fontWeight = "bold";
    // newCell.style.textAlign = "center";
	newCell.textContent = `Total Price: ${total}`

	newRow.appendChild(newCell);

	const table = document.querySelector("table");
	table.appendChild(newRow);

	getSumBtn.disabled = true;


	
  
};

getSumBtn.addEventListener("click", getSum);

