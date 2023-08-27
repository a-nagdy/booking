const PeopleData = ({
  peoplePicked,
  onPersonChange,
  onFullName,
  onEmailChange,
  email,
  fullName,
}) => (
  <div className="mt-3 select-none gap-3 w-fit grid grid-cols-2 text-white">
    <div className="flex flex-col gap-3">
      <label htmlFor="person">Persons</label>
      <input
        type="text"
        name="person"
        onChange={onPersonChange}
        value={peoplePicked}
        placeholder="100 LE / Person"
        className="p-1 px-2 rounded-sm"
      />
    </div>
    <div className="flex flex-col gap-3">
      <label htmlFor="person">Email</label>
      <input
        type="email"
        name="email"
        onChange={onEmailChange}
        value={email}
        placeholder="Email@example.com"
        className="p-1 px-2 rounded-sm"
      />
    </div>
    <div className="flex flex-col gap-3">
      <label htmlFor="person">Full Name</label>
      <input
        type="text"
        name="name"
        onChange={onFullName}
        value={fullName}
        placeholder="Example John"
        className="p-1 px-2 rounded-sm"
      />{" "}
    </div>
  </div>
);

export default PeopleData;
