import java.util.Scanner;

public class InvertirNumero {
    public static void main(String[] args) {
        System.out.println(invertir(12345));
        System.out.println(invertir(-1200));
    }

    public static int invertir(int n) {
        boolean neg = n < 0;
        int x = Math.abs(n);
        int rev = 0;
        while (x > 0) {
            rev = rev * 10 + x % 10;
            x /= 10;
        }
        return neg ? -rev : rev;
    }

    public static void runDemo(Scanner scanner) {
        System.out.println("\n=== INVERTIR NÚMERO ===");
        System.out.print("Número: ");
        int n = scanner.nextInt();
        System.out.println("Invertido: " + invertir(n));
    }
}
