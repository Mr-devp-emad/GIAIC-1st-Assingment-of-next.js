// // components/Layout.tsx (TypeScript version)
// import { ReactNode } from 'react';
// import Navbar from './Navbar';

// // Define a type for the props
// interface LayoutProps {
//   children: ReactNode; // children can be any valid React node (JSX, string, etc.)
// }

// const Layout = ({ children }: LayoutProps) => {
//   return (
//     <>
//       {/* Navbar Component */}
//       <Navbar />

//       {/* Page Content */}
//       <main className="container mx-auto p-6">{children}</main>
//     </>
//   );
// };

// export default Layout;

// components/Layout.tsx
import { ReactNode } from 'react'; // Import React types
import Navbar from './Navbar'; // Import the Navbar component


// Define the props type, specifying that `children` is of type ReactNode
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar /> {/* The Navbar will be shown on every page */}
      <main>{children}</main> {/* This will render the content of the page */}
    </>
  );
}
