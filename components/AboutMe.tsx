import {Document, Page} from 'react-pdf'
import Title from './Title'
export default function AboutMe({pdfFile}){
  return (
    <>
      <Title title={'David Oluwafemi\'s Curruculum Vitae!'} include={true} />
      <Document file={pdfFile}>
        <Page pageNumber={1} />
      </Document>
    </>
  )
}
