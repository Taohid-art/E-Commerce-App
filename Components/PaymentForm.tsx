import { Paymentforminput, PaymentformSchema } from '@/app/type';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';

const PaymentForm = () => {
    const router= useRouter();
    const {register, handleSubmit, formState: {errors}} = useForm<Paymentforminput>({
        resolver:zodResolver(PaymentformSchema)
    })
  return (
    <div>
      <form action="" className='w-96 shadow-md shadow-gray-700 p-6 rounded max-md:w-full' onSubmit={handleSubmit((data)=>{
        
        router.push("/card?step=4")
        
      })}>
        <div className='mb-2 flex flex-col '>
          <label className='text-md '>Card Name</label>
          <input type='text' className='w-full border-1 rounded-md px-2 py-2 mt-1 ' {...register('cardName')} placeholder='Prince Mahmud'/>
          {errors.cardName && <p className='text-red-500 text-sm'>{errors.cardName.message}</p>}
        </div>
        <div className='mb-2 flex flex-col '>
          <label className='text-md '>Card Number</label>
          <input type='text' className='w-full border-1 rounded-md px-2 py-2 mt-1 ' {...register('cardNumber')} placeholder='1234 5678 3404 9834'/>
          {errors.cardNumber && <p className='text-red-500 text-sm'>{errors.cardNumber.message}</p>}
        </div>
        <div className='mb-2 flex flex-col '>
          <label className='text-md '> Cvv</label>
          <input type='number' className='w-full border-1 rounded-md px-2 py-2 mt-1 ' {...register('cvv')} placeholder='234'/>
          {errors.cvv  && <p className='text-red-500 text-sm'>{errors.cvv.message}</p>}
        </div>
        <div className='mb-2 flex flex-col '>
          <label className='text-md '>Expiry Date</label>
          <input type='text' className='w-full border-1 rounded-md px-2 py-2 mt-1 ' {...register('experyDate')} placeholder='09/2030' />
          {errors.experyDate && <p className='text-red-500 text-sm'>{errors.experyDate.message}</p>}
        </div>
        
        < button type='submit' className='w-full rounded-md px-2 py-2 flex gap-1 mt-4 bg-blue-500 text-white text-md text-center justify-center'>
           Continue
           <ArrowRight />
        </button>
      </form>
    
    </div>
  )
}

export default PaymentForm