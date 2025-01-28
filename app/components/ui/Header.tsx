import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <Link href={"/concept"}></Link>
      <Image
        src={"@/app/public/assets/logo.png"}
        width={250}
        height={250}
        alt="logo for the project"
      />
      <Link href={"/login"}></Link>
    </div>
  );
};

export default Header;
