import java.util.Scanner;

public class SegundoMayor {
    public static void main(String[] args) {
        int[] nums = {10, 5, 8, 20, 3};
        System.out.println(segundoMayor(nums));
    }

    public static int segundoMayor(int[] arreglo) {
        int max1 = Integer.MIN_VALUE;
        int max2 = Integer.MIN_VALUE;
        for (int x : arreglo) {
            if (x > max1) {
                max2 = max1;
                max1 = x;
            } else if (x > max2 && x < max1) {
                max2 = x;
            }
        }
        return max2;
    }

    public static void runDemo(Scanner scanner) {
        System.out.println("\n=== SEGUNDO MAYOR ===");
        int[] nums = MaximoLista.leerArreglo(scanner);
        System.out.println("Segundo mayor: " + segundoMayor(nums));
    }
}
