(() => {
  const unsubscribeParams = new URLSearchParams(window.location.search);
  const emailValue = unsubscribeParams.get("email");
  const leadValue = unsubscribeParams.get("lead");

  if (emailValue) document.getElementById("email").value = emailValue;
  if (leadValue) document.getElementById("lead-id").value = leadValue;
})();
