import java.util.Scanner;

public class Fibonacci {
    public static void main(String[] args) {
        imprimir(10);
    }

    public static void imprimir(int n) {
        int a = 0, b = 1;
        for (int i = 0; i < n; i++) {
            System.out.print(a + (i < n - 1 ? ", " : ""));
            int t = a + b;
            a = b;
            b = t;
        }
        System.out.println();
    }

    public static void runDemo(Scanner scanner) {
        System.out.println("\n=== FIBONACCI ===");
        System.out.print("¿Cuántos términos? ");
        int n = scanner.nextInt();
        imprimir(n);
    }
}
