const clock = document.querySelector("h2#clock");


function sayHello(){
    const date = new Date();
    // console.log('hello');
    clock.innerText= (date.getHours()+":"+date.getMinutes()+":"+String(date.getSeconds()).padStart(2,"0"));
}

// setTimeout(sayHello, 1000);

setInterval(sayHello, 1000);