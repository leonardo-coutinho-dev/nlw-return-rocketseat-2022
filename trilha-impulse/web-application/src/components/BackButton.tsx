import {Popover} from '@headlessui/react'
import { ArrowLeft } from 'phosphor-react'

export function BackButton () {
  return (
    <Popover.Button className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100" title="Voltar para a página anterior">
      <ArrowLeft weight="bold" className="w-4 h-4"/>
    </Popover.Button>
  )
}