import java.util.Scanner;

public class MCM {
    public static void main(String[] args) {
        System.out.println(mcm(12, 18));
    }

    public static int mcm(int a, int b) {
        return Math.abs(a * b) / MCD.mcd(a, b);
    }

    public static void runDemo(Scanner scanner) {
        System.out.println("\n=== MCM ===");
        System.out.print("a: ");
        int a = scanner.nextInt();
        System.out.print("b: ");
        int b = scanner.nextInt();
        System.out.println("MCM = " + mcm(a, b));
    }
}
