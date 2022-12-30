// const sendButton = document.getElementsByClassName("button");
// const form = document.getElementById("form");
// const message = document.querySelector("#message").val;

// sendButton.addEventListener(click, () => {
//   let bMessage = document.getElementById("message").value;
//   console.log(bMessage);
// });

// Variable
const accordion = document.getElementsByClassName("content-container");
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
