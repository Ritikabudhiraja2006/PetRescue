let s1 = document.getElementById("sq1");
 s1.addEventListener("mouseenter",function(){
  let r = Math.floor(Math.random()*100);
  s1.innerHTML = `<h1>${r}</h1>`;
 })
 s1.addEventListener("mouseleave",function(){
    s1.innerHTML = `<h1>1</h1>`;
 })
 s1.addEventListener("dblclick",function(){
   let r1 = Math.floor(Math.random()*256); 
    let r2 = Math.floor(Math.random()*256); 
    let r3 = Math.floor(Math.random()*256);
   s1.style.backgroundColor = `rgb(${r1},${r2},${r3})`;
 })
  s1.addEventListener("mouseleave",function(){
   s1.style.backgroundColor = "White";
 })
 
 let s2 = document.getElementById("sq2");
 let clr = "Red";
 s2.addEventListener("mouseenter",function(){
    if(clr=="Red"){
        s2.style.backgroundColor = "Red";
        clr = "green";
    }
   else if(clr=="green"){
        s2.style.backgroundColor = "green";
        clr = "Blue";
    }
    else{
        s2.style.backgroundColor = "Blue";
        clr = "Red";
    }
 })
 s2.addEventListener("mouseleave",function(){
   s2.style.backgroundColor = "White";
 })


 // rgb(a,b,c) where a,b,c lies between 0 to 255
let s3 = document.getElementById("sq3");
 s3.addEventListener("mouseenter",function(){
    let r1 = Math.floor(Math.random()*256); // 0 to 255 included but not 256 included
    let r2 = Math.floor(Math.random()*256); 
    let r3 = Math.floor(Math.random()*256);
   s3.style.backgroundColor = `rgb(${r1},${r2},${r3})`;
 })
 s3.addEventListener("mouseleave",function(){
    s3.style.backgroundColor = "White";
 })

 let s4 = document.getElementById("sq4");
 s4.addEventListener("click",function(){
    let r1 = Math.floor(Math.random()*256); // 0 to 255 included but not 256 included
    let r2 = Math.floor(Math.random()*256); 
    let r3 = Math.floor(Math.random()*256);
                s1.style.backgroundColor = `rgb(${r1},${r2},${r3})`;
                s2.style.backgroundColor = `rgb(${r3},${r2},${r1})`;
                s3.style.backgroundColor = `rgb(${r2},${r3},${r1})`;
 })
 s4.addEventListener("mouseleave",function(){
    s1.style.backgroundColor = "White";
    s2.style.backgroundColor = "White";
    s3.style.backgroundColor = "White";
 })

 let main = document.getElementById("main");
 let crsr = document.getElementById("cursor");
 main.addEventListener("mousemove",function(dets){
   crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
 })


