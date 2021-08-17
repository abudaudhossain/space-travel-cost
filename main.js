function getQuantity(idName,isMars,isAdd){
    const inputFeild = document.getElementById(idName);
    inputFeildValue = parseInt(inputFeild.value);
    if(isAdd){
      inputFeildValue ++;
    }else{
      if(inputFeildValue >= 1){
        inputFeildValue --;
      }  
    } 
   inputFeild.value = inputFeildValue;
//   const quantity = getQuantity(idName, isAdd)
   const netTiketCost = getNetMarsTiketCost(quantity, isMars);
   setTiketCost(netTiketCost, isMars);
   getTotalCost();
  }

function getQuantity(idName, isAdd){
    const inputFeild = document.getElementById(idName);
    let quantity = parseInt(inputFeild.value);
    if(isAdd){
        quantity ++;
    }else{
      if(quantity >= 1){
        quantity --;
      }  
    } 
    inputFeild.value = quantity;
    return quantity;
}
  // net tiketCost 
  function getNetMarsTiketCost(quantity, isMars){
    let perTiketCost;
    if(isMars){
       perTiketCost = 500;
    }else{
       perTiketCost = 300;
    }
    const netCost = quantity *perTiketCost
      return netCost;
  }
  // set tiketCost 
  function setTiketCost(tiketCost, isMars){
    if(isMars){
      document.getElementById('mars-cost').innerText = tiketCost;
    }else{
      document.getElementById('moon-cost').innerText = tiketCost;
    }
  }

  // set total cost 
  function getTotalCost(){
    const totalCost = parseInt(document.getElementById('mars-cost').innerText) + parseInt(document.getElementById('moon-cost').innerText );
    document.getElementById('total-cost').innerText = totalCost;
  }