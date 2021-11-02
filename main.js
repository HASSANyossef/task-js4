var btnadd= document.getElementById("btnadd");
var productList= [];

btnadd.onclick= function(){
    var productName= document.getElementById("productName").value;
    var productPrice= document.getElementById("productPrice").value;
    var productCato= document.getElementById("productCato").value;
    var productDesc= document.getElementById("productDesc").value;

    var product ={
        name: productName,
        price: productPrice,
        catogery: productCato,
        descrption: productDesc 
    }

    productList.push(product);
    console.log(productList);
    displayImages();
}

function displayImages(){
    var temp= "";
    for(var i=0; i<productList.length; i++){
    temp+=`<div class="images">
            <img src="xp9.webp" alt="">
            <h2>`+productList[i].name+`</h2>
            <span>`+productList[i].catogery+`</span>
            <p>`+productList[i].descrption+`
            </p>
            <div class="price">
                `+productList[i].price+`
            </div>
            <button onclick="deletItem(`+i+`)">Dellet</button>
            <button >update</button>
        </div>`
    }
        document.getElementById("allItems").innerHTML= temp;
}

function deletItem(index){
    productList.splice(index,1);
    displayImages();
}