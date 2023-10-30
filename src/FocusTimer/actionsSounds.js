import state from "./state.js"
import * as sounds from "./sounds.js"

export function forest() { 
  if(!state.isMute) {
    sounds.forest.play()
    return
  } 
}

export function rain() {
  if(!state.isMute) {
    sounds.rain.play()
    return
  } 
}

export function coffeeShop() {
  if(!state.isMute) {
    sounds.coffeeShop.play()
    return
  } 
}

export function firePlace() {
  if(!state.isMute) {
    sounds.firePlace.play()
    return
  } 
}