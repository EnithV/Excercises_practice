public class ParImpar {
    public static void main(String[] args) {
        System.out.println(verificar(4)); // 4 es par
        System.out.println(verificar(7)); // 7 es impar
    }

    public static String verificar(int numero) {
        if (numero % 2 == 0) {
            return numero + " es par";
        } else {
            return numero + " es impar";
        }
    }
}