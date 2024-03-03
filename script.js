//  document.textContent += 'Which of these pictures is a tiger?'

let div = document.createElement("div");
document.body.append(div);
div.textContent = "Which of these pictures is a tiger?";
div.classList.add("container");

// 2 section

let div2 = document.createElement("div");
document.body.append(div2);
div2.textContent = "Which of these pictures is a hours?";
div2.classList.add("container2");

let parent2 = document.createElement("div");
div2.append(parent2);
let childDiv12 = document.createElement("div");
let childDiv22 = document.createElement("div");
childDiv12.classList.add("left2");
childDiv22.classList.add("right2");
parent2.append(childDiv12, childDiv22);
parent2.classList.add("parent");

// 1 section
let parent = document.createElement("div");
div.append(parent);
let childDiv1 = document.createElement("div");
let childDiv2 = document.createElement("div");
childDiv1.classList.add("left");
childDiv2.classList.add("right");
parent.append(childDiv1, childDiv2);
parent.classList.add("parent");


// create course show
let h2 = document.createElement("h2");
document.body.append(h2);
h2.textContent = "corse :";

let corse = 0;

// event 1 section
childDiv1.addEventListener("click", () => {
  alert("your answer is uncorrected");
  corse += 0;
});

childDiv2.addEventListener("click", () => {
  corse += 10;
  alert("your answer is corrected");
});

// function plus and mines

function eventPlus(name, divName) {
  name.addEventListener("click", () => {
    corse += 10;
    divName.innerHTML += `
    ${corse}
    `;
    alert("your answer is corrected");
  });
}




function eventMines(name, divName) {
  name.addEventListener("click", () => {
    alert("your answer is uncorrected");
    corse += 0;
    divName.innerHTML += `
    ${corse}
    `;
  });
}

eventPlus(childDiv22, h2);
eventMines(childDiv12, h2);
