import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import { ButtonLink } from '@/components/Button'
import heroimage from '@/images/aibackground.png'
import Image from 'next/image'

export default function Home() {
  const [open, setOpen] = useState(false)
  const [showButton, setShowButton] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <Head>
        <title>
          Innovation & Training Club | Ramaiah Institute of Technology
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
        <section className="bg-blue-50 text-gray-800">
          <div className="pt-10">
            <div className="relative mx-auto max-w-5xl">
              <Image
                className="opacity-50 lg:rounded-lg"
                src={heroimage}
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
              <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4 py-10 text-center align-middle md:px-10 lg:px-8 lg:py-16">
                <h1 className="text-3xl font-bold leading-none drop-shadow-xl md:text-4xl lg:text-6xl">
                  Innovation & Training Club
                </h1>
                <h1 className="text-xl text-black drop-shadow-md lg:text-2xl">
                  Ramaiah Institute Of Technology
                </h1>
                <p className="mt-1 text-lg font-semibold text-blue-900 drop-shadow-lg">
                  Forging Futures: Innovate, Educate, Elevate.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-5xl px-4 pb-16 pt-5 text-start sm:px-6 lg:px-8 lg:pt-8">
            <h1 className="mb-2 ml-2 text-xl font-bold leading-none lg:text-3xl">
              About ITC RIT
            </h1>
            <div className="rounded-xl bg-blue-100">
              <p class="text-md mx-auto p-2 tracking-tight text-slate-800 lg:p-4 lg:text-xl">
                At the Innovation & Training Club, we are more than just a
                community; we are a launchpad for tomorrow's innovators and
                industry leaders. Our mission is to sculpt the mind and skills
                of our members through a diverse array of courses that span the
                most pulsating topics and trends of our time.
              </p>
              <p class="text-md mx-auto p-2 tracking-tight text-slate-800 lg:p-4 lg:text-xl">
                Guided by seasoned industry experts and dedicated faculty
                coordinators, our members immerse themselves in learning
                experiences that blend cutting-edge theory with practical,
                hands-on exercises. From the intricacies of software development
                to the specific know-how required in core and non-core fields,
                our curriculum is meticulously crafted to prepare you for the
                professional world.
              </p>
              <p class="text-md mx-auto p-2 tracking-tight text-slate-800 lg:p-4 lg:text-xl">
                Guided by seasoned industry experts and dedicated faculty
                coordinators, our members immerse themselves in learning
                experiences that blend cutting-edge theory with practical,
                hands-on exercises. From the intricacies of software development
                to the specific know-how required in core and non-core fields,
                our curriculum is meticulously crafted to prepare you for the
                professional world.
              </p>
              <p class="text-md mx-auto p-2 tracking-tight text-slate-800 lg:p-4 lg:text-xl">
                For those whose passion lies in the realm of research, we offer
                a robust platform to explore, innovate, and contribute to the
                body of knowledge in their field. In collaboration with the
                International Society of Innovation (ISoI) and other partnered
                organizations, we nurture and bring to fruition the research
                aspirations of our students.
              </p>
            </div>
            <div className="flex flex-wrap justify-center">
              <button
                onClick={() => setOpen(true)}
                className="text-md mt-8 rounded bg-blue-900 px-4 py-1.5 font-semibold text-gray-50"
              >
                Know more
              </button>
            </div>
            <Transition.Root show={open} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                  <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 translate-y-0 sm:translate-y-0"
                      enterTo="opacity-100 translate-y-0 sm:scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                      leaveTo="opacity-0 translate-y-0 sm:translate-y-0"
                    >
                      <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl sm:p-6">
                        <div>
                          <div className="mt-3 sm:mt-5">
                            <Dialog.Title
                              as="h3"
                              className="text-lg font-medium leading-6 text-gray-900"
                            >
                              Briefs about ISoI (Instrument Society of India)
                            </Dialog.Title>
                            <div className="mt-2">
                              <p className="text-sm text-gray-500">
                                The Society of Instrumentation Professionals was
                                established in 1970 with help from the Indian
                                Institute of Science, Bangalore. It strives to
                                act as a link between academic institutions and
                                the instrumentation industry by organizing
                                several programs. It also conducts programs for
                                students and working professionals in the form
                                of short-term courses, symposia, and topical
                                reviews.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-5 sm:mt-6">
                          <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm"
                            onClick={() => setOpen(false)}
                          >
                            Close
                          </button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition.Root>
          </div>
          <div className="mx-auto mt-3 max-w-5xl items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <iframe
                className="aspect-video w-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/TkwXa7Cvfr8?si=G_GTWktIlPjPueCq"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top z-999 shadow-lg">
          <ArrowCircleUpIcon
            sx={{
              fontSize: '40px',
              width: 40,
              height: 40,
              padding: 0.7,
              borderRadius: 2,
              background: 'linear-gradient(45deg, #002a8f, #00b5f5)',
            }}
          />
        </button>
      )}
    </>
  )
}
