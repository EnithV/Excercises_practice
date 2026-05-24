import java.util.Scanner;

public class BinarioADecimal {
    public static void main(String[] args) {
        System.out.println(convertir("1010"));
    }

    public static int convertir(String binario) {
        return Integer.parseInt(binario.trim(), 2);
    }

    public static void runDemo(Scanner scanner) {
        System.out.println("\n=== BINARIO A DECIMAL ===");
        scanner.nextLine();
        System.out.print("Binario: ");
        String bin = scanner.nextLine();
        try {
            System.out.println("Decimal: " + convertir(bin));
        } catch (NumberFormatException e) {
            System.out.println("Solo se permiten 0 y 1");
        }
    }
}
