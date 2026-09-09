import { Suspense, useState } from 'react';
import './App.css'
import type { playerType } from './type';
import { Players } from './components/player/players';
import { Nav } from './components/nav';
import { Hero } from './components/hero';
import { Footer } from './components/footer';
import { Team } from './components/team';
import { DiVim } from 'react-icons/di';
import { ToastContainer } from 'react-toastify';

const playerDataPermisson = async  (): Promise<playerType[]> =>{
  const res = await fetch("/public/playersData.json");
  const data = await res.json();
  return data ;
}

function App() {
  const [plyerPromise] = useState(()=> playerDataPermisson());
const [coin , SetCoin] = useState<number>(100000)
  return (
    <>
    <div>
    <Nav coin={coin}></Nav>
    <Suspense fallback={
      <>
      <div>
        <div className=' items-center bg-lime-100 h-100  mx-10 rounded-xl pt-1'>
        <div className=' flex justify-center items-center bg-lime-800 h-80 mt-10 mx-10 rounded-xl'>

        </div>
        </div>
        <div className=' flex justify-center items-center bg-lime-200 h-10 mt-3 mx-10 rounded-xl'>
        </div>

        <div className=' grid grid-cols-5 gap-2 mt-5 mx-10'>

          <div>
            <div className='bg-lime-100 h-100 w-70  rounded-xl border-1 border-dashed border-lime-500'>
            <div className='bg-lime-200 h-50 w-60  rounded-xl my-8 mx-4'>
            
          </div>
          </div>

          </div>
          <div>
            <div className='bg-lime-100 h-100 w-70  rounded-xl border-1 border-dashed border-lime-500'>
            <div className='bg-lime-200 h-50 w-60  rounded-xl my-8 mx-4'>
            
          </div>
          </div>

          </div>
          <div>
            <div className='bg-lime-100 h-100 w-70  rounded-xl border-1 border-dashed border-lime-500'>
            <div className='bg-lime-200 h-50 w-60  rounded-xl my-8 mx-4'>
            
          </div>
          </div>

          </div>
          <div>
            <div className='bg-lime-100 h-100 w-70  rounded-xl border-1 border-dashed border-lime-500'>
            <div className='bg-lime-200 h-50 w-60  rounded-xl my-8 mx-4'>
            
          </div>
          </div>

          </div>
          <div>
            <div className='bg-lime-100 h-100 w-70  rounded-xl border-1 border-dashed border-lime-500'>
            <div className='bg-lime-200 h-50 w-60  rounded-xl my-8 mx-4'>
            
          </div>
          </div>

          </div>
          <div>
            <div className='bg-lime-100 h-100 w-70  rounded-xl border-1 border-dashed border-lime-500'>
            <div className='bg-lime-200 h-50 w-60  rounded-xl my-8 mx-4'>
            
          </div>
          </div>

          </div>
          <div>
            <div className='bg-lime-100 h-100 w-70  rounded-xl border-1 border-dashed border-lime-500'>
            <div className='bg-lime-200 h-50 w-60  rounded-xl my-8 mx-4'>
            
          </div>
          </div>

          </div>
          <div>
            <div className='bg-lime-100 h-100 w-70  rounded-xl border-1 border-dashed border-lime-500'>
            <div className='bg-lime-200 h-50 w-60  rounded-xl my-8 mx-4'>
            
          </div>
          </div>

          </div>
          <div>
            <div className='bg-lime-100 h-100 w-70  rounded-xl border-1 border-dashed border-lime-500'>
            <div className='bg-lime-200 h-50 w-60  rounded-xl my-8 mx-4'>
            
          </div>
          </div>

          </div>
          <div>
            <div className='bg-lime-100 h-100 w-70  rounded-xl border-1 border-dashed border-lime-500'>
            <div className='bg-lime-200 h-50 w-60  rounded-xl my-8 mx-4'>
            
          </div>
          </div>

          </div>
          <div>
            <div className='bg-lime-100 h-100 w-70  rounded-xl border-1 border-dashed border-lime-500'>
            <div className='bg-lime-200 h-50 w-60  rounded-xl my-8 mx-4'>
            
          </div>
          </div>

          </div>
          <div>
            <div className='bg-lime-100 h-100 w-70  rounded-xl border-1 border-dashed border-lime-500'>
            <div className='bg-lime-200 h-50 w-60  rounded-xl my-8 mx-4'>
            
          </div>
          </div>

          </div>
          <div>
            <div className='bg-lime-100 h-100 w-70  rounded-xl border-1 border-dashed border-lime-500'>
            <div className='bg-lime-200 h-50 w-60  rounded-xl my-8 mx-4'>
            
          </div>
          </div>

          </div>
          <div>
            <div className='bg-lime-100 h-100 w-70  rounded-xl border-1 border-dashed border-lime-500'>
            <div className='bg-lime-200 h-50 w-60  rounded-xl my-8 mx-4'>
            
          </div>
          </div>

          </div>
          <div>
            <div className='bg-lime-100 h-100 w-70  rounded-xl border-1 border-dashed border-lime-500'>
            <div className='bg-lime-200 h-50 w-60  rounded-xl my-8 mx-4'>
            
          </div>
          </div>

          </div>
          <div>
            <div className='bg-lime-100 h-100 w-70  rounded-xl border-1 border-dashed border-lime-500'>
            <div className='bg-lime-200 h-50 w-60  rounded-xl my-8 mx-4'>
            
          </div>
          </div>

          </div>
          <div>
            <div className='bg-lime-100 h-100 w-70  rounded-xl border-1 border-dashed border-lime-500'>
            <div className='bg-lime-200 h-50 w-60  rounded-xl my-8 mx-4'>
            
          </div>
          </div>

          </div>
          <div>
            <div className='bg-lime-100 h-100 w-70  rounded-xl border-1 border-dashed border-lime-500'>
            <div className='bg-lime-200 h-50 w-60  rounded-xl my-8 mx-4'>
            
          </div>
          </div>

          </div>
          <div>
            <div className='bg-lime-100 h-100 w-70  rounded-xl border-1 border-dashed border-lime-500'>
            <div className='bg-lime-200 h-50 w-60  rounded-xl my-8 mx-4'>
            
          </div>
          </div>

          </div>
          <div>
            <div className='bg-lime-100 h-100 w-70  rounded-xl border-1 border-dashed border-lime-500'>
            <div className='bg-lime-200 h-50 w-60  rounded-xl my-8 mx-4'>
            
          </div>
          </div>

          </div>
        </div>
        <div className='mt-10 items-center bg-lime-700 h-150  mx-10 rounded-xl pt-1'>
          <div className=' flex justify-center items-center bg-lime-100 h-128 mt-10 mx-10 rounded-xl'>

          </div>
      </div>
      </div>
      </>
    }>

      
    <Hero></Hero>
      <Players plyerPromise={plyerPromise} coin={coin} SetCoin={SetCoin}></Players>
    <Team></Team>
    </Suspense>
    <Footer ></Footer>


    </div>





    <ToastContainer />
    </>
  )
 
}

export default App
