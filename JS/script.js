const display = document.querySelector('#display');
      const buttons = document.querySelectorAll('.btn');

  buttons.forEach(function(button) {
    button.addEventListener('click', function() 
    {
      if (button.id === 'clear') {
        display.textContent = '';
        return;
      }
      if (button.id === 'equals') {
        display.textContent = eval(display.textContent);
        return;
      }
      if (button.id === 'multiply') {
        display.textContent += '*';
        return;
      }
      display.textContent += button.textContent;
    });
  });