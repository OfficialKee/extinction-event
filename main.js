let dinoList = document.querySelectorAll('ol li');

console.log(dinoList);

for (let i = 0; i < dinoList.length; i++) {

   console.log(dinoList[i].innerText);

   dinoList[i].addEventListener('click',function(){
    dinoList[i].style.textDecoration ='line-through'
   })
    
}

let dinoList2 = document.querySelectorAll('ul li');

for (let i = 0; i < dinoList2.length; i++) {
   dinoList2[i].addEventListener('click',function(){
   dinoList2[i].style.opacity ='.5'
})
    
}

let images = document.querySelectorAll('#row img' );

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click',function(){
        images[i].style.opacity = '0'
    })
    
}

let meteorMe = document.querySelector('#destroy-all');

meteorMe.addEventListener('click',function(){

    for (let i = 0; i < images.length; i++) {
    images[i].style.opacity ='0'   
    }


    for (let i = 0; i < dinoList2.length; i++) {
        dinoList2[i].style.opacity ='.5'
    }


    for (let i = 0; i < dinoList.length; i++) {
     dinoList[i].style.textDecoration ='line-through'}
})



