function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }

  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }

  function celsiusToKelvin(celsius) {
    return celsius + 273.15;
  }

  function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
  }

  function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5/9 + 273.15;
  }

  function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
  }

  function convert() {
    var inputTemp = parseFloat(document.getElementById("inputTemp").value);
    var fromUnit = document.getElementById("selectFrom").value;
    var toUnit = document.getElementById("selectTo").value;
    var result;

    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
      result = celsiusToFahrenheit(inputTemp) + " °F";
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
      result = celsiusToKelvin(inputTemp) + " K";
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
      result = fahrenheitToCelsius(inputTemp) + " °C";
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
      result = fahrenheitToKelvin(inputTemp) + " K";
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
      result = kelvinToCelsius(inputTemp) + " °C";
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
      result = kelvinToFahrenheit(inputTemp) + " °F";
    } else {
      result = "Please select units to convert.";
    }

    document.getElementById("result").innerText = result;
  }
