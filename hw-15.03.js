let safe           = 500.00;
let money          = prompt("How much money do you want ?");

if (money < 0) {
    
    alert ('Type the correct amount')

} else if (isNaN(money) == true) {
    
    alert ('Canceled')

} else if (money == null) {
    
    alert ('Canceled')

} else if (safe < money) {
    
    alert ('Not enough money in your safe')

} else if (safe >= money) {
    
    alert (`The remaining amount is ${safe - money} mdl`)

}