const allItems=document.querySelectorAll(".panel-primary");
allItems.forEach(div=>{
    div.addEventListener("mouseover",()=>{
            div.style.backgroundColor="#D3D3D3";
    })
    div.addEventListener("mouseout",()=>{
        div.style.backgroundColor="white";
    })

})

const searchProducts = ()=>{
    const userInput=document.getElementById('search').value.toLowerCase();
    const allItems=document.querySelectorAll(".panel-primary");

    for (let i=0; i<allItems.length; i++){
        const product=allItems[i].querySelectorAll(".panel-heading")[0];
        const productName=product.innerText;
        if (productName.toLowerCase().indexOf(userInput)>-1){
            allItems[i].style.display="";
        }
        else{
            allItems[i].style.display="none";
        }
    }
 }
 
const setCategory = (selecter)=>{
    const {value:selectedOption} = selecter
    const allVegitables = document.querySelectorAll(".vegitable")
    const allFruits = document.querySelectorAll(".fruit")

    if (selectedOption=="fruit"){
        allVegitables.forEach(item=>{
            item.style.display="none";
        })
        allFruits.forEach(item=>{
            item.style.display="block";
        })
    }
    else if(selectedOption=="vegetable"){
        allVegitables.forEach(item=>{
            item.style.display="block";
        })
        allFruits.forEach(item=>{
            item.style.display="none";
        })
    }
    else{

        allVegitables.forEach(item=>{
            item.style.display="block";
        })
        allFruits.forEach(item=>{
            item.style.display="block";
        })
    }
    
}

const checkError = ()=>{
    const text=document.querySelector(".form-control").value;

    const regx=/^([a-zA-Z0-9]+)@([a-zA-Z0-9-]+).([a-z]{2,20})$/;
    if (regx.test(text)){

        document.querySelector(".form-control").style.borderColor = "green";
        document.querySelector(".label-text").style.visibility="visible";
        document.querySelector(".label-text").style.color="green";
        document.querySelector(".label-text").innerHTML="valid email-id";
    }
    else{
        document.querySelector(".form-control").style.borderColor = "red";
        document.querySelector(".label-text").style.visibility="visible";
        document.querySelector(".label-text").style.color="red";
        document.querySelector(".label-text").innerHTML="invalid email-id";
    }
}

const goToCart = ()=>{
    console.log("Cart!")
    window.location.href="#cart";
}









 





