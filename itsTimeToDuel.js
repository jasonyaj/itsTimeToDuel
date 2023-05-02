// Worked with Ben, Tim, Jack, and Jake

class Card {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}
class UnitCard extends Card {
  constructor(name, cost, power, resilience) {
    super(name, cost);
    this.power = power;
    this.resilience = resilience;
  }

  attack(target) {
    console.log(this.name + ' attacks ' + target.name)
    console.log('target resil before: ' + target.resilience);
    target.resilience -= this.power
    console.log('target resil after: ' + target.resilience);
  }
}
class EffectCard extends Card {
  constructor(name, cost, text, stat, magnitude) {
    super(name, cost);
    this.text = text;
    this.stat = stat;
    this.magnitude = magnitude;
  }

  play(target) {
    console.log(this.name + ' played on ' + target.name)
    console.log('Card effects: ' + this.text);
    console.log('target stat before: ' + target[this.stat]);
    target[this.stat] += this.magnitude
    console.log('target stat after: ' + target[this.stat]);
  }

}

const redBeltNinja = new UnitCard ('Red Belt Ninja', 3, 3, 4)
const hardAlgo = new EffectCard ('Hard Algorithm', 2, "increase target's resilience by 3", 'resilience', 3)
hardAlgo.play(redBeltNinja)
const blackBeltNinja = new UnitCard ('Black Belt Ninja', 4, 5, 4)
const unhandled = new EffectCard ('Unhandled Promise Rejection', 1, "reduce target's resilience by 2", 'resilience', -2)
unhandled.play(redBeltNinja)
const pairProg = new EffectCard ('Pair Programming', 3, "increase target's power by 2", 'power', 2)
pairProg.play(redBeltNinja)
redBeltNinja.attack(blackBeltNinja)
console.log('Red Belt Ninja says: "You never should have come here!" as he backstabs Black Belt Ninja...');
