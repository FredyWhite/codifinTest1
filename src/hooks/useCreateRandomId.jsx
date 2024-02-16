import { useState } from 'react'

function useCreateRandomId() {

  const handleCreateRandomId = (length) => {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  return (
    {
      handleCreateRandomId
    }
  )
}

export default useCreateRandomId