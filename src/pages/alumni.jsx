import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Member } from '@/components/Member'

const alumni = [
  {
    name: 'Rakshith K Salian',
    designation: 'CAD Designer & Fabricator',
    link: 'https://www.linkedin.com/in/rakshith-k-salian-4972081a8',
    image:
      'https://github.com/githubhosting/web-technologies-lab/assets/71520844/a2a7d37f-861c-4fe2-ba7c-d1199145b128',
  },
  {
    name: 'Vedarth Raghatate',
    designation: 'Core team member',
    link: 'https://www.linkedin.com/in/vedarth-raghatate-03a840172',
    imagePosition: 'top',
    image:
      'https://github.com/githubhosting/web-technologies-lab/assets/71520844/d98e7a53-3914-4c2d-aa70-cab9fba754ab',
  },
  {
    name: 'Ananya Muralidhar Raju',
    designation: 'Head of Technical Design Report and Presentation Team',
    link: 'linkedin.com/in/ananya-muralidhar-a27400155',
    image:
      'https://github.com/githubhosting/web-technologies-lab/assets/71520844/e6ea8453-ea0e-4ac4-9a37-b1e2a993671f',
  },
  {
    name: 'Sanjeev Navaratna',
    designation: 'Fabrication and Supply Chain Head',
    link: '#',
    image:
      'https://github.com/githubhosting/web-technologies-lab/assets/71520844/396db4ee-df98-467f-adb1-df95afada481',
  },
  {
    name: 'Aryan Vaidya',
    designation: 'Fabrication Team',
    link: 'https://www.linkedin.com/in/aryan-r-vaidya',
    imagePosition: 'top',
    image:
      'https://github.com/githubhosting/web-technologies-lab/assets/71520844/4df1723b-cbd5-4c4b-a150-01b752fe79d9',
  },
  {
    name: 'Anubhav Vishwakarma',
    designation: 'Team Captain',
    link: 'https://www.linkedin.com/in/anubhav029',
    image:
      'https://github.com/githubhosting/web-technologies-lab/assets/71520844/7c009007-b4ad-4281-b110-0e9eba36b2f4',
  },
  {
    name: 'Partha M M',
    designation: 'Vice Captain',
    link: 'https://in.linkedin.com/in/partha-meravanige',
    image:
      'https://github.com/githubhosting/web-technologies-lab/assets/71520844/f0e3aae9-b39d-4567-b538-a9227ad658e9',
  },
  {
    name: 'Rishabh Menon',
    designation: 'Chief Designer/Vice-Captain',
    link: 'https://www.linkedin.com/in/rishabh-menon-485714224',
    imagePosition: 'top',
    image:
      'https://github.com/githubhosting/web-technologies-lab/assets/71520844/64306757-7999-4c66-bf83-0629c3889555',
  },
  {
    name: 'Rahul Deodhar',
    designation: 'Team Captain',
    link: 'https://www.linkedin.com/in/rahulp-d',
    image:
      'https://github.com/githubhosting/web-technologies-lab/assets/71520844/3f8e6a2f-bd85-4142-b694-8dd6979b2e5a',
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>
          About | Quatlas Aeromodeling Ramaiah Institute of Technology
        </title>
        <meta
          name="description"
          content="Team Quatlas is the official aeromodelling team of RIT participating in SAE Aero design competition."
        />
        <meta
          name="keywords"
          content="Quatlas, Aeromodelling in RIT, Quatlas Ramaiah"
        />
      </Head>
      <Header />
      <main>
        <div className="relative isolate mx-auto max-w-5xl px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-6xl py-4 sm:py-6 lg:py-8">
            <div className="">
              <h1 className="mb-6 text-3xl font-bold text-gray-900 sm:text-6xl">
                Alumin Quatlas Aeromodelling
              </h1>

              <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {alumni.map((member, index) => (
                  <Member
                    key={index}
                    name={member.name}
                    designation={member.designation}
                    link={member.link}
                    imagePosition={member.imagePosition}
                    image={member.image}
                  ></Member>
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
