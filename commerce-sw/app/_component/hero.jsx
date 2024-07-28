import React from 'react'

function hero() {
  return (
    <section className="text-white" style={{ height: 'calc(100vh - 4rem)' }}>
      <div className="h-full mx-auto px-4 flex items-center lg:flex ">
        <div className=" mx-auto max-w-3xl text-center">
          <h1
            className="bg-gradient-to-r from-green-300 via-blue-500 to-primary bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
          >
            The Easiest Way To Shop.

            <span className="sm:block"> Is One Click Away.</span>
          </h1>

          <p className="mx-auto text-primary mt-4 max-w-xl sm:text-xl/relaxed">
            Discover the ultimate shopping experience with unbeatable prices. Shop now and enjoy fast shipping, easy returns, and 24/7 customer support.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded border border-primary bg-primary px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="#"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded border border-primary px-12 py-3 text-sm font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-primary sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default hero
