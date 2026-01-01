function personalWish() {
  let name = document.getElementById("name").value;

  if (name === "") {
    alert("Please enter your name 😊");
  } else {
    alert("🎉 Happy New Year " + name + "! 🎉");
  }
}
