const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  let price = document.querySelectorAll(".price")
	let lastRow = document.createElement("tr")
	let sum = 0
	price.forEach((item)=>{
		sum += parseInt(item.innerHTML)
		
	})
	lastRow.innerHTML = <td>Total</td><td id="ans">${sum}</td>
	let table = document.querySelector("table")
	table.append(lastRow)
};

getSumBtn.addEventListener("click", getSum);