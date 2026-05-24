import java.util.Scanner;

public class MayusculasMinusculas {
    public static void main(String[] args) {
        String t = "Generation Colombia";
        System.out.println(t.toUpperCase());
        System.out.println(t.toLowerCase());
    }

    public static void runDemo(Scanner scanner) {
        System.out.println("\n=== MAYÚSCULAS Y MINÚSCULAS ===");
        scanner.nextLine();
        System.out.print("Texto: ");
        String texto = scanner.nextLine();
        System.out.println("MAYÚSCULAS: " + texto.toUpperCase());
        System.out.println("minúsculas: " + texto.toLowerCase());
    }
}
