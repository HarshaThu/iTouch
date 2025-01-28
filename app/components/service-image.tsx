"use client"

import Image from 'next/image'

export function ServiceImage() {
  return (
    <div className="md:w-2/5 h-[800px] rounded-lg overflow-hidden sticky top-8">
      <Image
        src="/images/image.jpg"
        alt="Relaxation services"
        className="w-full h-full object-cover"
        width={800}
        height={1200}
        priority
      />
    </div>
  )
}
