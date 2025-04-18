import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="container mx-auto py-4 md:px-6 relative z-20 text-xl text-primary_white">
      <nav className="hidden md:flex justify-between items-center">
        <div className="flex space-x-8">
          <Link href="#" className="hover:opacity-80 transition-opacity">
            Concepto
          </Link>
          <Link href="#" className="hover:opacity-80 transition-opacity">
            Inspiración
          </Link>
          <Link href="#" className="hover:opacity-80 transition-opacity">
            Recursos
          </Link>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Image
            src="/assets/psyvg.png"
            alt="Imagen de una consola de videojuegos."
            width={60}
            height={60}
            className="w-auto "
          />
        </div>

        <div className="flex space-x-8">
          <Link href="#" className="hover:opacity-80 transition-opacity">
            Iniciar sesión
          </Link>
          <Link href="#" className="hover:opacity-80 transition-opacity">
            Registrarse
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
