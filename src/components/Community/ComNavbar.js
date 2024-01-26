'use client'
import { MdPostAdd } from "react-icons/md";
import { BiDonateBlood } from "react-icons/bi";
import { RiDashboardLine } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const ComNavbar = () => {
  const pathname = usePathname()

  return (
    <section className="">
      <div className=" border-b-2   ">
        <div className="max-w-screen-md mx-auto ">
          <ul className="flex justify-center  md:items-center items-center  md:gap-5 gap-2 text-gray-500">

            <li className="" >
              <Link href='/community/posts' className={`link px-2 py-2 no-underline font-semibold flex items-center gap-2 md:pr-4 text-[11px] pr-3 rounded-sm ${pathname === '/community/posts' ? 'text-white bg-primary' : 'font-semibold no-underline hover:bg-primary hover:text-white duration-500'} `}>

              <MdPostAdd className="md:text-2xl text-[15px]" /> All Posts
              
              </Link>
            </li>

            <li className="" >
              <Link href='/community/ourmission' className={`link px-2 py-2 no-underline font-semibold flex items-center gap-2 md:pr-4 text-[11px] pr-3 rounded-sm ${pathname === '/community/ourmission' ? 'text-white bg-primary' : 'font-semibold no-underline hover:bg-primary hover:text-white duration-500'} `}>
              <BiDonateBlood className="md:text-2xl text-[15px]" /> Campaign
              </Link>
            </li>
            <li className="" >
              <Link href='/community/dasboardlayout' className={`link px-2 py-2 no-underline font-semibold flex items-center gap-2 md:pr-4 text-[11px] pr-3 rounded-sm ${pathname === '/community/dasboardlayout' ? 'text-white bg-primary' : 'font-semibold no-underline hover:bg-primary hover:text-white duration-500'} `}>
              <RiDashboardLine className="md:text-2xl text-[15px]" /> Dashboard
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
      
    </section>
  );
};

export default ComNavbar;
// className="flex items-center gap-2 md:pr-4 text-[11px] pr-3 "