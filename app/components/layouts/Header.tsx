import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="relative z-50 hidden lg:block">
      <div className="w-full max-w-7xl m-auto py-8 flex_b_center">
        <div className="flex_s_center"></div>
        <div>
          <Link href={"/concept"}>Concepto</Link>
        </div>
        <div>
          <Link href={"/inspiration"}>Inspiración</Link>
        </div>
        <div>
          <Link href={"/data"}>Datos</Link>
        </div>
        <div>
          <Image
            src={"/assets/psyvg.png"}
            alt="Consola de videojuegos animada."
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
