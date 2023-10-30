import state from "./state.js"
import * as el from "./elements.js"
import * as actionsTimer from "./actionsTimer.js"
import * as actionsSound from "./actionsSounds.js"
import * as sounds from "./sounds.js"

export function registerControlsTimer() {
  el.controlsTimer.addEventListener('click', (event) => {
    const actionTimer = event.target.dataset.actionTimer
    if(typeof actionsTimer[actionTimer] != "function"){
      return
    }
    actionsTimer[actionTimer]()
  })
}

export function startSound() {
  el.controlsSound.addEventListener("click", (event) => {
    state.isMute = document.documentElement.classList.add("music-on")
    const actionSound = event.target.dataset.actionSound
    if(typeof actionsSound[actionSound] != "function") {
      state.isMute = document.documentElement.classList.remove("music-on")
      event.target.classList.remove("sound")
      return
    }

    event.target.classList.add("sound")
    
    actionsSound[actionSound]()
    el.controlsSound.addEventListener("blur", (event) => {
      const soundOnNow = actionSound
      state.isMute = document.documentElement.classList.remove("music-on")
      event.target.classList.remove("sound")
      pauseSound(soundOnNow)
    }, true)

  })
}

export function pauseSound(soundOnNow) {
  if(soundOnNow == "forest") {
    sounds.forest.pause()
  }

  if(soundOnNow == "rain") {
  sounds.rain.pause()
  }

  if(soundOnNow == "coffeeShop") {
    sounds.coffeeShop.pause()
  }

  if(soundOnNow == "firePlace" ) {
    sounds.firePlace.pause()
  }
}


