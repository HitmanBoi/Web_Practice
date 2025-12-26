// let p = document.querySelector("p")
// console.dir(p);
// console.log(p);

// console.dir(p.classNameList);

// console.log(p.classNameList);


btn1 = document.querySelector('#btn');
body = document.querySelector('body');
currMode = 'Light';
btn1.classNameList.add('darkMode');

btn1.addEventListener("click",() => {
    if (currMode === 'Light') {
        body.classNameList.add('darkMode');
        body.classNameList.remove('lightMode');
        btn1.classNameList.add('lightMode');
        btn1.classNameList.remove('darkMode');
        btn1.innerText = 'Switch to Light Mode';
        currMode = 'Dark';
        console.log(currMode);
    } else {
        body.classNameList.remove('darkMode');
        body.classNameList.add('lightMode');
        btn1.classNameList.add('darkMode');
        btn1.classNameList.remove('lightMode');
        btn1.innerText = 'Switch to Dark Mode';
        currMode = 'Light';
        console.log(currMode);
    }
}
);







// let newBtn = document.createElement("button");
// newBtn.innerText="Click Me";
// newBtn.style.backgroundColor="red";
// newBtn.style.color="white";


// document.querySelector("body").prepend(newBtn);






// let h2 = document.querySelector("h2");
// console.dir(h2);

// let boxes = document.querySelectorAll(".box");
// console.log(boxes);
// console.dir(boxes);


// idx = 1;
// for(box of boxes){
//     box.innerText=`Unique text ${idx}`;
//     idx++;
// }