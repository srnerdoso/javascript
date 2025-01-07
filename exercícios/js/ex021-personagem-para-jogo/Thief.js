const Character = require("./Character");

module.exports = class Thief extends Character {
  attack(targetCharacter) {
    targetCharacter.lifePts -= super.attack(targetCharacter) * 2
    targetCharacter.lifePts = Math.max(0, targetCharacter.lifePts)
  }
}
