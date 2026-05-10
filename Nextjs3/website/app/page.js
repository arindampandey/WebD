import { discoverValidationDepths } from "next/dist/server/app-render/instant-validation/instant-validation";
import Image from "next/image";


export default function Home() {
  return (
    <div className="container mx-auto size-100 relative">
      {/* I am home */}
      <Image className="mx-auto" fill={true} src="https://imgs.search.brave.com/QZZ_Cku0wl9QA_GKwVTG4LZ098ZJWoymul_rNH3TyOM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTc0/MjQ0MDQwMC9waG90/by9tZXRhdmVyc2Ut/cG9ydHJhaXQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWRi/b2c0aWlZZV9HR1l3/MjhHMG9MZDRoT0tN/bnRfeUlFbTZfYWpC/SFFBNkU9" alt="" />
    </div>
  );
}
