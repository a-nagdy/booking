const Footer = () => {
  return (
    <footer className="p-1 bg-[#FF7665] md:p-8 lg:p-10 dark:bg-gray-800">
      <div className="mx-auto text-left lg:text-center flex justify-start items-start flex-col sm:justify-center sm:text-center">
        <a
          href="#"
          className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          Company Logo
        </a>
        <p className="my-6 text-gray-200 dark:text-gray-200">
          Open-source library of over 400+ web components and interactive
          elements built for better web.
        </p>
        <ul className="flex flex-wrap justify-center items-center flex-col sm:flex-row mb-6 text-gray-900 dark:text-white">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Premium
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Campaigns
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Affiliate Program
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Contact
            </a>
          </li>
        </ul>
        <span className="text-sm text-gray-200 sm:text-center dark:text-gray-200">
          © 2021-2022{" "}
          <a href="#" className="hover:underline">
            2B Cart
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
