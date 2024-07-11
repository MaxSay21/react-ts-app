/**
 * Validates discount code.
 * Discount code should start with letters and end with numbers.
 */
export function validateDiscountCode(code: string): boolean {
  // Regular expression to match the pattern
  const pattern = /^[A-Za-z]+[0-9]+$/;

  // Test the code against the pattern
  return pattern.test(code);
}

export function validateDiscountResult(code: string) {
  if (code === '') {
    return '';
  }
  const isValid = validateDiscountCode(code);

  if (isValid) {
    return 'Valid disacount code';
  }

  return 'Invalid disacount code';
}
