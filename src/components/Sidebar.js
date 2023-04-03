import React from "react"
import { IconContext } from "react-icons"
import { Link } from "react-router-dom"
import { sidebarLinks } from "../data/data"

function Sidebaar() {
  return (
    <>
      <IconContext.Provider value={{size:"25px"}}>
        <div className='fixed w-[70px] h-[600px] bg-secondary rounded-bl-[40px] rounded-br-[15px] text-white rounded-tl-[40px] rounded-tr-[15px] flex justify-center items-center'>
          <ul className='flex flex-col justify-between gap-10 '>
            {sidebarLinks.map((item) => {
              return (
                <li className='' key={item.id}>
                  <Link to={item.path} className='flex flex-col-reverse justify-center items-center'>
                    <h6 className='text-[10px]'>{item.title}</h6>
                    <h4>{item.icon}</h4>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </IconContext.Provider>
    </>
  )
}

export default Sidebaar
