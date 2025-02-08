import Link from "next/link";
import Header from "./components/headers/Header";
import Navbar from "./components/nav/Navbar";
import Image from "next/image";

const Home = () => {
  return (
    <Header>
      <Navbar>
        <ul>
          <Link href={"/concept"}>Concepto</Link>
        </ul>
        <ul>
          <Link href={"/source"}>Inspiración</Link>
        </ul>
        <ul>
          <Link href={"/data"}>Datos</Link>
        </ul>
      </Navbar>
      <Image
        src={"/assets/psyvg.png"}
        width={100}
        height={100}
        alt="icon for the page."
      />
      <Navbar>
        <ul>
          <Link href={"/resources"}>Recursos</Link>
        </ul>
        <ul>
          <Link href={"/login"}>Iniciar sesión</Link>
        </ul>
      </Navbar>
    </Header>
  );
};

export default Home;
