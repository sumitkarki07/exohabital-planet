function toggleInfo() {
    const shortInfo = document.querySelector('.short-info');
    const fullInfo = document.querySelector('.full-info');
    const toggleButton = document.querySelector('.toggle-info-button');
  
    if (fullInfo.style.display === 'none' || fullInfo.style.display === '') {
      fullInfo.style.display = 'block';
      shortInfo.style.display = 'none';
      toggleButton.textContent = 'Read Less';
    } else {
      fullInfo.style.display = 'none';
      shortInfo.style.display = 'block';
      toggleButton.textContent = 'Read More';
    }
  }

  function toggleInfo2() {
    const shortInfo2 = document.querySelector('.short-info2');
    const fullInfo2 = document.querySelector('.full-info2');
    const toggleButton2 = document.querySelector('.toggle-info-button2');
  
    if (fullInfo2.style.display === 'none' || fullInfo2.style.display === '') {
      fullInfo2.style.display = 'block';
      shortInfo2.style.display = 'none';
      toggleButton2.textContent = 'Read Less';
    } else {
      fullInfo2.style.display = 'none';
      shortInfo2.style.display = 'block';
      toggleButton2.textContent = 'Read More';
    }
  }


  