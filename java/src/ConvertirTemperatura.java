public class ConvertirTemperatura {
    public static void main(String[] args) {
        System.out.println(celsiusAFahrenheit(25)); // 77.0
        System.out.println(fahrenheitACelsius(77)); // 25.0
    }

    public static double celsiusAFahrenheit(double celsius) {
        return (celsius * 9/5) + 32;
    }

    public static double fahrenheitACelsius(double fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }
}