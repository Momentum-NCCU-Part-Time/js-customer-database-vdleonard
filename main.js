// 1. Create customer Divs with borders
// 2. Create custoner name divs with borders
// 3. Get customer names to show on the webpage

const dataBase = document.querySelector(".container");

function customerCard(customer) {
  let custName =
    customer.name.first.charAt(0).toUpperCase() +
    customer.name.first.slice(1) +
    " " +
    customer.name.last.charAt(0).toUpperCase() +
    customer.name.last.slice(1);

  return `<div class="cust-info">
          <img src="${customer.picture.large}" class="cust-pfp">
          <h2 class="cust-name">${custName}</h2>
          <email class="cust-email">${customer.email} </email>
          <ul class="cust-address"> 
            <li>${customer.location.street.number} ${
    customer.location.street.name
  }</li>
            <li>${customer.location.city}, ${nameToAbbr(
    customer.location.state
  )} ${customer.location.postcode}</li>
          </ul>
          <ul class="cust-dates">
              <li>DOB: ${moment(customer.dob.date).format("MMM D, YYYY")}
              </li>
              <li>Customer since: ${moment(customer.registered.date).format(
                "MMM D, YYYY"
              )}
              </li>
          </ul>
        </div>`;
}

/*
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
*/

let dataBaseFilled = customers
  .map((customer) => customerCard(customer))
  .join("\n");

dataBase.innerHTML = dataBaseFilled;
