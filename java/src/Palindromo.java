public class Palindromo {
    public static void main(String[] args) {
        System.out.println(esPalindromo("radar"));     // true
        System.out.println(esPalindromo("java"));      // false
        System.out.println(esPalindromo("Reconocer")); // true
    }

    public static boolean esPalindromo(String texto) {
        String limpio = texto.toLowerCase();
        for (int i = 0; i < limpio.length() / 2; i++) {
            if (limpio.charAt(i) != limpio.charAt(limpio.length() - 1 - i)) {
                return false;
            }
        }
        return true;
    }
}