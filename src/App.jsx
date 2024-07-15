// Ensure all necessary imports are included, such as React and useState
import React, { useEffect, useState } from 'react';
import { Background } from "./Components/Background/Background";
import { Navbar } from './Components/Navbar/Navbar';
import { Hero } from './Components/Hero/Hero';

export const App = () => {
  let heroData = [
    {text1:"Get Your", text2:"Brand Noticed"},
    {text1:"Make Your", text2:"Brand Stand Out"},
    {text1:"We Help", text2:"You Build Empire"},
  ];
  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count)=>{return count===2 ? 0 : count+1})
    },3000);
  },[])

  return (
    <div><Background playStatus={playStatus} heroCount={heroCount}/>
    <Navbar/>
    <Hero 
      setPlayStatus={setPlayStatus}
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
    />
    </div>
  );
}

export default App;