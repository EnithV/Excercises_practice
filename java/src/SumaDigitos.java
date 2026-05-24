import java.util.Scanner;

public class SumaDigitos {
    public static void main(String[] args) {
        System.out.println(suma(12345));
    }

    public static int suma(int n) {
        n = Math.abs(n);
        int total = 0;
        while (n > 0) {
            total += n % 10;
            n /= 10;
        }
        return total;
    }

    public static void runDemo(Scanner scanner) {
        System.out.println("\n=== SUMA DE DÍGITOS ===");
        System.out.print("Número: ");
        int n = scanner.nextInt();
        System.out.println("Suma: " + suma(n));
    }
}
