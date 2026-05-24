import java.util.Scanner;

public class MinimoLista {
    public static void main(String[] args) {
        int[] nums = {3, 7, 2, 9, 1};
        System.out.println(minimo(nums));
    }

    public static int minimo(int[] arreglo) {
        int min = arreglo[0];
        for (int x : arreglo) {
            if (x < min) min = x;
        }
        return min;
    }

    public static void runDemo(Scanner scanner) {
        System.out.println("\n=== MÍNIMO EN LISTA ===");
        int[] nums = MaximoLista.leerArreglo(scanner);
        System.out.println("Mínimo: " + minimo(nums));
    }
}
