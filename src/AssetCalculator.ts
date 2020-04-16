class AssetCalculator {
  cryptoTRM: number;
  decimals: number;
  constructor(cryptoTRM: number, decimals: number = 8) {
    this.cryptoTRM = cryptoTRM;
    this.decimals = decimals;
  }

  calculateFiat(crypto: number): number {
    const fiatValue = crypto * this.cryptoTRM;
    return Number(fiatValue.toFixed(2));
  }

  calculateCrypto(fiat: number): number {
    const cryptoValue = (1 / this.cryptoTRM) * fiat;
    return Number(cryptoValue.toFixed(this.decimals));
  }
}

export default AssetCalculator;
