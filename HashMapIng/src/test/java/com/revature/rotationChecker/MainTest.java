package com.revature.rotationChecker;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MainTest {
    Main main;
    @Test
    void isRotatedReturnTrue() {
        //Set up test Strings
        String test = "abcd";
        String rotated = "dabc";

        boolean expected = true;

        boolean actual = this.main.isRotated(test,rotated);

        assertEquals(expected,actual);
    }

    @Test
    void isRotatedReturnFalse() {
        //Set up test Strings
        String test = "abcd";
        String rotated = "dacb";

        boolean expected = false;

        boolean actual = this.main.isRotated(test,rotated);

        assertEquals(expected,actual);
    }
}