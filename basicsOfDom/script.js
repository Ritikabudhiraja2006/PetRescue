// let x = document.querySelectorAll(".yes");
// console.log(x);


// let x = document.querySelector("h2");
// setTimeout(function(){
//     x.style.color = "red";
//     x.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
// },4000)


// let y = document.querySelector("h1");
// setTimeout(function(){
//     y.innerHTML = "Changed"
// },2000)



let x = document.getElementById("ele1");
 x.addEventListener("click",function(){
    x.style.color = "yellow";
    x.style.backgroundColor = "red";
 })
  x.addEventListener("mouseleave",function(){
    x.style.color = "black";
    x.style.backgroundColor = "white";
 })
 
 let y = document.getElementById("ele2");
  y.addEventListener("mouseenter",function(){
    y.style.color = "white";
    y.style.backgroundColor = "orange";
  })
   y.addEventListener("mouseleave",function(){
    y.style.color = "black";
    y.style.backgroundColor = "white";
  })

  let z = document.getElementById("ele3");
  y.addEventListener("click",function(){
    z.style.color = "white";
    z.style.backgroundColor = "Purple";
  })
   z.addEventListener("click",function(){
    x.style.color = "white";
    x.style.backgroundColor = "green";
    x.innerHTML = "bulbsour";
  })
  