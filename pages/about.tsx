import pdfFile from '../public/backend_dev_oluwafemi.pdf';
import AboutMe from '../components/AboutMe';
export default function About(){
  return <AboutMe pdfFile={pdfFile} />
}
