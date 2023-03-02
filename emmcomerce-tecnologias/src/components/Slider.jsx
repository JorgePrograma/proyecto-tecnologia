import React, { useEffect, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { sliderItems } from '../utils/Data/constantespruebas';

function Slider() {
  const [estadoSlider, setEstadoSlider] = useState(50);
  const [count, setCount] = useState(sliderItems.length);
  const [promedio, setPromedio] = useState(0);

  const calcular = () => {
    setPromedio((((100 / 100) / (count)) * 100).toFixed());
    console.log(promedio);
    console.log(count);
  }

  useEffect(() => {
    calcular();
  }, []);

  const handleNext = (direction) => {
    const dato = promedio * (count - 1);
    if (direction === "next") {
      console.log(estadoSlider);
      if (estadoSlider < dato) {
        setEstadoSlider((estadoSlider + Number(promedio)))
      } else {
        setEstadoSlider(0)
      }
    }
    console.log("next " + estadoSlider)
  }

  const handlePrev = (direction) => {
    const dato = promedio * (count - 1);

    if (direction === "prev") {
      if (estadoSlider > 0) {
        setEstadoSlider(estadoSlider - promedio)
      } else {
        setEstadoSlider(dato)
      }
    }
    console.log("prev " + estadoSlider)
  }

  const [indice, setIndice] = useState(0);
  const [selectData, setSelectData] = useState(sliderItems[0]);
  const [loading, setLoading] = useState("");
  const previus = () => {
    const nextIndex = indice > 0 ? indice - 1 : sliderItems.length - 1;
    setSelectData(sliderItems[nextIndex]);
    setIndice(nextIndex);
    setLoading("duration-1000 translate-x-0")
  }

  const next = () => {
    const nextIndex = indice < sliderItems.length - 1 ? indice + 1 : 0;
    setSelectData(sliderItems[nextIndex]);
    setIndice(nextIndex);
  }

  return (<>

    <div className='w-full h-screen flex relative overflow-hidden '>
      <p>promedio es {promedio}</p>

      {/**-translate-x-2/3 33*/}
      <div className={`flex h-full transition-transform -translate-x-[${estadoSlider}%]`}>
        {sliderItems.map((item) => (

          <div className='w-screen h-screen flex items-center' key={item.id}>
            <div className='flex-1 h-full'>
              <img className='h-4/5 ml-24' src={item.img} />
            </div>

            <div className='flex flex-col gap-6 flex-1 p-12'>
              <h2 className='font-bold text-6xl uppercase'>{item.title}</h2>
              <p className="my-0 text-3xl">{item.desc}</p>
              <div clasName="flex  gap-10">
                <button className='p-3 text-3xl bg-transparent hover:bg-blue-200 cursor-pointer border-2 border-gray-700 rounded-xl 
            hover:scale-y-125 hover:transition-all '
                >Comprar</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='absolute mx-2 h-14 w-14 bg-gray-500 rounded-full
       flex items-center justify-center top-0 bottom-0 m-auto z-2 opacity-50 
       cursor-pointer right-0' onClick={() => handleNext("next")}>
        <AiOutlineArrowRight />
      </div>
      <div className='absolute mx-2 h-14 w-14 bg-gray-500 rounded-full
       flex items-center justify-center top-0 bottom-0 m-auto z-2 opacity-50 
       cursor-pointer'onClick={() => handlePrev("prev")} >
        <AiOutlineArrowRight />
      </div>
    </div>
    <div className='w-full h-screen flex relative overflow-hidden'>
      {/* card de carrusel */}
      <div className={`flex h-full transition-opacity`}>
        <div className={`w-screen h-screen flex items-center ${loading}`}>
          <div className='flex-1 h-full'>
            <img className='h-4/5 ml-24' src={selectData.img} />
          </div>

          <div className='flex flex-col gap-6 flex-1 p-12'>
            <h2 className='font-bold text-6xl uppercase'>{selectData.title}</h2>
            <p className="my-0 text-3xl">{selectData.desc}</p>
            <div className="flex  gap-10">
              <button className='p-3 text-3xl bg-transparent hover:bg-blue-200 cursor-pointer border-2 border-gray-700 rounded-xl 
            hover:scale-y-125 hover:transition-all '
              >Comprar</button>
            </div>
          </div>
        </div>
      </div>


      {/* botones de siguiente y anterior */}
      <div className='absolute mx-2 h-14 w-14 bg-gray-500 rounded-full
       flex items-center justify-center top-0 bottom-0 m-auto z-2 opacity-50 
       cursor-pointer'onClick={() => previus()} >
        <AiOutlineArrowLeft />
      </div>

      <div className='absolute mx-2 h-14 w-14 bg-gray-500 rounded-full
       flex items-center justify-center top-0 bottom-0 m-auto z-2 opacity-50 
       cursor-pointer right-0' onClick={() => next()}>
        <AiOutlineArrowRight />
      </div>

    </div>
  </>
  );
}

export default Slider;
