import React from 'react'
import { Button } from './ui/button'

function Footer() {
  return (
    <div className='h-[70vh] w-full bg-zelena flex flex-col items-center justify-evenly font-bold'>
        <div className='w-full px-8 xl:px-0 lg:w-1/2 xl:text-xl text-center border-b-2 border-white pb-12 xl:py-8'>
            <p>
            Nějaký ten pátek žijeme už společně, proto nové sklenky jsou pro nás již zbytečné. Chcete-li nás obdarovat, přidejte nám na cestu, kde si ženich užije svoji milou nevěstu.
            </p>
        </div>
        <div className='flex flex-col items-center justify-center gap-4'>
            <span>Prosím vyplňte formulář zde:</span>
            <Button size={"lg"} variant={'outline'} className='border-bezova uppercase font-bold'>Potvrdit účast</Button>
        </div>
    </div>
  )
}

export default Footer