document.querySelector("html").addEventListener("keypress", (event) => {
  console.log("Key", event.key);
  document.getElementById("link").click();
});
