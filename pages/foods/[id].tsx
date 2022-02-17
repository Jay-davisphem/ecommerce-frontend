import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  return <h1 className="text-blue-400">Food [{id}]</h1>;
}
