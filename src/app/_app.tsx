
"use client";
import { ThemeProvider } from 'next-themes';
import Toggle from "@/components/ModeToggle";
import { useEffect, useState } from 'react';

export default function Providers({
  children
}: {
  children: React.ReactNode
})  {
  const [Mounted, setMounted] = useState(false);

  useEffect(()=>{
    setMounted(true);
  }, []);
  if(!Mounted){
    return <>{children}</>
  }
  return <ThemeProvider attribute='class'>{children}</ThemeProvider>
  
}

 

/* import { ThemeProvider } from 'next-themes';
import '.globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp; */