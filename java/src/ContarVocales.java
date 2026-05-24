public class ContarVocales {
    public static void main(String[] args) {
        System.out.println(contarVocales("Hola Mundo")); // 4
    }

    public static int contarVocales(String texto) {
        int contador = 0;
        String vocales = "aeiouAEIOU";
        for (int i = 0; i < texto.length(); i++) {
            if (vocales.indexOf(texto.charAt(i)) != -1) {
                contador++;
            }
        }
        return contador;
    }
}