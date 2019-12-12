(function() {
  let STRIPE_TEST = "pk_test_DMllmJQxpZDZd6JMtbCLH8BX00H5sIivi9";
  let STRIPE_PROD = "pk_live_MpaXLmOedfJwMREWl7zTMH3Q00M8WLyiX5";
  let STRIPE_KEY = document.location.href.match(/(localhost|catalog\/test)/)
    ? STRIPE_TEST
    : STRIPE_PROD;
  var stripe = Stripe(STRIPE_KEY);

  window.addEventListener("click", function(el) {
    if (!el.target.classList.contains("js-buynow")) return;
    let target = el.target;
    let sku = target.getAttribute("data-sku");
    let quantity = Number.parseInt(target.getAttribute("data-quantity") || "1");
    stripe
      .redirectToCheckout({
        items: [{ sku: sku, quantity: quantity }],
        billingAddressCollection: "required",
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
