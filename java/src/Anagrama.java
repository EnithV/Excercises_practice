import java.util.Arrays;
import java.util.Scanner;

public class Anagrama {
    public static void main(String[] args) {
        System.out.println(sonAnagramas("roma", "amor"));
        System.out.println(sonAnagramas("java", "ajax"));
    }

    public static boolean sonAnagramas(String s1, String s2) {
        char[] a = s1.replaceAll("\\s", "").toLowerCase().toCharArray();
        char[] b = s2.replaceAll("\\s", "").toLowerCase().toCharArray();
        Arrays.sort(a);
        Arrays.sort(b);
        return Arrays.equals(a, b);
    }

    public static void runDemo(Scanner scanner) {
        System.out.println("\n=== ANAGRAMA ===");
        scanner.nextLine();
        System.out.print("Texto A: ");
        String a = scanner.nextLine();
        System.out.print("Texto B: ");
        String b = scanner.nextLine();
        System.out.println(sonAnagramas(a, b) ? "Son anagramas" : "No son anagramas");
    }
}
