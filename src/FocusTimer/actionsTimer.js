import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"

export function startRunning() {  
  state.isRunning = true
  document.documentElement.classList.add("running")
  timer.countdown()
  document.getElementById("play").disabled = true

}

export function pauseRunning() {
  state.isRunning = false
  document.documentElement.classList.remove("running")
  document.getElementById("play").disabled = false
}

export function addMinutes() {
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.minutes.textContent) 

  if(minutes > 55){
    minutes = 60
    seconds = 0
    timer.updateDisplay(minutes, seconds)
    return
  }
  
  el.minutes.textContent = minutes + 5
}

export function decreaseMinutes() {
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.minutes.textContent)

  if(minutes < 10) {
    minutes = 0
    seconds = 0
    timer.updateDisplay(minutes, seconds)
    return
  }

  el.minutes.textContent = minutes - 5
}
