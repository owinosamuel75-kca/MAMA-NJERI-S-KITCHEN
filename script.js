
// Mama Njeri's Kitchen
// Order form functionality

const orderForm = document.getElementById("order-form");
const formMessage = document.getElementById("form-message");

orderForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Get the customer's details
    const customerName = document.getElementById("customer-name").value.trim();
    const selectedDish = document.getElementById("dish").value;

    // Check that the name has been entered
    if (customerName === "") {
        formMessage.textContent = "Please enter your name.";
        return;
    }

    // Display order confirmation
    formMessage.textContent =
        `Thank you, ${customerName}! Your order for ${selectedDish} has been received.`;

    // Clear the form
    orderForm.reset();

});
