import React from "react"
import people from "../assets/people02.png"
import doctor from "../assets/people01.png"
import { info } from "../data/data"
import * as BsIcons from "react-icons/bs"
import * as HiIcons from "react-icons/hi"
import { IconContext } from "react-icons"
import hospital from "../assets/hospital.png"

function PersonalInfo() {
  return (
    <>
      <IconContext.Provider value={{ color: "#FE856E", size: "12px" }}>
        <div className='w-[250px] h-[600px] bg-primary mt-8 mx-4'>
          <div className='w-[200px] h-[150px] rounded-[10px] bg-white box-shadow'>
            {info.map((item) => {
              return (
                <div>
                  <div className='flex justify-center items-center flex-col'>
                    <img
                      className='w-[50px] border-[3px] border-white rounded-full mt-[-20px]'
                      src={people}
                      alt=''
                    />
                    <h6 className='text-[#333] text-[12px] font-bold'>
                      {item.name}
                    </h6>
                    <p className='text-[#c9c9c9] text-[10px]'>{item.country}</p>
                    <p></p>
                  </div>
                  <div className='px-6'>
                    <div className='flex justify-between items-center'>
                      <div className='text-center'>
                        <h6 className='text-red-500 text-[10px] '>Age</h6>
                        <p className='text-[#333] text-[12px] font-extrabold'>
                          {item.age}
                        </p>
                      </div>
                      <div className='text-center'>
                        <h6 className='text-red-500 text-[10px] '>Weight</h6>
                        <p className='text-[#333] text-[12px] font-extrabold'>
                          {item.weight}
                        </p>
                      </div>
                    </div>
                    <div className='flex justify-between items-center'>
                      <div className=''>
                        <h6 className='text-red-500 text-[10px]'>Height</h6>
                        <p className='text-[#333] text-[12px] font-extrabold'>
                          {item.height}
                        </p>
                      </div>
                      <div className='text-center'>
                        <h6 className='text-red-500 text-[10px] '>Blood</h6>
                        <p className='text-[#333] text-[12px] font-extrabold'>
                          {item.blood}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='flex items-center gap-2 mt-3 mb-2'>
            <h4 className='text-secondary font-bold text-[14px] tracking-[2px]'>
              Today
            </h4>
            <div className='flex gap-1'>
              <div className='w-[20px] h-[20px] rounded-[6px] bg-white flex justify-center items-center'>
                <BsIcons.BsArrowLeft />
              </div>
              <div className='w-[20px] h-[20px] rounded-[6px] bg-white flex justify-center items-center'>
                <BsIcons.BsArrowRight />
              </div>
            </div>
          </div>
          <div className='w-[200px] h-[250px] rounded-[10px] bg-white py-3 px-2 '>
            <div className='flex justify-between'>
              <div>
                <img
                  className='w-[60px] h-[60px] object-cover rounded-[10px]'
                  src={hospital}
                  alt=''
                />
              </div>
              <div>
                <h6 className='text-[#333] text-[12px] font-bold'>
                  Sakra Hospital
                </h6>
                <p className='text-[#c9c9c9] text-[10px]'>
                  Kadubesannali, Bellandur <br /> Bangalore
                </p>

                <IconContext.Provider
                  value={{ color: "#c9c9c9", size: "10px" }}
                >
                  <div className='flex  items-center gap-1'>
                    <HiIcons.HiLocationMarker />
                    <h6 className='text-[10px] text-[#C9C9C9]'>5 minutes</h6>
                    <div className='w-[20px] h-[20px] rounded-[6px] bg-secondary flex justify-center items-center ml-4'>
                      <HiIcons.HiPlus />
                    </div>
                  </div>
                </IconContext.Provider>
              </div>
            </div>
            <hr className='mt-3 border-t-2  border-dashed' />
            <div className='flex items-center gap-3 px-4 mt-4'>
              <img className='w-[35px]' src={doctor} alt='' />
              <div>
                <h6 className='text-[#333] text-[12px] font-bold'>
                  Dr. Sachin Sen.
                </h6>
                <p className='text-[#c9c9c9] text-[8px]'>H.O.D Surgery</p>
              </div>
            </div>
            <h5 className='text-secondary text-[10px] font-bold mt-4 line relative px-4'>
              Scheduled Appointment
            </h5>
            <div className='px-4 flex justify-between mt-4'>
              <div>
                <h6 className='text-secondary text-[10px] font-bold'>Date</h6>
                <p className='text-[#333] text-[12px] font-extrabold'>
                  26-01-23
                </p>
              </div>
              <div>
                <h6 className='text-secondary text-[10px] font-bold'>Time</h6>
                <p className='text-[#333] text-[12px] font-extrabold'>
                  10:00am
                </p>
              </div>
            </div>
          </div>
          <h6 className='text-[10px] font-extrabold text-[#7ed2fc]'>Cards</h6>
          <div className='w-[200px] h-[60px] rounded-[10px] bg-white py-1 flex justify-center items-center gap-3 items-start px-2'>
            <div className='bg-[#557BFE] w-[130px] h-[50px] rounded-[10px] flex justify-center'>
              <h6 className='text-[10px] text-white'> 3524 7682 3467 2489</h6>
            </div>

           <div>
           <div className='w-[30px] h-[30px] rounded-[6px] bg-secondary flex justify-center items-center  '>
              <IconContext.Provider value={{ color: "white" }}>
                <HiIcons.HiPlus />
              </IconContext.Provider>
            </div>
            <h6 className="text-[8px] mt-1">Add Card</h6>
           </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  )
}

export default PersonalInfo
