const images =[
"background-1.jpg",
"background-2.jpg",
"background-3.jpg",
];

const chosenImage =  images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
// bgImage.style ="width:100px","height:100px";
document.body.appendChild(bgImage);