import ContainerLayout from "../../components/Layout/ContainerLayout"


function AboutUs() {
  return (
    <div className="dark:bg-[#141D2E] text-black">
      <div>
        <div>

          <div className="bg-about_bg h-[350px] bg-cover bg-center ms-10 mr-10 pt-5 pb-5">
            <div className="text-white flex flex-col items-center justify-center h-full">
              <h1 className="text-[30px] font-bold md:text-[50px] font-bold lg:text-[50px] font-bold">About Us</h1>
              <p className="text-xl">Home / <span className="text-blue-700">About Us</span></p>
            </div>
          </div>


          <div className="relative h-full my-12">
            <ContainerLayout>
              <div className="grid grid-cols-1 md:grid-cols-[55%,45%] gap-4 items-end relative">
                <div>
                  <div className="">
                    <img className="rounded-[200px]" src="https://demo.awaikenthemes.com/novaride/wp-content/uploads/2024/08/about-img-1.jpg" alt="Description" />
                  </div>
                  <div className="absolute top-[182px] left-[184px]">
                    <img className="rounded-[200px] " src="https://demo.awaikenthemes.com/novaride/wp-content/uploads/2024/08/about-img-2.jpg" alt="Description" />
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold">Your trusted partner in
                    reliable car rental</h2>
                  <p className="py-2 text-[15px]">
                    Aqestic Optio Amet A Ququam Saepe Aliquid Voluate Dicta Fuga Dolor Saerror Sed Earum A Magni Soluta Quam Minus Dolor Dolor
                  </p>
                  <div className="inner_content py-4">
                    <div className="flex items-center gap-3 py-2">
                      <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                      </svg></p>
                      <div>
                        <h4 className="text-2xl font-bold">Easy Booking Process</h4>
                        <p>We Have Optimized The Booking Process So That Our Clients Can Experience The Easiest And The Safest Service</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 py-2">
                      <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
                      </svg>
                      </p>
                      <div>
                        <h4 className="text-2xl font-bold">Convenient Pick-Up & Return Process</h4>
                        <p>We Have Optimized The Booking Process So That Our Clients Can Experience The Easiest And The Safest Service</p>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </ContainerLayout>

          </div>




        </div>
        <section className="py-10 bg-blue-50 leading-6 text-blue-900 dark:bg-[#141D2E] sm:py-16 lg:py-24 pt-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-3xl font-bold leading-9 sm:text-4xl sm:leading-tight">Impressive Results in 2 Years</h2>
            </div>

            <div className="mt-8 grid  grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8 lg:mt-16">
              <div className="relative overflow-hidden rounded-xl shadow border-t-4 border-blue-200 bg-white">
                <div className="py-10 px-6">
                  <div className="flex items-center">
                    <h3 className="relative ml-2 inline-block text-4xl font-bold leading-none">
                      <span className="absolute -top-4 h-2 w-full bg-blue-200"></span>
                      328
                    </h3>
                    <span className="ml-3 text-base font-medium capitalize">Great Achievements</span>
                  </div>

                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl shadow border-t-4 border-blue-200 bg-white">
                <div className="py-10 px-6">
                  <div className="flex items-center">
                    <h3 className="relative ml-2 inline-block text-4xl font-bold leading-none">
                      <span className="absolute -top-4 h-2 w-full bg-blue-200"></span>
                      16
                    </h3>
                    <span className="ml-3 text-base font-medium capitalize">Graduations sponsored</span>
                  </div>

                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl shadow border-t-4 border-blue-200 bg-white">
                <div className="py-10 px-6">
                  <div className="flex items-center">
                    <h3 className="relative ml-2 inline-block text-4xl font-bold leading-none">
                      <span className="absolute -top-4 h-2 w-full bg-blue-200"></span>
                      41+
                    </h3>
                    <span className="ml-3 text-base font-medium capitalize">jobs created</span>
                  </div>

                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl shadow border-t-4 border-blue-200 bg-white">
                <div className="py-10 px-6">
                  <div className="flex items-center">
                    <h3 className="relative ml-2 inline-block text-4xl font-bold leading-none">
                      <span className="absolute -top-4 h-2 w-full bg-blue-200"></span>
                      99%
                    </h3>
                    <span className="ml-3 text-base font-medium capitalize">Happy Customers</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

      </div>



      <div>

      </div>





      <div>
        {/* Our Team Section */}
        <div>
          <div className="mb-16">
            <div className="container flex justify-center mx-auto pt-16">
              <div>
                {/* <p className="text-gray-500 text-lg text-center font-normal pb-3">
              BUILDING TEAM
            </p> */}
                <h1 className="xl:text-4xl text-3xl pb-[20x] text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto dark:text-white">
                  The Talented People Behind the Scenes of the Organization
                </h1>
              </div>
            </div>
            <div className="w-full  px-10 pb-10 pt-[40px]">
              <div className="container mx-auto">
                <div
                  role="list"
                  aria-label="Behind the scenes People "
                  className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
                >
                  {/* <div
                role="listitem"
                className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
              >
                <div className="rounded overflow-hidden shadow-md bg-white">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img
                        src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
                        alt="Display Picture of Andres Berlin"
                        role="img"
                        className="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <h1 className="font-bold text-3xl text-center mb-1">
                      Andres Berlin
                    </h1>
                    <p className="text-gray-800 text-sm text-center">
                      Chief Executive Officer
                    </p>
                    <p className="text-center text-gray-600 text-base pt-3 font-normal">
                      The CEO's role in raising a company's corporate IQ is to
                      establish an atmosphere that promotes knowledge sharing
                      and collaboration.
                    </p>
                    <div className="w-full flex justify-center pt-5 pb-5">
                      <a href="javascript:void(0)" className="mx-5">
                        <div aria-label="Github" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-github"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="mx-5">
                        <div aria-label="Twitter" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-twitter"
                          >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="mx-5">
                        <div aria-label="Instagram" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-instagram"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="20"
                              height="20"
                              rx="5"
                              ry="5"
                            ></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
                  {/* <div
                role="listitem"
                className="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
              >
                <div className="rounded overflow-hidden shadow-md bg-white">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img
                        src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif"
                        alt="Display Picture of Silene Tokyo"
                        role="img"
                        className="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <h1 className="font-bold text-3xl text-center mb-1">
                      Silene Tokyo
                    </h1>
                    <p className="text-gray-800 text-sm text-center">
                      Product Design Head
                    </p>
                    <p className="text-center text-gray-600 text-base pt-3 font-normal">
                      The emphasis on innovation and technology in our companies
                      has resulted in a few of them establishing global
                      benchmarks in product design and development.
                    </p>
                    <div className="w-full flex justify-center pt-5 pb-5">
                      <a href="javascript:void(0)" className="mx-5">
                        <div aria-label="Github" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-github"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="mx-5">
                        <div aria-label="Twitter" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-twitter"
                          >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="mx-5">
                        <div aria-label="Instagram" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-instagram"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="20"
                              height="20"
                              rx="5"
                              ry="5"
                            ></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
                  {/* <div
                role="listitem"
                className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
              >
                <div className="rounded overflow-hidden shadow-md bg-white">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img
                        src="https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif"
                        alt="Display Picture of Johnson Stone"
                        role="img"
                        className="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <h1 className="font-bold text-3xl text-center mb-1">
                      Johnson Stone
                    </h1>
                    <p className="text-gray-800 text-sm text-center">
                      Manager Development
                    </p>
                    <p className="text-center text-gray-600 text-base pt-3 font-normal">
                      Our services encompass the assessment and repair of
                      property damage caused by water, fire, smoke, or mold. We
                      can also be a part of the restoration.
                    </p>
                    <div className="w-full flex justify-center pt-5 pb-5">
                      <a href="javascript:void(0)" className="mx-5">
                        <div aria-label="Github" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-github"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="mx-5">
                        <div aria-label="Twitter" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-twitter"
                          >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="mx-5">
                        <div aria-label="Instagram" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-instagram"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="20"
                              height="20"
                              rx="5"
                              ry="5"
                            ></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
                  <div
                    role="listitem"
                    className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                  >
                    <div className="rounded overflow-hidden shadow-xl bg-white">
                      <div className="absolute -mt-20 w-full flex justify-center">
                        <div className="h-32 w-32">
                          <img
                            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Display Picture of Dean Jones"
                            role="img"
                            className="rounded-full object-cover h-full w-full shadow-md"
                          />
                        </div>
                      </div>
                      <div className="px-6 mt-16">
                        <h1 className="font-bold text-3xl text-center mb-1">
                          Dean Jones
                        </h1>
                        <p className="text-gray-800 text-sm text-center">
                          Director
                        </p>
                        <p className="text-center text-gray-600 text-base pt-3 font-normal">
                          An avid who loves to be creative and
                          inventive.
                        </p>
                        <div className="w-full flex justify-center pt-5 pb-5">
                          <a href="javascript:void(0)" className="mx-5">
                            <div aria-label="Github" role="img">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#718096"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-github"
                              >
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                              </svg>
                            </div>
                          </a>
                          <a href="javascript:void(0)" className="mx-5">
                            <div aria-label="Twitter" role="img">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#718096"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-twitter"
                              >
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                              </svg>
                            </div>
                          </a>
                          <a href="javascript:void(0)" className="mx-5">
                            <div aria-label="Instagram" role="img">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#718096"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-instagram"
                              >
                                <rect
                                  x="2"
                                  y="2"
                                  width="20"
                                  height="20"
                                  rx="5"
                                  ry="5"
                                ></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    role="listitem"
                    className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                  >
                    <div className="rounded overflow-hidden shadow-md bg-white">
                      <div className="absolute -mt-20 w-full flex justify-center">
                        <div className="h-32 w-32">
                          <img
                            src="https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Display Picture of Rachel Adams"
                            role="img"
                            className="rounded-full object-cover h-full w-full shadow-md"
                          />
                        </div>
                      </div>
                      <div className="px-6 mt-16">
                        <h1 className="font-bold text-3xl text-center mb-1">
                          Rachel Adams
                        </h1>
                        <p className="text-gray-800 text-sm text-center">
                          Designer
                        </p>
                        <p className="text-center text-gray-600 text-base pt-3 font-normal">
                          Product designer with interests in immersive computing and
                          XR, political ventures, and emerging technologies. Able to
                          take ideas and give them a life.
                        </p>
                        <div className="w-full flex justify-center pt-5 pb-5">
                          <a href="javascript:void(0)" className="mx-5">
                            <div aria-label="Github" role="img">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#718096"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-github"
                              >
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                              </svg>
                            </div>
                          </a>
                          <a href="javascript:void(0)" className="mx-5">
                            <div aria-label="Twitter" role="img">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#718096"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-twitter"
                              >
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                              </svg>
                            </div>
                          </a>
                          <a href="javascript:void(0)" className="mx-5">
                            <div aria-label="Instagram" role="img">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#718096"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-instagram"
                              >
                                <rect
                                  x="2"
                                  y="2"
                                  width="20"
                                  height="20"
                                  rx="5"
                                  ry="5"
                                ></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    role="listitem"
                    className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                  >
                    <div className="rounded overflow-hidden shadow-md bg-white">
                      <div className="absolute -mt-20 w-full flex justify-center">
                        <div className="h-32 w-32">
                          <img
                            src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Display Picture of Charles Keith"
                            role="img"
                            className="rounded-full object-cover h-full w-full shadow-md"
                          />
                        </div>
                      </div>
                      <div className="px-6 mt-16">
                        <h1 className="font-bold text-3xl text-center mb-1">
                          Charles Keith
                        </h1>
                        <p className="text-gray-800 text-sm text-center">Manager</p>
                        <p className="text-center text-gray-600 text-base pt-3 font-normal">
                          A Manager is the voice of the customer. Our job is to
                          look beyond the business goals. We don't just experience
                          user interface but also questions it.
                        </p>
                        <div className="w-full flex justify-center pt-5 pb-5">
                          <a href="javascript:void(0)" className="mx-5">
                            <div aria-label="Github" role="img">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#718096"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-github"
                              >
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                              </svg>
                            </div>
                          </a>
                          <a href="javascript:void(0)" className="mx-5">
                            <div aria-label="Twitter" role="img">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#718096"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-twitter"
                              >
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                              </svg>
                            </div>
                          </a>
                          <a href="javascript:void(0)" className="mx-5">
                            <div aria-label="Instagram" role="img">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#718096"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-instagram"
                              >
                                <rect
                                  x="2"
                                  y="2"
                                  width="20"
                                  height="20"
                                  rx="5"
                                  ry="5"
                                ></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="main__container pb-12 px-4">
          <div className="about__company grid lg:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-12 lg:gap-y-0 items-center">
            <div className="about__company__img">
              <img src="https://manufacturer.stylemixthemes.com/industrial/wp-content/uploads/sites/2/2018/08/Fotolia_68431323_Subscription_Monthly_M-660x439.jpg" alt="Description of the image" />
            </div>
            <div className="about__company__content">
              <h2 className="text-3xl font-bold leading-10 text-gray-900 dark:text-white">Our Mission</h2>
              <p className="mt-4 text-base leading-7 text-gray-600 dark:text-white">
                Our mission at Avis is to inspire outdoor enthusiasts by providing top-quality camping gear and equipment. We aim to foster a community that embraces adventure and reconnects with nature. Through our curated selection of products, we strive to make every camping experience memorable and enjoyable. We are committed to sustainability, offering eco-friendly choices that minimize our environmental footprint. Our goal is to deliver exceptional customer service, ensuring each camper finds exactly what they need for their outdoor adventures. At Campers Shop, we believe in enhancing outdoor lifestyles and empowering customers to explore the beauty of nature comfortably and responsibly. Join us in our journey to equip and inspire campers worldwide, one adventure at a time.
              </p>
            </div>

          </div>
        </div>
      </div>
      <div>
        <section className="text-gray-800 py-8 dark:text-white">
          <div className="mx-auto flex flex-col justify-around lg:flex-row gap-8 max-w-screen-xl">
            {/* Contact Information */}
            <div className="max-w-2xl px-4 lg:pr-24">
              <p className="mb-5 font-medium">Contact Information:</p>
              <div className="mb-5 flex font-medium">
                <div className="mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-7 w-7 text-blue-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
                  </svg>
                </div>
                <div>
                  <p className="mb-2">Phone: +1 (123) 456-7890</p>
                  <span className="font-normal text-gray-600 dark:text-white">For inquiries and support.</span>
                </div>
              </div>
              <div className="mb-5 flex font-medium">
                <div className="mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-7 w-7 text-blue-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                </div>
                <div>
                  <p className="mb-2">Email: contact@example.com</p>
                  <span className="font-normal text-gray-600 dark:text-white">Send us an email anytime.</span>
                </div>
              </div>
              <div className="mb-5 flex font-medium">
                <div className="mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-7 w-7 text-blue-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <div>
                  <p className="mb-2">Address: 123 Main St, City, Country</p>
                  <span className="font-normal text-gray-600 dark:text-white">Visit our office during business hours.</span>
                </div>
              </div>
            </div>
            {/* Google Maps iframe */}
            <div className="relative w-full lg:w-96 h-72 lg:h-auto">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
                frameBorder="0"
                style={{ border: 0 }}

                aria-hidden="false"

                title="Google Map"
              ></iframe>
            </div>
          </div>
        </section>
      </div>

      {/* j */}
    </div>
  )
}

export default AboutUs