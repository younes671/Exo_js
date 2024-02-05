const block = document.querySelector(".block")
const carre = document.querySelector(".carre")


block.addEventListener("click", function(event){
    const targetElement = event.target
    
    // console.log(targetElement)
    if(targetElement.classList.contains("carre")){
        const btn = targetElement.closest(".carre")
        btn.style.backgroundColor = '#FF0000'
        btn.style.color = "#FFFFFF"
        btn.style.transform = 'scale(0.9) rotate (360deg)'
    } 
    
})



