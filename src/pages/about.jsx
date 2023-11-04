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
  {
    name: 'Siddharth',
    designation: 'Core Member',
    link: '#',
    imagePosition: 'top',
    image: '',
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>
          About - Innovation & Training Club | Ramaiah Institute of Technology
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
                About Innovation & Training Club
              </h1>
              <div>
                <p className="text-start text-lg tracking-tight text-gray-900 lg:text-xl">
                  At the Innovation & Training Club, we are more than just a
                  community; we are a launchpad for tomorrow's innovators and
                  industry leaders. Our mission is to sculpt the mind and skills
                  of our members through a diverse array of courses that span
                  the most pulsating topics and trends of our time.
                </p>
                <p className="mt-10 text-lg tracking-tight text-gray-900 lg:text-xl">
                  Guided by seasoned industry experts and dedicated faculty
                  coordinators, our members immerse themselves in learning
                  experiences that blend cutting-edge theory with practical,
                  hands-on exercises. From the intricacies of software
                  development to the specific know-how required in core and
                  non-core fields, our curriculum is meticulously crafted to
                  prepare you for the professional world.
                </p>
                <p className="mt-10 text-start text-lg tracking-tight text-gray-900 lg:text-xl">
                  But we don't just stop at training. We believe in 'doing' as
                  the best kind of learning. That's why we're committed to
                  bridging the gap between theoretical knowledge and real-world
                  practice. Deserving candidates earn the opportunity to test
                  their mettle through internships with our esteemed club
                  partners, gaining invaluable on-the-job experience and
                  networking with industry insiders.
                </p>
                <p className="mt-10 text-start text-lg tracking-tight text-gray-900 lg:text-xl">
                  For those whose passion lies in the realm of research, we
                  offer a robust platform to explore, innovate, and contribute
                  to the body of knowledge in their field. In collaboration with
                  the International Society of Innovation (ISoI) and other
                  partnered organizations, we nurture and bring to fruition the
                  research aspirations of our students.
                </p>
              </div>

              {/* Create a button that will take to team page */}
              <div className="mt-10">
                <button className="rounded-lg bg-[#273D61] px-4 py-2 text-lg font-bold text-white">
                  <a href="/team">Meet Our Team</a>
                </button>
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
