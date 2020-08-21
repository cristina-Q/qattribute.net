
const olList = document.querySelector(".list");
const addListbtn = document.querySelector(".addListbtn");
const listInput = document.querySelector(".list-input");




addListbtn.addEventListener ("click", function() {

  const newLi = document.createElement("li");

  const liContent = document.createTextNode(listInput.value);

  newLi.appendChild(liContent);

  olList.append(newLi);
});

