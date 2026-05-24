/**
 * 35 practice exercises — bilingual (es/en).
 * All implemented: live demo + sample code in Java, JavaScript, Python.
 */
const CATEGORY_I18N = {
  logica: "cat_logic",
  cadenas: "cat_strings",
  arreglos: "cat_arrays",
  matematicas: "cat_math"
};

const L = {
  nums: { es: "Números (separados por coma)", en: "Numbers (comma-separated)" },
  n: { es: "Número n", en: "Number n" },
  texto: { es: "Texto", en: "Text" },
  limite: { es: "Hasta el número", en: "Up to number" },
  valor: { es: "Valor", en: "Value" },
  modo: { es: "Conversión", en: "Conversion" },
  base: { es: "Base", en: "Base" },
  exp: { es: "Exponente", en: "Exponent" },
  a: { es: "a", en: "a" },
  b: { es: "b", en: "b" },
  obj: { es: "Objetivo", en: "Target" },
  filas: { es: "Filas", en: "Rows" },
  correo: { es: "Correo", en: "Email" },
  bin: { es: "Binario", en: "Binary" },
  palabras: { es: "Frase", en: "Sentence" },
  strA: { es: "Texto A", en: "Text A" },
  strB: { es: "Texto B", en: "Text B" },
  mayus: { es: "Modo", en: "Mode" }
};

function inp(id, type, label, value, extra = {}) {
  return { id, type, label, value, ...extra };
}

function build(cfg) {
  const codes = EXERCISE_CODES[cfg.id] || {};
  return {
    id: cfg.id,
    title: { es: cfg.titleEs, en: cfg.titleEn },
    category: cfg.category,
    difficulty: cfg.difficulty,
    implemented: true,
    description: { es: cfg.descEs, en: cfg.descEn },
    problem: { es: cfg.probEs, en: cfg.probEn },
    demoType: cfg.demoType,
    demoInputs: cfg.demoInputs || [],
    demoAutoRun: !!cfg.demoAutoRun,
    javaClass: codes.javaClass,
    javaCode: codes.javaCode,
    jsCode: codes.jsCode,
    pythonCode: codes.pythonCode
  };
}

