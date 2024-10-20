// import Link from "next/link";

// export default function Home  ()  {
//    return ( 
//     <div className=" text-justify p-2 ">
//       <h1 className="text-3xl font-bold text-cyan-800 ">  Home </h1>
//       <p className="text-lg bg-gray-100 p-4 rounded-md shadow-md"></p>
//       <p className="bg-amber-300  mt-4 rounded-lg " > Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam sit 
//         illo nostrum ipsa consectetur suscipit voluptas ratione, veritatis necessitatibus 
//         ex qui fuga molestias fugit aspernatur. Laudantium, ipsa veniam. Ab, odio?00</p>

//         <Link className="mr-5 hover:text-blue-800 text-blue-400 font-bold" href="/contact"> Contact </Link>
//         <Link className="mr-5 hover:text-blue-800 text-blue-400 font-bold" href="/about"> About us </Link>
//         <Link className="mr-5 hover:text-blue-800 text-blue-400 font-bold" href="/blog"> Blog </Link>
//         <Link className="mr-5 hover:text-blue-800 text-blue-400 font-bold" href="/services"> Services </Link>
        

//     </div>



//    ) ;
// }

import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <header className="text-gray-400 bg-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            
            <span className="ml-3 text-xl"> Welcome To Emad`s Amazing Website </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-white" href="/blog">
              Blog
            </Link>
            <Link className="mr-5 hover:text-white" href="/contact">
              Contact
            </Link>
            <Link className="mr-5 hover:text-white" href="/about">
              About Us
            </Link>
            <Link className="mr-5 hover:text-white" href="/services">
              Services
            </Link>
          </nav>
          <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Like?
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content Section */}
      <div className="text-justify p-2">
        <h1 className="text-3xl font-bold text-cyan-800">Home</h1>
        <p className="text-lg bg-gray-100 p-4 rounded-md shadow-md">
          Welcome to our homepage! Feel free to explore the sections below.
        </p>
        <p className="bg-amber-300 mt-4 rounded-lg p-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam sit
          illo nostrum ipsa consectetur suscipit voluptas ratione, veritatis
          necessitatibus ex qui fuga molestias fugit aspernatur. Laudantium,
          ipsa veniam. Ab, odio?00
        </p>

        <div className="mt-6">
          <Link
            className="mr-5 hover:text-blue-800 text-blue-400 font-bold"
            href="/contact"
          >
            Contact
          </Link>
          <Link
            className="mr-5 hover:text-blue-800 text-blue-400 font-bold"
            href="/about"
          >
            About Us
          </Link>
          <Link
            className="mr-5 hover:text-blue-800 text-blue-400 font-bold"
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className="mr-5 hover:text-blue-800 text-blue-400 font-bold"
            href="/services"
          >
            Services
          </Link>
        </div>
      </div>
    </>
  );
}
