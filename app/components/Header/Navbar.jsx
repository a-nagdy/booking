import CustomLink from "../CustomLink/CustomLink";

const Navbar = () => {
  return (
    <nav className="text-white p-1 sm:p-4 lg:p-10">
      <ul className="flex items-center gap-5">
        <li>
          <CustomLink href="/">Home</CustomLink>
        </li>
        {/* <li>
          <CustomLink href="/">Categories</CustomLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
