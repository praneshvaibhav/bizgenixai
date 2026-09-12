import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Bizgenix AI | AI That Takes Work Off Your Desk',description:'Custom AI systems, ready products and business automation for Indian businesses.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
