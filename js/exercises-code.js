/** Sample solutions — Java, JavaScript, Python (keyed by exercise id) */
const EXERCISE_CODES = {
  1: {
    javaClass: "FizzBuzz.java",
    javaCode: `for (int i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) System.out.println("FizzBuzz");
  else if (i % 3 == 0) System.out.println("Fizz");
  else if (i % 5 == 0) System.out.println("Buzz");
  else System.out.println(i);
}`,
    jsCode: `for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}`,
    pythonCode: `for i in range(1, 101):
    if i % 3 == 0 and i % 5 == 0: print("FizzBuzz")
    elif i % 3 == 0: print("Fizz")
    elif i % 5 == 0: print("Buzz")
    else: print(i)`
  },
  2: {
    javaClass: "Palindromo.java",
    javaCode: `public static boolean esPalindromo(String texto) {
  String limpio = texto.toLowerCase().replaceAll("\\\\s", "");
  return limpio.equals(new StringBuilder(limpio).reverse().toString());
}`,
    jsCode: `function esPalindromo(texto) {
  const limpio = texto.toLowerCase().replace(/\\s/g, "");
  return limpio === [...limpio].reverse().join("");
}`,
    pythonCode: `def es_palindromo(texto):
    limpio = texto.lower().replace(" ", "")
    return limpio == limpio[::-1]`
  },
  3: {
    javaClass: "InvertirCadena.java",
    javaCode: `public static String invertir(String texto) {
  return new StringBuilder(texto).reverse().toString();
}`,
    jsCode: `function invertir(texto) {
  return [...texto].reverse().join("");
}`,
    pythonCode: `def invertir(texto):
    return texto[::-1]`
  },
  4: {
    javaClass: "Factorial.java",
    javaCode: `public static long factorial(int n) {
  long r = 1;
  for (int i = 1; i <= n; i++) r *= i;
  return r;
}`,
    jsCode: `function factorial(n) {
  let r = 1;
  for (let i = 1; i <= n; i++) r *= i;
  return r;
}`,
    pythonCode: `def factorial(n):
    r = 1
    for i in range(1, n + 1): r *= i
    return r`
  },
  5: {
    javaClass: "ParImpar.java",
    javaCode: `public static String parImpar(int n) {
  return (n % 2 == 0) ? "par" : "impar";
}`,
    jsCode: `const parImpar = n => (n % 2 === 0 ? "par" : "impar");`,
    pythonCode: `def par_impar(n):
    return "par" if n % 2 == 0 else "impar"`
  },
  6: {
    javaClass: "SumaArreglo.java",
    javaCode: `int suma = 0;
for (int num : arreglo) suma += num;`,
    jsCode: `const suma = arreglo.reduce((a, b) => a + b, 0);`,
    pythonCode: `suma = sum(arreglo)`
  },
  7: {
    javaClass: "ContarVocales.java",
    javaCode: `String vocales = "aeiouAEIOU";
int c = 0;
for (char ch : texto.toCharArray())
  if (vocales.indexOf(ch) >= 0) c++;`,
    jsCode: `let c = 0;
for (const ch of texto) if ("aeiouAEIOU".includes(ch)) c++;`,
    pythonCode: `c = sum(1 for ch in texto if ch.lower() in "aeiou")`
  },
  8: {
    javaClass: "ConvertirTemperatura.java",
    javaCode: `double aFahrenheit(double c) { return (c * 9.0 / 5.0) + 32; }
double aCelsius(double f) { return (f - 32) * 5.0 / 9.0; }`,
    jsCode: `const aF = c => (c * 9) / 5 + 32;
const aC = f => ((f - 32) * 5) / 9;`,
    pythonCode: `def a_fahrenheit(c): return c * 9/5 + 32
def a_celsius(f): return (f - 32) * 5/9`
  },
  9: {
    javaClass: "NumeroPrimo.java",
    javaCode: `public static boolean esPrimo(int n) {
  if (n < 2) return false;
  for (int i = 2; i <= Math.sqrt(n); i++)
    if (n % i == 0) return false;
  return true;
}`,
    jsCode: `function esPrimo(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
  return true;
}`,
    pythonCode: `def es_primo(n):
    if n < 2: return False
    return all(n % i != 0 for i in range(2, int(n**0.5)+1))`
  },
  10: {
    javaClass: "MaximoLista.java",
    javaCode: `int max = arreglo[0];
for (int x : arreglo) if (x > max) max = x;`,
    jsCode: `const max = Math.max(...arreglo);`,
    pythonCode: `maximo = max(arreglo)`
  },
  11: {
    javaClass: "MinimoLista.java",
    javaCode: `int min = arreglo[0];
for (int x : arreglo) if (x < min) min = x;`,
    jsCode: `const min = Math.min(...arreglo);`,
    pythonCode: `minimo = min(arreglo)`
  },
  12: {
    javaClass: "Promedio.java",
    javaCode: `double suma = 0;
for (int x : arreglo) suma += x;
double promedio = suma / arreglo.length;`,
    jsCode: `const promedio = arreglo.reduce((a,b)=>a+b,0) / arreglo.length;`,
    pythonCode: `promedio = sum(arreglo) / len(arreglo)`
  },
  13: {
    javaClass: "BuscarEnLista.java",
    javaCode: `for (int i = 0; i < arreglo.length; i++)
  if (arreglo[i] == objetivo) return i;
return -1;`,
    jsCode: `const idx = arreglo.indexOf(objetivo);`,
    pythonCode: `def buscar(arr, obj):
    try: return arr.index(obj)
    except ValueError: return -1`
  },
  14: {
    javaClass: "OrdenBurbuja.java",
    javaCode: `for (int i = 0; i < n - 1; i++)
  for (int j = 0; j < n - 1 - i; j++)
    if (a[j] > a[j+1]) { int t = a[j]; a[j] = a[j+1]; a[j+1] = t; }`,
    jsCode: `for (let i = 0; i < a.length; i++)
  for (let j = 0; j < a.length - 1 - i; j++)
    if (a[j] > a[j+1]) [a[j], a[j+1]] = [a[j+1], a[j]];`,
    pythonCode: `for i in range(len(a)):
    for j in range(len(a)-1-i):
        if a[j] > a[j+1]: a[j], a[j+1] = a[j+1], a[j]`
  },
  15: {
    javaClass: "Fibonacci.java",
    javaCode: `int a = 0, b = 1;
for (int i = 0; i < n; i++) {
  System.out.print(a + " ");
  int t = a + b; a = b; b = t;
}`,
    jsCode: `let a = 0, b = 1;
for (let i = 0; i < n; i++) { console.log(a); [a,b] = [b, a+b]; }`,
    pythonCode: `a, b = 0, 1
for _ in range(n):
    print(a, end=" "); a, b = b, a+b`
  },
  16: {
    javaClass: "Potencia.java",
    javaCode: `public static long potencia(int base, int exp) {
  long r = 1;
  for (int i = 0; i < exp; i++) r *= base;
  return r;
}`,
    jsCode: `function potencia(base, exp) {
  return Math.pow(base, exp);
}`,
    pythonCode: `def potencia(base, exp):
    return base ** exp`
  },
  17: {
    javaClass: "MCD.java",
    javaCode: `while (b != 0) { int t = b; b = a % b; a = t; }
return a;`,
    jsCode: `while (b) [a, b] = [b, a % b];`,
    pythonCode: `while b: a, b = b, a % b`
  },
  18: {
    javaClass: "MCM.java",
    javaCode: `return (a * b) / mcd(a, b);`,
    jsCode: `const mcm = (a, b) => (a * b) / mcd(a, b);`,
    pythonCode: `def mcm(a, b): return (a * b) // mcd(a, b)`
  },
  19: {
    javaClass: "ContarPalabras.java",
    javaCode: `return texto.trim().split("\\\\s+").length;`,
    jsCode: `const n = texto.trim().split(/\\s+/).filter(Boolean).length;`,
    pythonCode: `n = len(texto.split())`
  },
  20: {
    javaClass: "InvertirPalabras.java",
    javaCode: `String[] p = texto.trim().split("\\\\s+");
Collections.reverse(Arrays.asList(p));`,
    jsCode: `const inv = texto.trim().split(/\\s+/).reverse().join(" ");`,
    pythonCode: `inv = " ".join(texto.split()[::-1])`
  },
  21: {
    javaClass: "Anagrama.java",
    javaCode: `char[] a = s1.replaceAll("\\\\s","").toLowerCase().toCharArray();
char[] b = s2.replaceAll("\\\\s","").toLowerCase().toCharArray();
Arrays.sort(a); Arrays.sort(b);
return Arrays.equals(a, b);`,
    jsCode: `const norm = s => s.replace(/\\s/g,"").toLowerCase().split("").sort().join("");
return norm(a) === norm(b);`,
    pythonCode: `def anagrama(a, b):
    return sorted(a.replace(" ","").lower()) == sorted(b.replace(" ","").lower())`
  },
  22: {
    javaClass: "LetraMasRepetida.java",
    javaCode: `Map<Character,Integer> f = new HashMap<>();
for (char c : texto.toCharArray()) f.merge(c, 1, Integer::sum);`,
    jsCode: `const f = {};
for (const c of texto) f[c] = (f[c]||0)+1;`,
    pythonCode: `from collections import Counter
Counter(texto.lower())`
  },
  23: {
    javaClass: "SinDuplicados.java",
    javaCode: `return Arrays.stream(arreglo).distinct().toArray();`,
    jsCode: `const unicos = [...new Set(arreglo)];`,
    pythonCode: `unicos = list(dict.fromkeys(arreglo))`
  },
  24: {
    javaClass: "SegundoMayor.java",
    javaCode: `int max1 = Integer.MIN_VALUE, max2 = Integer.MIN_VALUE;
for (int x : arreglo) {
  if (x > max1) { max2 = max1; max1 = x; }
  else if (x > max2 && x < max1) max2 = x;
}`,
    jsCode: `const sorted = [...new Set(arreglo)].sort((a,b)=>b-a);
const segundo = sorted[1];`,
    pythonCode: `sorted(set(arreglo), reverse=True)[1]`
  },
  25: {
    javaClass: "SumaDigitos.java",
    javaCode: `int suma = 0;
while (n > 0) { suma += n % 10; n /= 10; }`,
    jsCode: `let suma = 0;
while (n) { suma += n % 10; n = Math.floor(n/10); }`,
    pythonCode: `suma = sum(int(d) for d in str(abs(n)))`
  },
  26: {
    javaClass: "Armstrong.java",
    javaCode: `int p = String.valueOf(n).length(), suma = 0, x = n;
while (x > 0) { suma += Math.pow(x % 10, p); x /= 10; }
return suma == n;`,
    jsCode: `const p = String(n).length;
const suma = [...String(n)].reduce((s,d)=>s+Number(d)**p,0);`,
    pythonCode: `p = len(str(n))
suma = sum(int(d)**p for d in str(n))`
  },
  27: {
    javaClass: "TablaMultiplicar.java",
    javaCode: `for (int i = 1; i <= 10; i++)
  System.out.println(n + " x " + i + " = " + (n * i));`,
    jsCode: `for (let i = 1; i <= 10; i++) console.log(\`\${n} x \${i} = \${n*i}\`);`,
    pythonCode: `for i in range(1, 11):
    print(f"{n} x {i} = {n*i}")`
  },
  28: {
    javaClass: "PatronAsteriscos.java",
    javaCode: `for (int i = 1; i <= filas; i++) {
  for (int j = 0; j < i; j++) System.out.print("*");
  System.out.println();
}`,
    jsCode: `for (let i = 1; i <= filas; i++) console.log("*".repeat(i));`,
    pythonCode: `for i in range(1, filas+1):
    print("*" * i)`
  },
  29: {
    javaClass: "ValidarCorreo.java",
    javaCode: `return correo.contains("@") && correo.indexOf('.') > correo.indexOf('@') + 1;`,
    jsCode: `const ok = correo.includes("@") && correo.lastIndexOf(".") > correo.indexOf("@");`,
    pythonCode: `ok = "@" in correo and "." in correo.split("@")[-1]`
  },
  30: {
    javaClass: "ContarConsonantes.java",
    javaCode: `String vocales = "aeiouAEIOU";
int c = 0;
for (char ch : texto.toCharArray())
  if (Character.isLetter(ch) && vocales.indexOf(ch) < 0) c++;`,
    jsCode: `let c = 0;
for (const ch of texto) if (/[a-z]/i.test(ch) && !"aeiou".includes(ch.toLowerCase())) c++;`,
    pythonCode: `c = sum(1 for ch in texto if ch.isalpha() and ch.lower() not in "aeiou")`
  },
  31: {
    javaClass: "MayusculasMinusculas.java",
    javaCode: `return texto.toUpperCase(); // o toLowerCase()`,
    jsCode: `const upper = texto.toUpperCase();
const lower = texto.toLowerCase();`,
    pythonCode: `mayus = texto.upper()
minus = texto.lower()`
  },
  32: {
    javaClass: "BinarioADecimal.java",
    javaCode: `return Integer.parseInt(binario, 2);`,
    jsCode: `const decimal = parseInt(binario, 2);`,
    pythonCode: `decimal = int(binario, 2)`
  },
  33: {
    javaClass: "DecimalABinario.java",
    javaCode: `return Integer.toBinaryString(n);`,
    jsCode: `const bin = n.toString(2);`,
    pythonCode: `binario = bin(n)[2:]`
  },
  34: {
    javaClass: "InvertirNumero.java",
    javaCode: `int rev = 0;
while (n != 0) { rev = rev * 10 + n % 10; n /= 10; }`,
    jsCode: `const rev = parseInt(String(Math.abs(n)).split("").reverse().join(""), 10);`,
    pythonCode: `rev = int(str(abs(n))[::-1])`
  },
  35: {
    javaClass: "TwoSum.java",
    javaCode: `Map<Integer,Integer> visto = new HashMap<>();
for (int i = 0; i < nums.length; i++) {
  int need = objetivo - nums[i];
  if (visto.containsKey(need)) return new int[]{visto.get(need), i};
  visto.put(nums[i], i);
}`,
    jsCode: `const map = new Map();
for (let i = 0; i < nums.length; i++) {
  const need = objetivo - nums[i];
  if (map.has(need)) return [map.get(need), i];
  map.set(nums[i], i);
}`,
    pythonCode: `visto = {}
for i, x in enumerate(nums):
    if objetivo - x in visto: return [visto[objetivo-x], i]
    visto[x] = i`
  }
};
