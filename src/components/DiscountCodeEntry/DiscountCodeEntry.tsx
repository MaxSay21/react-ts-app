import { useState } from 'react';
import { validateDiscountResult } from 'src/utils/validateDiscount';

export default function DiscountCodeEntry() {
  const [discountCode, setDiscountCode] = useState<string>('');
  const validateResult = validateDiscountResult(discountCode);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDiscountCode(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={discountCode}
        onChange={handleChange}
        placeholder="Discount Code.."
        className="border border-gray-300 rounded-md p-2 mb-2"
      />

      <div className="text-sm">{validateResult}</div>
    </>
  );
}
