function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }
  function playSound(e) {
    //getting the audio data-key
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //getting the divs data-key
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    //now, if it didnt return, active the playing class
    key.classList.add('playing');
    //setting the current time of audio to 0s. It enable us to play the audio repeatedly
    audio.currentTime = 0;
    audio.play();
  }
  //creatting an array of keys by their class key
  const keys = Array.from(document.querySelectorAll('.key'));
  //for each key that reach the transitionend, remove the transition
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  //play the key pressed sound
  window.addEventListener('keydown', playSound);