import java.util.Scanner;

public class DecimalABinario {
    public static void main(String[] args) {
        System.out.println(convertir(10));
    }

    public static String convertir(int n) {
        return Integer.toBinaryString(n);
    }

    public static void runDemo(Scanner scanner) {
        System.out.println("\n=== DECIMAL A BINARIO ===");
        System.out.print("Decimal: ");
        int n = scanner.nextInt();
        System.out.println("Binario: " + convertir(n));
    }
}
