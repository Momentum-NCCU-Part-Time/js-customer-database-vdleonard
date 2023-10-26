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

let dataBaseFilled = customers
  .map((customer) => customerCard(customer))
  .join("\n");

dataBase.innerHTML = dataBaseFilled;
