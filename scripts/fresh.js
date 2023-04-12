const fruitDataUrl =
  "https://brotherblazzard.github.io/canvas-content/fruit.json";
const fruitSelects = document.querySelectorAll('[id^="fruit-"]');
const specialInstructions = document.getElementById("special-instructions");
const orderOutput = document.getElementById("order-output");

// Fetch fruit data
fetch(fruitDataUrl)
  .then((response) => response.json())
  .then((fruitData) => {
    // Populate select elements with fruit options
    const fruitOptions = fruitData.map(
      (fruit) =>
        `<option value="${fruit.name}" data-carbs="${fruit.carbs}" data-protein="${fruit.protein}" data-fat="${fruit.fat}" data-sugar="${fruit.sugar}" data-calories="${fruit.calories}" data-price="${fruit.price}">${fruit.name} - $${fruit.price}</option>`
    );
    fruitSelects.forEach((select) => {
      select.innerHTML = fruitOptions.join("");
    });
  });

// Handle form submission
const form = document.getElementById("specialty-drink-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = document.getElementById("first-name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const delivery = document.getElementById("delivery").value;
  const fruit1 = document.getElementById("fruit-1").value;
  const fruit2 = document.getElementById("fruit-2").value;
  const fruit3 = document.getElementById("fruit-3").value;

  // Calculate nutrition totals and order total for selected fruits
  const selectedFruits = [fruit1, fruit2, fruit3];
  let carbsTotal = 0;
  let proteinTotal = 0;
  let fatTotal = 0;
  let sugarTotal = 0;
  let caloriesTotal = 0;
  let orderTotal = 0;

  selectedFruits.forEach((fruit) => {
    const selectedOption = document.querySelector(`option[value="${fruit}"]`);
    carbsTotal += parseInt(selectedOption.getAttribute("data-carbs"));
    proteinTotal += parseInt(selectedOption.getAttribute("data-protein"));
    fatTotal += parseInt(selectedOption.getAttribute("data-fat"));
    sugarTotal += parseInt(selectedOption.getAttribute("data-sugar"));
    caloriesTotal += parseInt(selectedOption.getAttribute("data-calories"));
    orderTotal += parseFloat(selectedOption.getAttribute("data-price"));
  });

  // Format nutrition totals for display
  const nutritionTotals = `Carbs: ${carbsTotal}g | Protein: ${proteinTotal}g | Fat: ${fatTotal}g | Sugar: ${sugarTotal}g | Calories: ${caloriesTotal}kcal`;

  // Format order details for display
  let orderDetails1Html = `
    <h2>Order Details</h2>
    <p><strong>Name:</strong> ${firstName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Delivery Address:</strong> ${delivery}</p>
    <p><strong>Fruit 1:</strong> ${fruit1}</p>
    <p><strong>Fruit 2:</strong> ${fruit2}</p>
    <p><strong>Fruit 3:</strong> ${fruit3}</p>
    <p><strong>Special Instructions:</strong> ${specialInstructions.value}</p>
    <p><strong>Date:</strong> ${new Date()}</p>
    <p><strong>Nutrition Totals:</strong> ${nutritionTotals}</p>
    <p><strong>Order Total:</strong> $${orderTotal.toFixed(2)}</p>
    <span>Thank you for ordering ${firstName}. See you soon for your delivery.</span>
  `;

  // Display order details on the page
  const orderDetails = document.getElementById("order-details");
  orderDetails.innerHTML = orderDetails1Html;
});
