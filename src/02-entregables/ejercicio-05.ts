console.log("************** DELIVERABLE 05 *********************");

class SlotMachine {
    coinCounter : number;

    constructor() {
        this.coinCounter = 0;
    }

    play() :void {
        this.coinCounter++;
        const firstSlot : boolean = Math.random() > 0.5;
        const secondSlot : boolean = Math.random() > 0.5;
        const thirdSlot : boolean = Math.random() > 0.5;
        if(firstSlot && secondSlot && thirdSlot) {
            const prize = this.coinCounter;
            this.coinCounter = 0;
            console.log(`Congratulations!!!. You won ${prize} coins!!`);
            return;
        }

        console.log("Good luck next time!!");
        return;
    };
}


const machine1 : SlotMachine = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();

console.log("************** DELIVERABLE 05 END *********************");

