/* 2) Create a function that takes the dimensions of two triangles (as arrays) and checks if the first triangle fits into the second one.

Examples:
doesTriangleFit([1, 1, 1], [1, 1, 1]) ➞ true

doesTriangleFit([1, 1, 1], [2, 2, 2]) ➞ true

doesTriangleFit([1, 2, 3], [1, 2, 2]) ➞ false

doesTriangleFit([1, 2, 4], [1, 2, 6]) ➞ false

Notes:
Triangle fits if it has the same or smaller size as the hole.
The function should return false if the triangle with that dimensions is not possible. */
console.log("-----------------------------------------------");
console.log(doesTriangle([1, 1, 1], [1, 1, 1]));//return true
console.log(doesTriangle([1, 1, 1], [2, 2, 2]));//return true
console.log(doesTriangle([1, 2, 3], [1, 2, 2]));//return false
console.log(doesTriangle([1, 2, 4], [1, 2, 6]));//return false

function doesTriangle(tri1, tri2){
    
//Makes sure Tri1 is a valid Triangle
if(tri1[0] + tri1[1] > tri1[2] && tri1[0] + tri1[2] > tri1[1] && tri1[2] + tri1[1] > tri1[0]){

    //Makes sure Tri2 is a valid Triangle
    if(tri2[0] + tri2[1] > tri2[2] && tri2[0] + tri2[2] > tri2[1] && tri2[2] + tri2[1] > tri2[0]){

        //Has to check if Tri1 can fit into the Tri2
        if(tri1[0]<= tri2[0] && tri1[1]<= tri2[1] && tri1[2]<= tri2[2]){
            //return true if both triangles are valid and can fit
            return true;
        }
    }
}
//returns false if either triangle is not valid or won't fit
return false;

}
