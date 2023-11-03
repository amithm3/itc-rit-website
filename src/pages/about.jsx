import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Member } from '@/components/Member'

const members = [
  {
    name: 'Chaithra G P',
    designation: 'Team Captain',
    link: 'https://www.linkedin.com/in/chaithra-g-p-47816a222/',
    imagePosition: 'bottom',
    image:
      'https://github.com/githubhosting/web-technologies-lab/assets/124687677/2391bc88-b0ec-4f6b-bd97-7f2d5742a963',
  },
  {
    name: 'Sohel Bagawan',
    designation: 'Vice Captain',
    link: 'https://www.linkedin.com/in/sohel-bagban-758406214',
    image:
      'https://github.com/githubhosting/web-technologies-lab/assets/124687677/195ca9c6-a03c-436f-88ef-0b78ccf28db4',
  },
  {
    name: 'Puneeth L',
    designation: 'CAED Design',
    link: 'https://www.linkedin.com/in/puneeth-l-727801290',
    image:
      'https://github.com/githubhosting/web-technologies-lab/assets/124687677/af73ad34-1fb9-4550-bd8b-9c260b1a6d51',
  },
  {
    name: 'Vinayak kulkarni ',
    designation: 'CAED Design',
    link: 'https://www.linkedin.com/in/vinayak-kulakarani-72870a284',
    image:
      'https://github.com/githubhosting/web-technologies-lab/assets/124687677/d5c0372e-050d-4145-8e65-debabcf506e2',
  },
  {
    name: 'Bhandavi N',
    designation: 'Conceptual Subsystem',
    link: 'https://www.linkedin.com/in/bhandavi-n-swamy-7bb174285',
    image:
      'https://github.com/githubhosting/web-technologies-lab/assets/124687677/7474798a-f8ef-4fc0-928a-9aacbacda3b8',
  },
  {
    name: 'Avishrant Bhattacharyya',
    designation: 'Conceptual Subsystem',
    link: 'https://www.linkedin.com/in/avishrant-bhattacharyya-910838280/',
    image:
      'https://github.com/githubhosting/web-technologies-lab/assets/124687677/c408e7f3-001a-410a-bb48-e932a35da4cf',
  },
  {
    name: 'Vinayak kulkarni',
    designation: 'Conceptual Subsystem',
    link: 'https://www.linkedin.com/in/vinayak-kulakarani-72870a284',
    image:
      'https://github.com/githubhosting/web-technologies-lab/assets/71520844/7487b784-d752-4f71-9fca-1309bbdf145f',
  },
  {
    name: 'Harsh Verma',
    designation: 'Non-Tech',
    link: 'https://www.linkedin.com/in/harsh-verma-a33612275',
    imagePosition: 'top',
    image:
      'https://github.com/githubhosting/web-technologies-lab/assets/124687677/0e78a81a-69ac-458c-ba07-92f4f44c5a8d',
  },

  {
    name: 'Manu Smriti',
    designation: 'Non-Tech',
    link: 'https://www.linkedin.com/in/manu-smriti-7b1b3a1b3',
    image:
      'https://github.com/githubhosting/quatlas-aeromodelling-msrit/assets/71520844/fbbbdeed-da4a-41ae-943f-27bf6dee2d5e',
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
          content="ITC aims to provide various courses on trending topics in the guidance of industry experts and various faculty coordinator."
        />
        <meta
          name="keywords"
          content="ITC, ITC RIT, ITC Ramaiah, ITC Ramaiah Institute of Technology, ITC RIT Bangalore, ITC Ramaiah Institute of Technology Bangalore, ITC RIT Bengaluru, ITC Ramaiah Institute of Technology Bengaluru, ITC RIT Aeromodelling, ITC Ramaiah Institute of Technology Aeromodelling, ITC RIT Innovation and Training Club, ITC Ramaiah Institute of Technology Innovation and Training Club, ITC RIT Innovation & Training Club, ITC Ramaiah Institute of Technology Innovation & Training Club, ITC RIT Innovation Club, ITC Ramaiah Institute of Technology Innovation Club, ITC RIT Training Club, ITC Ramaiah Institute of Technology Training Club, ITC RIT Innovation and Training Club Ramaiah Institute of Technology, ITC Ramaiah Institute of Technology Innovation and Training Club Ramaiah Institute of Technology, ITC RIT Innovation & Training Club Ramaiah Institute of Technology, ITC Ramaiah Institute of Technology Innovation & Training Club Ramaiah Institute of Technology, ITC RIT Innovation Club Ramaiah Institute of Technology, ITC Ramaiah Institute of Technology Innovation Club Ramaiah Institute of Technology, ITC RIT Training Club Ramaiah Institute of Technology, ITC Ramaiah Institute of Technology Training Club Ramaiah Institute of Technology"
        />
      </Head>
      <Header />
      <main>
        <div className="relative isolate mx-auto max-w-5xl px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-6xl py-4 sm:py-6 lg:py-8">
            <div className="">
              <h1 className="mb-6 text-3xl font-bold text-gray-900 sm:text-6xl">
                About Innovation & Training Club
              </h1>
              <div>
                <h1 className="text-start text-lg tracking-tight text-gray-900 lg:text-xl">
                  gdfbvcx
                </h1>

                <h1 className="mt-10 text-lg tracking-tight text-gray-900 lg:text-xl">
                  zxvc
                </h1>

                <h1 className="mt-10 text-start text-lg tracking-tight text-gray-900 lg:text-xl">
                  zvczdv
                </h1>

                <h1 className="mt-10 text-start text-lg tracking-tight text-gray-900 lg:text-xl">
                  sdzcvx
                </h1>
              </div>

              <h1 className="my-10 text-2xl font-bold tracking-tight text-gray-900">
                Team Members
              </h1>

              {/* <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {members.map((member, index) => (
                  <Member
                    key={index}
                    name={member.name}
                    designation={member.designation}
                    link={member.link}
                    imagePosition={member.imagePosition}
                    image={member.image}
                  ></Member>
                ))}
              </div> */}
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
