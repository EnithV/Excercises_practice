import java.util.Scanner;

public class PatronAsteriscos {
    public static void main(String[] args) {
        imprimir(5);
    }

    public static void imprimir(int filas) {
        for (int i = 1; i <= filas; i++) {
            for (int j = 0; j < i; j++) System.out.print("*");
            System.out.println();
        }
    }

    public static void runDemo(Scanner scanner) {
        System.out.println("\n=== PATRÓN DE ASTERISCOS ===");
        System.out.print("Filas: ");
        int filas = scanner.nextInt();
        imprimir(filas);
    }
}
