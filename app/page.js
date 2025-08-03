'use client'
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  let clickhandle = ()=>{
       router.push("/careers/ips");
  }
  return (
   <>
  <button onClick={clickhandle}>Click me</button>
   </>
  );
}
