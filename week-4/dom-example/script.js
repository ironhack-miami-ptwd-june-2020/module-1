console.log("JS connected");

// this is how you find an element by its   >>>> ID <<<<<
let theCatDiv = document.getElementById("cat");

// console.log({ theCatDiv });

setTimeout(() => {
    // innerText works basically the same as innerHTML. When looking at the log of the element if you see both as the same then you can use either of the two in order to manipulate it. Otherwise use the key that you see has the same text as the actual html in your code.
    theCatDiv.innerHTML = "I'm a cat";
}, 3000);

// this is how you find elements by >>>> className <<<<
let miceElement = document.getElementsByClassName("mouse");

// getElementsByClassName will return object type array and would then need to be added to another variable as a spread operator array in order to manipulate the elements as a normal array.
// console.log(miceElement);

let miceArray = [...miceElement];

miceArray.forEach((oneElement) => {
    oneElement.innerText = theCatDiv.innerHTML;
});

// this is how you find an element by the >>>> Tag Name <<<<
let theH1 = document.getElementsByTagName("h1");

// console.log({ theH1 });

// without using the spread operator, you essentially have an object with keys and can change the keys but html will still only read the main element and not its keys
let h1Array = [...theH1];

h1Array[0].innerHTML = "Tom and Jerry's Fam";

// ===================================================

// <<< Query Selectors >>>
// when using query selectors you can use the same method as css selector to get the element your looking for
/* 
- tagname -> just enter the name of the tag your looking for
- id -> add a # before the name of the id your searching for
- class -> add a . before the name of the class your looking for
*/

// to get the first element that that matches your query use querySelector
// to get an array of elements with the results of the elements your looking for use querySelectorAll
setTimeout(() => {
    // the "#cat" is the same as using getElementById
    document.querySelector("#cat").innerHTML = "Chip";
}, 4000);

let miceNewArray = document.querySelector(".mouse");

// console.log({ miceNewArray });

miceNewArray.innerHTML = "Dale";
// miceNewArray.forEach((elem) => {
//     elem.innerText = "Dale";
// });

let getAllClassesAndIds = document.querySelectorAll("#cat, .mouse");

// console.log({ getAllClassesAndIds });

getAllClassesAndIds.forEach((elem, i) => {
    if (i >= 2) elem.className = "hello";
});

let getHellos = document.querySelectorAll(".hello");

getHellos.forEach((elem) => {
    elem.innerText = "Hello Chip N Dale";
});

document.querySelector("h1").innerHTML = "The Chip N Dale Example";

// to add a className you can use .classList.add("<name of class>")
// to remove a className you can use .classList.remove("<name of class>")

document.querySelector("#cat").classList.add("colors");

// ============================================================

// DOM Manipulation

let scoreElement = document.querySelector("#score");

let oneUpButton = document.getElementById("oneUp");

// console.log(typeof scoreElement.innerText);

oneUpButton.onclick = () => {
    let score = Number(scoreElement.innerText);

    // console.log({
    //     score,
    //     scoreElement,
    //     attr: scoreElement.hasAttribute("id", "score"),
    // });

    // this ternary did not work due to bug...
    // score === 10 && scoreElement.hasAttribute("id", "score")
    //     ? scoreElement.setAttribute("id", "noMoreScore")
    //     : score === -1 && scoreElement.hasAttribute("id", "noMoreScore")
    //     ? scoreElement.setAttribute("id", "score")
    //     : changeScore(score);

    // after console.log every step of the conditional we were able to fix the bug
    if (score === 10 && scoreElement.getAttribute("id") === "score") {
        // console.log("the if");
        scoreElement.setAttribute("id", "noMoreScore");
        // scoreElement.removeAttribute("id");

        // this function is found below
        addMessage();
    } else if (
        score === -1 &&
        scoreElement.getAttribute("id") === "noMoreScore"
    ) {
        // console.log("the else if");
        scoreElement.setAttribute("id", "score");
    } else {
        // console.log("the else");
        changeScore(score);
    }
};

function changeScore(currentScore) {
    // console.log(scoreElement.hasAttribute("id", "score"), {
    //     currentScore,
    //     theId: scoreElement.getAttribute("id"),
    // });

    scoreElement.getAttribute("id") === "score"
        ? (scoreElement.innerHTML = currentScore += 1)
        : (scoreElement.innerHTML = currentScore -= 1);
}

// creating a DOM html element
let counter = 0;
function addMessage() {
    let messageDiv = document.querySelector("#userMessage");

    let theNewDiv = document.createElement("div");

    theNewDiv.innerHTML += `
    <form>
        <label for="text${counter}Input">Enter Item</label>
        <input id="text${counter}Input" class="inputFields" type="text" placeholder="enter something" />
        <button>Save Input</button>
    </form>
    <hr />
    `;

    messageDiv.appendChild(theNewDiv);
    counter += 1;
    let inputFieldArray = document.querySelectorAll(".inputFields");

    // adding totals for various inputs of type number
    // totalResult = 0;
    // inputFieldArray.forEach(elem => {
    //     totalResult += elem.value;
    // });

    console.log({ inputFieldArray });
}

// getting parent of element

// console.log(oneUpButton.parentNode.setAttribute("class", "hide"));
