import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class LetraMasRepetida {
    public static void main(String[] args) {
        System.out.println(masRepetida("programacion"));
    }

    public static char masRepetida(String texto) {
        Map<Character, Integer> freq = new HashMap<>();
        for (char c : texto.toLowerCase().toCharArray()) {
            if (Character.isLetter(c)) {
                freq.merge(c, 1, Integer::sum);
            }
        }
        char mejor = '?';
        int max = 0;
        for (Map.Entry<Character, Integer> e : freq.entrySet()) {
            if (e.getValue() > max) {
                max = e.getValue();
                mejor = e.getKey();
            }
        }
        return mejor;
    }

    public static void runDemo(Scanner scanner) {
        System.out.println("\n=== LETRA MÁS REPETIDA ===");
        scanner.nextLine();
        System.out.print("Texto: ");
        String texto = scanner.nextLine();
        char c = masRepetida(texto);
        System.out.println("Letra: " + c);
    }
}
