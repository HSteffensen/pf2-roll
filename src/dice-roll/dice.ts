export class AnyDice {
    readonly value: number

    protected constructor(size: number) {
        this.value = size
    }
}

class SimpleDice extends AnyDice {
    static readonly d20 = new SimpleDice(20)
    static readonly d100 = new SimpleDice(100)
}

export class DamageDice extends AnyDice {
    static readonly d4 = new DamageDice(4)
    static readonly d6 = new DamageDice(6)
    static readonly d8 = new DamageDice(8)
    static readonly d10 = new DamageDice(10)
    static readonly d12 = new DamageDice(12)

    /**
     * @see {@link https://2e.aonprd.com/Rules.aspx?ID=226} Increasing Die Size
     */
    get increasedValue(): number {
        let increasedSize = this.value + 2
        let maxSize = 12
        if (increasedSize > maxSize) {
            return maxSize
        } else {
            return increasedSize
        }
    }
}

export let Dice = {
    d20: SimpleDice.d20,
    d100: SimpleDice.d100,
    d4: DamageDice.d4,
    d6: DamageDice.d6,
    d8: DamageDice.d8,
    d10: DamageDice.d10,
    d12: DamageDice.d12,
}
