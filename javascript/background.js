const images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];

const choosenImage = images[Math.floor(Math.random()*images.length)];

const bgimage = document.createElement("img");

bgimage.src = choosenImage;

document.body.appendChild(bgimage);