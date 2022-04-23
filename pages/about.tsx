import AboutMe from "../components/AboutMe";

export default function About() {
  const pdfUrl = 'https://github.com/jay-davisphem/ecormerce-frontend/public/backend_dev_oluwafemi.pdf'
  return <AboutMe pdfFile={pdfUrl} />;
}
