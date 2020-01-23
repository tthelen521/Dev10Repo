function validateItems() {
    var bet = document.forms["enterBet"]["bet"].value;
    if (bet == "" || isNaN(bet)) {
        alert("Starting Bet must be filled in with a number.");
        document.forms["enterBet"]["bet"]
           .parentElement.className = "form-group has-error";
        document.forms["enterBet"]["bet"].focus();
        return false;
    }
   if (bet <= 0) {
        alert("Starting Bet must be filled in with a positive number.");
        document.forms["enterBet"]["bet"]
           .parentElement.className = "form-group has-error";
        document.forms["enterBet"]["bet"].focus();
        return false;
    }
	
	var startingBet = parseFloat(bet,10);
	var totalRolls = 0;
	var maxAmount = startingBet;
	var maxAmountRolls = 0;
	
	var curAmount = startingBet;
	while(curAmount>0){
		var rollOne= Math.floor(Math.random()*6)+1;
		var rollTwo= Math.floor(Math.random()*6)+1;
		totalRolls++;
		if(rollOne+rollTwo==7){
			curAmount+=4;
			if(curAmount>maxAmount){
				maxAmount=curAmount;
				maxAmountRolls=totalRolls;
			}
		}
		else{
			curAmount-=1;
		}
	}
	
	/*To get the maximum earnings rather than total money held, we need to subtract the starting bet
	from the total money held. Otherwise, the table will show the highest amount held.*/
	maxAmount -= startingBet;
	
   document.getElementById("results").style.display = "block";
   document.getElementById("startingBet").innerText = "$"+startingBet+".00";
   document.getElementById("totalRolls").innerText = totalRolls;
   document.getElementById("maxAmount").innerText = "$"+maxAmount+".00";
   document.getElementById("maxAmountRolls").innerText = maxAmountRolls;

   return false;
}