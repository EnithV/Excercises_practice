public class InvertirCadena {
    public static void main(String[] args) {
        System.out.println(invertir("Hola")); // aloH
    }

    public static String invertir(String texto) {
        String resultado = "";
        for (int i = texto.length() - 1; i >= 0; i--) {
            resultado += texto.charAt(i);
        }
        return resultado;
    }
}