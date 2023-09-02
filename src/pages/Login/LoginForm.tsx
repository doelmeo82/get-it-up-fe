import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai"
const LoginForm = () => {
  const [showPass, setShowPass] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    } = useForm({
        defaultValues:{
            email:"",
            password:""
        }
    })
  return (
    <div>
        <form action="">
          <div className='flex flex-col gap-y-3 mb-3'>
              <input {...register("email")} type="text" placeholder='Email' className='focus:outline-none w-[300px] px-3 py-3 outline-none border-[1px] border-[#272829] placeholder:text-[#272829] placeholder:font-semibold '/>
              <div className='flex items-center gap-x-2 justify-between w-[300px] px-3 py-3 outline-none border-[1px] border-[#272829]'>
                <input {...register("password")} type={showPass ? "text" :"password"} placeholder='Mật khẩu' className='w-full focus:outline-none placeholder:text-[#272829] placeholder:font-semibold'/>
                {showPass ? (
                  <AiFillEyeInvisible className='cursor-pointer text-[20px]' onClick={()=>setShowPass(false)}/>
                ):(
                  <AiFillEye className='cursor-pointer text-[20px]' onClick={()=>setShowPass(true)}/>
                )}
              </div>
          </div>
          <Button _hover={{bg:"#5B0E7F"}} w="300px" bg="#8614BC" color="white" borderRadius="none">Đăng nhập</Button>
        </form>
    </div>
  )
}

export default LoginForm