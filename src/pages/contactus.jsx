import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import logoimg from '@/images/logos/logo-dark.png'
import { ButtonLink } from '@/components/Button'
import { SectionHeading } from '@/components/SectionHeading'
const contacts = [
  {
    role: 'Team leader',
    name: 'Chaitra',
    email: 'chaithragp1503@gmail.com',
    phone: '+91 8147421126',
  },
  {
    role: 'Non-Tech',
    name: 'Manu',
    email: 'manusmriti31@gmail.com',
    phone: '+91 9328506454',
  },
]

export default function Contactus() {
  return (
    <>
      <div className="neumorphismbg">
        <Head>
          <title>Contact Us - IEEE</title>
        </Head>
        <Header />
        <section class="body-font text-gray-600 ">
          <div class="container mx-auto flex flex-col px-5 py-12">
            <div class="mx-auto lg:w-4/6">
              <div class="mt-10 flex flex-col sm:flex-row">
                <div class="text-center sm:w-1/3 sm:py-8 sm:pr-8">
                  <div class="flex flex-col items-center justify-center text-center">
                    <p class="text-dark flex items-center text-sm font-medium">
                      ESB II , 119, R&D - 1 Laboratory, Quatlas-RIT Ramaiah
                      Institute of Technology MSR Nagar, MSRIT Post, Mathikere
                      Bangalore-560054
                    </p>
                    <p class="text-dark mt-5 flex items-center text-sm font-medium">
                      <span class="mr-3 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="21"
                          fill="currentColor"
                          class="bi bi-envelope"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                        </svg>
                      </span>
                      <span>
                        <a href="mailto:aeromodellingquatlas@gmail.com">
                          aeromodelling.quatlas@gmail.com
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
                <div class="mb-10 mt-4 rounded-xl border-t border-gray-200 bg-slate-100 p-4 text-justify sm:mt-0 sm:w-2/3 sm:border-l sm:border-t-0 sm:py-8 sm:pl-8 sm:text-left">
                  <p class="mb-4 text-base">
                    <b>Quatlas Aeromodelling</b> is an official aeromodelling
                    team of RIT. We participate in the SAE Aero Design
                    Competition held at the USA annually. We are looking for
                    motivated & talented students to recruit to the team &
                    successfully represent our college in the competition. Come
                    join us and learn more about what we do!
                  </p>
                </div>
              </div>
              <div className="rounded-lg bg-gray-100 p-4 text-center">
                <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
                {contacts.map((contact, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="mb-2 text-xl">{`${contact.role} - ${contact.name}`}</h3>
                    <div>
                      <strong>Email: </strong>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-blue-600 hover:underline"
                      >
                        {contact.email}
                      </a>
                    </div>
                    <div>
                      <strong>Contact Number: </strong>
                      <a
                        href={`tel:${contact.phone.replace('+91', '')}`}
                        className="text-blue-600 hover:underline"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}
