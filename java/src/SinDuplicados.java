import java.util.Arrays;
import java.util.LinkedHashSet;
import java.util.Scanner;

public class SinDuplicados {
    public static void main(String[] args) {
        int[] nums = {1, 2, 2, 3, 3, 4};
        System.out.println(Arrays.toString(sinDuplicados(nums)));
    }

    public static int[] sinDuplicados(int[] arreglo) {
        LinkedHashSet<Integer> set = new LinkedHashSet<>();
        for (int x : arreglo) set.add(x);
        int[] r = new int[set.size()];
        int i = 0;
        for (int v : set) r[i++] = v;
        return r;
    }

    public static void runDemo(Scanner scanner) {
        System.out.println("\n=== SIN DUPLICADOS ===");
        int[] nums = MaximoLista.leerArreglo(scanner);
        System.out.println(Arrays.toString(sinDuplicados(nums)));
    }
}
