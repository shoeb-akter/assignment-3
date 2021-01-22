  
  
                    // https://github.com/shoeb-akter/assignment-3
   
                            //convert kilometer to meter
function kilometerToMeter(kilometer){
        var meter = 0;
    if (kilometer < 0){                                  
        return 'Wrong Input!';
    }
    else{
        return meter = kilometer * 1000;
    }
    return meter;
}
var result = kilometerToMeter(78);               
console.log(result);

                                //Calculate yor Budget

function budgetCalculator(watches, phones, laptops){
    var total = 0;
    var firstItem = watches * 50;
    var secondItem = phones * 100;
    var thirdItem = laptops * 500;
    return total = firstItem + secondItem + thirdItem;
  }
    var result = budgetCalculator(5, 2, 3);
    console.log(result);

                                    //Book Your hotel with discount

function hotelCost(days){
     var totalCost = 0;

    if (days <= 10){
        totalCost = days * 100;
    }
    else if (days <= 20){
        var firstPackage = 10 * 100;
        var remainingDays = days - 10;
        var secondPackage = remainingDays * 80;
        totalCost = firstPackage + secondPackage;
    }
    else{
        var firstPackage = 10 * 100;
        var secondPackage = 10 * 80;
        var remainingDays = days -20;
        var thirdPackage = remainingDays * 50;
        totalCost = firstPackage + secondPackage + thirdPackage;
    }
    return totalCost;
}
var result = hotelCost(30);
console.log(result);


                                     //Find the biggest name from the array

function megaFriend(friends){
   var megaName = friends[0];
  
    for (var i = 0; i < friends.length; i++){
        var name = friends[i];
        if ( name.length > megaName.length){
            megaName = name;
        }
    }
    return megaName;  
}
var friends = ['Joshim', 'Kolimuddin', 'Hasib', 'Emon', 'Junayed', 'Rohimuddin'];

    var bigName = megaFriend(friends);
    console.log(bigName);