var allProducts = document.querySelectorAll(".products .cart .cart-plus")
var allHearts = document.querySelectorAll(".products .cart .cart-heart")
var numItem = document.querySelector("#num-item")
var totalCash = document.querySelector("#total-price")
var numHeart = document.querySelector("#num-heart")
var contentCart = document.querySelector("#content-cart")
var contentHeart = document.querySelector("#content-heart")
var contentTitle = document.querySelector("#content-title")
var totalPrice = 0 , nItem= 0 , nHeart = 0 ;


allProducts.forEach(function(item){
    item.onclick = function(){
        totalPrice += +(item.getAttribute("cash"))
        nItem++;
        console.log(item.getAttribute("title"))
        contentCart.innerHTML += item.getAttribute("title") +"<hr>"
        numItem.innerHTML = nItem
        totalCash.innerHTML = "$ " + totalPrice
        if (nItem > 0) {
            document.querySelector("#cart-nav").style.color = "#f00"
        }

        document.querySelector("#cart-nav").onclick = function(){
            contentCart.style.display = "block"
        }

        document.querySelector("#cart-nav").ondblclick = function(){
            contentCart.style.display = "none"
        }
    }
})
allHearts.forEach(function(item){
    item.onclick = function(){
        nHeart++;
        contentHeart.innerHTML += item.getAttribute("title") +"<hr>"
        numHeart.innerHTML = nHeart
        if (nHeart > 0) {
            document.querySelector("#heart-nav").style.color = "#f00"
        }
        document.querySelector("#heart-nav").onclick = function(){
            contentHeart.style.display = "block"
        }
        document.querySelector("#heart-nav").ondblclick = function(){
            contentHeart.style.display = "none"
        }
    }
})
