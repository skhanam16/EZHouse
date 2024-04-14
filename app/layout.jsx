import '@/assets/styles/globals.css';

export const metadata = {
    title: 'My Nex App | Find the rental property',
    description: 'Find your dream rental property to live in',
    keywords: 'rental, find rentals, find dream, find properties',
};

const MainLayout = ( { children }) => {
  return (
    <html lang='en'> 
    <body>
    <div>{ children } </div>
    </body>
    </html>

  )
};

export default MainLayout;
