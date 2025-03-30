"use client";

import Image from "next/image";
import { useState } from "react";

const RegisterPractice = () => {
  // use state for track values
  const [phone, setPhone] = useState("");
  const [isValid, setIsValid] = useState(false);

  // check that user can only submit numbers
  const isNumber = (userInput: string) => {
    for (let i = 0; i < userInput.length; i++) {
      if (userInput.charCodeAt(i) < 48 || userInput.charCodeAt(i) > 57) {
        return false;
      }
    }
    return true;
  };

  // handle on change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (isNumber(value) && value.length <= 10) {
      setPhone(value);
    }
  };

  // handle submit
  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (phone.length > 0 && phone.length <= 10) {
      setIsValid(true);
    }
  };

  return (
    <div
      id="register-container"
      className="flex min-h-screen justify-center items-center bg-primary_green"
    >
      <section
        id="card-register-form"
        className="w-full max-w-sm bg-primary_white rounded-lg md:p-8"
      >
        <h3 className="font-bold text-lg text-center mb-2 ">
          Ingrese su número telefónico.
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <input
              id="phone"
              onChange={handleInputChange}
              value={phone}
              type="text"
              className="w-full p-2 border-2"
              placeholder="Teléfono..."
            />
            <Image
              src={"/assets/icons/mobile.png"}
              width={32}
              height={32}
              alt="Ícono en pixel art."
              className="absolute right-3 top-1"
            />
            <button
              type="submit"
              className="w-full rounded-md p-1 bg-primary_pink mt-4 hover:bg-pink-500 text-secondary_violet"
            >
              Enviar código
            </button>
            {isValid && (
              <span className="font-bold text-primary_green text-sm">
                ¡Su número telefónico {phone} es correcto!
              </span>
            )}
          </div>
        </form>
      </section>
    </div>
  );
};

export default RegisterPractice;
