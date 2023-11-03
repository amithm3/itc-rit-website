import Head from 'next/head'
import { useState, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ButtonLink } from '@/components/Button'
import { SectionHeading } from '@/components/SectionHeading'
import { Container } from '@/components/Container'
import img151 from '@/images/2015/2015u/1.jpeg'
import img152 from '@/images/2015/2015u/Picture2.jpeg'
import img153 from '@/images/2015/2015u/Picture3.jpeg'
import img154 from '@/images/2015/2015u/Picture4.jpeg'
import img155 from '@/images/2015/2015u/Picture5.jpeg'
import img156 from '@/images/2015/2015u/Picture6.jpeg'
import img157 from '@/images/2015/2015u/Picture7.jpeg'
import img158 from '@/images/2015/2015u/Picture8.jpeg'
import img159 from '@/images/2015/2015u/Picture9.jpeg'
import img1510 from '@/images/2015/2015u/Picture10.jpeg'
import img161 from '@/images/2016/2016u/Picture31.jpeg'
import img171 from '@/images/2017/2017u/Picture1.jpeg'
import img172 from '@/images/2017/2017u/Picture2.jpeg'
import img173 from '@/images/2017/2017u/Picture3.jpeg'
import img174 from '@/images/2017/2017u/Picture4.jpeg'
import img175 from '@/images/2017/2017u/Picture5.jpeg'
import img176 from '@/images/2017/2017u/Picture6.jpeg'
import img177 from '@/images/2017/2017u/Picture7.jpeg'
import img178 from '@/images/2017/2017u/Picture8.jpeg'
import img179 from '@/images/2017/2017u/Picture9.jpeg'
import img1710 from '@/images/2017/2017u/Picture10.jpeg'
import img1711 from '@/images/2017/2017u/Picture11.jpeg'
import img181 from '@/images/2018/2018u/Picture1.jpeg'
import img182 from '@/images/2018/2018u/Picture2.jpeg'
import img183 from '@/images/2018/2018u/Picture3.jpeg'
import img184 from '@/images/2018/2018u/Picture4.jpeg'
import img185 from '@/images/2018/2018u/Picture5.jpeg'
import img186 from '@/images/2018/2018u/Picture6.jpeg'
import img187 from '@/images/2018/2018u/Picture7.jpeg'
import img188 from '@/images/2018/2018u/Picture8.jpeg'
import img189 from '@/images/2018/2018u/Picture9.jpeg'
import img1810 from '@/images/2018/2018u/Picture10.jpeg'
import img1811 from '@/images/2018/2018u/Picture11.jpeg'
import img1812 from '@/images/2018/2018u/Picture12.jpeg'
import img191 from '@/images/2019/2019u/Picture1.jpeg'
import img192 from '@/images/2019/2019u/Picture2.jpeg'
import img193 from '@/images/2019/2019u/Picture3.jpeg'
import img221 from '@/images/2022/Original/Image1.jpg'
import img222 from '@/images/2022/Original/Image2.jpg'
import img223 from '@/images/2022/Original/Image3.jpg'
import img224 from '@/images/2022/Original/Image4.jpg'
import img225 from '@/images/2022/Original/Image5.jpg'
import img226 from '@/images/2022/Original/Image6.jpg'
import img227 from '@/images/2022/Original/Image7.jpg'
import img228 from '@/images/2022/Original/Image8.jpg'
import img229 from '@/images/2022/Original/Image9.jpg'
import img2210 from '@/images/2022/Original/Image10.jpg'

