import React from 'react'
import {useForm} from  'react-hook-form'
import { Shippingform, Shippingfrominput } from '@/app/type'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import {  ArrowRight,  } from 'lucide-react'

const ShippingForm = ({setshippingform}:{setshippingform:(data:Shippingfrominput)=> void}) => {
  const router= useRouter();
  const {register, handleSubmit, formState:{errors}} = useForm<Shippingfrominput>({
    resolver: zodResolver(Shippingform)
  })
  return (
    <div className='max-md:w-full max-md:flex max-md:justify-center  '>
      <form action="" className='w-96 shadow-md shadow-gray-700 p-6 rounded max-md:w-full  ' onSubmit={handleSubmit((data)=>{
         setshippingform(data)
        router.push("/card?step=3")
        
      })}>
        <div className='mb-2  flex flex-col '>
          <label className='text-md '>Full Name</label>
          <input type='text' className='w-full border-1 rounded-md px-2 py-2 mt-1 ' {...register('fullName')} placeholder='Prince Mahmud' />
          {errors.fullName && <p className='text-red-500 text-sm'>{errors.fullName.message}</p>}
        </div>
        <div className='mb-2 flex flex-col '>
          <label className='text-md '>Email</label>
          <input type='text' className='w-full border-1 rounded-md px-2 py-2 mt-1 ' {...register('email')} placeholder='Example@gmail.com'/>
          {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
        </div>
        <div className='mb-2 flex flex-col '>
          <label className='text-md '>Phone</label>
          <input type='number' className='w-full border-1 rounded-md px-2 py-2 mt-1 ' {...register('phone')} placeholder='01823125687'/>
          {errors.phone && <p className='text-red-500 text-sm'>{errors.phone.message}</p>}
        </div>
        <div className='mb-2 flex flex-col '>
          <label className='text-md '>City</label>
          <input type='text' className='w-full border-1 rounded-md px-2 py-2 mt-1 ' {...register('city')} placeholder='Califonia'/>
          {errors.city && <p className='text-red-500 text-sm'>{errors.city.message}</p>}
        </div>
        <div className='mb-2 flex flex-col '>
          <label className='text-md '>Address</label>
          <input type='text' className='w-full border-1 rounded-md px-2 py-2 mt-1 ' {...register('address')} placeholder='Road-NO street no' />
          {errors.address && <p className='text-red-500 text-sm'>{errors.address.message}</p>}
        </div>
        < button type='submit' className='w-full rounded-md px-2 py-2 flex gap-1 mt-4 bg-blue-500 text-white text-md text-center justify-center'>
           Continue
           <ArrowRight />
        </button>
      </form>
    </div>
  )
}

export default ShippingForm