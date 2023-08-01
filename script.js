const convertBtn = document.getElementById("convertBtn");
const inputTemp = document.getElementById("inputTemp");
const inputUnit = document.getElementById("inputUnit");
const outputTemp = document.getElementById("outputTemp");

convertBtn.addEventListener("click", () => {
  const temperature = parseFloat(inputTemp.value);
  const unit = inputUnit.value;
  let convertedTemperatures = "";

  if (unit === "celsius") {
    const fahrenheit = (temperature * 9 / 5) + 32;
    const kelvin = temperature + 273.15;
    convertedTemperatures = `${temperature} °C is equal to ${fahrenheit.toFixed(2)} °F and ${kelvin.toFixed(2)} K.`;
  } else if (unit === "fahrenheit") {
    const celsius = (temperature - 32) * 5 / 9;
    const kelvin = (temperature - 32) * 5 / 9 + 273.15;
    convertedTemperatures = `${temperature} °F is equal to ${celsius.toFixed(2)} °C and ${kelvin.toFixed(2)} K.`;
  } else if (unit === "kelvin") {
    const celsius = temperature - 273.15;
    const fahrenheit = (temperature - 273.15) * 9 / 5 + 32;
    convertedTemperatures = `${temperature} K is equal to ${celsius.toFixed(2)} °C and ${fahrenheit.toFixed(2)} °F.`;
  } else {
    convertedTemperatures = "Invalid unit selected.";
  }

  outputTemp.textContent = convertedTemperatures;
});
