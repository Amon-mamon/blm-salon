import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { UserFormValues, userSchema } from '../schema/user.schema'
const SignUp = () => {

  const { handleSubmit, register, formState:{errors}} = useForm<UserFormValues>({
    resolver:zodResolver(userSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirm_password: ""
    }
  })


  return (
    <div>
      qwe
    </div>
  )
}

export default SignUp