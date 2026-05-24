import java.util.Scanner;

public class ContarPalabras {
    public static void main(String[] args) {
        System.out.println(contar("Hola mundo desde Java"));
    }

    public static int contar(String texto) {
        if (texto == null || texto.trim().isEmpty()) return 0;
        return texto.trim().split("\\s+").length;
    }

    public static void runDemo(Scanner scanner) {
        System.out.println("\n=== CONTAR PALABRAS ===");
        scanner.nextLine();
        System.out.print("Escriba una frase: ");
        String texto = scanner.nextLine();
        System.out.println("Palabras: " + contar(texto));
    }
}
