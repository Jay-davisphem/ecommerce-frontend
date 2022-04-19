import Link from "next/link";
import Title from "./Title";
export default function AboutMe({ pdfFile }) {
  return (
    <>
      <Title title={"David Oluwafemi's Curruculum Vitae!"} include={true} />
      <Link href={pdfFile}>
        <a target="_blank">
          Please Click
        </a>
      </Link>
    </>
  );
}
