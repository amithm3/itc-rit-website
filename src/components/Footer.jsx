import Link from 'next/link'
import logoimg from '@/images/logos/logo-dark.png'
import Image from 'next/image'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer class="footerbg relative overflow-x-hidden pb-5 pl-3 pt-6 lg:py-2 lg:pl-0">
      <div class="container mx-auto text-white">
        <div class="mx-auto grid max-w-6xl pt-10 sm:grid-cols-1 md:grid-cols-3">
          <div class="w-full items-center px-3">
            <div class="mb-3 flex w-full lg:justify-center">
              <a href="/" class="inline-block rounded-md">
                <Logo className="h-10 w-auto" />
              </a>
            </div>
          </div>
          <div class="w-full px-3 pt-3 md:pt-0">
            <div class="mb-10 w-full">
              <h4 class="text-dark mb-5 text-lg font-semibold">Quick Links</h4>
              <ul className="block justify-center">
                <li>
                  <Link href="/">
                    <a className="rounded-lg px-2 py-1 leading-loose text-white hover:bg-slate-100 hover:text-slate-900">
                      About
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="rounded-lg px-2 py-1 leading-loose text-white hover:bg-slate-100 hover:text-slate-900">
                      Achievements
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="rounded-lg px-2 py-1 leading-loose text-white hover:bg-slate-100 hover:text-slate-900">
                      Gallery
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="rounded-lg px-2 py-1 leading-loose text-white hover:bg-slate-100 hover:text-slate-900">
                      Contact Us
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full px-3">
            <div class="mb-10 w-full">
              <h4 class="text-dark mb-5 text-lg font-semibold">Follow Us On</h4>
              <div class="mb-6 flex items-center">
                <a
                  href="https://www.instagram.com/itc_rit"
                  class="
                     text-dark
                     mr-3
                     flex
                     h-8
                     w-8
                     items-center
                     justify-center rounded-lg
                     border
                     border-[#E5E5E5] hover:border-primary hover:bg-primary
                     hover:text-white
                     sm:mr-4
                     lg:mr-3
                     xl:mr-4
                     "
                  target="_blank"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    class="fill-current"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/itc-rit"
                  class="
                      text-dark
                      mr-3
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center rounded-lg
                      border
                      border-[#E5E5E5] hover:border-primary hover:bg-primary
                      hover:text-white
                      sm:mr-4
                      lg:mr-3
                      xl:mr-4
                      "
                  target="_blank"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    class="fill-current"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </div>
              <p class="text-dark mt-5 flex items-center text-sm font-medium">
                <span class="mr-3 text-white">
                  <svg
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
                  <a href="mailto:shravanrevanna@gmail.com">
                    shravan.revanna@gmail.com
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center border-t border-gray-100">
          <div className="max-w-8xl mx-auto px-4 pb-3 pt-6 sm:px-6 lg:px-8 lg:pb-4 lg:pt-8">
            <div className="xl:grid xl:grid-cols-2 xl:gap-8">
              <div className="space-y-8 xl:col-span-1">
                <p className="text-center text-base leading-6 text-gray-500 dark:text-slate-400">
                  &copy; Copyright 2023 ITC RIT
                </p>
              </div>
              <div>
                <h4 className="text-center text-sm text-slate-900 dark:text-white">
                  Webpage designed by
                  <a
                    href="https://myselfshravan.github.io"
                    className="font-bold text-sky-500 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300"
                  >
                    {' '}
                    Shravan Revanna
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span class="absolute bottom-0 left-0 z-[-1]">
          <svg
            width="217"
            height="229"
            viewBox="0 0 217 229"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
              fill="url(#paint0_linear_1179_5)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1179_5"
                x1="76.5"
                y1="281"
                x2="76.5"
                y2="1.22829e-05"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3056D3" stopOpacity="0.08" />
                <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </footer>
  )
}
