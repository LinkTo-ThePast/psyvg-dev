import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex flex-row items-center">
      <Link href={"/concept"}>Concepto</Link>
      <Image
        src={"/assets/psyvg.png"}
        width={135}
        height={130}
        alt="Logo del proyecto."
      />
      <Link href={"/login"}>Iniciar sesión</Link>
    </div>
  );
};

export default Header;
