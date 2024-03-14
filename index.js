var sidenav =document.querySelector(".side-navbar")

function shownNavbar()
{
    sidenav.style.left="0"
}
function closeNavbar()
{
    sidenav.style.left="-60%"
}


/*collection*/

var search =document.getElementById("search")
var productcontainer =document.getElementById("products")
var productlist=productcontainer.querySelectorAll("div")
search.addEventListener("keyup",function(event){
    var enteredvalue =event.target.value.toUpperCase()

    for(count=0;count<productlist.length;count=count+1){ 
    
    var productname =productlist[count].querySelector("p").textContent
    if( productname.toUpperCase().indexOf(enteredvalue)<0)
    {
        productlist[count].style.display="none"
    }
    else{
        productlist[count].style.display="block"
    }
    }

})
