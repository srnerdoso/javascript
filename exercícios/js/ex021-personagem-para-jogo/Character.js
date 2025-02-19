module.exports = class Character {
  constructor(name, lifePts, attackPts, defensePts) {
    this.name = name;
    this.lifePts = lifePts;
    this.attackPts = attackPts;
    this.defensePts = defensePts;
  }

  attack(targetCharacter) {
    targetCharacter.lifePts -= this.attackPts - targetCharacter.defensePts
    return targetCharacter.lifePts
  }
};
