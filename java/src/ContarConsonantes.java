import java.util.Scanner;

public class ContarConsonantes {
    public static void main(String[] args) {
        System.out.println(contar("Hola Mundo"));
    }

    public static int contar(String texto) {
        String vocales = "aeiouAEIOU";
        int c = 0;
        for (char ch : texto.toCharArray()) {
            if (Character.isLetter(ch) && vocales.indexOf(ch) < 0) c++;
        }
        return c;
    }

    public static void runDemo(Scanner scanner) {
        System.out.println("\n=== CONTAR CONSONANTES ===");
        scanner.nextLine();
        System.out.print("Texto: ");
        String texto = scanner.nextLine();
        System.out.println("Consonantes: " + contar(texto));
    }
}
