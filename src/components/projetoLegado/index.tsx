import Image from "next/image";
import React from "react";



const App = () =>{
  return(
    <>
    <div className="projeto1 mx-2 p-24">
            <Image
              alt="github icon"
              width={75}
              height={75}
              src={"/img/Projetos/Github.png"}
              className="github-item"
              />
          </div>

          <div className="projeto2 mx-2 p-24">
            <Image
              alt="github icon"
              width={75}
              height={75}
              src={"/img/Projetos/Github.png"}
              className="github-item"
              />
          </div>

          <div className="projeto3 mx-2 p-24">
            <Image
              alt="github icon"
              width={75}
              height={75}
              src={"/img/Projetos/Github.png"}
              className="github-item"
              />
          </div>
    </>
  )
}

export default App;