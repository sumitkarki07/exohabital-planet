function toggleInfo() {
    const shortInfo1 = document.querySelector('.short-info1');
    const fullInfo1 = document.querySelector('.full-info1');
    const toggleButton = document.querySelector('.toggle-info-button');
  
    if (fullInfo1.style.display === 'none' || fullInfo1.style.display === '') {
      fullInfo1.style.display = 'block';
      shortInfo1.style.display = 'none';
      toggleButton.textContent = 'Read Less';
    } else {
      fullInfo1.style.display = 'none';
      shortInfo1.style.display = 'block';
      toggleButton.textContent = 'Read More';
    }
  }

  
