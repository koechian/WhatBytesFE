'use client'
import { Certificate, ChartBar, File } from "@phosphor-icons/react/dist/ssr";
import Header from "./components/Header/header";
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <>
    <Header/>
    <section className="w-full h-screen grid grid-cols-7">
      <div className="col-span-1 border-gray-100 border-r-2 min-h-screen pt-10 pr-3 gap-2 flex flex-col">
          <div 
            onClick={() => setActiveTab('dashboard')}
            className={`transitions-all ease-in-out duration-300 flex gap-4 text-slate-700 hover:cursor-pointer items-center hover:bg-slate-200 hover:text-blue-700 font-bold text-2xl p-5 rounded-e-3xl ${
              activeTab === 'dashboard' ? 'bg-slate-200 text-blue-700' : ''
            }`}>
            <ChartBar size={32}/>
            Dashboard
          </div>
          <div 
            onClick={() => setActiveTab('skilltest')}
            className={`flex gap-4 text-slate-700 hover:cursor-pointer items-center hover:bg-slate-200 hover:text-blue-700 font-bold text-2xl p-5 rounded-e-3xl ${
              activeTab === 'skilltest' ? 'bg-slate-200 text-blue-700' : ''
            }`}>
            <Certificate size={32}/>
            Skill Test
          </div>
          <div 
            onClick={() => setActiveTab('internship')}
            className={`flex gap-4 text-slate-700 hover:cursor-pointer items-center hover:bg-slate-200 hover:text-blue-700 font-bold text-2xl p-5 rounded-e-3xl ${
              activeTab === 'internship' ? 'bg-slate-200 text-blue-700' : ''
            }`}>
            <File size={32}/>
            Internship
          </div>
      </div>

      <div className="col-span-6 min-h-screen grid-cols-7">

        <div className="col-span-3">

        </div>
        <div className="col-span-4"></div>
      </div>
    </section>
    </>
  );
}
