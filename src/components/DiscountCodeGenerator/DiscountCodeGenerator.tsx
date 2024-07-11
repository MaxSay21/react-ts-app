import { useState } from 'react';
import { generateDiscountCode } from 'src/utils/generateDiscountCode';

export default function DiscountCodeGenerator() {
  const [code, setCode] = useState<string>();

  const setGeneratedDiscountCode = () => {
    const generatedCode = generateDiscountCode();
    setCode(generatedCode);
  };

  return (
    <div className="flex flex-col pt-2 pb-4">
      <button
        onClick={setGeneratedDiscountCode}
        className="rounded-md bg-orange-500 text-white p-2 w-[200px]"
      >
        Generate discount code
      </button>
      {code ? (
        <div className="mt-2 text-lg">Generated discount code: {code}</div>
      ) : null}
    </div>
  );
}
