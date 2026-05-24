import java.util.Scanner;

public class NumeroPrimo {
    public static void main(String[] args) {
        System.out.println(esPrimo(17));
        System.out.println(esPrimo(18));
    }

    public static boolean esPrimo(int n) {
        if (n < 2) return false;
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) return false;
        }
        return true;
    }

    public static void runDemo(Scanner scanner) {
        System.out.println("\n=== NÚMERO PRIMO ===");
        System.out.print("Ingrese un entero: ");
        int n = scanner.nextInt();
        System.out.println(n + (esPrimo(n) ? " es primo" : " no es primo"));
    }
}
