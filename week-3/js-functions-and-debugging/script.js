// Scope of a variable depends on where the variable can be read. Global scope can be seen in any location within the file while local scope can only been seen within the function itself

const globalVar = "This is the global variable";

const theBlah = (theParam) => {
    console.log(`theBlah has been called and has param: ${theParam}`);
    if (theParam) {
        console.log(`Param ${theParam.length + 4} exists`);
        return (theParam += 4);
    }
    const localToTheBlahFunction = "This can only be seen in theBlah function";
    console.log(globalVar);
    console.log(localToTheBlahFunction);
};

const theSecondFunc = (theParam) => {
    // globalVar would be a shadow variable since it is already declared in global scope and I am using the same variable name;
    const globalVar = "this is the other global var";

    console.log("theParam has no issues here", theParam);

    console.log(`this is the other global var: ${globalVar}`);
};

theBlah("sum");

console.log("--------------------------");
console.log(globalVar);
// console.log(localToTheBlahFunction);

console.log("==========================");
theSecondFunc("the second theParam");

// async and call backs
function thisFunc() {
    return;
}

const thisFunc2 = () => {
    return;
};

const randomArr = [1, 2, 3, 4, 5, 6, 9];

randomArr.forEach((ele) => console.log(ele));
randomArr.forEach(function (ele) {
    console.log(ele);
});

const displayArrayElements = async (arrayInput) => {
    console.log("display array function");
    const newObjectArray = await arrayInput.map((oneElementOfArray, index) => {
        console.log({ oneElementOfArray, index });
        return { index, element: oneElementOfArray };
    });

    setTimeout(thisIsTheCallBack, 3000);
    // setTimeout(() => {

    // }, timeout);

    console.log({ arrayInput });
    console.log({ newObjectArray });

    return newObjectArray;
};

// example of a promise using async await
// const displayArrayElements = async (arrayInput) => {
//     try {
//         console.log("display array function");
//         const newObjectArray = await arrayInput.map((oneElementOfArray, index) => {
//             console.log({ oneElementOfArray, index });
//             return {
//                 index, element: oneElementOfArray ;
//             });

//         console.log({ arrayInput });
//         console.log({ newObjectArray });

//         return newObjectArray;
//     } catch (err) {
//         console.log({ err });
//     }
// };

setInterval(thisIsTheCallBack, 7000);
displayArrayElements(randomArr);
setTimeout(clearInterval, 21000);

// hoisting is when a function is hoisted to the top of the file, therefore it can be read at any point. Unlike variables that must be declared prior to being used.
function thisIsTheCallBack() {
    console.log("Calling back this function after the other one has completed");
}
