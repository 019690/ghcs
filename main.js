//  assigning variables and getting them by ID
  const cardRadio = document.getElementById("card");
  const mpesaRadio = document.getElementById("mpesa");
  const cardDetails = document.getElementById("card-details");
  const mpesaDetails = document.getElementById("mpesa-details");
  const mpesaMobileNumberInput = document.getElementById("mpesa-mobile-number");

  // add event listeners to the radio buttons to show or hide the appropriate detail form and mobile number input area
    cardRadio.addEventListener("click", function() {
    cardDetails.style.display = "block";
    mpesaDetails.style.display = "none";
    mpesaMobileNumberInput.value = ""; // clear the mobile number input field
  });

    mpesaRadio.addEventListener("click", function() {
    cardDetails.style.display = "none";
    mpesaDetails.style.display = "block";
  });
