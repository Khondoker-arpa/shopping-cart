function updateProductNumber(product,price, increasing){

    const inputValue = document.getElementById(product + '-number');
    let inputNumber = inputValue.value;
   if(increasing == true){
    inputNumber = parseInt(inputNumber) + 1;
   }
   else if(inputNumber > 0){
    inputNumber = parseInt(inputNumber) - 1;
   }
   inputValue.value = inputNumber;

   const inputTotal = document.getElementById(product + '-total');
   inputTotal.innerText = inputNumber * price;
 
   CalculateTotal();

}

function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function CalculateTotal(){
 
    const phoneTotal =  getInputValue('phone') * 1219;
    const caseTotal =  getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;

    const taxAmount = subTotal / 10;
    const totalPrice = subTotal + taxAmount;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = taxAmount;
    document.getElementById('total').innerText = totalPrice;


    
}
// handle phone event

document.getElementById('phone-plus').addEventListener('click',function(){

    updateProductNumber('phone',1219,true);
});

document.getElementById('phone-minus').addEventListener('click',function(){

    updateProductNumber('phone',1219,false);
})

// handle case event
document.getElementById('case-plus').addEventListener('click',function()
{
    updateProductNumber('case',59,true);
});

document.getElementById('case-minus').addEventListener('click',function()
{
   
    updateProductNumber('case',59,false);
});
