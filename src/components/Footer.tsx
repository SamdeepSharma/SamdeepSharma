import Image from 'next/image'
import React from 'react'

const Footer = () => {
     return (
          <footer className="bg-white dark:bg-gray-900">
               <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                         <div className="mb-6 md:mb-0 md:mr-6 flex flex-col justify-center items-center">
                              <Image src={"/sam.png"} height={50} width={50} alt='logo' />
                              <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white mt-4">SAMDEEP SHARMA</h1>
                         </div>
                         <div className="flex flex-row justify-center flex-wrap items-center md:gap-8 gap-6">
                              <div className='flex flex-col justify-center items-center'>
                                   <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact</h2>
                                   <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-col justify-center items-center">
                                        <li className="mb-4">
                                             +91-8360602037
                                        </li>
                                        <li>
                                             samdeepsharma11@gmail.com
                                        </li>

                                   </ul>
                              </div>
                              <div>
                                   <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Project Links</h2>
                                   <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-col justify-center items-center">
                                        <li className="mb-4">
                                             <a href="https://ghost-note.vercel.app/" className="hover:underline">Ghost-Note</a>
                                        </li>
                                        <li>
                                             <a href="https://tiet-placement-portal-se-project.vercel.app/" className="hover:underline">TIET-PMS</a>
                                        </li>
                                   </ul>
                              </div>
                              <div>
                                   <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Connect with me</h2>
                                   <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-col justify-center items-center">
                                        <li className="mb-4">
                                             <a href="https://www.github.com/SamdeepSharma/" className="hover:underline ">Github</a>
                                        </li>
                                        <li>
                                             <a href="https://www.linkedin.com/in/samdeep-sharma-20894b283/" className="hover:underline">LinkedIn</a>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-center md:justify-between">
                         <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://samdeepportal.vercel.app/" className="hover:underline">Samdeep Sharma</a>
                         </span>
                         <div className="flex mt-4 sm:justify-center sm:mt-0">
                              <a href="mailto:samdeepsharma11@gmail.com" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                   <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M20.5 3h-17C2.67 3 2 3.67 2 4.5v15c0 .83.67 1.5 1.5 1.5h17c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5zm-.08 2L12 11.58 3.58 5h16.84zM4 19v-11.8l8 5.64 8-5.64V19H4z" />
                                   </svg>
                              </a>

                              <a href="https://www.instagram.com/samdeep_.s/" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                   <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd"
                                             d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                             clipRule="evenodd"></path>
                                   </svg>
                              </a>
                              <a href="https://www.github.com/SamdeepSharma/" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                   <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd"
                                             d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                             clipRule="evenodd"></path>
                                   </svg>
                              </a>
                              <a href="https://www.linkedin.com/in/samdeep-sharma-20894b283/" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                   <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M7.3,0.9c1.5,-0.6 3.1,-0.9 4.7,-0.9c1.6,0 3.2,0.3 4.7,0.9c1.5,0.6 2.8,1.5 3.8,2.6c1,1.1 1.9,2.3 2.6,3.8c0.7,1.5 0.9,3 0.9,4.7c0,1.7 -0.3,3.2 -0.9,4.7c-0.6,1.5 -1.5,2.8 -2.6,3.8c-1.1,1 -2.3,1.9 -3.8,2.6c-1.5,0.7 -3.1,0.9 -4.7,0.9c-1.6,0 -3.2,-0.3 -4.7,-0.9c-1.5,-0.6 -2.8,-1.5 -3.8,-2.6c-1,-1.1 -1.9,-2.3 -2.6,-3.8c-0.7,-1.5 -0.9,-3.1 -0.9,-4.7c0,-1.6 0.3,-3.2 0.9,-4.7c0.6,-1.5 1.5,-2.8 2.6,-3.8c1.1,-1 2.3,-1.9 3.8,-2.6Zm-0.3,7.1c0.6,0 1.1,-0.2 1.5,-0.5c0.4,-0.3 0.5,-0.8 0.5,-1.3c0,-0.5 -0.2,-0.9 -0.6,-1.2c-0.4,-0.3 -0.8,-0.5 -1.4,-0.5c-0.6,0 -1.1,0.2 -1.4,0.5c-0.3,0.3 -0.6,0.7 -0.6,1.2c0,0.5 0.2,0.9 0.5,1.3c0.3,0.4 0.9,0.5 1.5,0.5Zm1.5,10l0,-8.5l-3,0l0,8.5l3,0Zm11,0l0,-4.5c0,-1.4 -0.3,-2.5 -0.9,-3.3c-0.6,-0.8 -1.5,-1.2 -2.6,-1.2c-0.6,0 -1.1,0.2 -1.5,0.5c-0.4,0.3 -0.8,0.8 -0.9,1.3l-0.1,-1.3l-3,0l0.1,2l0,6.5l3,0l0,-4.5c0,-0.6 0.1,-1.1 0.4,-1.5c0.3,-0.4 0.6,-0.5 1.1,-0.5c0.5,0 0.9,0.2 1.1,0.5c0.2,0.3 0.4,0.8 0.4,1.5l0,4.5l2.9,0Z" clipRule="evenodd"></path>
                                   </svg>
                              </a>
                              <a href="#" target='_blank' className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                   <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                        <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" />
                                   </svg>
                              </a>
                         </div>
                    </div>
               </div>
          </footer>

     )
}

export default Footer
