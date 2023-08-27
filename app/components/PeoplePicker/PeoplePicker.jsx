const PeoplePicker = ({ peoplePicked, onChange }) => (
  <div className="mt-3 flex select-none flex-wrap items-center gap-1">
    <input
      type="text"
      name="type"
      onChange={onChange}
      value={peoplePicked}
      placeholder="100 LE / Person"
    />
  </div>
);

export default PeoplePicker;
