const messageDelay = () => Math.floor(Math.random() * 5000);

  const getMarsTemperature = () => {
    const maxTemperature = 58;
    return Math.floor(Math.random() * maxTemperature);
  };
  
  const sendMarsTemperature = () => setTimeout(() => console.log(`Mars temperature is: ${getMarsTemperature()} degrees Celsius`), messageDelay());
  // crie a função sendMarsTemperature abaixo
  
  sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo