const PeopleData = ({
  peoplePicked,
  onPersonChange,
  onFullName,
  onEmailChange,
  email,
  fullName,
}) => (
  <div className="mt-3 flex select-none flex-wrap gap-3 flex-col w-10 ">
    <input
      type="text"
      name="person"
      onChange={onPersonChange}
      value={peoplePicked}
      placeholder="100 LE / Person"
      className="p-1 px-2 rounded-sm"
    />
    <input
      type="email"
      name="email"
      onChange={onEmailChange}
      value={email}
      placeholder="Email@example.com"
      className="p-1 px-2 rounded-sm"
    />
    <input
      type="text"
      name="name"
      onChange={onFullName}
      value={fullName}
      placeholder="Example John"
      className="p-1 px-2 rounded-sm"
    />
  </div>
);

export default PeopleData;
