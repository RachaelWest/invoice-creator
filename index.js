const carWashBtn = document.getElementById("washCar-btn");
const mowLawnBtn = document.getElementById("mowLawn-btn");
const pullWeedsBtn = document.getElementById("pullWeeds-btn");
const sendBtn = document.getElementById("send-btn");

       
let servicesList = document.getElementById("list-box-el");
let totalSum = document.getElementById("total-sum");

// Array to hold services requested
let services = [{
        id: 0,
        task: "Wash car",
        price: 10
    },
    {
        id: 1,
        task: "Mow lawn",
        price: 20
    },
    {
        id: 2,
        task: "Pull weeds",
        price: 30
    },
];

let total = 0;
let serviceItem;

// Buttons to render selected service from array on button clicks
sendBtn.addEventListener("click", clearInvoice);

carWashBtn.addEventListener("click", function () {
    render(services[0]);
});
mowLawnBtn.addEventListener("click", function () {
    render(services[1]);
});
pullWeedsBtn.addEventListener("click", function () {
    render(services[2]);
});

// renders objects from services array - updates each time array changes
function render(item) {
    total += item.price;
    serviceItem = document.createElement("li");
    serviceItem.innerHTML =
        `<p class="service" id="${item.id}">
        <span class="service-name">${item.task}</span>
        <span class="service-price">£${item.price}</span>
        <button class="remove-btn" onclick="deleteService(${JSON.stringify(item).split('"').join("&quot;")})">Remove</button></p>
    `;
    servicesList.appendChild(serviceItem);
    totalSum.textContent = `£${total}`;
    
    
}

//function to delete a service from the rendered array and amend total
function deleteService(item) {
    document.getElementById(item.id).remove();
    total -= item.price;
    totalSum.textContent = `£${total}`;
    //console.log(item.price);
    
}
// Button to send invoice and clear all elements
function clearInvoice() {
    servicesList.innerHTML = "";
    total = 0;
    totalSum.textContent = `£${total}`;
}
