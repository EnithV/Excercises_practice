import java.util.Scanner;

public class MaximoLista {
    public static void main(String[] args) {
        int[] nums = {3, 7, 2, 9, 1};
        System.out.println(maximo(nums));
    }

    public static int maximo(int[] arreglo) {
        int max = arreglo[0];
        for (int x : arreglo) {
            if (x > max) max = x;
        }
        return max;
    }

    public static void runDemo(Scanner scanner) {
        System.out.println("\n=== MÁXIMO EN LISTA ===");
        int[] nums = leerArreglo(scanner);
        System.out.println("Máximo: " + maximo(nums));
    }

    static int[] leerArreglo(Scanner scanner) {
        System.out.print("¿Cuántos números? ");
        int n = scanner.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            System.out.print("Número " + (i + 1) + ": ");
            arr[i] = scanner.nextInt();
        }
        return arr;
    }
}
