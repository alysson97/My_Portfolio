"use client";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import darkPC from "./../../../public/img/Assets/Computer-dark.png";
import { useRef } from "react";
import "./index.scss";


const App = ()=>{
  const nodeRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(()=>{
    setMounted(true);
  }, [])

 if(!mounted){
  return(
<div className="services flex flex-row MagicScroll" ref={nodeRef}>
        <div className="flex flex-col px-8 mr-8">
          <div className="flex justify-between service-items">
            <h1>01</h1>
            <Image
            alt=""
            src={darkPC}
            style={{height:"3rem", width:"4rem"}}
            />
          </div>

          <div>
            <h1>RESPONSIVE<br />DESING</h1>
            <p className="mt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, distinctio voluptatum impedit dolore recusandae unde fuga sed autem necessitatibus aliquam vero nihil a blanditiis nesciunt adipisci atque neque, iusto repellat?</p>
          </div>
          
        </div>

        <div className="px-8 mx-8">
          <div className="flex justify-between service-items">
            <h1>02</h1>
            <Image
              alt=""
              width={75}
              height={75}
              src={"/img/Assets/Landing-dark.png"}
              style={{height:"3rem", width:"4rem"}}
            />
          </div>
            <h1>LANDING<br />PAGE</h1>
            <p className="mt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, distinctio voluptatum impedit dolore recusandae unde fuga sed autem necessitatibus aliquam vero nihil a blanditiis nesciunt adipisci atque neque, iusto repellat?</p>
        </div>

        <div className="px-8 mx-8">

          <div className="flex justify-between service-items">
            <h1>03</h1>
              <Image
              alt=""
              width={75}
              height={45}
              src={"/img/Assets/Icons.png"}
              //style={{height:"3rem", width:"4rem"}}
              />
          </div>
            <h1>CSS<br />ANIMATIONS</h1>
            <p className="mt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, distinctio voluptatum impedit dolore recusandae unde fuga sed autem necessitatibus aliquam vero nihil a blanditiis nesciunt adipisci atque neque, iusto repellat?</p>

        </div>

        <div className="px-8 mx-8">
          <div className="flex justify-between service-items">
            <h1>04</h1>
              <Image
              alt=""
              width={75}
              height={75}
              src={"/img/Assets/Ecommerce-dark.png"}
              style={{height:"3rem", width:"4rem"}}
              />
          </div>
            <h1>WEBSITE &<br />ECOMMERCE</h1>
            <p className="mt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, distinctio voluptatum impedit dolore recusandae unde fuga sed autem necessitatibus aliquam vero nihil a blanditiis nesciunt adipisci atque neque, iusto repellat?</p>
        </div>
      </div>
  );
 }


  return(

      <div className="services flex flex-row MagicScroll" ref={nodeRef}>
        <div className="flex flex-col px-8 mr-8">
          <div className="flex justify-between service-items">
            <h1>01</h1>
            <Image
            alt=""
            src={darkPC}
            style={{height:"3rem", width:"4rem"}}
            />
          </div>

          <div>
            <h1>RESPONSIVE<br />DESING</h1>
            <p className="mt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, distinctio voluptatum impedit dolore recusandae unde fuga sed autem necessitatibus aliquam vero nihil a blanditiis nesciunt adipisci atque neque, iusto repellat?</p>
          </div>
          
        </div>

        <div className="px-8 mx-8">
          <div className="flex justify-between service-items">
            <h1>02</h1>
            <Image
              alt=""
              width={75}
              height={75}
              src={"/img/Assets/Landing-dark.png"}
              style={{height:"3rem", width:"4rem"}}
            />
          </div>
            <h1>LANDING<br />PAGE</h1>
            <p className="mt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, distinctio voluptatum impedit dolore recusandae unde fuga sed autem necessitatibus aliquam vero nihil a blanditiis nesciunt adipisci atque neque, iusto repellat?</p>
        </div>

        <div className="px-8 mx-8">

          <div className="flex justify-between service-items">
            <h1>03</h1>
              <Image
              alt=""
              width={75}
              height={45}
              src={"/img/Assets/Icons.png"}
              //style={{height:"3rem", width:"4rem"}}
              />
          </div>
            <h1>CSS<br />ANIMATIONS</h1>
            <p className="mt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, distinctio voluptatum impedit dolore recusandae unde fuga sed autem necessitatibus aliquam vero nihil a blanditiis nesciunt adipisci atque neque, iusto repellat?</p>

        </div>

        <div className="px-8 mx-8">
          <div className="flex justify-between service-items">
            <h1>04</h1>
              <Image
              alt=""
              width={75}
              height={75}
              src={"/img/Assets/Ecommerce-dark.png"}
              style={{height:"3rem", width:"4rem"}}
              />
          </div>
            <h1>WEBSITE &<br />ECOMMERCE</h1>
            <p className="mt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, distinctio voluptatum impedit dolore recusandae unde fuga sed autem necessitatibus aliquam vero nihil a blanditiis nesciunt adipisci atque neque, iusto repellat?</p>
        </div>
      </div>

  )
}

export default App;