import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Member } from '@/components/Member'
import img1 from '@/images/team/shriya.jpg'
import img2 from '@/images/team/shravan_profile.jpg'

const members = [
  {
    name: 'Shriya Onkar',
    designation: 'Core Member',
    link: 'https://www.linkedin.com/in/shriya-r-onkar-b60116255',
    imagePosition: 'top',
    image:
      'https://github.com/githubhosting/githubhosting/assets/71520844/e8782a9f-fd4e-4c20-9837-6eae5cd8d9d0',
  },
  {
    name: 'Shravan',
    designation: 'Core Member',
    link: 'https://www.linkedin.com/in/shravanrevanna',
    imagePosition: 'top',
    image:
      'https://github.com/githubhosting/githubhosting/assets/71520844/a04bd72d-4ccd-4bca-bba2-e8cb8082695e',
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Team - Innovation & Training Club | Ramaiah Institute of Technology
        </title>
        <meta
          name="description"
          content="ITC aims to provide various courses on trending topics in the guidance of industry experts and various faculty coordinators."
        />
        <meta
          name="keywords"
          content="ITC, ITC RIT, ITC Ramaiah, ITC Ramaiah Institute of Technology, ITC RIT Bangalore, ITC Ramaiah Institute of Technology Bangalore, ITC RIT Bengaluru, ITC Ramaiah Institute of Technology Bengaluru, ITC RIT Aeromodelling, ITC Ramaiah Institute of Technology Aeromodelling, ITC RIT Innovation and Training Club, ITC Ramaiah Institute of Technology Innovation and Training Club, ITC RIT Innovation & Training Club, ITC Ramaiah Institute of Technology Innovation & Training Club, ITC RIT Innovation Club, ITC Ramaiah Institute of Technology Innovation Club, ITC RIT Training Club, ITC Ramaiah Institute of Technology Training Club, ITC RIT Innovation and Training Club Ramaiah Institute of Technology, ITC Ramaiah Institute of Technology Innovation and Training Club Ramaiah Institute of Technology, ITC RIT Innovation & Training Club Ramaiah Institute of Technology, ITC Ramaiah Institute of Technology Innovation & Training Club Ramaiah Institute of Technology"
        />
      </Head>
      <Header />
      <main>
        <div className="relative isolate mx-auto max-w-5xl px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-6xl py-4 sm:py-6 lg:py-8">
            <div className="">
              <h1 className="mb-6 text-3xl font-bold text-gray-900 sm:text-5xl">
                Team Members
              </h1>
              <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {members.map((member, index) => (
                  <Member
                    key={index}
                    name={member.name}
                    designation={member.designation}
                    link={member.link}
                    imagePosition={member.imagePosition}
                    image={member.image}
                  />
                ))}
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
