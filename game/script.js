document.querySelector("#create-room").addEventListener("click", toLobby);

function toLobby(){
  document.querySelector("#landing-page").classList.remove("active");
  document.querySelector("#lobby").classList.add("active");
  document.querySelector("#room-code").textContent = roomCodeGenerator();
}

function roomCodeGenerator(){
  let code = "";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  for (let i = 0; i < 4; i++){
    n = Math.floor(Math.random() * 26);
    randomLetter = letters[n];
    code += randomLetter;
  } 
  return code;
}