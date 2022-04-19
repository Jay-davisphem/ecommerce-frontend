import pdfFile from "../public/backend_dev_oluwafemi.pdf";
import AboutMe from "../components/AboutMe";

export default function About() {
  const pdfUrl = 'file:///home/davisphem/Documents/Programs/next-apps/ecommerce-frontend/public/backend_dev_oluwafemi.pdf'
  return <AboutMe pdfFile={pdfUrl} />;
}
