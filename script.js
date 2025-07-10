const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const price = document.querySelectorAll(".price");
  let sum = 0;
  let lastRow = document.createElement("tr");

  price.forEach((ele) => {
    sum += Number(ele.textContent);
  });

  lastRow.innerHTML = `<td>Total</td><td id="ans">${sum}</td>`;

  let table = document.querySelector("table");
  table.append(lastRow);

};

getSumBtn.addEventListener("click", getSum);
