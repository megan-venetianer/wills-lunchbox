class LunchBox {
  constructor(box) {
    this.owner = box.owner;
    this.material = box.madeOf;
    this.shape = box.shape;
    this.color = box.color;
    this.handle = true;
    this.snacks = [];
  }
    acquireSnack(snack) {
      this.snacks.push(snack);
      snack.isInLunchBox = true;
    }
    findHealthySnacks() {
      return this.snacks.filter(snack => snack.healthy === true);
      }
  }


module.exports = LunchBox;
