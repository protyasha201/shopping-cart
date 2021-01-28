//javascript Code.

// decrease Phone Quantity
const decreasePhone = document.getElementById("decreasePhone");

//decrease click handler
decreasePhone.addEventListener("click", () => {
   //Quantity decreasing
   const phoneQuantity = document.getElementById("phoneQuantity").value;
   if (phoneQuantity > 0) {
      const phoneQuantityNumber = parseInt(phoneQuantity);
      const presentQuantity = phoneQuantityNumber - 1;

      //Price setting with decreasing.
      const perPhone = document.getElementById("phonePrice").innerText;
      const perPhonePrice = parseInt(perPhone);
      const priceOfPhone = 1219;
      const currentPhonePrice = perPhonePrice - priceOfPhone;

      //subtotal.
      const subTotal = document.getElementById("subTotal");

      //increasing subtotal.
      const defaultSubTotal = subTotal.innerText;
      const subTotalPrice = parseInt(defaultSubTotal);
      const subTotalNumber = 1278;
      const currentSubTotal = subTotalPrice - subTotalNumber;

      //Total.
      const total = document.getElementById("total");

      //decreasing Total.
      const defaultTotal = total.innerText;
      const totalPrice = parseInt(defaultTotal);
      const totalNumber = 1278;
      const currentTotal = totalPrice - totalNumber;


      //showing result
      const currentQuantity = document.getElementById("phoneQuantity").value = presentQuantity;
      const totalPhonePrice = document.getElementById("phonePrice").innerText = currentPhonePrice;
      const mainSubTotal = document.getElementById("subTotal").innerText = currentSubTotal;
      const mainTotal = document.getElementById("total").innerText = currentTotal;
   }

})

//Increasing Phone Quantity.
const increasePhone = document.getElementById("increasePhone");

//increase click handler
increasePhone.addEventListener("click", () => {
   //Quantity setting with increasing
   const phoneQuantity = document.getElementById("phoneQuantity").value;
   if (phoneQuantity >= 0) {
      const phoneQuantityNumber = parseInt(phoneQuantity);
      const presentQuantity = phoneQuantityNumber + 1;

      //Price setting with increasing.
      const perPhone = document.getElementById("phonePrice").innerText;
      let perPhonePrice = parseInt(perPhone);
      const priceOfPhone = 1219;
      const currentPhonePrice = perPhonePrice + priceOfPhone;

      //subtotal.
      const subTotal = document.getElementById("subTotal");

      //increasing subtotal.
      const defaultSubTotal = subTotal.innerText;
      const subTotalPrice = parseInt(defaultSubTotal);
      const subTotalNumber = 1278;
      const currentSubTotal = subTotalNumber + subTotalPrice;

      //Total.
      const total = document.getElementById("total");

      //increasing total.
      const defaultTotal = total.innerText;
      const totalPrice = parseInt(defaultTotal);
      const totalNumber = 1278;
      const currentTotal = totalNumber + totalPrice;

      //showing result.
      const totalPhonePrice = document.getElementById("phonePrice").innerText = currentPhonePrice;
      const currentQuantity = document.getElementById("phoneQuantity").value = presentQuantity;
      const mainSubTotal = document.getElementById("subTotal").innerText = currentSubTotal;
      const mainTotal = document.getElementById("total").innerText = currentTotal;
   }
})


// decrease case Quantity
const decreaseCase = document.getElementById("decreaseCase");

//decrease click handler
decreaseCase.addEventListener("click", () => {
   //Quantity decreasing
   const caseQuantity = document.getElementById("caseQuantity").value;
   if (caseQuantity > 0) {
      const caseQuantityNumber = parseInt(caseQuantity);
      const presentQuantity = caseQuantityNumber - 1;

      //Price setting with decreasing.
      const perCase = document.getElementById("casePrice").innerText;
      const perCasePrice = parseInt(perCase);
      const priceOfCase = 59;
      const currentCasePrice = perCasePrice - priceOfCase;

      //subtotal.
      const subTotal = document.getElementById("subTotal");

      //increasing subtotal.
      const defaultSubTotal = subTotal.innerText;
      const subTotalPrice = parseInt(defaultSubTotal);
      const subTotalNumber = 59;
      const currentSubTotal = subTotalPrice - subTotalNumber;

      //Total.
      const total = document.getElementById("total");

      //decreasing Total.
      const defaultTotal = total.innerText;
      const totalPrice = parseInt(defaultTotal);
      const totalNumber = 59;
      const currentTotal = totalPrice - totalNumber;


      //showing result
      const currentQuantity = document.getElementById("caseQuantity").value = presentQuantity;
      const totalCasePrice = document.getElementById("casePrice").innerText = currentCasePrice;
      const mainSubTotal = document.getElementById("subTotal").innerText = currentSubTotal;
      const mainTotal = document.getElementById("total").innerText = currentTotal;
   }

})

//Increasing case Quantity.
const increaseCase = document.getElementById("increaseCase");

//increase click handler
increaseCase.addEventListener("click", () => {
   //Quantity setting with increasing
   const caseQuantity = document.getElementById("caseQuantity").value;
   if (caseQuantity >= 0) {
      const caseQuantityNumber = parseInt(caseQuantity);
      const presentQuantity = caseQuantityNumber + 1;

      //Price setting with increasing.
      const perCase = document.getElementById("casePrice").innerText;
      let perCasePrice = parseInt(perCase);
      const priceOfCase = 59;
      const currentCasePrice = perCasePrice + priceOfCase;

      //subtotal.
      const subTotal = document.getElementById("subTotal");

      //increasing subtotal.
      const defaultSubTotal = subTotal.innerText;
      const subTotalPrice = parseInt(defaultSubTotal);
      const subTotalNumber = 59;
      const currentSubTotal = subTotalNumber + subTotalPrice;

      //Total.
      const total = document.getElementById("total");

      //increasing total.
      const defaultTotal = total.innerText;
      const totalPrice = parseInt(defaultTotal);
      const totalNumber = 59;
      const currentTotal = totalNumber + totalPrice;

      //showing result.
      const totalCasePrice = document.getElementById("casePrice").innerText = currentCasePrice;
      const currentQuantity = document.getElementById("caseQuantity").value = presentQuantity;
      const mainSubTotal = document.getElementById("subTotal").innerText = currentSubTotal;
      const mainTotal = document.getElementById("total").innerText = currentTotal;
   }
})

//checkout button handler.
const checkOut = document.getElementById("checkOut");
checkOut.addEventListener("click", () => {
    const mainSection = document.getElementById("main-section");
    mainSection.style.display = "none";
    const confirmationMessage = document.getElementById("confirmation-text");
    confirmationMessage.style.display = "block";
})


//another way.

{/* <script>
      document.getElementById("increaseCase").addEventListener("click", () => {
         const caseInput = document.getElementById("caseQuantity");
         const caseCount = parseInt(caseInput.value);
         const caseNewCount = caseCount + 1;
         caseInput.value = caseNewCount;
         const caseTotal = caseNewCount * 59;
         document.getElementById("casePrice").innerText = caseTotal;
      })
   </script> */}