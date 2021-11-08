var btnadd= document.getElementById("btnadd");
var btnedit= document.getElementById("btnedit");
var productList= [];
var remove= document.getElementsByClassName("remove");

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
    displayImages();
    removeInp();
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
            <button onclick= "updateItem(`+i+`)">update</button>
        </div>`
    }
        document.getElementById("allItems").innerHTML= temp;
        
}

function deletItem(index){
    productList.splice(index,1);
    displayImages();
}

function updateItem(index){
    document.getElementById("productName").value= productList[index].name;
    document.getElementById("productPrice").value= productList[index].price;
    document.getElementById("productCato").value= productList[index].catogery;
    document.getElementById("productDesc").value= productList[index].descrption;

    btnadd.style.display="none";
    btnedit.style.display="block";
    document.getElementById("indexnubmer").value= index;
}


btnedit.onclick= function(){
    var x= document.getElementById("indexnubmer").value;

    productList[x].name= document.getElementById("productName").value;
    productList[x].price= document.getElementById("productPrice").value;
    productList[x].catogery= document.getElementById("productCato").value;
    productList[x].descrption= document.getElementById("productDesc").value;

    btnadd.style.display="block";
    btnedit.style.display="none";
    displayImages();
    removeInp();
}

function removeInp(){
    for(var i=0; i<remove.length; i++){
        remove[i].value ="";
    }
}