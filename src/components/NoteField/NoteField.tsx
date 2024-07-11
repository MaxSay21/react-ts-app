import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { setValue } from 'src/slices/noteSlice';

export default function NoteField() {
  const dispatch = useDispatch();
  const noteValue = useSelector<RootState, string>((state) => state.note.value);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setValue(event.target.value));
  };

  return (
    <div>
      <textarea
        value={noteValue}
        onChange={handleChange}
        placeholder="Notes..."
        className="border border-gray-300 rounded-md p-2 mb-2 w-full h-32"
      />
    </div>
  );
}
