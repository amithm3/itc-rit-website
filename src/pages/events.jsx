import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Member } from '@/components/Member'
import Image from 'next/image'
const events = [
  {
    title: 'Python for AI Bootcamp',
    description:
      'The "Python for AI Bootcamp" was a dynamic tech immersion experience where participants delved into the world of Artificial Intelligence. They explored Python\'s role in AI, from fundamental programming to advanced applications. Dive into machine learning, deep learning, and data science, and tackle real-world projects. Discover the latest AI tools and libraries, master data preprocessing, and train cutting-edge models. Uncover the ethical dimensions and learn to deploy AI solutions. This bootcamp was an exciting opportunity for tech enthusiasts and aspiring AI developers to elevate their Python skills and chart a course into the future of AI.',
  },
  {
    title: 'Aarambh',
    description:
      '"Aarambh" was an orientation program organized by the ITC RIT club. This event served as an introductory platform for new members, providing insights into the club\'s objectives, activities, and opportunities. It aimed to welcome and engage newcomers, fostering a sense of community and offering a glimpse into the club\'s initiatives and the roles members could play. "Aarambh" kickstarted the journey of club involvement and collaboration for participants, setting the stage for their active participation in club ITC RIT\'s future endeavors.',
  },
  {
    title: 'First meet with 2021 Batch',
    description:
      'The "First Meet with the 2021 Batch" was a welcoming event that introduced the incoming class of 2021 to the club\'s core objectives. These included building a solid foundation in coding, emphasizing software development skills, nurturing coding excellence through practice and competitions, inspiring a passion for hackathons and innovation, and promoting a balanced approach to college life that incorporates both academics and club activities. This event marked the beginning of a journey aligned with the club\'s goals and principles.',
  },
  {
    title: 'DECODE ML',
    description:
      'The "DECODE ML" event organized by the ITC RIT club was a machine learning-focused gathering that brought together students and enthusiasts to explore the world of machine learning. This event featured workshops, talks, and hands-on sessions, aiming to decode the complexities of machine learning, covering topics such as algorithms, applications, and practical implementation. DECODE ML provided a platform for participants to gain insights into the rapidly evolving field of machine learning, develop practical skills, and connect with like-minded individuals, ultimately fostering a deeper understanding of this transformative technology.',
  },
  {
    title: 'Machine Learning Pipelines',
    description:
      '"Machine Learning Pipelines," hosted by the ITC RIT club, was an event dedicated to exploring the intricacies of building and deploying machine learning pipelines. Attendees had the opportunity to delve into the entire ML workflow, from data preprocessing to model training and deployment. Through workshops, discussions, and practical exercises, participants gained insights into best practices, tools, and techniques for constructing effective ML pipelines. This event empowered individuals to enhance their skills in managing data, creating models, and successfully implementing ML solutions, catering to both beginners and those seeking to sharpen their expertise in the field.',
  },
  {
    title: 'WEB 3.0 & Blockchain event',
    description:
      'The "WEB 3.0 & Blockchain Event" was an informative gathering that delved into the cutting-edge technologies of Web 3.0 and blockchain. Attendees had the opportunity to explore the next generation of the internet, characterized by decentralized and interconnected digital ecosystems. The event covered various aspects of blockchain technology, including cryptocurrencies, smart contracts, and decentralized applications (DApps). Participants learned about the potential impact of Web 3.0 and blockchain on industries like finance, supply chain, and digital identity. This event aimed to educate and inspire individuals about the transformative possibilities of these emerging technologies in the digital landscape.',
  },
  {
    title: 'PyStreamify',
    description:
      '"PyStreamify" was an engaging event where participants harnessed the power of Streamlit, a Python library for creating web applications, to build dynamic and interactive web-based applications. Attendees learned how to leverage Streamlit\'s simplicity and flexibility to transform data, visualizations, and machine learning models into user-friendly web interfaces. This hands-on event encouraged enthusiasts to explore the potential of Streamlit in simplifying the development of data-driven web applications, making it an ideal platform for Python programmers looking to showcase their projects and share data-driven insights with a broader audience.',
  },
]
function EventSection({ event }) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-gray-900">{event.title}</h2>
      <p className="mt-2 text-gray-700">{event.description}</p>
    </div>
  )
}

export default function Event() {
  return (
    <>
      <Head>
        <title>
          Events - Innovation & Training Club | Ramaiah Institute of Technology
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
        <div className="relative mx-auto max-w-4xl px-6 pt-10 lg:px-8">
          <div className="mx-auto max-w-6xl py-4 sm:py-6 lg:py-8">
            <div className="text-justify">
              <h1 className="mb-10 text-4xl font-bold text-gray-900 sm:text-6xl">
                Events
              </h1>
              {events.map((event, index) => (
                <EventSection key={index} event={event} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
