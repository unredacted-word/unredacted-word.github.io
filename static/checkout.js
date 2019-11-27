(function() {
  var stripe = Stripe("pk_live_MpaXLmOedfJwMREWl7zTMH3Q00M8WLyiX5");

  var checkoutButton = document.getElementById(
    "checkout-button-sku_GFlC0zzBrcHvid"
  );
  checkoutButton.addEventListener("click", function() {
    stripe
      .redirectToCheckout({
        items: [{ sku: "sku_GFlC0zzBrcHvid", quantity: 1 }],
        successUrl: "https://unredacted-word.pub/checkout/success",
        cancelUrl: "https://unredacted-word.pub/checkout/canceled"
      })
      .then(function(result) {
        if (result.error) {
          var displayError = document.querySelector(".js-stripe-errors");
          displayError.textContent = result.error.message;
        }
      });
  });
})();
