import { CloseButton } from "./CloseButton";

import {Cube} from 'phosphor-react'

const text = ['text-1', 'text-2', 'text-3'];

export function WidgetForm () {
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-80">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>
      <section className="flex py-4 gap-2 w-full text-[#000000]">
        <div className="w-1/3 h-20 bg-slate-100 flex flex-col items-center justify-center">
          <h2>{text[0]}</h2>
          <Cube className="w-8 h-8" />
        </div>
        <div className="w-1/3 h-20 bg-slate-100 flex flex-col items-center justify-center">
          <h2>{text[1]}</h2>
          <Cube className="w-8 h-8" />
        </div>
        <div className="w-1/3 h-20 bg-slate-100 flex flex-col items-center justify-center">
          <h2>{text[2]}</h2>
          <Cube className="w-8 h-8" />
        </div>
      </section>
      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela <a className="underline underline-offset-2" href="https://www.rocketseat.com.br" target="_blank">Rocketseat</a>
      </footer>
    </div>
  );
}