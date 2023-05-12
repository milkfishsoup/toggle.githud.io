const button = document.getElementById("toggle");
const body = document.querySelector("body");
const h2=document.querySelector("h2");
const img=document.querySelector("img");

var changeimg=false;

button.onclick = function(){
    button.classList.toggle('dark');
    body.classList.toggle('dark');
    h2.classList.toggle('dark');

    // 圖片切換
    if(changeimg){
        img.src="images/images1.jpg";
        changeimg=false;
    }else{
        img.src="images/images.jpg";
        changeimg=true;
    }
}