const EXERCISES = [
  build({
    id: 1, titleEs: "FizzBuzz", titleEn: "FizzBuzz", category: "logica", difficulty: "facil",
    descEs: "Recorre números del 1 al 100 y muestra Fizz, Buzz o FizzBuzz según divisibilidad.",
    descEn: "Loop from 1 to 100 and print Fizz, Buzz, or FizzBuzz based on divisibility.",
    probEs: "Si el número es múltiplo de 3 y de 5 → FizzBuzz; solo de 3 → Fizz; solo de 5 → Buzz.",
    probEn: "If divisible by 3 and 5 → FizzBuzz; by 3 only → Fizz; by 5 only → Buzz.",
    demoType: "fizzbuzz",
    demoInputs: [inp("limit", "number", L.limite, 30, { min: 1, max: 100 })],
    demoAutoRun: true
  }),
  build({
    id: 2, titleEs: "Verificador de palíndromos", titleEn: "Palindrome checker", category: "cadenas", difficulty: "facil",
    descEs: "Comprueba si un texto se lee igual de izquierda a derecha y al revés.",
    descEn: "Check whether text reads the same forwards and backwards.",
    probEs: "Compara el primer carácter con el último y avanza hacia el centro.",
    probEn: "Compare the first and last characters and move toward the center.",
    demoType: "palindromo", demoInputs: [inp("texto", "text", L.texto, "anita lava la tina")]
  }),
  build({
    id: 3, titleEs: "Inversión de texto", titleEn: "Reverse a string", category: "cadenas", difficulty: "facil",
    descEs: "Construye una nueva cadena con los caracteres en orden inverso.",
    descEn: "Build a new string with characters in reverse order.",
    probEs: "Recorre la cadena desde el final hacia el inicio.",
    probEn: "Walk the string from the last index to the first.",
    demoType: "invertir", demoInputs: [inp("texto", "text", L.texto, "Generation")]
  }),
  build({
    id: 4, titleEs: "Factorial", titleEn: "Factorial", category: "matematicas", difficulty: "facil",
    descEs: "Multiplica 1 × 2 × … × n para obtener n factorial.",
    descEn: "Multiply 1 × 2 × … × n to get n factorial.",
    probEs: "Por definición, 0! = 1. Usa un bucle acumulador.",
    probEn: "By definition, 0! = 1. Use a loop with an accumulator.",
    demoType: "factorial", demoInputs: [inp("n", "number", L.n, 5, { min: 0, max: 20 })]
  }),
  build({
    id: 5, titleEs: "Par o impar", titleEn: "Even or odd", category: "logica", difficulty: "facil",
    descEs: "Indica si un número entero es divisible por 2.",
    descEn: "Tell whether a whole number is divisible by 2.",
    probEs: "Si numero % 2 == 0 es par; si no, es impar.",
    probEn: "If number % 2 == 0 it is even; otherwise it is odd.",
    demoType: "parimpar", demoInputs: [inp("n", "number", L.n, 7)]
  }),
  build({
    id: 6, titleEs: "Suma de una lista", titleEn: "Sum of a list", category: "arreglos", difficulty: "facil",
    descEs: "Suma todos los números de una lista o arreglo.",
    descEn: "Add up every number in a list or array.",
    probEs: "Recorre cada elemento y ve sumando en una variable.",
    probEn: "Visit each element and add it to a running total.",
    demoType: "sumaarreglo", demoInputs: [inp("nums", "text", L.nums, "1, 2, 3, 4, 5")]
  }),
  build({
    id: 7, titleEs: "Contar vocales", titleEn: "Count vowels", category: "cadenas", difficulty: "facil",
    descEs: "Cuenta cuántas letras a, e, i, o, u hay en un texto.",
    descEn: "Count how many a, e, i, o, u letters appear in text.",
    probEs: "Revisa carácter por carácter si es vocal.",
    probEn: "Check each character to see if it is a vowel.",
    demoType: "vocales", demoInputs: [inp("texto", "text", L.texto, "Hola Mundo")]
  }),
  build({
    id: 8, titleEs: "Convertidor de temperatura", titleEn: "Temperature converter", category: "matematicas", difficulty: "facil",
    descEs: "Convierte grados entre Celsius y Fahrenheit.",
    descEn: "Convert degrees between Celsius and Fahrenheit.",
    probEs: "°F = (°C × 9/5) + 32  ·  °C = (°F − 32) × 5/9",
    probEn: "°F = (°C × 9/5) + 32  ·  °C = (°F − 32) × 5/9",
    demoType: "temperatura",
    demoInputs: [
      inp("valor", "number", L.valor, 25, { step: 0.1 }),
      inp("modo", "select", L.modo, "c2f", {
        options: [
          { value: "c2f", es: "Celsius → Fahrenheit", en: "Celsius → Fahrenheit" },
          { value: "f2c", es: "Fahrenheit → Celsius", en: "Fahrenheit → Celsius" }
        ]
      })
    ]
  }),
  build({
    id: 9, titleEs: "Número primo", titleEn: "Prime number", category: "matematicas", difficulty: "medio",
    descEs: "Comprueba si un entero mayor que 1 solo se divide por 1 y por sí mismo.",
    descEn: "Check if an integer greater than 1 has no divisors other than 1 and itself.",
    probEs: "Prueba divisores desde 2 hasta la raíz cuadrada.",
    probEn: "Try divisors from 2 up to the square root.",
    demoType: "primo", demoInputs: [inp("n", "number", L.n, 17, { min: 0 })]
  }),
  build({
    id: 10, titleEs: "Máximo en lista", titleEn: "Maximum in list", category: "arreglos", difficulty: "facil",
    descEs: "Encuentra el valor más grande.", descEn: "Find the largest value.",
    probEs: "Guarda el mayor visto al recorrer la lista.", probEn: "Keep the largest value seen while looping.",
    demoType: "maximo", demoInputs: [inp("nums", "text", L.nums, "3, 7, 2, 9, 1")]
  }),
  build({
    id: 11, titleEs: "Mínimo en lista", titleEn: "Minimum in list", category: "arreglos", difficulty: "facil",
    descEs: "Encuentra el valor más pequeño.", descEn: "Find the smallest value.",
    probEs: "Igual que el máximo, pero comparando hacia abajo.", probEn: "Same as maximum, but comparing downward.",
    demoType: "minimo", demoInputs: [inp("nums", "text", L.nums, "3, 7, 2, 9, 1")]
  }),
  build({
    id: 12, titleEs: "Promedio", titleEn: "Average", category: "arreglos", difficulty: "facil",
    descEs: "Calcula la media de varios números.", descEn: "Calculate the mean of several numbers.",
    probEs: "Suma todos y divide entre la cantidad.", probEn: "Add all values and divide by the count.",
    demoType: "promedio", demoInputs: [inp("nums", "text", L.nums, "2, 4, 6, 8")]
  }),
  build({
    id: 13, titleEs: "Buscar en lista", titleEn: "Search in list", category: "arreglos", difficulty: "facil",
    descEs: "Localiza la posición de un valor.", descEn: "Find the position of a value.",
    probEs: "Recorre hasta encontrar coincidencia o terminar.", probEn: "Loop until you find a match or finish.",
    demoType: "buscar",
    demoInputs: [inp("nums", "text", L.nums, "10, 20, 30, 40"), inp("objetivo", "number", L.obj, 20)]
  }),
  build({
    id: 14, titleEs: "Ordenar (burbuja)", titleEn: "Sort (bubble)", category: "arreglos", difficulty: "medio",
    descEs: "Ordena números de menor a mayor.", descEn: "Sort numbers from smallest to largest.",
    probEs: "Intercambia pares vecinos mal ordenados.", probEn: "Swap adjacent pairs that are out of order.",
    demoType: "burbuja", demoInputs: [inp("nums", "text", L.nums, "5, 1, 4, 2, 8")]
  }),
  build({
    id: 15, titleEs: "Fibonacci", titleEn: "Fibonacci", category: "matematicas", difficulty: "medio",
    descEs: "Genera la serie 0, 1, 1, 2, 3, 5…", descEn: "Generate the series 0, 1, 1, 2, 3, 5…",
    probEs: "Cada término es la suma de los dos anteriores.", probEn: "Each term is the sum of the two before it.",
    demoType: "fibonacci", demoInputs: [inp("n", "number", L.n, 10, { min: 1, max: 30 })]
  }),
  build({
    id: 16, titleEs: "Potencia", titleEn: "Power", category: "matematicas", difficulty: "medio",
    descEs: "Calcula base elevada a exponente.", descEn: "Calculate base raised to exponent.",
    probEs: "Multiplica la base tantas veces indique el exponente.", probEn: "Multiply the base as many times as the exponent says.",
    demoType: "potencia",
    demoInputs: [inp("base", "number", L.base, 2), inp("exponente", "number", L.exp, 8, { min: 0 })]
  }),
  build({
    id: 17, titleEs: "MCD", titleEn: "GCD", category: "matematicas", difficulty: "medio",
    descEs: "Máximo común divisor de dos números.", descEn: "Greatest common divisor of two numbers.",
    probEs: "Algoritmo de Euclides con módulo.", probEn: "Euclid's algorithm using modulo.",
    demoType: "mcd", demoInputs: [inp("a", "number", L.a, 48), inp("b", "number", L.b, 18)]
  }),
  build({
    id: 18, titleEs: "MCM", titleEn: "LCM", category: "matematicas", difficulty: "medio",
    descEs: "Mínimo común múltiplo.", descEn: "Least common multiple.",
    probEs: "Usa la relación con el MCD.", probEn: "Use the relationship with the GCD.",
    demoType: "mcm", demoInputs: [inp("a", "number", L.a, 12), inp("b", "number", L.b, 18)]
  }),
  build({
    id: 19, titleEs: "Contar palabras", titleEn: "Count words", category: "cadenas", difficulty: "facil",
    descEs: "Cuenta cuántas palabras hay en una frase.", descEn: "Count how many words are in a sentence.",
    probEs: "Separa por espacios y cuenta.", probEn: "Split on spaces and count.",
    demoType: "contarpalabras", demoInputs: [inp("texto", "text", L.palabras, "Hola mundo desde Colombia")]
  }),
  build({
    id: 20, titleEs: "Invertir palabras", titleEn: "Reverse words", category: "cadenas", difficulty: "medio",
    descEs: "Invierte el orden de las palabras.", descEn: "Reverse the order of words.",
    probEs: "Divide, invierte la lista y vuelve a unir.", probEn: "Split, reverse the list, and join again.",
    demoType: "invertirpalabras", demoInputs: [inp("texto", "text", L.palabras, "uno dos tres cuatro")]
  }),
  build({
    id: 21, titleEs: "Anagrama", titleEn: "Anagram", category: "cadenas", difficulty: "medio",
    descEs: "¿Tienen las mismas letras en distinto orden?", descEn: "Do two strings use the same letters in different order?",
    probEs: "Ordena letras o cuenta frecuencias.", probEn: "Sort letters or count frequencies.",
    demoType: "anagrama",
    demoInputs: [inp("a", "text", L.strA, "roma"), inp("b", "text", L.strB, "amor")]
  }),
  build({
    id: 22, titleEs: "Letra más repetida", titleEn: "Most frequent letter", category: "cadenas", difficulty: "medio",
    descEs: "Encuentra el carácter que más aparece.", descEn: "Find the character that appears most often.",
    probEs: "Lleva un contador por cada letra.", probEn: "Keep a count for each letter.",
    demoType: "letrarepetida", demoInputs: [inp("texto", "text", L.texto, "programacion")]
  }),
  build({
    id: 23, titleEs: "Sin duplicados", titleEn: "Remove duplicates", category: "arreglos", difficulty: "medio",
    descEs: "Lista sin valores repetidos.", descEn: "List without repeated values.",
    probEs: "Usa estructura que no permita repetir.", probEn: "Use a structure that prevents duplicates.",
    demoType: "sinduplicados", demoInputs: [inp("nums", "text", L.nums, "1, 2, 2, 3, 3, 4")]
  }),
  build({
    id: 24, titleEs: "Segundo mayor", titleEn: "Second largest", category: "arreglos", difficulty: "medio",
    descEs: "El segundo valor más grande.", descEn: "The second largest value.",
    probEs: "Mantén el mayor y el segundo mayor.", probEn: "Track largest and second largest.",
    demoType: "segundomayor", demoInputs: [inp("nums", "text", L.nums, "10, 5, 8, 20, 3")]
  }),
  build({
    id: 25, titleEs: "Suma de dígitos", titleEn: "Sum of digits", category: "matematicas", difficulty: "facil",
    descEs: "Suma los dígitos de un número.", descEn: "Add the digits of a number.",
    probEs: "Extrae el último dígito con % 10.", probEn: "Pull the last digit with % 10.",
    demoType: "sumadigitos", demoInputs: [inp("n", "number", L.n, 12345)]
  }),
  build({
    id: 26, titleEs: "Número Armstrong", titleEn: "Armstrong number", category: "matematicas", difficulty: "medio",
    descEs: "Igual a la suma de sus dígitos elevados a la cantidad de dígitos.", descEn: "Equals the sum of its digits raised to the power of digit count.",
    probEs: "Separa dígitos y acumula potencias.", probEn: "Split digits and add powers.",
    demoType: "armstrong", demoInputs: [inp("n", "number", L.n, 153)]
  }),
  build({
    id: 27, titleEs: "Tabla de multiplicar", titleEn: "Multiplication table", category: "matematicas", difficulty: "facil",
    descEs: "Muestra las tablas del 1 al 10.", descEn: "Show times tables from 1 to 10.",
    probEs: "Bucle anidado filas × columnas.", probEn: "Nested loop for rows × columns.",
    demoType: "tablamult", demoInputs: [inp("n", "number", L.n, 7, { min: 1, max: 12 })]
  }),
  build({
    id: 28, titleEs: "Patrón de asteriscos", titleEn: "Star pattern", category: "logica", difficulty: "facil",
    descEs: "Dibuja un triángulo con *.", descEn: "Draw a triangle with *.",
    probEs: "Más asteriscos en cada fila.", probEn: "More asterisks on each row.",
    demoType: "asteriscos", demoInputs: [inp("filas", "number", L.filas, 5, { min: 1, max: 15 })]
  }),
  build({
    id: 29, titleEs: "Validar correo simple", titleEn: "Simple email check", category: "cadenas", difficulty: "medio",
    descEs: "Comprueba que tenga @ y un punto.", descEn: "Check that it contains @ and a dot.",
    probEs: "Busca posición de símbolos.", probEn: "Find symbol positions.",
    demoType: "email", demoInputs: [inp("correo", "text", L.correo, "usuario@ejemplo.com")]
  }),
  build({
    id: 30, titleEs: "Contar consonantes", titleEn: "Count consonants", category: "cadenas", difficulty: "facil",
    descEs: "Cuenta letras que no son vocales.", descEn: "Count letters that are not vowels.",
    probEs: "Complemento de contar vocales.", probEn: "Complement of counting vowels.",
    demoType: "consonantes", demoInputs: [inp("texto", "text", L.texto, "Hola Mundo")]
  }),
  build({
    id: 31, titleEs: "Mayúsculas y minúsculas", titleEn: "Upper and lower case", category: "cadenas", difficulty: "facil",
    descEs: "Cambia mayúsculas/minúsculas.", descEn: "Change upper/lower case.",
    probEs: "Usa métodos toUpperCase / toLowerCase.", probEn: "Use toUpperCase / toLowerCase methods.",
    demoType: "mayusculas",
    demoInputs: [
      inp("texto", "text", L.texto, "Generation Colombia"),
      inp("modo", "select", L.mayus, "upper", {
        options: [
          { value: "upper", es: "MAYÚSCULAS", en: "UPPERCASE" },
          { value: "lower", es: "minúsculas", en: "lowercase" }
        ]
      })
    ]
  }),
  build({
    id: 32, titleEs: "Binario a decimal", titleEn: "Binary to decimal", category: "matematicas", difficulty: "medio",
    descEs: "Convierte texto binario a número.", descEn: "Convert binary text to a number.",
    probEs: "Suma potencias de 2 por dígito.", probEn: "Add powers of 2 per digit.",
    demoType: "bin2dec", demoInputs: [inp("binario", "text", L.bin, "1010")]
  }),
  build({
    id: 33, titleEs: "Decimal a binario", titleEn: "Decimal to binary", category: "matematicas", difficulty: "medio",
    descEs: "Convierte entero a binario.", descEn: "Convert integer to binary.",
    probEs: "Divide repetidamente entre 2.", probEn: "Repeatedly divide by 2.",
    demoType: "dec2bin", demoInputs: [inp("n", "number", L.n, 10, { min: 0 })]
  }),
  build({
    id: 34, titleEs: "Invertir número", titleEn: "Reverse integer", category: "matematicas", difficulty: "medio",
    descEs: "Invierte los dígitos (123 → 321).", descEn: "Reverse digits (123 → 321).",
    probEs: "Módulo y acumulador.", probEn: "Modulo and accumulator.",
    demoType: "invertirnumero", demoInputs: [inp("n", "number", L.n, 12345)]
  }),
  build({
    id: 35, titleEs: "Two Sum", titleEn: "Two Sum", category: "arreglos", difficulty: "medio",
    descEs: "Dos posiciones cuya suma sea un objetivo.", descEn: "Two positions whose values add to a target.",
    probEs: "Guarda valores vistos y su índice.", probEn: "Store seen values and their index.",
    demoType: "twosum",
    demoInputs: [inp("nums", "text", L.nums, "2, 7, 11, 15"), inp("objetivo", "number", L.obj, 9)]
  })
];

const DIFFICULTIES = {
  facil: { key: "diff_easy", class: "success" },
  medio: { key: "diff_medium", class: "warning" },
  dificil: { key: "diff_hard", class: "danger" }
};
