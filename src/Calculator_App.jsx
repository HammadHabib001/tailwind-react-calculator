import React from 'react'
import { useState } from 'react'

const CalculatorSection = () => {
  const [result, setResult] = useState('')
  const [inputValue, setInputValue] = useState('')

  const clickHandler = (event) => {
    setInputValue(inputValue.concat(event))
    console.log(inputValue)
  }

  const clear = () => {
    setResult('')
    setInputValue('')
  }

  const clearinput = () => {
    setInputValue('')
  }

  const calculatePercent = () => {
    setResult(result / 100)
  }

  const backspace = () => {
    setInputValue(inputValue.slice(0, inputValue.length - 1))
  }

  const calculate = () => {
    setResult(eval(inputValue));
  }

  const efunction = () => {
    setResult(Math.E * (inputValue))
  }
// Trigonometric Functions
  const sin = () => {
    setResult(Math.sin(inputValue))
  }

  const cos = () => {
    setResult(Math.cos(inputValue))
  }
  const tan = () => {
    setResult(Math.tan(inputValue))
  }

  const absolute = () => {
    setResult(Math.abs(inputValue))
  }

  const inverse = () => {
    setResult(1 / inputValue)
  }

  const log = () => {
    setInputValue(Math.log(inputValue))
  }

  const sqroot = () => {
    setResult(Math.sqrt(inputValue))
  }

  const operator = () => {
    setResult(~inputValue)
  }
  const log10 = () => {
    setResult(Math.log10(inputValue))
  }

  const factorial = () => {
    let ans = 1;

    for (let i = 2; i <= inputValue; i++)
      ans = ans * i;
    setResult(ans)
  }

  const square = () => {
    setResult(Math.pow(inputValue, 2))
  }

  return (



    <section class="bg-[#d1d1d1] h-screen w-full items-center justify-center flex">
      <div class="container h-100 w-[39%] border-gray-900 bg-slate-600 rounded-2xl">
       
        {/* 2 for result  */}
        <div class="result-sec bg-[#505C68] h-40 relative border rounded-t-2xl	" >
          <input type={'text'} className='bg-transparent outline-none	  absolute bottom-0 right-0 border-transparent text-right text-5xl text-gray-200  pr-2' placeholder='0' id='answer' value={result} />
          <p className='text-right pr-3 pt-7 text-xl text-gray-200'>{inputValue}</p>
        </div>

        {/* 3 for butosn  */}

        <div>
          <div class="buttons-section flex">
            <button onClick={clear} className="bg-[#374253] px-12 py-7 w-12 h-5 text-sm 
            text-white font-semibold border hover:text-black items-center hover:bg-slate-500 justify-center flex ">CE
            </button>
            <button onClick={backspace} className="bg-[#374253] px-12 py-7 w-12 h-5 text-sm 
            text-white font-semibold border hover:text-black items-center hover:bg-slate-500 justify-center flex ">C
            </button>
            <button onClick={clearinput} className="bg-[#374253] px-12 py-7 w-12 h-5 text-sm 
            text-white font-semibold border hover:text-black items-center hover:bg-slate-500 justify-center flex ">X
            </button>
            <button onClick={() => clickHandler('/')} className="bg-[#374253] px-12 py-7 w-12 h-5 text-sm 
            text-white font-semibold border hover:text-black items-center hover:bg-slate-500 justify-center flex ">÷
            </button>
            <button onClick={absolute} class=" px-6 py-7 w-12 h-5 text-sm bg-[#333A42] 
            text-white font-semibold border bg-[#333A42]s hover:bg-[#263241] items-center justify-center flex ">|x|
            </button>
            <button onClick={inverse} className="bg-[#333A42] px-6 py-7 w-12 h-5 text-sm 
            text-white font-semibold border  hover:bg-[#263241] items-center justify-center flex ">1/x
            </button>
            <button onClick={sin} className="bg-[#333A42] px-6 py-7 w-12 h-5 text-sm  
            text-white font-semibold  border   hover:bg-[#263241] items-center justify-center flex ">Sin
            </button>

          </div>
          <div class="buttons-section flex">
            <button onClick={() => clickHandler(7)} className="bg-[#5B6A7D] px-12 py-7 w-12 h-5 text-sm 
            text-white font-semibold border hover:bg-[#6187b8] items-center justify-center flex ">7
            </button>
            <button onClick={() => clickHandler(8)} class="bg-[#5B6A7D] px-12 py-7 w-12 h-5 text-sm 
            text-white font-semibold border hover:bg-[#6187b8] items-center justify-center flex ">8
            </button>
            <button onClick={() => clickHandler(9)} className="bg-[#5B6A7D] px-12 py-7 w-12 h-5 text-sm 
            text-white font-semibold border hover:bg-[#6187b8] items-center justify-center flex ">9
            </button>
            <button onClick={() => clickHandler('*')} className="bg-[#374253] px-12 py-7 w-12 h-5 text-sm 
            text-white font-semibold border hover:text-black items-center hover:bg-slate-500 justify-center flex ">*
            </button>
            <button onClick={cos} className="bg-[#333A42] px-6 py-7 w-12 h-5 text-sm 
            text-white font-semibol hover:bg-[#263241] border items-center justify-center flex ">Cos
            </button>
            <button onClick={tan} className="bg-[#333A42] px-6 py-7 w-12 h-5 text-sm 
            text-white font-semibold border hover:bg-[#263241] items-center justify-center flex ">Tan
            </button>
            <button onClick={calculatePercent} className="bg-[#333A42] px-6 py-7 w-12 h-5 text-sm 
            text-white font-semibold border  hover:bg-[#263241] items-center justify-center flex ">%
            </button>

          </div>
          <div class="buttons-section flex">
            <button onClick={() => clickHandler(4)} className="bg-[#5B6A7D] px-12 py-7 w-12 h-5 text-sm 
            text-white font-semibold hover:bg-[#6187b8] border  items-center hover:bg justify-center flex ">4
            </button>
            <button onClick={() => clickHandler(5)} className="bg-[#5B6A7D] px-12 py-7 w-12 h-5 text-sm 
            text-white font-semibold hover:bg-[#6187b8] border  items-center justify-center flex ">5
            </button>
            <button onClick={() => clickHandler(6)} className="bg-[#5B6A7D] px-12 py-7 w-12 h-5 text-sm 
            text-white font-semibold border hover:bg-[#6187b8]  items-center justify-center flex ">6
            </button>
            <button onClick={() => clickHandler('-')} className="bg-[#374253] px-12 py-7 w-12 h-5 text-sm 
            text-white font-semibold border hover:text-black hover:bg-slate-500 items-center
             justify-center flex ">-
            </button>
            <button onClick={log10} className="bg-[#333A42] px-6 py-7 w-12 h-5 text-sm 
            text-white font-semibold border hover:bg-[#263241] items-center justify-center flex ">lg10
            </button>
            <button onClick={log} className="bg-[#333A42] px-6 py-7 w-12 h-5 text-sm 
            text-white font-semibold border hover:bg-[#263241] items-center justify-center flex ">Log
            </button>
            <button onClick={factorial} className="bg-[#333A42] px-6 py-7 w-12 h-5 text-sm 
            text-white font-semibold border   hover:bg-[#263241] items-center justify-center flex ">!
            </button>

          </div>
          <div class="buttons-section flex">
            <button onClick={() => clickHandler(1)} className="bg-[#5B6A7D] px-12 py-7 w-12 h-5 text-sm 
            text-white font-semibold border hover:bg-[#6187b8] items-center justify-center flex ">1
            </button>
            <button onClick={() => clickHandler(2)} className="bg-[#5B6A7D] px-12 py-7 w-12 h-5 text-sm 
            text-white font-semibold border hover:bg-[#6187b8] items-center justify-center flex ">2
            </button>
            <button onClick={() => clickHandler(3)} className="bg-[#5B6A7D] px-12 py-7 w-12 h-5 text-sm 
            text-white font-semibold border hover:bg-[#6187b8] items-center justify-center flex ">3
            </button>
            <button onClick={() => clickHandler('+')} className="bg-[#374253] px-12 py-7 w-12 h-5 text-sm 
            text-white font-semibold border hover:text-black items-center justify-center flex
            hover:bg-slate-500 ">+
            </button>
            <button onClick={square} className="bg-[#333A42] px-6 py-7 w-12 h-5 text-sm 
            text-white font-semibold border hover:bg-[#263241] items-center justify-center flex ">x²
            </button>
            <button onClick={operator} className="bg-[#333A42] px-6 py-7 w-12 h-5 text-sm 
            text-white font-semibold border hover:bg-[#263241] items-center justify-center flex ">~
            </button>
            <button onClick={efunction} class="bg-[#333A42] px-6 py-7 w-12 h-5 text-sm 
            text-white font-semibold border hover:bg-[#263241] items-center justify-center flex ">e
            </button>

          </div>
          <div class="buttons-section flex">
            <button onClick={() => clickHandler('.')} className="bg-[#374253] px-12 py-7 w-12 h-5 text-sm 
            text-white font-semibold border rounded-bl-2xl hover:text-black hover:bg-slate-500 items-center justify-center flex ">.
            </button>
            <button onClick={() => clickHandler(0)} className="bg-[#5B6A7D] hover:bg-[#6187b8] px-12 py-7 w-12 h-5 text-sm 
            text-white font-semibold border   items-center justify-center flex ">0
            </button>
            <button onClick={calculate} class="bg-[#FC6752] px-24 py-7 w-24 h-5 text-sm 
            text-white font-semibold border hover:bg-[#e7432d] items-center justify-center flex ">=
            </button>
            <button onClick={() => clickHandler('(')} className="bg-[#333A42] px-6 py-7 w-12 h-5 text-sm 
            text-white font-semibold border hover:bg-[#263241] items-center justify-center flex ">(
            </button>
            <button onClick={() => clickHandler(')')} className="bg-[#333A42] px-6 py-7 w-12 h-5 text-sm 
            text-white font-semibold border hover:bg-[#263241] items-center justify-center flex ">)
            </button>
            <button onClick={sqroot} className="bg-[#333A42] px-6 py-7 w-12 h-5 text-sm 
            text-white font-semibold rounded-br-2xl  hover:bg-[#263241] items-center justify-center flex ">√
            </button>
          </div>
        </div>
      </div>
    </section>

  )
}

export default CalculatorSection
