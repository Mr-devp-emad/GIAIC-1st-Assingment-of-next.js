// // import Link from 'next/link';

// // export default function Navbar() {
// //     return (
// //         <div className="mt-5">
// //             <div className="flex space-x-4">
// //                 <Link href="./../about" className="hover:bg-sky-600 hover:rounded text-white hover:border-2 p-2">
// //                     About
// //                 </Link>

// //                 <Link href="./../projects" className="hover:bg-sky-600 hover:rounded text-white hover:border-2 p-2">
// //                     Projects
// //                 </Link>

// //                 <Link href="./../contact" className="hover:bg-sky-600 hover:rounded text-white hover:border-2 p-2">
// //                     Contact
// //                 </Link>

// //                 <Link href="./../blog" className="hover:bg-blue-600 hover:rounded text-white hover:border-2 p-2">
// //                     Blog
// //                 </Link>
// //             </div>
// //         </div>
// //     );
// // }


// // components/Navbar.js
// import Link from 'next/link';

// const Navbar = () => {
//   return (
//     <nav className="bg-blue-600 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo or Brand Name */}
//         <h1 className="text-white text-xl font-bold">MyWebsite</h1>
        
//         {/* Navigation Links */}
//         <div className="space-x-6">
//           <Link href="/">
//             <a className="text-white hover:text-yellow-300">Home</a>
//           </Link>
//           <Link href="/about">
//             <a className="text-white hover:text-yellow-300">About Us</a>
//           </Link>
//           <Link href="/services">
//             <a className="text-white hover:text-yellow-300">Services</a>
//           </Link>
//           <Link href="/blog">
//             <a className="text-white hover:text-yellow-300">Blog</a>
//           </Link>
//           <Link href="/contact">
//             <a className="text-white hover:text-yellow-300">Contact</a>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <Link href="/">
          <a className="text-white mr-4">Home</a>
        </Link>
        <Link href="/about">
          <a className="text-white mr-4">About</a>
        </Link>
        <Link href="/services">
          <a className="text-white mr-4">Services</a>
        </Link>
        <Link href="/contact">
          <a className="text-white">Contact</a>
        </Link>

  
      </div>
    </nav>
  );
}

