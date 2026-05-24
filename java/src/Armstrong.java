import java.util.Scanner;

public class Armstrong {
    public static void main(String[] args) {
        System.out.println(esArmstrong(153));
        System.out.println(esArmstrong(123));
    }

    public static boolean esArmstrong(int n) {
        String s = String.valueOf(Math.abs(n));
        int pot = s.length();
        int suma = 0;
        int x = Math.abs(n);
        while (x > 0) {
            int d = x % 10;
            suma += Math.pow(d, pot);
            x /= 10;
        }
        return suma == Math.abs(n);
    }

    public static void runDemo(Scanner scanner) {
        System.out.println("\n=== NÚMERO ARMSTRONG ===");
        System.out.print("Número: ");
        int n = scanner.nextInt();
        System.out.println(n + (esArmstrong(n) ? " es Armstrong" : " no es Armstrong"));
    }
}
