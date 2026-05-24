import java.util.Arrays;
import java.util.Scanner;

public class OrdenBurbuja {
    public static void main(String[] args) {
        int[] nums = {5, 1, 4, 2, 8};
        ordenar(nums);
        System.out.println(Arrays.toString(nums));
    }

    public static void ordenar(int[] a) {
        for (int i = 0; i < a.length - 1; i++) {
            for (int j = 0; j < a.length - 1 - i; j++) {
                if (a[j] > a[j + 1]) {
                    int t = a[j];
                    a[j] = a[j + 1];
                    a[j + 1] = t;
                }
            }
        }
    }

    public static void runDemo(Scanner scanner) {
        System.out.println("\n=== ORDENAR (BURBUJA) ===");
        int[] nums = MaximoLista.leerArreglo(scanner);
        ordenar(nums);
        System.out.println("Ordenado: " + Arrays.toString(nums));
    }
}
