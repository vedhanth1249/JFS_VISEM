package com.skillnext2;
import java.util.Scanner;
import java.util.Scanner;


public class App {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("enter your string:");

        String str = scanner.nextLine();   

        if (isPalindrome(str)) {
            System.out.println(str + " is a palindrome");
        } else {
            System.out.println(str + " is not a palindrome");
        }
    }

    public static boolean isPalindrome(String input) {
        String reversed = "";

        for (int i = input.length() - 1; i >= 0; i--) {
            reversed += input.charAt(i);
        }

        return input.equalsIgnoreCase(reversed);
    }
}