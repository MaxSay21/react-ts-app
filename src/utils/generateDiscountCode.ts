export function generateDiscountCode(): string {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';

  const lettersPartLength = 8;
  const numbersPartLength = 4;

  let lettersPart = '';
  for (let i = 0; i < lettersPartLength; i++) {
    lettersPart += letters.charAt(Math.floor(Math.random() * letters.length));
  }

  let numbersPart = '';
  for (let i = 0; i < numbersPartLength; i++) {
    numbersPart += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }

  return lettersPart + numbersPart;
}
