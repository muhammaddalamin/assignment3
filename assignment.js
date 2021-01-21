// https://github.com/muhammaddalamin/assignment3/blob/main/assignment.js



// Kilometers to Meters conversion  Problem Solving    

function kilometerToMeter(kilometer){

    if(kilometer < 0){
        return 'Invalid Number'; 
    }else if(kilometer == 0){
        return 0;
    }else{
        return kilometer * 1000;
    }

}
// const resultMeter = kilometerToMeter(23);
// console.log(resultMeter);



// BudgetCalculator  Problem Solving
        
function budgetCalculator(watch,phone,laptop){

    if(watch < 0 || phone < 0 || laptop < 0){
        return 'Invalid'
    }else if(watch == 0 && phone == 0 && laptop == 0){
        return 0;
    }else{
        let watchPrice = watch * 50;
        let phonePrice = phone * 100;
        let laptopPrice = laptop * 500;

        const totalPrice = watchPrice + phonePrice + laptopPrice;

        return totalPrice;
    }
}
// const total = budgetCalculator(1,7,0);
// console.log(total);



// Hotel Cost  Problem Solving

function hotelCost(hoteldays){

    if(hoteldays >=1 && hoteldays <=10){
        return  totalFirstTenDaysCost =  hoteldays * 100;

    }else if(hoteldays >= 11 && hoteldays <=20){
        let firstTenDaysCost = 10 * 100;
        let secondTenDays = hoteldays -10;
        let totalSecondTenDaysCost = secondTenDays * 80;

        return totalFirstSecondTenDaysCost = firstTenDaysCost + totalSecondTenDaysCost;

    }else if(hoteldays >=21) {
        let firstTenDaysCost = 10 * 100;
        let secondTenDaysCost = 10 * 80;
        let twentyDaysLetter = hoteldays - 20;
        let twentyToInfiniteDaysCost = twentyDaysLetter * 50;

        return AllDaysCost = firstTenDaysCost + secondTenDaysCost + twentyToInfiniteDaysCost;

    }else if(hoteldays < 0) {
        return 'Invalid Number';

    }else if(hoteldays == 0){
        return 0;
    }    
} 
// const totalDaysCost = hotelCost(45);
// console.log(totalDaysCost);



// Mega Friend Problem Solving

let friendName = ['Alamin' , 'Muhammad','SharminAkterSharin','Iqbalhossain'];

function  megaFriend(arr){ 
    let lergestFriendName = arr[0];
    for(let i=0;i <arr.length;i++){
        if(arr[i].length > lergestFriendName.length){
            lergestFriendName = arr[i];    
        }    
    }
    return lergestFriendName;
}
// const result = megaFriend(friendName);
// console.log(result);
