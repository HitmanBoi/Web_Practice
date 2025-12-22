// let p = document.querySelector("p")
// console.dir(p);
// console.log(p);

// console.dir(p.classList);

// console.log(p.classList);


btn1 = document.querySelector('#btn');
body = document.querySelector('body');
currMode = 'Light';
btn1.classList.add('darkMode');

btn1.addEventListener("click",() => {
    if (currMode === 'Light') {
        body.classList.add('darkMode');
        body.classList.remove('lightMode');
        btn1.classList.add('lightMode');
        btn1.classList.remove('darkMode');
        btn1.innerText = 'Switch to Light Mode';
        currMode = 'Dark';
        console.log(currMode);
    } else {
        body.classList.remove('darkMode');
        body.classList.add('lightMode');
        btn1.classList.add('darkMode');
        btn1.classList.remove('lightMode');
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