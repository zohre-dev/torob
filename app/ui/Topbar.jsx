'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Tabs1 from '@/app/ui/tabsContent/Tabs1'
import Main from '@/app/ui/Main'

const Topbar = () => {
  const [tab, setTab] = useState(0)

  return (
    <>
      <div className="top flex h-12 w-full items-center justify-between bg-[color:var(--bgSoft)] px-10 text-[color:var(--textSoft)]">
        <ul className="top-right flex items-center gap-6 text-sm">
          <li onClick={() => setTab(1)}>موبایل و کالای دیجیتال</li>
          <li onClick={() => setTab(2)}>لپ‌تاپ، کامپیوتر، اداری</li>
          <li onClick={() => setTab(3)}>لوازم خانگی</li>
          <li onClick={() => setTab(4)}>مد و پوشاک</li>
          <li onClick={() => setTab(5)}>زیبایی و بهداشت</li>
          <li onClick={() => setTab(6)}>صوتی و تصویری</li>
          <li onClick={() => setTab(7)}>سایر دسته‌ها</li>
          <li onClick={() => setTab(8)}>هایپر مارکت</li>
        </ul>
        <div className="top-left">
          <Link
            href="./"
            className="inline-block h-7 rounded  border border-[#ccc] bg-white px-5 text-center text-xs leading-7"
          >
            <span>ورود / ثبت نام</span>
          </Link>
        </div>
      </div>

      <div
        className=" h-[calc(100vh-88px)] w-full  px-10 pt-3"
        onClick={() => setTab(0)}
      >
        {console.log('tab', tab)}
        {tab === 0 && <Main />}
        {tab === 1 && <Tabs1 />}
      </div>
    </>
  )
}

export default Topbar
