type SearchInputProps = {
  value: string;

  onChange: (value: string) => void;
};

function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div>
      <label htmlFor="">Search</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Ketik sesuatu"
      />
    </div>
  );
}

export default SearchInput;
