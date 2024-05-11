interface InputProps {
  type: string;
  name: string;
  value: any;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  style: string;
}

function Input({
  type,
  name,
  value,
  placeholder,
  onChange,
  style,
}: InputProps) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={style}
    />
  );
}

export default Input;
