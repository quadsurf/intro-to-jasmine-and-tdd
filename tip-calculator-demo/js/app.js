(function () {
  var button = document.tipForm.getTotal;
    button.addEventListener("click", function(event) {
    getAndShowTipAmount();
    event.preventDefault();
  });

  function showTip(tip) {
    var div = document.getElementById("results");
    div.innerHTML = "<h3>You should tip $" + tip + "</h3>";
  };

  function getAndShowTipAmount() {
    var amount = document.tipForm.amount.value;
    var tip = calculateTip(amount);
    showTip(tip);
  }
}());
