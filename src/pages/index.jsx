import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import { ButtonLink } from '@/components/Button'
import heroimage from '@/images/aibackground.png'
import Image from 'next/image'
import firebase from 'firebase/compat/app'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import 'firebase/compat/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyBQoNB26QBTLBQV4bIOUjcE_v3v8f2T3js',
  authDomain: 'itc-rit.firebaseapp.com',
  projectId: 'itc-rit',
  storageBucket: 'itc-rit.appspot.com',
  messagingSenderId: '657141071790',
  appId: '1:657141071790:web:b1db2c548b5d9f4b48d23f',
  measurementId: 'G-6BWSCK5WB0',
}
firebase.initializeApp(firebaseConfig)

export default function Home() {
  const [open, setOpen] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const [rsvs, setRsvs] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    usn: '',
    dept: '',
    topics: '',
    phoneNo: '',
  })
  const firestore = firebase.firestore()

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await firestore.collection('rsvp').get()
  //     setRsvs(data.docs.map((doc) => doc.data()))
  //   }
  //   fetchData()
  // }, [])
  // console.log(rsvs)

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

  const isValidIndianPhoneNumber = (phoneNo) => {
    const cleanedPhoneNo = phoneNo.replace(/\s+/g, '').replace(/^\+91/, '')
    const phoneNoRegex = /^\d{10}$/
    return phoneNoRegex.test(cleanedPhoneNo)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const cleanedPhoneNo = formData.phoneNo
      .replace(/\s+/g, '')
      .replace(/^\+91/, '')
    if (!isValidIndianPhoneNumber(cleanedPhoneNo)) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        phoneNo: '',
      }))
      toast.error("That's a funky number! Mind double-checking it for us?")
      console.error('Invalid phone number:', formData.phoneNo)
      return
    }

    const newRSVP = {
      ...formData,
      phoneNo: cleanedPhoneNo,
    }

    try {
      const docRef = await firestore.collection('rsvpnew').add(newRSVP)
      console.log('RSVP submitted:', newRSVP, 'with doc ID:', docRef.id)
      toast.success(`Eureka, ${formData.name}! Your RSVP is submitted!`)
      setFormData({
        name: '',
        email: '',
        usn: '',
        dept: '',
        topics: '',
        phoneNo: '',
      })
    } catch (error) {
      console.error('Error submitting RSVP:', error.message)
      toast.error(
        'Oops! Something went wrong. Please try again or contact support.'
      )
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
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
          <div className="relative mx-auto max-w-5xl">
            <div className="flex flex-1 flex-col justify-center px-6 py-6 lg:px-8">
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  RSVP for the Orientation
                </h2>
              </div>
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm lg:max-w-2xl">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Name Input */}
                  <div className="mb-4">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <p className="pt-1 text-sm italic text-gray-500">
                      *No fake names, please! We're looking at you, Batman.
                    </p>
                  </div>

                  {/* Email */}
                  <div className="mb-4">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <p className="pt-1 text-sm italic text-gray-500">
                      *We promise no spam. Scouts honor!
                    </p>
                  </div>

                  {/* USN Input */}
                  <div className="mb-4">
                    <input
                      id="usn"
                      name="usn"
                      type="text"
                      placeholder="Your USN"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={formData.usn}
                      onChange={handleChange}
                    />
                    <p className="pt-1 text-sm italic text-gray-500">
                      *Freshers, it's okay if it's temporary. We get it, you're
                      new!
                    </p>
                  </div>

                  {/* Department Input */}
                  <div className="mb-4">
                    <input
                      id="dept"
                      name="dept"
                      type="text"
                      placeholder="Your Department"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={formData.dept}
                      onChange={handleChange}
                    />
                    <p className="pt-1 text-sm italic text-gray-500">
                      *No, we're not Hogwarts sorting. Just need your
                      department.
                    </p>
                  </div>

                  {/* Topics Input */}
                  <div className="mb-4">
                    <input
                      id="topics"
                      name="topics"
                      type="text"
                      placeholder="Topics of Interest"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={formData.topics}
                      onChange={handleChange}
                    />
                    <p className="pt-1 text-sm italic text-gray-500">
                      *What are you interested in? like AI, ML, LLMs, Gen AI,
                      Cyber Security etc.
                    </p>
                  </div>

                  {/* Phone Number Input */}
                  <div className="mb-4">
                    <input
                      id="phoneno"
                      name="phoneNo"
                      type="text"
                      placeholder="Your Phone Number"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={formData.phoneNo}
                      onChange={handleChange}
                    />
                    <p className="pt-1 text-sm italic text-gray-500">
                      *We promise no prank calls or any spam messages.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Submit RSVP
                    </button>
                  </div>
                </form>
                <div className="mt-8 flex justify-center">
                  <a
                    href="https://chat.whatsapp.com/Fvy6sSk2rKO7KR6XWO6q8j"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                      Join Whatsapp Group
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 text-gray-800">
          <div className="mx-auto max-w-5xl px-4 pb-16 pt-5 text-start sm:px-6 lg:px-8 lg:pt-8">
            <h1 className="mb-2 ml-2 text-center text-xl font-bold leading-none lg:text-3xl">
              About ITC RIT
            </h1>
            <div className="rounded-xl bg-blue-100">
              <p className="text-md mx-auto p-2 tracking-tight text-slate-800 lg:p-4 lg:text-xl">
                Welcome to the Innovation & Training Club, where every session
                is a step towards your future. Our club is a powerhouse of
                knowledge, offering specialized courses in the most trending
                topics, designed and delivered by industry stalwarts and
                academic experts.
              </p>
              <p className="text-md mx-auto p-2 tracking-tight text-slate-800 lg:p-4 lg:text-xl">
                As a member, you stand at the forefront of innovation, equipped
                with the tools to navigate and master the ever-evolving
                technological and professional landscapes. We're not just about
                learning; we're about applying. Through our exclusive
                partnerships, we offer internships across a spectrum of
                fields—software, core industries, and beyond—turning learning
                into real-world impact for deserving talents.
              </p>
              <p className="text-md mx-auto p-2 tracking-tight text-slate-800 lg:p-4 lg:text-xl">
                Research enthusiasts, we've got you covered too. Collaborate
                with leading organizations like ISoI, propel your studies, and
                contribute to groundbreaking work that defines tomorrow.
              </p>
              <p className="text-md mx-auto p-2 tracking-tight text-slate-800 lg:p-4 lg:text-xl">
                Step into the Innovation & Training Club, where your passion
                meets our expertise. Together, let's shape the future.
              </p>
              <p className="text-md mb-6 rounded px-4 py-1.5 text-center font-semibold text-slate-800">
                Join us. Innovate. Train. Thrive.
              </p>
            </div>
            <div className="flex flex-wrap justify-center">
              <a href="/about">
                <button className="text-md mt-8 rounded bg-blue-900 px-4 py-1.5 font-semibold text-gray-50">
                  Know more
                </button>
              </a>
              {/* <button
                onClick={() => setOpen(true)}
                className="text-md mt-8 rounded bg-blue-900 px-4 py-1.5 font-semibold text-gray-50"
              >
                Know more
              </button> */}
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
                              To know more about us, Attend our Orientation
                            </Dialog.Title>
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