const resources = [
  {
    title: 'Image 151',
    imageSrc: img151,
  },
  {
    title: 'Image 152',
    imageSrc: img152,
  },
  {
    title: 'Image 153',
    imageSrc: img153,
  },
  {
    title: 'Image 154',
    imageSrc: img154,
  },
  {
    title: 'Image 155',
    imageSrc: img155,
  },
  {
    title: 'Image 156',
    imageSrc: img156,
  },
  {
    title: 'Image 157',
    imageSrc: img157,
  },
  {
    title: 'Image 158',
    imageSrc: img158,
  },
  {
    title: 'Image 159',
    imageSrc: img159,
  },
  {
    title: 'Image 1510',
    imageSrc: img1510,
  },
  {
    title: 'Image 161',
    imageSrc: img161,
  },
  {
    title: 'Image 171',
    imageSrc: img171,
  },
  {
    title: 'Image 172',
    imageSrc: img172,
  },
  {
    title: 'Image 173',
    imageSrc: img173,
  },
  {
    title: 'Image 174',
    imageSrc: img174,
  },
  {
    title: 'Image 175',
    imageSrc: img175,
  },
  {
    title: 'Image 176',
    imageSrc: img176,
  },
  {
    title: 'Image 177',
    imageSrc: img177,
  },
  {
    title: 'Image 178',
    imageSrc: img178,
  },
  {
    title: 'Image 179',
    imageSrc: img179,
  },
  {
    title: 'Image 1710',
    imageSrc: img1710,
  },
  {
    title: 'Image 1711',
    imageSrc: img1711,
  },
  {
    title: 'Image 181',
    imageSrc: img181,
  },
  {
    title: 'Image 182',
    imageSrc: img182,
  },
  {
    title: 'Image 183',
    imageSrc: img183,
  },
  {
    title: 'Image 184',
    imageSrc: img184,
  },
  {
    title: 'Image 185',
    imageSrc: img185,
  },
  {
    title: 'Image 186',
    imageSrc: img186,
  },
  {
    title: 'Image 187',
    imageSrc: img187,
  },
  {
    title: 'Image 188',
    imageSrc: img188,
  },
  {
    title: 'Image 189',
    imageSrc: img189,
  },
  {
    title: 'Image 1810',
    imageSrc: img1810,
  },
  {
    title: 'Image 1811',
    imageSrc: img1811,
  },
  {
    title: 'Image 1812',
    imageSrc: img1812,
  },
  {
    title: 'Image 191',
    imageSrc: img191,
  },
  {
    title: 'Image 192',
    imageSrc: img192,
  },
  {
    title: 'Image 193',
    imageSrc: img193,
  },
  {
    title: 'Image 221',
    imageSrc: img221,
  },
  {
    title: 'Image 222',
    imageSrc: img222,
  },
  {
    title: 'Image 223',
    imageSrc: img223,
  },
  {
    title: 'Image 224',
    imageSrc: img224,
  },
  {
    title: 'Image 225',
    imageSrc: img225,
  },
  {
    title: 'Image 226',
    imageSrc: img226,
  },
  {
    title: 'Image 227',
    imageSrc: img227,
  },
  {
    title: 'Image 228',
    imageSrc: img228,
  },
  {
    title: 'Image 229',
    imageSrc: img229,
  },
  {
    title: 'Image 2210',
    imageSrc: img2210,
  },
]
const LoadingAnimation = () => (
  <div
    role="status"
    class="animate-pulse space-y-8 md:flex md:items-center md:space-x-8 md:space-y-0"
  >
    <div class="flex h-48 w-full items-center justify-center rounded-lg bg-gray-300 dark:bg-gray-700 sm:w-96">
      <svg
        class="h-10 w-10 text-gray-200 dark:text-gray-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 18"
      >
        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
      </svg>
    </div>
  </div>
)

export default function Gallery() {
  const [imageLoaded, setImageLoaded] = useState(false)
  return (
    <>
      <Head>
        <title>Gallery - QUATLAS | Ramaiah Institute of Technology</title>
      </Head>
      <Header />
      <section
        id="resources"
        aria-labelledby="resources-title"
        className="scroll-mt-8 bg-blue-50 py-8 sm:scroll-mt-32 sm:py-5 lg:py-8"
      >
        <Container>
          <p className="mt-2 flex justify-center font-display text-4xl font-medium tracking-tight text-slate-800">
            Gallery
          </p>
        </Container>
        <Container className="mt-16">
          <ol className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20">
            {resources.map((resource) => {
              return (
                <li
                  key={resource.title}
                  className="grid auto-rows-min grid-cols-1 items-center gap-6 px-3 sm:gap-y-8 md:grid-cols-1 lg:grid-cols-1 xl:px-6"
                >
                  <div className="relative h-48 overflow-hidden rounded-lg shadow-lg md:h-56 lg:h-72">
                    <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#0f172a)]">
                      <Image src={resource.imageSrc} alt={resource.title} />
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
        </Container>
      </section>
      <Footer />
    </>
  )
}
