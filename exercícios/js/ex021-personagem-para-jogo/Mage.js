const Character = require("./Character");

module.exports = class Mage extends Character {
  #magicPts;

  constructor(name, lifePts, attackPts, defensePts, magicPts) {
    super(name, lifePts, attackPts, defensePts);
    this.#magicPts = magicPts;
  }

  attack(targetCharacter) {
    targetCharacter.lifePts -= this.#magicPts + super.attack(targetCharacter);
    targetCharacter.lifePts = Math.max(0, targetCharacter.lifePts)
  }

  heal(targetCharacter) {
    targetCharacter.lifePts += this.#magicPts * 2;
  }
};
