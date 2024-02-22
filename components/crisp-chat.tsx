'use client'

import { useEffect } from 'react'
import { Crisp } from 'crisp-sdk-web'

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('8b89ebd4-2b78-424f-be88-b34f0e3fa04b')
  }, [])

  return null
}
