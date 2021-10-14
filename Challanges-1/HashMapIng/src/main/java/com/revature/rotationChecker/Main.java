package com.revature.rotationChecker;
/*Java:

        1) Write a Java Program to iterate HashMap using While and advance for loop.

        2) Write a program which accepts two given String and checks if they are the rotation of each.
        If they then return true otherwise return false. A String is said to be a rotation of other string
        if they contain same characters and the sequence is rotated across any character, e.g. "dabc" is a
        rotation of "abcd" but "dbac" is not.*/

public class Main {
    public static void main(String[] args) {
        /////////////////Question 2/////////////////

        //Set up test Strings
        String test = "abcd";
        String rotated = "dabc";

        //Call the method
        boolean isRotated = isRotated(test, rotated);
        //Print out the results.
        System.out.printf(rotated +" is rotation of "+ test+":"+ isRotated);

    }
    //Method that accepts 2 different strings
    public static boolean isRotated(String test, String rotated) {
        //validate that the strings are not empty before moving forward.
        if (test == null || rotated == null) {
            return false;
            //Checks to make sure the Strings are the same length before moving forward.
        } else if (test.length() != rotated.length()) {
            return false;
        }
        //create new string to check rotated string against
        String concat = test + test;
        //abcdabcd
        //if new string contains the rotated one it'll be true else it'll be false
        boolean value = concat.contains(rotated);
        return value;
    }
}
