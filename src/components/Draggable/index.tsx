"use client";
import Image from "next/image";
import Draggable, {DraggableCore} from "react-draggable";
import React from "react";
import darkPC from "./../../../public/img/Assets/Computer-t.png";
import { useRef, useState, useEffect } from "react";


const App = ()=>{

  const nodeRef = useRef(null);

  const [clicked, setClicked] = useState(true);
  const [mounted, setMounted] = useState(false);
  const one = "um";
  useEffect(()=>{
    setMounted(true);
    console.log("skills are mounted")
  }, [])

 if(!mounted){
  return null/* (
    <Draggable
      axis="x"
      nodeRef={nodeRef}

    >
      <div
        className= "flex flex-row MagicScroll"
        ref={nodeRef}
        // onMouseEnter={() => setClicked(!clicked)}
        // onMouseOut={() => setClicked(!clicked)}

        >

        <div className="flex flex-col px-8 mr-8">
          <div className="flex justify-between service-items pb-24">
            <h1 className="text-xl font-semibold tracking-wide">01</h1>
            <Image
            alt="computer icon"
            src={darkPC}
            style={{height:"3rem", width:"4rem"}}
            />
          </div>

          <div>
            <h1 className="text-xl font-semibold tracking-wide">RESPONSIVE<br />DESING</h1>
            <p className="mt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, distinctio voluptatum impedit dolore recusandae unde fuga sed autem necessitatibus aliquam vero nihil a blanditiis nesciunt adipisci atque neque, iusto repellat?</p>
          </div>
        </div>
        <div className="vlBlank"/>
        <div className="px-8 mx-8">
          <div className="flex justify-between service-items pb-24">
            <h1 className="text-xl font-semibold tracking-wide">02</h1>
            <Image
              alt="Landing icon"
              width={75}
              height={75}
              src={"/img/Assets/Landing-t.png"}
              style={{height:"3rem", width:"4rem"}}
            />
          </div>
            <h1 className="text-xl font-semibold tracking-wide">LANDING<br />PAGE</h1>
            <p className="mt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, distinctio voluptatum impedit dolore recusandae unde fuga sed autem necessitatibus aliquam vero nihil a blanditiis nesciunt adipisci atque neque, iusto repellat?</p>
        </div>
        <div className="vlBlank"/>
        <div className="px-8 mx-8">

          <div className="flex justify-between service-items pb-24">
            <h1 className="text-xl font-semibold tracking-wide">03</h1>
              <Image
              alt=""
              width={75}
              height={45}
              src={"/img/Assets/Icons.png"}
              //style={{height:"3rem", width:"4rem"}}
              />
          </div>
            <h1 className="text-xl font-semibold tracking-wide">CSS<br />ANIMATIONS</h1>
            <p className="mt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, distinctio voluptatum impedit dolore recusandae unde fuga sed autem necessitatibus aliquam vero nihil a blanditiis nesciunt adipisci atque neque, iusto repellat?</p>

        </div>
        <div className="vlBlank"/>
        <div className="px-8 mx-8">
          <div className="flex justify-between service-items pb-24">
            <h1 className="text-xl font-semibold tracking-wide">04</h1>
              <Image
              alt=""
              width={75}
              height={75}
              src={"/img/Assets/Ecommerce-t.png"}
              style={{height:"3rem", width:"4rem"}}
              />
          </div>
            <h1 className="text-xl font-semibold tracking-wide">WEBSITE &<br />ECOMMERCE</h1>
            <p className="mt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, distinctio voluptatum impedit dolore recusandae unde fuga sed autem necessitatibus aliquam vero nihil a blanditiis nesciunt adipisci atque neque, iusto repellat?</p>
        </div>
      </div>
    </Draggable>
  ); */
};

  return(
   <Draggable
      axis="x"
      nodeRef={nodeRef}

    >
      <div
        className="flex flex-row MagicScroll"
        ref={nodeRef}
        // onMouseEnter={() => setClicked(!clicked)}
        // onMouseOut={() => setClicked(!clicked)}

        >

<div className="flex flex-col px-8 mr-8">
          <div className="flex justify-between service-items pb-24">
            <h1 className="text-xl font-semibold tracking-wide">01</h1>
            <Image
            alt="computer icon"
            src={darkPC}
            style={{height:"3rem", width:"4rem"}}
            />
          </div>

          <div>
            <h1 className="text-xl font-semibold tracking-wide">RESPONSIVE<br />DESING</h1>
            <p className="mt-6">Responsive design ensures that your website looks good and is easy to use on different devices like computers, tablets, and phones. It makes sure your site fits well on any screen, so visitors have a smooth experience.</p>
          </div>
        </div>
        <div className="vlBlank"/>
        <div className="px-8 mx-8">
          <div className="flex justify-between service-items pb-24">
            <h1 className="text-xl font-semibold tracking-wide">02</h1>
            <Image
              alt="Landing icon"
              width={75}
              height={75}
              src={"/img/Assets/Landing-t.png"}
              style={{height:"3rem", width:"4rem"}}
            />
          </div>
            <h1 className="text-xl font-semibold tracking-wide">LANDING<br />PAGE</h1>
            <p className="mt-6">A landing page is a specific web page where people first arrive when they click on something online. It s designed to guide them toward taking a particular action, like signing up for a newsletter or making a purchase.</p>
        </div>
        <div className="vlBlank border-black dark:border-white "/>
        <div className="px-8 mx-8">

          <div className="flex justify-between service-items pb-24">
            <h1 className="text-xl font-semibold tracking-wide">03</h1>
              <Image
              alt=""
              width={75}
              height={45}
              src={"/img/Assets/Icons.png"}
              //style={{height:"3rem", width:"4rem"}}
              />
          </div>
            <h1 className="text-xl font-semibold tracking-wide">CSS<br />ANIMATIONS</h1>
            <p className="mt-6">CSS animations add movement and visual effects to web pages, making them more engaging. These animations can include things like fading in or sliding images, which can capture visitors attention and make the site more interesting.</p>

        </div>
        <div className="vlBlank"/>
        <div className="px-8 mx-8">
          <div className="flex justify-between service-items pb-16">
            <h1 className="text-xl font-semibold tracking-wide">04</h1>
              <Image
              alt=""
              width={75}
              height={75}
              src={"/img/Assets/Ecommerce-t.png"}
              style={{height:"3rem", width:"4rem"}}
              />
          </div>
            <h1 className="text-xl font-semibold tracking-wide">WEBSITE &<br />ECOMMERCE</h1>
            <p className="mt-6">A website is like an online space where you can find information or services, while ecommerce means creating an online store for buying and selling products. Both focus on making the online experience user-friendly, so people can easily find what they need and make purchases.</p>
        </div>
      </div>
    </Draggable>
  )
}

export default App;