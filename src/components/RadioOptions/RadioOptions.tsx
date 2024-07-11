import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import Radio from 'src/components/Radio';
import { setValue } from 'src/slices/radioSlice';

const OPTIONS = [
  { value: 'Option A', label: 'Option A' },
  { value: 'Option B', label: 'Option B' },
  { value: 'Option C', label: 'Option C' },
];

export default function RadioOptions() {
  const dispatch = useDispatch();
  const radioValue = useSelector<RootState, string>(
    (state) => state.radio.value
  );

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setValue(event.target.value));
    },
    [dispatch]
  );

  return (
    <>
      {OPTIONS.map((option) => (
        <Radio
          key={option.value}
          id={option.value}
          name="radio"
          label={option.label}
          value={option.value}
          defaultChecked={radioValue === option.value}
          onChange={handleChange}
        />
      ))}
    </>
  );
}
