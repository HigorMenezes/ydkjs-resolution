export interface IChapter1 {
  threshold: number;
  taxRate: number;
  phonePrice: number;
  accessoryPrice: number;
  bankBalance: number;
  amount: number;
  run: () => void;
}

interface IChapter1Properties {
  threshold: number;
  taxRate: number;
  phonePrice: number;
  accessoryPrice: number;
  bankBalance: number;
  amount?: number;
}

class Chapter1 implements IChapter1 {
  public threshold: number;
  public taxRate: number;
  public phonePrice: number;
  public accessoryPrice: number;
  public bankBalance: number;
  public amount: number;

  constructor(props: IChapter1Properties) {
    this.threshold = props.threshold;
    this.taxRate = props.taxRate;
    this.phonePrice = props.phonePrice;
    this.accessoryPrice = props.accessoryPrice;
    this.bankBalance = props.bankBalance;
    this.amount = props.amount || 0;
  }

  public run() {
    while (this.amount < this.bankBalance) {
      this.amount += this.phonePrice;

      if (this.amount < this.threshold) {
        this.amount += this.accessoryPrice;
      }
    }

    this.amount += this.calculateTax(this.amount);

    console.info(`Your purchase: ${this.formatAmount(this.amount)}`);

    if (this.amount > this.bankBalance) {
      console.info("You can't afford this purchase");
    } else {
      console.info('You can afford this purchase');
    }
  }

  private calculateTax(value: number): number {
    return value * this.taxRate;
  }

  private formatAmount(value: number): string {
    return `$ ${value.toFixed(2)}`;
  }
}

export default Chapter1;
