import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import firebase from 'firebase/compat/app'
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

export default function Admin() {
  const firestore = firebase.firestore()
  const [rsvpData, setRsvpData] = useState([])
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    if (loggedIn) {
      const fetchData = async () => {
        const data = await getDocs(collection(firestore, 'rsvpnew'))
        setRsvpData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      }
      fetchData()
    }
  }, [loggedIn])

  const handleLogin = (e) => {
    e.preventDefault()
    if (username === 'itcritadmin' && password === 'itcritadmin2023') {
      setUser({ name: 'itcadmin' })
      setLoggedIn(true)
    } else {
      alert('Invalid Credentials')
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDocs(collection(firestore, 'rsvpnew'))
      setRsvpData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    fetchData()
  }, [])

  if (!loggedIn) {
    return (
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to see responses
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                {/* Removed forgot password for simplicity */}
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Responses</h1>
          <p className="mt-2 text-sm text-gray-700">
            All responses from the RSVP form
          </p>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-sm font-semibold text-gray-900"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Phone No
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Dept
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Topics
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-sm font-semibold text-gray-900"
                    >
                      USN
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {rsvpData.map((student, index) => (
                    <tr
                      key={student.id}
                      className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                    >
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                        {student.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {student.email}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {student.phoneNo}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {student.dept}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {student.topics}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {student.usn}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
