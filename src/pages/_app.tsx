import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
const inter = Inter({ subsets: ["latin"] });
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return <div 
  className="{inter.className}">
    <GoogleOAuthProvider clientId="460974944684-kk1ip32botrujn04be1a8714nvgrhg4k.apps.googleusercontent.com">
  <Component {...pageProps} />
  </GoogleOAuthProvider>
  <Toaster/>
  </div>;
}
