import java.util.Scanner;

public class Potencia {
    public static void main(String[] args) {
        System.out.println(potencia(2, 8));
    }

    public static long potencia(int base, int exp) {
        long r = 1;
        for (int i = 0; i < exp; i++) r *= base;
        return r;
    }

    public static void runDemo(Scanner scanner) {
        System.out.println("\n=== POTENCIA ===");
        System.out.print("Base: ");
        int base = scanner.nextInt();
        System.out.print("Exponente: ");
        int exp = scanner.nextInt();
        System.out.println(base + "^" + exp + " = " + potencia(base, exp));
    }
}
