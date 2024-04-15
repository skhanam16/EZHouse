import  Navbar from '@/components/Navbar';
import '@/assets/styles/globals.css';


export const metadata = {
    title: 'EZHouse | Find the rental property',
    description: 'Find your dream rental property to live in',
    keywords: 'rental, find rentals, find dream, find properties',
};

const MainLayout = ( { children }) => {
  return (
    <html lang='en'> 
    <body>
       <Navbar />
        <main>{ children }</main>
 
    </body>
    </html>

  )
};

export default MainLayout;
