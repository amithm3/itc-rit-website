import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Member } from '@/components/Member'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation, EffectFade, Keyboard } from 'swiper'

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
    title: 'Image 20151',
    imageSrc: img151,
  },
  {
    title: 'Image 20152',
    imageSrc: img152,
  },
  {
    title: 'Image 20153',
    imageSrc: img153,
  },
  {
    title: 'Image 20154',
    imageSrc: img154,
  },
  {
    title: 'Image 20155',
    imageSrc: img155,
  },
  {
    title: 'Image 20156',
    imageSrc: img156,
  },
  {
    title: 'Image 20157',
    imageSrc: img157,
  },
  {
    title: 'Image 20158',
    imageSrc: img158,
  },
  {
    title: 'Image 20159',
    imageSrc: img159,
  },
  {
    title: 'Image 201510',
    imageSrc: img1510,
  },
  {
    title: 'Image 20161',
    imageSrc: img161,
  },
  {
    title: 'Image 20171',
    imageSrc: img171,
  },
  {
    title: 'Image 20172',
    imageSrc: img172,
  },
  {
    title: 'Image 20173',
    imageSrc: img173,
  },
  {
    title: 'Image 20174',
    imageSrc: img174,
  },
  {
    title: 'Image 20175',
    imageSrc: img175,
  },
  {
    title: 'Image 20176',
    imageSrc: img176,
  },
  {
    title: 'Image 20177',
    imageSrc: img177,
  },
  {
    title: 'Image 20178',
    imageSrc: img178,
  },
  {
    title: 'Image 20179',
    imageSrc: img179,
  },
  {
    title: 'Image 201710',
    imageSrc: img1710,
  },
  {
    title: 'Image 201711',
    imageSrc: img1711,
  },
  {
    title: 'Image 20181',
    imageSrc: img181,
  },
  {
    title: 'Image 20182',
    imageSrc: img182,
  },
  {
    title: 'Image 20183',
    imageSrc: img183,
  },
  {
    title: 'Image 20184',
    imageSrc: img184,
  },
  {
    title: 'Image 20185',
    imageSrc: img185,
  },
  {
    title: 'Image 20186',
    imageSrc: img186,
  },
  {
    title: 'Image 20187',
    imageSrc: img187,
  },
  {
    title: 'Image 20188',
    imageSrc: img188,
  },
  {
    title: 'Image 20189',
    imageSrc: img189,
  },
  {
    title: 'Image 201810',
    imageSrc: img1810,
  },
  {
    title: 'Image 201811',
    imageSrc: img1811,
  },
  {
    title: 'Image 201812',
    imageSrc: img1812,
  },
  {
    title: 'Image 20191',
    imageSrc: img191,
  },
  {
    title: 'Image 20192',
    imageSrc: img192,
  },
  {
    title: 'Image 20193',
    imageSrc: img193,
  },
  {
    title: 'Image 20221',
    imageSrc: img221,
  },
  {
    title: 'Image 20222',
    imageSrc: img222,
  },
  {
    title: 'Image 20223',
    imageSrc: img223,
  },
  {
    title: 'Image 20224',
    imageSrc: img224,
  },
  {
    title: 'Image 20225',
    imageSrc: img225,
  },
  {
    title: 'Image 20226',
    imageSrc: img226,
  },
  {
    title: 'Image 20227',
    imageSrc: img227,
  },
  {
    title: 'Image 20228',
    imageSrc: img228,
  },
  {
    title: 'Image 20229',
    imageSrc: img229,
  },
  {
    title: 'Image 202210',
    imageSrc: img2210,
  },
]
const resources2015 = resources.filter((resource) =>
  resource.title.includes('2015')
)
const resources2016 = resources.filter((resource) =>
  resource.title.includes('2016')
)
const resources2017 = resources.filter((resource) =>
  resource.title.includes('2017')
)
const resources2018 = resources.filter((resource) =>
  resource.title.includes('2018')
)
const resources2019 = resources.filter((resource) =>
  resource.title.includes('2019')
)
const resources2020 = resources.filter((resource) =>
  resource.title.includes('2020')
)
const resources2021 = resources.filter((resource) =>
  resource.title.includes('2021')
)
const resources2022 = resources.filter((resource) =>
  resource.title.includes('2022')
)

