import java.util.Scanner;

public class ValidarCorreo {
    public static void main(String[] args) {
        System.out.println(validar("usuario@ejemplo.com"));
        System.out.println(validar("correo-invalido"));
    }

    public static boolean validar(String correo) {
        int at = correo.indexOf('@');
        int dot = correo.lastIndexOf('.');
        return at > 0 && dot > at + 1 && dot < correo.length() - 1;
    }

    public static void runDemo(Scanner scanner) {
        System.out.println("\n=== VALIDAR CORREO (SIMPLE) ===");
        scanner.nextLine();
        System.out.print("Correo: ");
        String correo = scanner.nextLine();
        System.out.println(validar(correo) ? "Formato válido" : "Formato inválido");
    }
}
