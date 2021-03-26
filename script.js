// give existing elements
let myMessage= document.querySelector(".message");

console.log(myMessage.innerText);

myMessage.style.color="#6c0"
myMessage.classList.add("big");

// creating new elements and adding them to the page
let newMessage=document.createElement("h1");
newMessage.classList.add("new-message");
newMessage.innerText="This is a new message added with javascript"
// add the new h1 message to our page
let container=document.querySelector(".container");
container.append(newMessage);






let button=document.querySelector(".click-me");
button.addEventListener("click",function(){
    let newImage=document.createElement("img");
    newImage.classList.add("new-image");
    newImage.src="./rabbit.jpg";

    container.append(newImage);
})
let button2=document.querySelector(".click-me2");
button2.addEventListener("click",function(){
    let dogImage=document.createElement("img");
    newImage.classList.add("new-image");
    newImage.style.border="10px solid pink";
    newImage.style.margin-top='500px';
    newImage.src="./avatineicecream.jpg";

    container.append(dogImage);
})
