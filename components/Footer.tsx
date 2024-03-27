import React from 'react'
import { Button } from './ui/button'

function Footer() {
  return (
    <div className='h-[70vh] w-full bg-zelena flex flex-col items-center justify-evenly'>
        <div className='w-full px-8 xl:px-0 lg:w-1/2 xl:text-xl text-center font-light border-b-2 border-white pb-12 xl:py-8'>
          <h3 className='my-6 font-svarge xl:text-[3rem]'>KDYŽ SI NEVÍŠ RADY S DARY</h3>
            <p>
            Nějaký ten pátek žijeme už společně, proto nové sklenky jsou pro nás již zbytečné. </p> <p> Chcete-li nás obdarovat, přidejte nám na cestu, kde si ženich užije svoji milou nevěstu.
            </p>
        </div>
        <div className='flex flex-col items-center justify-center font-svarge gap-4 xl:text-[2rem]'>
            <span>Prosím vyplňte formulář zde:</span>
            <Button size={"lg"} variant={'outline'} className='border-bezova uppercase font-bold'>Potvrdit účast</Button>
        </div>
    </div>
  )
}

export default Footer