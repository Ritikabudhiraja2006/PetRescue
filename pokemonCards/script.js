let main = document.getElementById("main");
let s = "";
let arr = 
["https:i.pinimg.com/736x/bd/e8/0b/bde80baa1165d9d0a43b6c9f2ebb1e06.jpg",
"https://i.pinimg.com/736x/71/f4/d8/71f4d8160f5f51be04a85be668bdfa15.jpg",
"https://i.pinimg.com/1200x/a9/a2/6d/a9a26d144822b2336c3d5f4ce96479d0.jpg",
"https://i.pinimg.com/736x/10/99/44/109944c2fda2d04b3148047e43b8d45b.jpg",
"https://i.pinimg.com/1200x/44/51/66/4451662709d11b6229edd84fab60f7af.jpg",
"https://i.pinimg.com/736x/4e/d4/b7/4ed4b725b2879e0fc0688aaad15b4eae.jpg",];
for(let i=1;i<=60;i++){
    let r = Math.floor(Math.random()*arr.length);
    s += `<div class="card"><img src=${arr[r]}></div>`;
}
main.innerHTML = s;

