import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="">
      <nav className="justify-around">
        <Link href={"/concept"}>Concepto</Link>
        <Link href={"/inspiration"}>Inspiración</Link>
        <Link href={"/data"}>Datos</Link>
        <Image
          src={"/assets/psyvg.png"}
          width={135}
          height={130}
          alt="Logo del proyecto."
        />
        <Link href={"/login"}>Iniciar sesión</Link>
        <Link href={"/resources"}>Recursos adicionales</Link>
      </nav>
    </div>
  );
};

export default Header;
