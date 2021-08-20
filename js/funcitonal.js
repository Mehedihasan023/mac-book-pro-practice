function ChoosingOption(price,choose){
    const total1 = document.getElementById('total-price');
    const previousTotal = total1.innerText;
    const previousnumber= parseFloat(previousTotal);
    const chooseOption = document.getElementById(choose);
    const previousprice = parseFloat(price);
    if(previousprice == 180 || previousprice == 80){    
    chooseOption.innerText= 180;
    }
    else if(previousprice == -80){
        chooseOption.innerText= 100;
    }
    else{
        chooseOption.innerText= price;
    }
    let newTotal= price;
    let newnumber = parseFloat(newTotal);
    total1.innerText = previousnumber + newnumber;
    const finalTotal = document.getElementById('finalTotal');
    finalTotal.innerText = previousnumber + newnumber; 

}
function substraction(price){
    
        const total3 = document.getElementById('total-price');
        const total3sub= total3.innerText;
        const previoustotal3 = parseFloat(total3sub);
        if(previoustotal3 > 1299){
        const totalnumber = parseFloat(price);
      const newSubstraction = previoustotal3 - totalnumber;
      total3.innerText = newSubstraction;
    }
}
// for memory
document.getElementById('memory-8Gb').addEventListener
('click', function(){
    ChoosingOption( 0 ,'memory-Cost');
    substraction(180);
})
document.getElementById('memory-16Gb').addEventListener
('click', function(){
//   ChoosingOption(180,'memory-Cost');
    let previousMemory = document.getElementById('memory-Cost');
    let previousMemoryText = previousMemory.innerText;
    let previousMemoryInt = parseFloat(previousMemoryText);
    if(previousMemoryInt == 0){
        ChoosingOption(180,'memory-Cost');
    }
})
// for storage
document.getElementById('ssd-256gb').addEventListener
('click',function(){
    // ChoosingOption(0,'storage-cost');
    let previousStorageText = document.getElementById('storage-cost');
    let previousCost = previousStorageText.innerText;
    let previousCostInt = parseFloat(previousCost);
    if(previousCostInt == 100){
        substraction(100);
        ChoosingOption(0,'storage-cost');
    }
    else if (previousCostInt == 180){
        substraction(180);
    }
    else if(previousCostInt == 0){
        substraction(0);
    }
    ChoosingOption(0,'storage-cost');
})
document.getElementById('ssd-512gb').addEventListener
('click',function(){

    
    let previousStorageText = document.getElementById('storage-cost');
    let previousCost = previousStorageText.innerText;
    let previousCostInt = parseFloat(previousCost);
    if(previousCostInt == 0){
        ChoosingOption(100,'storage-cost');
    }
    else if(previousCostInt == 180){
        ChoosingOption(-80,'storage-cost');
    }

})
document.getElementById('ssd-1tb').addEventListener
('click',function(){
    let previousStorageText = document.getElementById('storage-cost');
    let previousCost = previousStorageText.innerText;
    let previousCostInt = parseFloat(previousCost);
    if(previousCostInt == 100){
        ChoosingOption(80,'storage-cost');
    }
    else if(previousCostInt == 0){
        ChoosingOption(180,'storage-cost');
    }
})
// for delivery 
document.getElementById('free-delivery').addEventListener
('click',function(){
    ChoosingOption(0,'delivery-cost');
    substraction(20);
})
document.getElementById('delivery-charge').addEventListener
('click',function(){
    // ChoosingOption(20,'delivery-cost');
    let previousDelivery = document.getElementById('delivery-cost');
    let previousDeliveryText = previousDelivery.innerText;
    let previousDeliveryInt = parseFloat(previousDeliveryText);
    if(previousDeliveryInt == 0){
        ChoosingOption(20,'delivery-cost');
    }
});

document.getElementById('aply-btn').addEventListener
('click',function(){
   
    const inputText = document.getElementById('inputText');
    const inputPomoCode = inputText.value;
    const totalText = document.getElementById('finalTotal');
    const totalValueText = totalText.innerText;
    const totalValueInt = parseFloat(totalValueText);
    if(totalValueInt % 1 != 0){
        inputText.value = 'Already used';
    }
    else if ( inputPomoCode == 'seteveKaku' && totalValueInt > 1299){
       const discount = totalValueInt - (totalValueInt * 0.20);
       totalText.innerText= discount;
       inputText.value = '';
    }
  
})