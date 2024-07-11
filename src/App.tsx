import DiscountCodeEntry from './components/DiscountCodeEntry';
import DiscountCodeGenerator from './components/DiscountCodeGenerator';
import NoteField from './components/NoteField';
import RadioOptions from './components/RadioOptions';
import './index.css';

export default function App() {
  return (
    <div className="flex flex-col items-center p-6 ">
      <div className="w-full max-w-[500px]">
        <RadioOptions />
        <DiscountCodeEntry />
        <DiscountCodeGenerator />
        <NoteField />
      </div>
    </div>
  );
}
