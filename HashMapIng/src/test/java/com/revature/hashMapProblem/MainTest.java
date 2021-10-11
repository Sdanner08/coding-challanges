package com.revature.hashMapProblem;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import java.util.HashMap;


class MainTest {

    @Test
    void mainReturnTrue() {
        //Assign
        HashMap<Integer, String> expected = new HashMap<Integer, String>();
        expected.put(1, "Hello");
        expected.put(2, "World");
        expected.put(3, "This is my HashMap");

        HashMap<Integer, String> actual = new HashMap<Integer, String>();
        actual.put(1, "Hello");
        actual.put(2, "World");
        actual.put(3, "This is my HashMap");

        //Assert
        assertEquals(expected, actual);

        assertTrue(expected.size() == 3);

    }
    @Test
    void mainReturnFalse() {
        //Assign
        HashMap<Integer, String> expected = new HashMap<Integer, String>();
        expected.put(1, "Hello");
        expected.put(2, "World");


        HashMap<Integer, String> actual = new HashMap<Integer, String>();
        actual.put(1, "Hello");
        actual.put(2, "World");
        actual.put(3, "This is my HashMap");

        //Assert
        assertNotEquals(expected, actual);

        assertFalse(expected.size() == 3);

    }
}