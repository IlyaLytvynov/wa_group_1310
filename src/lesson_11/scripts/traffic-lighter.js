import '../styles/traffic-lighter.scss';

export function trafficLighter(trafiicLighter, intervalCount = 1000) {
  const ACTIVE_CLASS_NAME = 'traffic-lighter__lamp_active';
  const lamps = Array.from(trafiicLighter.querySelectorAll('.traffic-lighter__lamp'));
  let currentActiveLampIndex = 0;
  let intervalId;
  
  function disable() {
    lamps[currentActiveLampIndex].classList.remove(ACTIVE_CLASS_NAME);
  }
  
  function enable(lamp) {
    lamp.classList.add(ACTIVE_CLASS_NAME);
    currentActiveLampIndex = lamps.indexOf(lamp);
  }
  
  for(let lamp of lamps) {
    lamp.onclick = function () {
      disable();
      enable(lamp);
    };
  }  

  function increaseIndex() {
    if(currentActiveLampIndex + 1 >= lamps.length) {
      currentActiveLampIndex = 0;
    } else {
      currentActiveLampIndex++;
    }
  }

  function intervalStart() {
    intervalId = setInterval(function () {
      disable();
      increaseIndex();
      enable(lamps[currentActiveLampIndex]);
    }, intervalCount);
  }
  intervalStart();

  trafiicLighter.onmouseenter = function () {
    console.log('STOPED');
    clearInterval(intervalId);
  };
  trafiicLighter.onmouseleave = function () {
    console.log('LEAVED');
    intervalStart();
  };
}
