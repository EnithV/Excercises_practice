import java.util.Scanner;

public class BuscarEnLista {
    public static void main(String[] args) {
        int[] nums = {10, 20, 30, 40};
        System.out.println(buscar(nums, 20));
    }

    public static int buscar(int[] arreglo, int objetivo) {
        for (int i = 0; i < arreglo.length; i++) {
            if (arreglo[i] == objetivo) return i;
        }
        return -1;
    }

    public static void runDemo(Scanner scanner) {
        System.out.println("\n=== BUSCAR EN LISTA ===");
        int[] nums = MaximoLista.leerArreglo(scanner);
        System.out.print("Valor a buscar: ");
        int obj = scanner.nextInt();
        int idx = buscar(nums, obj);
        System.out.println(idx >= 0 ? "Encontrado en índice " + idx : "No encontrado");
    }
}
