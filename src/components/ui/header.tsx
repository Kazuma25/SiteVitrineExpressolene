import React from 'react';
import NavigationMenuDemo from './nav';

export default function Header() {
  return (
    <header className="z-50 text-center bg-gradient-to-br from-[#FFD6A5]/90 via-[#FFB5E8]/80 to-[#B5E8FF]/90 text-white backdrop-blur-sm shadow-lg">
      <div className='py-8 px-6'>
        <NavigationMenuDemo />
      </div>
      <div className="max-w-5xl mx-auto py-8 px-5">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff194e] to-[#e100ff] drop-shadow-lg">
          *.·:.☽✧ Expresolene - Shop ✧☾.:·.*
        </h1>
        <p className="text-xl mt-4 text-[#6B7280] font-medium">
          Creatrice de décorations et illustrations dans n'importe qu'elle univers !
        </p>
      </div>
    </header>
  );
}
