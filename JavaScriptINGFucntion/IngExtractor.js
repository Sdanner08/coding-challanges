/* JavaScript:

1) Write a function that takes a string as an argument and returns a list of all the words inflected by "-ing". 
Your function should also exclude all the mono-syllabic words ending in "-ing" (e.g. bing, sing, sling, ...). 
Although these words end in "-ing", the "-ing" is not an inflection affix.

Examples
ingExtractor("coming bringing Letting sing") --> ["coming", "bringing", "Letting"]

ingExtractor("going Ping, king sHrink dOing") --> ["going",, "dOing"]

ingExtractor("zing went ring, ding wing SINk") --> []

Notes:
Mono-syllabic means a word containing just one syllable. */

//Test String Set up
let string = "coming bringing Letting sing";
let string2 = "going Ping, king sHrink dOing";
let string3 = "zing went ring, ding wing SINk";
//Call function
console.log(ingExtractor(string));
console.log(ingExtractor(string2));
console.log(ingExtractor(string3));

//function to return only non mono-syllabic words
function ingExtractor(string){
    var input= string.replace(/[^\w\s]/gi, '');
    //This will split the String into an array so we can check the length of the strings -source link-https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
    const array = input.split(" ");
    console.log(array);
    //New Array to be returned
    let returnString = new Array();
    //calls function to check length of the word
    array.forEach(validationChecker);

    //Function to check the length of each word to make sure its not a mono-syllabic as well as checks to make sure it ends with "ing"
    function validationChecker(item, index){
        //check length
        if(item.length >=5){
            //checks to make sure it ends with ing
             if(item.includes("ing")){
                returnString.push(item)
            } 
        }
    }
    console.log(returnString);
}