import type {Metadata} from "next"; import "./globals.css";
export const metadata:Metadata={title:"Sandip Raj Bhat | Technology & Digital Transformation",description:"Premium personal brand platform.",metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||"http://localhost:3000")};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
