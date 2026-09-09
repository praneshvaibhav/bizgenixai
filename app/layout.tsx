import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
const geist=Geist({variable:'--font-geist',subsets:['latin']});
export const metadata:Metadata={title:'Bizgenix AI | AI That Takes Work Off Your Desk',description:'Custom AI systems, ready products and business automation for Indian businesses.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body className={geist.variable}>{children}</body></html>}
