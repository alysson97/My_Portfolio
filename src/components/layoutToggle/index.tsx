"use client";
import { ThemeProvider } from 'next-themes';
import Toggle from "@/components/ModeToggle";

export default function Providers({
  children
}: {
  children: React.ReactNode
})  {
  return (
    <ThemeProvider attribute='class'>{children}</ThemeProvider>
  )
}

