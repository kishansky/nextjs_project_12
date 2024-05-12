"use client"
import Link from 'next/link'
import bg from '../../public/bg2.jpg'
import bg1 from '../../public/bg.jpg'
import bg2 from '../../public/bg1.jpg'
import bg3 from '../../public/bg3.jpg'
import { useRouter } from "next/navigation";
import { useEffect,useState } from './tostify'

export default function Home() {
  const [skip, setSkip] = useState(true);
  function pageScroll() {
    window.scrollBy(0,1);
    let scrolldelay = setTimeout(pageScroll,10);
  }
  useEffect(() => {
    console.log(skip);
    if (skip == true) {
      pageScroll();
    }
  },[skip])
  
  function toggle() {
    if (skip == true) {
      setSkip(false);
    } else {
      setSkip(true);
    }
  }
  
const router = useRouter();
  const logout = () => {
    // console.log(auth);
    localStorage.clear();
    router.push('/login');
  }
  return (
    <main className=" h-screen lg:py-0 scroll-smooth position-relative " >
      {/* <button
        className='bottom-8 right-8 z-[99] text-lg '
        style={{
        position: "fixed",
        // bottom: "20px",
        // right: "40px",
        // zIndex: 99,
        // fontSize: "18px",
        border: "none",
        outline: "none",
        backgroundColor: "red",
        color: "white",
        padding:"15px"
      }} onClick={() => { toggle(); }}>hello</button> */}
      
      <div className='d-inline-block  sticky top-0 bg-gradient-to-r from-[#97DBFE] from-20% via-[#A2FFF4] via-40% to-[#82D3FF] to-90%  p-2 px-4 space-x-3 text-center sm:text-lg font-serif animate-[pulse_2s_infinite]' >
        <Link href="#" className=' hover:font-semibold'>Home</Link>
        <Link href="#" className=' hover:font-semibold'>About</Link>
        <Link href="#" className=' hover:font-semibold'>News</Link>
        <Link href="#" className=' hover:font-semibold'>Fun</Link>
        <button onClick={()=>logout()} className='float-right hover:font-semibold'>Logout</button>
      </div>
      <div style={{
      backgroundImage: `url(${bg.src})`,
      width: '100%',
      height: '100%',
      }} className='flex justify-center items-center bg-center bg-cover bg-no-repeat bg-fixed'>
        <div className='text-center mb-48'>
          <h1 className='text-5xl text-[#003B65]'>Welcome</h1>
          <p className='text-[#fff] text-lg font-mono'>Scroll Down</p>
        </div>
      </div>
      <div className='lg:p-40 p-10 bg-gray-100'>
        <div className='text-4xl text-[#002645]'>Tittle</div>
        <p className='text-lg text-[#003964]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse architecto ipsa aliquam mollitia nisi possimus necessitatibus eveniet eum nostrum nesciunt, velit numquam assumenda, tenetur alias quidem. Fuga ipsam veritatis, error maxime velit architecto voluptas laboriosam ipsa quas numquam quidem impedit aut in neque illo doloribus aspernatur voluptates aliquid? Voluptate maiores atque ex voluptatum facilis voluptas amet quaerat sunt necessitatibus quod.</p>
        <p className='text-lg text-[#003964]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quia magni, quis consequuntur explicabo nihil ipsum aperiam vel eligendi nisi eius modi laboriosam porro nulla corrupti ipsam odit itaque cupiditate!</p>
      </div>
      <div style={{
      backgroundImage: `url(${bg1.src})`,
      }}className='w-full min-h-screen h-96 bg-cover bg-center bg-no-repeat bg-fixed'>

      </div>
      <div className='lg:p-40 p-10 bg-gray-100'>
        <div className='text-4xl text-[#002645]'>Tittle</div>
        <p className='text-lg text-[#003964]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse architecto ipsa aliquam mollitia nisi possimus necessitatibus eveniet eum nostrum nesciunt, velit numquam assumenda, tenetur alias quidem. Fuga ipsam veritatis, error maxime velit architecto voluptas laboriosam ipsa quas numquam quidem impedit aut in neque illo doloribus aspernatur voluptates aliquid? Voluptate maiores atque ex voluptatum facilis voluptas amet quaerat sunt necessitatibus quod.</p>
        <p className='text-lg text-[#003964]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quia magni, quis consequuntur explicabo nihil ipsum aperiam vel eligendi nisi eius modi laboriosam porro nulla corrupti ipsam odit itaque cupiditate!</p>
      </div>
      <div style={{
      backgroundImage: `url(${bg2.src})`,
      }}className='w-full min-h-screen h-96 bg-cover bg-center bg-no-repeat bg-fixed'>

      </div>
      <div className='lg:p-40 p-10 bg-gray-100'>
        <div className='text-4xl text-[#002645]'>Tittle</div>
        <p className='text-lg text-[#003964]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse architecto ipsa aliquam mollitia nisi possimus necessitatibus eveniet eum nostrum nesciunt, velit numquam assumenda, tenetur alias quidem. Fuga ipsam veritatis, error maxime velit architecto voluptas laboriosam ipsa quas numquam quidem impedit aut in neque illo doloribus aspernatur voluptates aliquid? Voluptate maiores atque ex voluptatum facilis voluptas amet quaerat sunt necessitatibus quod.</p>
        <p className='text-lg text-[#003964]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quia magni, quis consequuntur explicabo nihil ipsum aperiam vel eligendi nisi eius modi laboriosam porro nulla corrupti ipsam odit itaque cupiditate!</p>
      </div>
      <div style={{
      backgroundImage: `url(${bg3.src})`,
      }}className='w-full min-h-screen h-96 bg-cover bg-center bg-no-repeat bg-fixed'>
      </div>
      
    </main>
  )
}
