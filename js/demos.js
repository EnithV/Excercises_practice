/** Browser demos (JavaScript) — same logic as Java/Python samples */
const Demos = {
  _parseNums(str) {
    const arr = String(str)
      .split(/[\s,;]+/)
      .filter(Boolean)
      .map(Number);
    if (!arr.length || arr.some((x) => Number.isNaN(x))) return { error: "numbers" };
    return { arr };
  },

  _int(n) {
    if (!Number.isInteger(n)) return { error: "integer" };
    return null;
  },

  fizzbuzz({ limit = 30 }) {
    const lim = Math.min(100, Math.max(1, Number(limit) || 30));
    const items = [];
    for (let i = 1; i <= lim; i++) {
      let label = String(i);
      if (i % 3 === 0 && i % 5 === 0) label = "FizzBuzz";
      else if (i % 3 === 0) label = "Fizz";
      else if (i % 5 === 0) label = "Buzz";
      items.push({ label });
    }
    const html = items
      .map((it) => {
        const cls =
          it.label === "FizzBuzz" ? "fizz-buzz" : it.label === "Fizz" ? "fizz" : it.label === "Buzz" ? "buzz" : "";
        return `<span class="fizz-item ${cls}">${it.label}</span>`;
      })
      .join("");
    return { html: `<div class="fizz-grid">${html}</div>` };
  },

  palindromo({ texto = "" }) {
    const limpio = texto.toLowerCase().replace(/\s/g, "");
    if (!limpio) return { error: "empty" };
    const ok = limpio === [...limpio].reverse().join("");
    return { ok, text: `"${texto}"`, success: ok };
  },

  invertir({ texto = "" }) {
    let inv = "";
    for (let i = texto.length - 1; i >= 0; i--) inv += texto[i];
    return { html: `<p class="mb-1"><strong>→</strong> ${inv || "(vacío)"}</p>` };
  },

  factorial({ n = 5 }) {
    const num = Number(n);
    if (Demos._int(num)) return Demos._int(num);
    if (num < 0) return { error: "integer" };
    let r = 1;
    for (let i = 1; i <= num; i++) r *= i;
    return { text: `${num}! = ${r}` };
  },

  parimpar({ n = 7 }) {
    const num = Number(n);
    if (Demos._int(num)) return { error: "integer" };
    return { text: `${num} → ${num % 2 === 0 ? "par / even" : "impar / odd"}` };
  },

  sumaarreglo({ nums = "1,2,3" }) {
    const p = Demos._parseNums(nums);
    if (p.error) return p;
    const suma = p.arr.reduce((a, b) => a + b, 0);
    return { text: `[${p.arr.join(", ")}] → suma = ${suma}` };
  },

  vocales({ texto = "Hola" }) {
    const vocales = "aeiouAEIOU";
    let c = 0;
    for (const ch of texto) if (vocales.includes(ch)) c++;
    return { text: `${c} vocales` };
  },

  temperatura({ valor = 25, modo = "c2f" }) {
    const v = parseFloat(valor);
    if (Number.isNaN(v)) return { error: "numeric" };
    if (modo === "c2f") return { text: `${v}°C = ${((v * 9) / 5 + 32).toFixed(2)}°F` };
    return { text: `${v}°F = ${(((v - 32) * 5) / 9).toFixed(2)}°C` };
  },

  primo({ n = 17 }) {
    const num = Number(n);
    if (num < 2 || !Number.isInteger(num)) return { text: `${num} → no es primo` };
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return { text: `${num} → no es primo (divisor ${i})` };
    }
    return { text: `${num} → es primo`, success: true };
  },

  maximo({ nums = "3,7,2,9" }) {
    const p = Demos._parseNums(nums);
    if (p.error) return p;
    return { text: `máximo = ${Math.max(...p.arr)}` };
  },

  minimo({ nums = "3,7,2,9" }) {
    const p = Demos._parseNums(nums);
    if (p.error) return p;
    return { text: `mínimo = ${Math.min(...p.arr)}` };
  },

  promedio({ nums = "2,4,6,8" }) {
    const p = Demos._parseNums(nums);
    if (p.error) return p;
    const avg = p.arr.reduce((a, b) => a + b, 0) / p.arr.length;
    return { text: `promedio = ${avg.toFixed(2)}` };
  },

  buscar({ nums = "10,20,30", objetivo = 20 }) {
    const p = Demos._parseNums(nums);
    if (p.error) return p;
    const idx = p.arr.indexOf(Number(objetivo));
    return { text: idx >= 0 ? `encontrado en índice ${idx}` : "no encontrado" };
  },

  burbuja({ nums = "5,1,4,2" }) {
    const p = Demos._parseNums(nums);
    if (p.error) return p;
    const a = [...p.arr];
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a.length - 1 - i; j++) {
        if (a[j] > a[j + 1]) [a[j], a[j + 1]] = [a[j + 1], a[j]];
      }
    }
    return { text: `[${a.join(", ")}]` };
  },

  fibonacci({ n = 10 }) {
    const num = Math.min(30, Math.max(1, Number(n) || 10));
    if (!Number.isInteger(num)) return { error: "integer" };
    const seq = [0, 1];
    while (seq.length < num) seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
    return { text: seq.slice(0, num).join(", ") };
  },

  potencia({ base = 2, exponente = 8 }) {
    const b = Number(base);
    const e = Number(exponente);
    if (!Number.isInteger(e) || e < 0) return { error: "integer" };
    return { text: `${b}^${e} = ${Math.pow(b, e)}` };
  },

  mcd({ a = 48, b = 18 }) {
    let x = Math.abs(Number(a));
    let y = Math.abs(Number(b));
    while (y) [x, y] = [y, x % y];
    return { text: `MCD(${a}, ${b}) = ${x}` };
  },

  mcm({ a = 12, b = 18 }) {
    let x = Math.abs(Number(a));
    let y = Math.abs(Number(b));
    const prod = x * y;
    while (y) [x, y] = [y, x % y];
    const mcmVal = x ? prod / x : 0;
    return { text: `MCM(${a}, ${b}) = ${mcmVal}` };
  },

  contarpalabras({ texto = "Hola mundo desde JS" }) {
    const words = texto.trim().split(/\s+/).filter(Boolean);
    return { text: `${words.length} palabra(s)` };
  },

  invertirpalabras({ texto = "uno dos tres" }) {
    const words = texto.trim().split(/\s+/).filter(Boolean);
    return { text: words.reverse().join(" ") };
  },

  anagrama({ a = "roma", b = "amor" }) {
    const norm = (s) => s.toLowerCase().replace(/\s/g, "").split("").sort().join("");
    const ok = norm(a) === norm(b) && norm(a).length > 0;
    return { text: ok ? "son anagramas" : "no son anagramas", success: ok };
  },

  letrarepetida({ texto = "programacion" }) {
    const freq = {};
    for (const ch of texto.toLowerCase()) {
      if (/[a-záéíóúñ]/.test(ch)) freq[ch] = (freq[ch] || 0) + 1;
    }
    let best = "";
    let max = 0;
    for (const [ch, c] of Object.entries(freq)) {
      if (c > max) {
        max = c;
        best = ch;
      }
    }
    return { text: best ? `'${best}' → ${max} veces` : "sin letras" };
  },

  sinduplicados({ nums = "1,2,2,3,3,4" }) {
    const p = Demos._parseNums(nums);
    if (p.error) return p;
    const unique = [...new Set(p.arr)];
    return { text: `[${unique.join(", ")}]` };
  },

  segundomayor({ nums = "10,5,8,20,3" }) {
    const p = Demos._parseNums(nums);
    if (p.error) return p;
    const sorted = [...new Set(p.arr)].sort((a, b) => b - a);
    if (sorted.length < 2) return { text: "se necesitan al menos 2 valores distintos" };
    return { text: `segundo mayor = ${sorted[1]}` };
  },

  sumadigitos({ n = 12345 }) {
    const num = Math.abs(Number(n));
    if (!Number.isInteger(Number(n))) return { error: "integer" };
    let sum = 0;
    let x = num;
    while (x) {
      sum += x % 10;
      x = Math.floor(x / 10);
    }
    return { text: `suma de dígitos de ${n} = ${sum}` };
  },

  armstrong({ n = 153 }) {
    const num = Number(n);
    if (!Number.isInteger(num) || num < 0) return { error: "integer" };
    const s = String(num);
    const pow = s.length;
    let sum = 0;
    for (const d of s) sum += Math.pow(Number(d), pow);
    const ok = sum === num;
    return { text: `${num} ${ok ? "es" : "no es"} Armstrong (${sum})`, success: ok };
  },

  tablamult({ n = 7 }) {
    const num = Math.min(12, Math.max(1, Number(n) || 7));
    const rows = [];
    for (let i = 1; i <= 10; i++) rows.push(`${num} × ${i} = ${num * i}`);
    return { html: `<pre class="mb-0 small">${rows.join("\n")}</pre>` };
  },

  asteriscos({ filas = 5 }) {
    const n = Math.min(15, Math.max(1, Number(filas) || 5));
    const lines = [];
    for (let i = 1; i <= n; i++) lines.push("*".repeat(i));
    return { html: `<pre class="mb-0">${lines.join("\n")}</pre>` };
  },

  email({ correo = "user@mail.com" }) {
    const at = correo.indexOf("@");
    const dot = correo.lastIndexOf(".");
    const ok = at > 0 && dot > at + 1 && dot < correo.length - 1;
    return { text: ok ? "formato válido (simple)" : "formato inválido", success: ok };
  },

  consonantes({ texto = "Hola Mundo" }) {
    const vocales = "aeiouAEIOU";
    let c = 0;
    for (const ch of texto) if (/[a-zA-ZáéíóúÁÉÍÓÚñÑ]/.test(ch) && !vocales.includes(ch)) c++;
    return { text: `${c} consonantes` };
  },

  mayusculas({ texto = "Hola", modo = "upper" }) {
    if (modo === "upper") return { text: texto.toUpperCase() };
    return { text: texto.toLowerCase() };
  },

  bin2dec({ binario = "1010" }) {
    if (!/^[01]+$/.test(binario.trim())) return { text: "solo 0 y 1" };
    const val = parseInt(binario.trim(), 2);
    return { text: `${binario}₂ = ${val}₁₀` };
  },

  dec2bin({ n = 10 }) {
    const num = Number(n);
    if (!Number.isInteger(num) || num < 0) return { error: "integer" };
    return { text: `${num}₁₀ = ${num.toString(2)}₂` };
  },

  invertirnumero({ n = 12345 }) {
    const num = Number(n);
    if (!Number.isInteger(num)) return { error: "integer" };
    const sign = num < 0 ? "-" : "";
    const rev = String(Math.abs(num)).split("").reverse().join("");
    return { text: `${num} → ${sign}${rev}` };
  },

  twosum({ nums = "2,7,11,15", objetivo = 9 }) {
    const p = Demos._parseNums(nums);
    if (p.error) return p;
    const target = Number(objetivo);
    const seen = new Map();
    for (let i = 0; i < p.arr.length; i++) {
      const need = target - p.arr[i];
      if (seen.has(need)) return { text: `índices ${seen.get(need)} y ${i} (${need} + ${p.arr[i]} = ${target})`, success: true };
      seen.set(p.arr[i], i);
    }
    return { text: "no hay par que sume el objetivo" };
  }
};
