import java.util.Scanner;

public class Promedio {
    public static void main(String[] args) {
        int[] nums = {2, 4, 6, 8};
        System.out.println(promedio(nums));
    }

    public static double promedio(int[] arreglo) {
        int suma = 0;
        for (int x : arreglo) suma += x;
        return (double) suma / arreglo.length;
    }

    public static void runDemo(Scanner scanner) {
        System.out.println("\n=== PROMEDIO ===");
        int[] nums = MaximoLista.leerArreglo(scanner);
        System.out.println("Promedio: " + promedio(nums));
    }
}
