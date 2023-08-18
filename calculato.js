document.addEventListener('DOMContentLoaded', () => {
    const calculateButton = document.getElementById('calculateButton');
    const resultElement = document.getElementById('result');
  
    calculateButton.addEventListener('click', () => {
      const person1 = document.getElementById('person1').value;
      const person2 = document.getElementById('person2').value;
  
      // Simulando a interação com a API fictícia
      const compatibility = Math.floor(Math.random() * 101); // Número aleatório de 0 a 100
  
      resultElement.textContent = `Compatibilidade entre ${person1} e ${person2}: ${compatibility}%`;
    });
  });
