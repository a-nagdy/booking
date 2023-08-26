import Link from "next/link";

const CustomLink = ({ children, href }) => {
  return (
    <Link
      href={href}
      className="hover:text-main-color font-sans text-xl font-semibold p-4 text-slate-200"
    >
      {children}
    </Link>
  );
};

export default CustomLink;
