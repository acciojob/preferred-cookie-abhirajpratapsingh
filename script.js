//your JS code here. If required.
const fontSizeInput = document.getElementById('fontsize');
const fontColorInput = document.getElementById('fontcolor');
const form = document.querySelector('form');

window.onload = function() {
  const savedFontSize = getCookie('fontsize');
  const savedFontColor = getCookie('fontcolor');
  
  if (savedFontSize) {
    document.documentElement.style.setProperty('--fontsize', savedFontSize + 'px');
    fontSizeInput.value = savedFontSize;
  }
  
  if (savedFontColor) {
    document.documentElement.style.setProperty('--fontcolor', savedFontColor);
    fontColorInput.value = savedFontColor;
  }
};

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const fontSize = fontSizeInput.value;
  const fontColor = fontColorInput.value;
  
  document.cookie = `fontsize=${fontSize}; path=/; max-age=31536000`;
  document.cookie = `fontcolor=${fontColor}; path=/; max-age=31536000`;
  
  document.documentElement.style.setProperty('--fontsize', fontSize + 'px');
  document.documentElement.style.setProperty('--fontcolor', fontColor);
});
