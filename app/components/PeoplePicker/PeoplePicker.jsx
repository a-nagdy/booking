const PeoplePicker = ({ peoplePicked, onChange }) => (
  <div className="mt-3 flex select-none flex-wrap items-center gap-1">
    <input
      type="text"
      name="type"
      onChange={onChange}
      value={peoplePicked}
      placeholder="How Many People"
    />
  </div>
);

export default PeoplePicker;
