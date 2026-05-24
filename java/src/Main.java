import java.util.Scanner;

public class Main {
    private static final String[] TITULOS = {
            "FizzBuzz",
            "Verificador de Palíndromos",
            "Inversión de Cadenas",
            "Calculadora de Factorial",
            "Par o Impar",
            "Suma de Elementos de un Arreglo",
            "Contar Vocales",
            "Convertidor de Temperatura",
            "Número Primo",
            "Máximo en Lista",
            "Mínimo en Lista",
            "Promedio",
            "Buscar en Lista",
            "Ordenar (Burbuja)",
            "Fibonacci",
            "Potencia",
            "MCD",
            "MCM",
            "Contar Palabras",
            "Invertir Palabras",
            "Anagrama",
            "Letra Más Repetida",
            "Sin Duplicados",
            "Segundo Mayor",
            "Suma de Dígitos",
            "Número Armstrong",
            "Tabla de Multiplicar",
            "Patrón de Asteriscos",
            "Validar Correo (simple)",
            "Contar Consonantes",
            "Mayúsculas y Minúsculas",
            "Binario a Decimal",
            "Decimal a Binario",
            "Invertir Número",
            "Two Sum"
    };

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int opcion = -1;

        while (opcion != 0) {
            System.out.println("\n=== 35 EJERCICIOS DE PRÁCTICA ===");
            for (int i = 0; i < TITULOS.length; i++) {
                System.out.println((i + 1) + ". " + TITULOS[i]);
            }
            System.out.println("0. Salir");
            System.out.print("Elija una opción: ");

            if (!scanner.hasNextInt()) {
                scanner.nextLine();
                System.out.println("Opción no válida");
                continue;
            }
            opcion = scanner.nextInt();
            scanner.nextLine();

            switch (opcion) {
                case 1 -> ejecutarFizzBuzz();
                case 2 -> ejecutarPalindromo(scanner);
                case 3 -> ejecutarInvertirCadena(scanner);
                case 4 -> ejecutarFactorial(scanner);
                case 5 -> ejecutarParImpar(scanner);
                case 6 -> ejecutarSumaArreglo();
                case 7 -> ejecutarContarVocales(scanner);
                case 8 -> ejecutarTemperatura(scanner);
                case 9 -> NumeroPrimo.runDemo(scanner);
                case 10 -> MaximoLista.runDemo(scanner);
                case 11 -> MinimoLista.runDemo(scanner);
                case 12 -> Promedio.runDemo(scanner);
                case 13 -> BuscarEnLista.runDemo(scanner);
                case 14 -> OrdenBurbuja.runDemo(scanner);
                case 15 -> Fibonacci.runDemo(scanner);
                case 16 -> Potencia.runDemo(scanner);
                case 17 -> MCD.runDemo(scanner);
                case 18 -> MCM.runDemo(scanner);
                case 19 -> ContarPalabras.runDemo(scanner);
                case 20 -> InvertirPalabras.runDemo(scanner);
                case 21 -> Anagrama.runDemo(scanner);
                case 22 -> LetraMasRepetida.runDemo(scanner);
                case 23 -> SinDuplicados.runDemo(scanner);
                case 24 -> SegundoMayor.runDemo(scanner);
                case 25 -> SumaDigitos.runDemo(scanner);
                case 26 -> Armstrong.runDemo(scanner);
                case 27 -> TablaMultiplicar.runDemo(scanner);
                case 28 -> PatronAsteriscos.runDemo(scanner);
                case 29 -> ValidarCorreo.runDemo(scanner);
                case 30 -> ContarConsonantes.runDemo(scanner);
                case 31 -> MayusculasMinusculas.runDemo(scanner);
                case 32 -> BinarioADecimal.runDemo(scanner);
                case 33 -> DecimalABinario.runDemo(scanner);
                case 34 -> InvertirNumero.runDemo(scanner);
                case 35 -> TwoSum.runDemo(scanner);
                case 0 -> System.out.println("¡Hasta luego!");
                default -> System.out.println("Opción no válida");
            }
        }
        scanner.close();
    }

    private static void ejecutarFizzBuzz() {
        System.out.println("\n=== FIZZBUZZ ===");
        for (int i = 1; i <= 100; i++) {
            if (i % 3 == 0 && i % 5 == 0) System.out.println("FizzBuzz");
            else if (i % 3 == 0) System.out.println("Fizz");
            else if (i % 5 == 0) System.out.println("Buzz");
            else System.out.println(i);
        }
    }

    private static void ejecutarPalindromo(Scanner scanner) {
        System.out.println("\n=== VERIFICADOR DE PALÍNDROMOS ===");
        System.out.print("Escriba una palabra o frase: ");
        String texto = scanner.nextLine();
        System.out.println(Palindromo.esPalindromo(texto)
                ? "\"" + texto + "\" es palíndromo"
                : "\"" + texto + "\" no es palíndromo");
    }

    private static void ejecutarInvertirCadena(Scanner scanner) {
        System.out.println("\n=== INVERSIÓN DE CADENAS ===");
        System.out.print("Escriba una cadena: ");
        String texto = scanner.nextLine();
        String invertida = "";
        for (int i = texto.length() - 1; i >= 0; i--) invertida += texto.charAt(i);
        System.out.println("Original: " + texto);
        System.out.println("Invertida: " + invertida);
    }

    private static void ejecutarFactorial(Scanner scanner) {
        System.out.println("\n=== CALCULADORA DE FACTORIAL ===");
        System.out.print("Ingrese un número: ");
        int n = scanner.nextInt();
        scanner.nextLine();
        long factorial = 1;
        for (int i = 1; i <= n; i++) factorial *= i;
        System.out.println("Factorial de " + n + " es: " + factorial);
    }

    private static void ejecutarParImpar(Scanner scanner) {
        System.out.println("\n=== PAR O IMPAR ===");
        System.out.print("Ingrese un número: ");
        int numero = scanner.nextInt();
        scanner.nextLine();
        System.out.println(numero % 2 == 0 ? numero + " es par" : numero + " es impar");
    }

    private static void ejecutarSumaArreglo() {
        System.out.println("\n=== SUMA DE ARREGLO ===");
        int[] numeros = {1, 2, 3, 4, 5};
        System.out.print("Arreglo: ");
        for (int num : numeros) System.out.print(num + " ");
        System.out.println("\nSuma: " + SumaArreglo.sumar(numeros));
    }

    private static void ejecutarContarVocales(Scanner scanner) {
        System.out.println("\n=== CONTAR VOCALES ===");
        System.out.print("Escriba una cadena: ");
        String texto = scanner.nextLine();
        String vocales = "aeiouAEIOU";
        int contador = 0;
        for (int i = 0; i < texto.length(); i++) {
            if (vocales.indexOf(texto.charAt(i)) != -1) contador++;
        }
        System.out.println("La cadena tiene " + contador + " vocal(es)");
    }

    private static void ejecutarTemperatura(Scanner scanner) {
        System.out.println("\n=== CONVERTIDOR DE TEMPERATURA ===");
        System.out.println("1. Celsius a Fahrenheit");
        System.out.println("2. Fahrenheit a Celsius");
        System.out.print("Elija: ");
        int subOpcion = scanner.nextInt();
        if (subOpcion == 1) {
            System.out.print("Ingrese Celsius: ");
            double c = scanner.nextDouble();
            double f = (c * 9 / 5) + 32;
            System.out.println(c + "°C = " + f + "°F");
        } else if (subOpcion == 2) {
            System.out.print("Ingrese Fahrenheit: ");
            double f = scanner.nextDouble();
            double c = (f - 32) * 5 / 9;
            System.out.println(f + "°F = " + c + "°C");
        }
        scanner.nextLine();
    }
}
