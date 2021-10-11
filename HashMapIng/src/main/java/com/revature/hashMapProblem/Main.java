package com.revature.hashMapProblem;
/*Java:

        1) Write a Java Program to iterate HashMap using While and advance for loop.

        2) Write a program which accepts two given String and checks if they are the rotation of each.
        If they then return true otherwise return false. A String is said to be a rotation of other string
        if they contain same characters and the sequence is rotated across any character, e.g. "dabc" is a
        rotation of "abcd" but "dbac" is not.*/

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        /////////////////Question 1/////////////////
        //set up hashMap - Source link: https://www.w3schools.com/java/java_hashmap.asp
        HashMap<Integer, String> hashMap = new HashMap<Integer, String>();
        //Add values to hashmap
        hashMap.put(1, "Hello");
        hashMap.put(2, "World");
        hashMap.put(3, "This is my HashMap");
        //set up iterator for the hashmap - Source link: https://www.w3schools.com/java/java_iterator.asp
        Iterator iterator = hashMap.entrySet().iterator();
        //while loop to iterate through the whole hashMap to get the Key Value pair.
        while (iterator.hasNext()) {
            Map.Entry entry = (Map.Entry) iterator.next();
            System.out.println("Integer Value(Key): " + entry.getKey() + " and String Value(Value): " + entry.getValue());
        }
        /////////////////Question 1 Part 2/////////////////
        //Enhanced for loop over hashMap- Source Link: https://www.baeldung.com/java-map-entry
        for (Map.Entry<Integer, String> entry : hashMap.entrySet()) {
            System.out.println("Integer Value(Key): " + entry.getKey() + " and String Value(Value): " + entry.getValue());

        }
    }
}

