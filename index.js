let array = ["samsung1", "samsung2", "samsung3"];
let array2 = [];
const nav = document.querySelector(".ul");

let resetOldArr = () => {
  let Lis = document.querySelectorAll("li");
  Lis.forEach((li) => {
    li.remove();
  });
};

let addLis = () => {
  nav.innerHTML = array
    .map(
      (newArr) =>
        `
        <li> ${newArr} </li>
        <li onclick="add('${newArr})"> ${newArr} </li>
      `
    )
    .join("");
};

const reset = () => {
  resetOldArr();
  addLis();
};
reset();

const inputValue = () => {
  const btnAdd = document.querySelector(".btnAdd");
  btnAdd.addEventListener("click", () => {
    let input = document.getElementById("input").value;
    if (array.includes(input)) {
      alert("le produit est déja présent");
    } else {
      array.push(input);
      reset();
    }
  });
};
inputValue();

const removeProd = () => {
  btnDelete = document.querySelector(".btnDelete");
  btnDelete.addEventListener("click", () => {
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      console.log(element);
      if (element == input.value) {
        array.splice(i, 1);
        removeProd();
        console.log(array);
      }
    }
  });
  reset();
};
removeProd();

const add = (name) => {};
