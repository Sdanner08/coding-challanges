package com.revature;

import java.util.Locale;

public class Main {

/*    Java: The Atbash cipher is an encryption method in which each letter of a word is replaced with its "mirror" letter in the alphabet: A <=> Z; B <=> Y; C <=> X; etc.

    Create a function that takes a string and applies the Atbash cipher to it.

    Examples
    atbash("apple") --> "zkkov"

    atbash("Hello world!") --> "Svool dliow!"

    atbash("Christmas is the 25th of December") --> "Xsirhgnzh rh gsv 25gs lu Wvxvnyvi"

    Notes:
    Capitalisation should be retained.
    Non-alphabetic characters should not be altered.*/

    public static void main(String[] args) {
        String string1 = "apple";
        String string2 = "Hello world!";
        String string3 = "Christmas is the 25th of December";

        System.out.println(cipher(string1));//should print out "zkkov"
        System.out.println(cipher(string2));//should print out "Svool dliow!"
        System.out.println(cipher(string3));//should print out "Xsirhgnzh rh gsv 25gs lu Wvxvnyvi"
    }

    private static String cipher(String string) {

        //ABC strings
        String normal = "abcdefghijklmnopqrstuvwxyz";
        String capNormal = normal.toUpperCase();
        String reversed = "zyxwvutsrqponmlkjihgfedcba";
        String capReversed = reversed.toUpperCase();

        //String to be outputted
        StringBuilder sb = new StringBuilder("");

        //Loop through the input string
        for(int i = 0; i < (string.length()); i++) {
            //Gets value of each char
            String c = String.valueOf(string.charAt(i));
            //Checks to see if its lower case
            if(normal.contains(c)){
                //Gets the index of the character in normal string
                int location= normal.indexOf(c);
                //Finds the new character on the reversed string where the index matches
                String encoding = String.valueOf(reversed.charAt(location));
                //appends to the output string
                sb.append(encoding);
                //with out continue it'll append the original string as well
                continue;
            }
            //checks to see if its upper case
            if(capNormal.contains(c)){
                //Gets the index of the character in normal string
                int location= capNormal.indexOf(c);
                //Finds the new character on the reversed string where the index matches
                String encoding = String.valueOf(capReversed.charAt(location));
                //appends to the output string
                sb.append(encoding);
                //with out continue it'll append the original string as well
                continue;
            }else{
                //Special Characters and spaces will go here as they are not found in the normal Strings
                sb.append(c);
            }
        }
        //returns the new string to be returned
        return sb.toString();

    }
}