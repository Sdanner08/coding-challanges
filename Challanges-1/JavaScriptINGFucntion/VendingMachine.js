/* 2) Your task is to create a function that simulates a vending machine.

Given an amount of money (in cents ¢ to make it simpler) and a productNumber, 
the vending machine should output the correct product name and give back the 
correct amount of change.

The coins used for the change are the following: [500, 200, 100, 50, 20, 10]

The return value is an object with 2 properties:

- product: the product name that the user selected.
- change: an array of coins (can be empty, must be sorted in descending order).

Examples
vendingMachine(products, 200, 7) ---> { product: "Crackers", change: [ 50, 20, 10 ] }
vendingMachine(products, 500, 0) ---> "Enter a valid product number"
vendingMachine(products, 90, 1) ---> "Not enough money for this product"

Notes:
- If productNumber is invalid (out of range) you should return the string: "Enter a valid product number".
- If money is not enough to buy a certain product you should return the string: "Not enough money for this product".
- If there's no change, return an empty array as the change. */


//Call function
console.log(vendingMachine(3,600)); //Should return Redbull with 100 change
console.log(vendingMachine(5,130)); //Should return Tea with 20, 10 in change
console.log(vendingMachine(0,100)); //Should return "Not enough money for this product"
console.log(vendingMachine(1,100)); //Should return Snickers with no change
console.log(vendingMachine(9,100)); //Should return "Enter a valid product number"

//function for the vending machine
function vendingMachine(requestedProduct, moneyInput){
    //Products in the vending machine and their price
    const vendingProducts =[{product: "Coke", price: 150},
                            {product: "Snickers", price: 100},
                            {product: "Dr.Pepper", price: 150},
                            {product: "Redbull", price: 500},
                            {product: "Sprite", price: 150},
                            {product: "Tea", price: 100},
                            {product: "Water", price: 150}];
    
    //Looks for Product based on index number
    let locateProduct = vendingProducts[requestedProduct];
    //Makes sure it can find product
    if(locateProduct == undefined){
        return "Enter a valid product number";
    }
    //Makes sure the Money input is >= to the product price
    if(moneyInput < locateProduct.price){
        return "Not enough money for this product";
    }

    //Coin potions to dispense back
    var changeOptions =[500, 200, 100, 50, 20, 10];
    //Returned Change
    var returnedChange=[];
    //Checks to see if change is needed
    var change = moneyInput - locateProduct.price;
    //checks if any change is needed to be givin
    if(change === 0){
        returnedChange.push(0);            
    }
    //Figures out what change to give back to user.
    //***Credit to Trevor Drury for helping me with this part.***
    for (let i = 0; i < changeOptions.length; i++) {
        //Goes through the Options of change and sees if remainder is =0
        if (change % changeOptions[i] === 0) {
            let count = Math.floor(change / changeOptions[i]);
            for (let j = 0; j < count; j++) {
                returnedChange.push(changeOptions[i]);
        }
            change = change % changeOptions[i];
        }else {
        let count = Math.floor(change / changeOptions[i]);
        for (let k = 0; k < count; k++) {
            returnedChange.push(changeOptions[i]);
        }
        change = change % changeOptions[i];
      }

    }

    var dispenseItem = {"product": locateProduct, "change": returnedChange};
    return dispenseItem;
}