const yearsData = [
  {
    year: 2023,
    achievements: [
      '34th place overall',
      'First aircraft to reach 3.4 meter long wingspan in the history of quatlas.',
    ],
  },
  {
    year: 2022,
    achievements: [
      '9th place overall standing',
      '1st place in Asia',
      '2nd place in technical design report',
    ],
    resources: resources2022,
  },
  {
    year: 2021,
    achievements: [
      '10th in overall',
      '6th in technical design report',
      '10th place in outstanding technical presentation',
    ],
    resources: resources2021,
  },
  {
    year: 2020,
    achievements: [
      '8th place overall standing',
      '4th place in technical presentation',
      '19th place in outstanding technical design report',
    ],
    resources: resources2020,
  },
  {
    year: 2019,
    achievements: [
      '5th overall standing',
      '7th place in technical design report',
      '15th place in technical presentation',
    ],
    resources: resources2019,
  },
  {
    year: 2018,
    achievements: [
      'Ranked 7th in the flight rounds, with the first ever successful flight round in the history of the team.',
      'Total payload lifted - 7.25kgs / 16lbs, highest in Asia for the third round.',
      'Ranked 10th in the Oral Presentation.',
      'Bonus points in presentation for innovative fuselage design.',
    ],
    resources: resources2018,
  },
  {
    year: 2017,
    achievements: [
      'Name of the aircraft - Qriosity',
      'Ranked 12th in the competition.',
      'Achieved 2nd position in Asia.',
      'Implemented an elliptical wing for better performance.',
      'stood 8th worldwide in the presentation rounds.',
      'Stood 1st in Asia in the presentation rounds.',
    ],
    resources: resources2017,
  },
  {
    year: 2016,
    achievements: [
      '30th place in Elliott & Dorothy Green Overall Regular Class Award.',
      '30th place in Design report.',
      '24th place in Technical presentation.',
    ],
    resources: resources2016,
  },
  {
    year: 2015,
    achievements: [
      'The first year of the team',
      '15th place worldwide overall',
      '11th place in the maximum payload capacity by lifting of 13.6Kg of weight',
      'Also the highest payload carried by an indian team in the history of the competition',
    ],
    resources: resources2015,
  },
]

function YearSection({ yearData }) {
  return (
    <div className="">
      <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900 xl:text-4xl">
        Year {yearData.year}
      </h2>
      <div className="mt-4 max-w-2xl">
        {yearData.resources && <YearSwiper resource={yearData.resources} />}
      </div>
      <ul className="ml-4 list-disc xl:text-xl">
        {yearData.achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
      <div className="mt-4 border border-b"></div>
    </div>
  )
}

function YearSwiper({ resource }) {
  return (
    <Swiper
      spaceBetween={30}
      effect={'fade'}
      loop={true}
      autoHeight={true}
      centeredSlides={true}
      autoplay={{
        delay: 5000000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      keyboard={true}
      modules={[Autoplay, Pagination, Navigation, EffectFade, Keyboard]}
      className="mySwiper"
    >
      {resource.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            className="h-auto w-full rounded-lg shadow-lg"
            src={image.imageSrc}
            alt={image.title}
            // width={1920}
            // height={1080}
            objectFit="cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
export default function Home() {
  return (
    <>
      <Head>
        <title>
          Achievements | Quatlas Aeromodelling Ramaiah Institute of Technology
        </title>
        <meta
          name="description"
          content="Achievements | Quatlas Aeromodelling Ramaiah Institute of Technology"
        />
      </Head>
      <Header />
      <main>
        <div className="relative isolate mx-auto max-w-4xl px-6 pt-10 lg:px-8">
          <div className="mx-auto max-w-6xl py-4 sm:py-6 lg:py-8">
            <div className="text-justify">
              <h1 className="mb-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Achievements
              </h1>
              <h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
                Past Achievements:
              </h1>
              <div>
                {yearsData.map((yearData, index) => (
                  <YearSection key={index} yearData={yearData} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
