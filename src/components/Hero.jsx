import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation, EffectFade, Keyboard } from 'swiper'
import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import { Member } from '@/components/Member'

export function Hero() {
  return (
    <section className="bg-blue-50 text-gray-800">
      <div className="container mx-auto flex flex-col items-center px-4 pt-8 text-center md:px-10 lg:px-8">
        <h1 className="text-2xl font-bold leading-none md:text-3xl lg:text-4xl">
          IEEE <span className="text-pri">Ramaiah Institute Of Technology</span>
        </h1>
        <p className="mt-1 text-lg text-red-600">
          Advancing Technology For Humanity
        </p>
      </div>
      <Container className="pb-16 pt-5 text-justify lg:pt-8">
        <p className="text-md mx-auto max-w-4xl rounded-xl bg-blue-100 p-3 tracking-tight text-slate-800 lg:text-xl">
          <b>IEEE-RIT Student Branch</b> was inaugurated in RIT in November
          2003. The branch endeavors to enrich the students of RIT with the
          latest developments in various fields of technology and research and
          ensure that their competency levels meet all the required standards in
          today's industry and participation in a kaleidoscope of technical
          events throughout the year, implicitly emphasizing on extra-curricular
          activities in a student's life.
        </p>
        <div className="flex flex-wrap justify-center">
          <ButtonLink
            href="https://site.ieee.org/sb-ritb/about-ieee/ieee-ramaiah/"
            className="text-md mt-8 rounded bg-sky-900 px-4 py-1.5 font-semibold text-gray-50"
          >
            Know more
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
