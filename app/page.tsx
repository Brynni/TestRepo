// Mark the component as a Client Component
"use client"; 

import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [imageSize, setImageSize] = useState(480);
  const makePuppiesSmaller = () => {
    if (imageSize > 100)
    {
      setImageSize(imageSize - 10)
    }
    
  }
  return (
    <div style={{display: "flex"}} className="main-content grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          Lil Brynnis website, please send me mail at <a href="mailto:bryni97@hotmail.com">bryni97@hotmail.com</a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <button
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          onTouchStart={makePuppiesSmaller}
          onClick={makePuppiesSmaller}
        >
          <Image
            aria-hidden
            src="https://lh3.googleusercontent.com/pw/AP1GczOJ0ujFFW7db6O6Gf1tYW4KBbnLWJis6I2EyV3uId8edtJtaS8gt_-XZF1yRWPR8pFFbDcLHEexU42X46ZL1QlgBiTTu8BLHnw1r3V0pdKn3bcuPw8cHz1QyvRUoAB11b8Xyu28deQv3Z5VSioW07cl=w683-h911-s-no-gm?authuser=0"
            alt="Globe icon"
            width={imageSize}
            height={imageSize}
          />
          I love all my puppies
        </button>
      </footer>
    </div>
  );
}
