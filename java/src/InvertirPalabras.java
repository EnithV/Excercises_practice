import java.util.Arrays;
import java.util.Collections;
import java.util.Scanner;

public class InvertirPalabras {
    public static void main(String[] args) {
        System.out.println(invertir("uno dos tres"));
    }

    public static String invertir(String texto) {
        String[] partes = texto.trim().split("\\s+");
        Collections.reverse(Arrays.asList(partes));
        return String.join(" ", partes);
    }

    public static void runDemo(Scanner scanner) {
        System.out.println("\n=== INVERTIR PALABRAS ===");
        scanner.nextLine();
        System.out.print("Escriba una frase: ");
        String texto = scanner.nextLine();
        System.out.println(invertir(texto));
    }
}
