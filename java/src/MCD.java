import java.util.Scanner;

public class MCD {
    public static void main(String[] args) {
        System.out.println(mcd(48, 18));
    }

    public static int mcd(int a, int b) {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b != 0) {
            int t = b;
            b = a % b;
            a = t;
        }
        return a;
    }

    public static void runDemo(Scanner scanner) {
        System.out.println("\n=== MCD ===");
        System.out.print("a: ");
        int a = scanner.nextInt();
        System.out.print("b: ");
        int b = scanner.nextInt();
        System.out.println("MCD = " + mcd(a, b));
    }
}
