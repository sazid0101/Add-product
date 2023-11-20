const clickbtn=()=>{
    const productField=document.getElementById("product-field");
    const quantityField=document.getElementById("quantity-field");
    const product=productField.value ;
    const quantity=quantityField.value ;
    console.log(product,quantity)
    productField.value='';
    quantityField.value='';
    displayProduct(product ,quantity)
    
}
const displayProduct=(product,quantity)=>{
    const  ul=document.getElementById('ul-section');
    const li=document.createElement('li')
    li.innerText=`${product} ${quantity}`;
    ul.appendChild(li);
}
