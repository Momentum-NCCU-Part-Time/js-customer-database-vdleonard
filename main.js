// 1. Create customer Divs with borders
// 2. Create custoner name divs with borders
// 3. Get customer names to show on the webpage

const dataBase = document.querySelector(".container").innerHTML;
//let stateAbr = nameToAbbr("FLORIDA");
//console.log(stateAbr);

for (let customer of customers) {
  //--test to make sure for loop working---
  console.log(customer);

  //-------making contairer for all the data of each person----------
  let custContain = document.createElement("div");
  custContain.classList.add("customer");
  //---------base for each section needed?-------------
  let custName = document.createElement("div");
  custName.classList.add("name");
  custName.innerText = `${customer.name.first} ${customer.name.last}`;
  custContain.appendChild(custName);
  dataBase.appendChild(custContain);
}

function customerCard(customers) {
  return console.log(customer);
}

//let database = customers.map((customer) => customerCard(customers));

//customerCard(customers);
