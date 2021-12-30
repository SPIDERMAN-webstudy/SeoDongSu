let Form = document.querySelector("#Ad");
let Button = Form.querySelector("button");
let Span = Form.querySelector("span");

let cnt = 0;

function Click(event) {
  event.preventDefault();
  cnt++;
  Span.innerText = cnt;
}

Button.addEventListener("click", Click);
