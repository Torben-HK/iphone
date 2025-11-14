import React from 'react'
import { Link } from 'react-router-dom'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">LeasePage by Hein & Kollegen GmbH</p>
          <div className="flex flex-wrap items-center text-xs font-semibold text-gray">
            {footerLinks.map(({ label, path }, i) => (
              <React.Fragment key={path}>
                <Link
                  to={path}
                  className="hover:text-white transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {label}
                </Link>
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2 text-gray"> | </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
