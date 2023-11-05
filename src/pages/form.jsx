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

export function Counter() {
  const next_event = '2023-11-06T09:45:00.000Z'
  const eventdate = new Date(next_event)
  const calculateTimeLeft = () => {
    const today = new Date()
    const diffTime = eventdate - today
    const diffSeconds = Math.ceil(diffTime / 1000)
    const days_ = Math.floor(diffSeconds / 86400)
    const hours_ = Math.floor((diffSeconds % 86400) / 3600)
    const minutes_ = Math.floor((diffSeconds % 3600) / 60)
    const seconds_ = Math.floor(diffSeconds % 60)

    return { days_, hours_, minutes_, seconds_ }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    // Update the counter every second
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    // Clear interval on re-render to avoid memory leaks
    return () => clearInterval(interval)
  }, [])

  // Display the countdown timer
  return (
    <div>
      <p className="flex items-center justify-center pt-5 text-2xl text-slate-900 lg:flex-none">
        Event starts in
      </p>
      <div className="grid auto-cols-max grid-flow-col justify-center gap-3 py-5 text-center lg:gap-6">
        <div className="text-black-content rounded-box flex flex-col bg-white p-2">
          <span className="countdown font-mono text-5xl">
            <span style={{ '--value': timeLeft.days_ }}></span>
          </span>
          days
        </div>
        <div className="text-black-content rounded-box flex flex-col bg-white p-2">
          <span className="countdown font-mono text-5xl">
            <span style={{ '--value': timeLeft.hours_ }}></span>
          </span>
          hours
        </div>
        <div className="text-black-content rounded-box flex flex-col bg-white p-2">
          <span className="countdown font-mono text-5xl">
            <span style={{ '--value': timeLeft.minutes_ }}></span>
          </span>
          min
        </div>
        <div className="text-black-content rounded-box flex flex-col bg-white p-2">
          <span className="countdown font-mono text-5xl">
            <span style={{ '--value': timeLeft.seconds_ }}></span>
          </span>
          sec
        </div>
      </div>
    </div>
  )
}

export default function Form() {
  const [open, setOpen] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const [rsvs, setRsvs] = useState([])
  const [formData, setFormData] = useState({
    experienceWithAITools: '',
    aiInterest: '',
    favoriteAIPrompt: '',
    impressiveAICreation: '',
    futurePredictions: '',
    aiTool: '',
  })
  const firestore = firebase.firestore()

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

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const docRef = await firestore
        .collection('aiSurveyResponses')
        .add(formData)
      console.log('Form submitted:', formData, 'with doc ID:', docRef.id)
      toast.success('Your survey response is submitted!')
      // Reset the form data
      setFormData({
        experienceWithAITools: '',
        aiInterest: '',
        favoriteAIPrompt: '',
        impressiveAICreation: '',
        futurePredictions: '',
        aiTool: '',
      })
    } catch (error) {
      console.error('Error submitting form:', error.message)
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
          Generative AI Session Pre-Survey - Innovation & Training Club |
          Ramaiah Institute of Technology
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
              <Counter />
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Generative AI Session Pre-Survey
                </h2>
              </div>
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm lg:max-w-2xl">
                <form
                  class="mb-4 space-y-6 rounded bg-white px-8 pb-8 pt-6 shadow-lg"
                  onSubmit={handleSubmit}
                >
                  {/* 1st Question */}
                  <div className="mb-4">
                    <label
                      htmlFor="experience"
                      className="block text-sm font-medium text-gray-700"
                    >
                      How familiar are you with AI and Machine Learning
                      concepts?
                    </label>
                    <select
                      id="experienceWithAITools"
                      name="experienceWithAITools"
                      required
                      className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                      value={formData.experienceWithAITools}
                      onChange={handleChange}
                    >
                      <option value="">Select an option</option>
                      <option value="novice">Novice - I'm new to this</option>
                      <option value="intermediate">
                        Intermediate - I have some understanding
                      </option>
                      <option value="advanced">
                        Advanced - I'm quite experienced
                      </option>
                    </select>
                  </div>

                  {/* 2nd Question */}
                  <div className="mb-4">
                    <label
                      htmlFor="aiInterest"
                      class="mb-2 block text-sm font-bold text-gray-700"
                    >
                      What sparked your interest in AI?
                    </label>
                    <input
                      id="aiInterest"
                      name="aiInterest"
                      type="text"
                      placeholder="Curiosity, career prospects, technology, etc."
                      required
                      class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                      value={formData.aiInterest}
                      onChange={handleChange}
                    />
                  </div>

                  {/* 3rd Question */}
                  <div class="mb-4">
                    <label class="mb-2 block text-sm font-bold text-gray-700">
                      What is your favorite AI prompt or command that you've
                      used?
                    </label>
                    <input
                      type="text"
                      id="favoriteAIPrompt"
                      name="favoriteAIPrompt"
                      required
                      placeholder="Share your favorite AI prompt"
                      class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                      value={formData.favoriteAIPrompt}
                      onChange={handleChange}
                    />
                  </div>

                  {/* 4th Question */}
                  <div class="mb-4">
                    <label
                      class="mb-2 block text-sm font-bold text-gray-700"
                      for="impressiveAICreation"
                    >
                      What is the most impressive AI creation you've seen?
                    </label>
                    <input
                      type="text"
                      id="impressiveAICreation"
                      name="impressiveAICreation"
                      required
                      placeholder="Share your favorite AI creation"
                      class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                      value={formData.impressiveAICreation}
                      onChange={handleChange}
                    />
                  </div>

                  {/* 5th Question */}
                  <div class="mb-4">
                    <label
                      class="mb-2 block text-sm font-bold text-gray-700"
                      for="future-predictions"
                    >
                      How do you predict AI will change in the next 10 years?
                    </label>
                    <textarea
                      id="future-predictions"
                      name="futurePredictions"
                      required
                      placeholder="Your visions, expected advancements, and societal changes."
                      class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                      value={formData.futurePredictions}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  {/* 6th Question */}
                  <div class="mb-4">
                    <label
                      class="mb-2 block text-sm font-bold text-gray-700"
                      for="ai-tool"
                    >
                      Do you have a favorite AI tool or framework you use
                      regularly?
                    </label>
                    <input
                      type="text"
                      id="ai-tool"
                      name="aiTool"
                      required
                      placeholder="GPT, Bard, Anthropic DALL E, etc."
                      class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                      value={formData.aiTool}
                      onChange={handleChange}
                    />
                  </div>

                  <div class="flex items-center justify-between">
                    <button
                      class="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
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
