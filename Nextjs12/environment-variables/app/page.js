// "use client"
import Image from "next/image";

export default function Home() {
  // console.log("Id is : " , process.env.ID)
  // console.log("Secret is : " , process.env.SECRET)
  return (
   <div>
    Hey this is home page and the id is {process.env.NEXT_PUBLIC_ID} and the secret is {process.env.SECRET} . Name is {process.env.NAME}.
   </div>
  );
}


//.env.local have more priority than .env