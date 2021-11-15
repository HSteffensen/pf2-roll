import type { AnyDice } from "./dice"

export default class DiceRoll {
    constructor(private diceSize: AnyDice, private diceCount: number, private totalModifier: number) {
    }

    roll(): number {
        var sum = this.totalModifier
        for (var i = 0; i < this.diceCount; i++) {
            sum += Math.floor(Math.random() * this.diceSize.value)
        }
        return sum
    }
}
