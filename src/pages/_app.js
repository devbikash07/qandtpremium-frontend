import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";

export default function App({ Component, pageProps }) {
  return (
   
      <Layout>
        <Component {...pageProps} />
      
      </Layout>
    
  );
}
