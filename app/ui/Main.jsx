import Image from 'next/image'
import { useState } from 'react'

const Main = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="mt-[150px] flex items-center justify-center ">
      <div className="flex w-[480px] flex-col items-center  gap-5  ">
        <div className="">
          <Image src="/images/torob_logo.svg" height={88} width={88} />
        </div>

        <h1 className="text-[40px] font-semibold text-[#d73948]">ترب</h1>

        <form className="relative w-full">
          <div className="border">
            <div className="flex  items-center gap-3 rounded border-[#808080] bg-white p-3 text-base">
              <Image src="/images/search.svg" width={20} height={20} />
              <input
                placeholder="نام کالا را وارد کنید"
                className="w-full border-none outline-none "
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </div>
          </div>

          {searchTerm !== '' && (
            <ul className="suggestions absolute right-0 top-[55px] z-10 w-full  border-none bg-white px-[15px]  py-[5px] shadow-[0_3px_9px_rgba(0,0,0,0.15)]">
              <li className="cursor-pointer px-2 py-3 text-xs text-[color:var(--textSoft)] hover:bg-[#f8f8f8]">
                <span className="text-[15px] text-[firebrick]">
                  {searchTerm}{' '}
                </span>
                در دسته ی اول
              </li>
              <li className="cursor-pointer px-2 py-3 text-xs text-[color:var(--textSoft)] hover:bg-[#f8f8f8]">
                <span className="text-[15px] text-[firebrick]">
                  {searchTerm}{' '}
                </span>
                در دسته ی دوم
              </li>
            </ul>
          )}
        </form>

        <div className="text-sm text-[color:var(--textSoft)]">
          مقایسه قیمت میلیون‌ها محصول بین هزاران فروشگاه
        </div>
      </div>
    </div>
  )
}

export default Main
