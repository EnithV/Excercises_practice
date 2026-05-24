import java.util.Scanner;

public class TablaMultiplicar {
    public static void main(String[] args) {
        imprimir(7);
    }

    public static void imprimir(int n) {
        for (int i = 1; i <= 10; i++) {
            System.out.println(n + " x " + i + " = " + (n * i));
        }
    }

    public static void runDemo(Scanner scanner) {
        System.out.println("\n=== TABLA DE MULTIPLICAR ===");
        System.out.print("Número: ");
        int n = scanner.nextInt();
        imprimir(n);
    }
}
