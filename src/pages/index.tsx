import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/_navbar'
import FirstSection from './_firstSec'
import { Blur } from '@/components/_black'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Blur />
      <FirstSection />
    </div>
  )
}
