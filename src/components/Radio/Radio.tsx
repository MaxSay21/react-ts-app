type Props = {
  id: string;
  name: string;
  label: string;
  value: string;
  defaultChecked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export default function Radio({
  id,
  name,
  label,
  value,
  defaultChecked,
  onChange,
}: Props) {
  return (
    <div className="flex items-center mb-4">
      <input
        id={id}
        type="radio"
        value={value}
        name={name}
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
      <label htmlFor={id} className="ms-2 text-sm font-medium text-gray-900">
        {label}
      </label>
    </div>
  );
}
