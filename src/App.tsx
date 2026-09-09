import { Suspense } from 'react';
import './App.css'
import type { playerType } from './type';
import { Players } from './components/player/players';
import { Nav } from './components/nav';

const playerDataPermisson = async  (): Promise<playerType[]> =>{
  const res = await fetch("/public/playersData.json");
  const data = await res.json();
  return data ;
}

function App() {

  return (
    <>
    <div>
      <img src="" alt="" />
    <Nav></Nav>
    <Suspense fallback={<h1>wait ..........</h1>}>

      
      <Players playerDataPermisson={playerDataPermisson()}></Players>
    </Suspense>

    </div>
    </>
  )
 
}

export default App
