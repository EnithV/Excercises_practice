public class SumaArreglo {
    public static void main(String[] args) {
        int[] numeros = {1, 2, 3, 4, 5};
        System.out.println(sumar(numeros)); // 15
    }

    public static int sumar(int[] arreglo) {
        int suma = 0;
        for (int num : arreglo) {
            suma += num;
        }
        return suma;
    }
}