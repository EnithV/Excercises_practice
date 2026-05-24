import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class TwoSum {
    public static void main(String[] args) {
        int[] nums = {2, 7, 11, 15};
        int[] r = twoSum(nums, 9);
        System.out.println("[" + r[0] + ", " + r[1] + "]");
    }

    public static int[] twoSum(int[] nums, int objetivo) {
        Map<Integer, Integer> visto = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int need = objetivo - nums[i];
            if (visto.containsKey(need)) {
                return new int[]{visto.get(need), i};
            }
            visto.put(nums[i], i);
        }
        return new int[]{-1, -1};
    }

    public static void runDemo(Scanner scanner) {
        System.out.println("\n=== TWO SUM ===");
        int[] nums = MaximoLista.leerArreglo(scanner);
        System.out.print("Objetivo: ");
        int obj = scanner.nextInt();
        int[] r = twoSum(nums, obj);
        if (r[0] >= 0) {
            System.out.println("Índices: " + r[0] + " y " + r[1]);
        } else {
            System.out.println("No hay par que sume " + obj);
        }
    }
}
