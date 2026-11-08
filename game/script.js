document.querySelector("#create-room").addEventListener("click", toLobby);

function toLobby(){
  document.querySelector("#landing-page").classList.remove("active");
  document.querySelector("#lobby").classList.add("active");
}