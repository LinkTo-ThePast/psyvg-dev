import Link from "next/link";

const Footer = () => {
  return (
    <div className="px-2 lg:px-4">
      <div className="bg-primary_white w-full m-auto px-4 lg:px-8 py-16 rounded-t-3xl">
        <div className="max-w-7xl m-auto lg:flex_b_start">
          <Link href={"/resources"}>Recursos</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
