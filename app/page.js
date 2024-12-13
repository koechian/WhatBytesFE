'use client'
import { Certificate, ChartBar, File } from "@phosphor-icons/react/dist/ssr";
import Header from "./components/Header/header";
import { useState } from 'react';
import Image from "next/image";
import { Progress } from "@/components/ui/progress"
import CustomPieChart from "./components/PieChart/piechart";
import CustomLineChart from "./components/LineChart/linechart";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"



export default function Home() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
    <Header/>
    <section className="w-full grid grid-cols-7">
      <div className="col-span-1 border-gray-100 border-r-2 pt-10 pr-3 gap-2 flex flex-col">
          <div 
            onClick={() => setActiveTab(0)}
            className={`transitions-all ease-in-out duration-300 flex gap-4 text-slate-700 hover:cursor-pointer items-center hover:bg-slate-200 hover:text-blue-700 font-bold text-2xl p-5 rounded-e-full ${
              activeTab === 0 ? 'bg-slate-200 text-[#3F47D6]' : ''
            }`}>
            <ChartBar size={32}/>
            Dashboard
          </div>
          <div 
            onClick={() => setActiveTab(1)}
            className={`flex gap-4 text-slate-700 hover:cursor-pointer items-center hover:bg-slate-200 hover:text-blue-700 font-bold text-2xl p-5 rounded-e-full ${
              activeTab === 1 ? 'bg-slate-200 text-[#3F47D6]' : ''
            }`}>
            <Certificate size={32}/>
            Skill Test
          </div>
          <div 
            onClick={() => setActiveTab(2)}
            className={`flex gap-4 text-slate-700 hover:cursor-pointer items-center hover:bg-slate-200 hover:text-blue-700 font-bold text-2xl p-5 rounded-e-full ${
              activeTab === 2 ? 'bg-slate-200 text-[#3F47D6]' : ''
            }`}>
            <File size={32}/>
            Internship
          </div>
      </div>

      <div className="col-span-6 p-10">
        <div className="mb-10">
        <span className="text-slate-700 text-xl">{activeTab == 0 ? 'Dashboard': activeTab==1?'Skill Test' : 'Internship'  }</span>
        </div>
        <div className="grid grid-cols-7 gap-10">
          <div className="col-span-4 gap-4 flex flex-col">
            <div className="flex p-3 gap-4 border-2 border-slate-200 rounded-xl justify-around items-center ">
              <div>
                <Image src={'/html.jpg'} width={100} height={100} alt={'HTML logo'}/>
              </div>
              <div>
                <h1 className="text-xl font-bold">
                  Hyper Text Markup Language
                </h1>
                <p className="mt-2 text-slate-500 text-md">
                  Questions: 08 | Duration: 15 Mins | Submitted on 5 June 2021
                </p>
              </div>
              <div>

                <Dialog>
                  <DialogTrigger className="bg-[#13136E] text-white rounded border-2 border-black p-3 font-bold">Update</DialogTrigger>
                  <DialogContent className="p-10">
                    <DialogHeader>
                      <DialogTitle>
                        <div className="flex justify-between items-center my-5">
                          <h1 className="font-bold text-2xl">Update scores</h1>
                          <Image src={'/html.jpg'} alt="HTML Logo" width={40} height={40}/>
                        </div>
                      </DialogTitle>
                    </DialogHeader>

                    <div className="flex flex-col gap-5 ">
                      <div className="flex justify-between items-center w-full">
                        <div className="flex gap-5 items-center">
                        <div className="w-7 h-7 grid place-items-center bg-blue-800 text-white rounded-full">1</div>
                        <div>Update your <strong>Rank</strong></div>
                        </div>
                        <div className="flex justify-end"><input placeholder="Rank" className="max-w-[70%] outline-1 outline border-none p-1 rounded-md outline-blue-400" type="number"/></div>
                      </div>

                      <div className="flex justify-between items-center w-full">
                        <div className="flex gap-5 items-center">
                        <div className="w-7 h-7 grid place-items-center bg-blue-800 text-white rounded-full">2</div>
                        <div>Update your <strong>Percentile</strong></div>
                        </div>
                        <div className="flex justify-end"><input placeholder="Rank" className="max-w-[70%] outline-1 outline border-none p-1 rounded-md outline-blue-400" type="number"/></div>
                      </div>

                      <div className="flex justify-between items-center w-full">
                        <div className="flex gap-5 items-center">
                        <div className="w-7 h-7 grid place-items-center bg-blue-800 text-white rounded-full">3</div>
                        <div>Update your <strong>Current Score (out of 15)</strong></div>
                        </div>
                        <div className="flex justify-end"><input placeholder="Rank" className="max-w-[70%] outline-1 outline border-none p-1 rounded-md outline-blue-400" type="number"/></div>
                      </div>


                      <div className="flex gap-5 justify-end">
                        <button className="rounded p-2 font-semibold outline-1 text-blue-900 outline-blue-900 outline">Cancel</button>
                        <button className="rounded p-2 font-semibold outline-1 text-white bg-blue-900 outline-black outline">Save </button>
                      </div>
                      
                    </div>
                  </DialogContent>
                </Dialog>

              </div>
            </div>
            <div className="flex flex-col p-4 gap-4 border-2 border-slate-200 rounded-xl">
              <h1 className="text-xl font-bold">Quick Statistics</h1>

              <div className="flex  divide-x-2 gap-10">
              <div className="flex items-center">
                <div className="flex gap-5 p-3">
                  <div className=" bg-slate-200 border-2 border-slate-300 rounded-full p-4">
                    🏆
                  </div>
                  <div>
                    <span className="text-3xl font-bold">
                      4
                    </span><br/>
                    <span className="text-slate-500 font-medium">
                      YOUR RANK
                      </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex gap-5 p-3">
                  <div className=" bg-slate-200 border-2 border-slate-300 rounded-full p-4">
                    📋
                  </div>
                  <div>
                    <span className="text-3xl font-bold">
                      90%
                    </span><br/>
                    <span className="text-slate-500 font-medium">
                      PERCENTILE
                      </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex gap-5 p-3">
                  <div className=" bg-slate-200 border-2 border-slate-300 rounded-full p-4">
                    ✅
                  </div>
                  <div>
                    <span className="text-3xl font-bold">
                      12/15
                    </span><br/>
                    <span className="text-slate-500 font-medium">
                      CORRECT ANSWERS
                      </span>
                  </div>
                </div>
              </div>
              </div>
            </div>

            <div className="flex flex-col p-3 gap-4 border-2 border-slate-200 rounded-xl">
              <h1 className="text-xl font-bold">Comparison Graph</h1>
              <div className=" flex items-center gap-5">
                <p className="text-lg text-slate-700">
                  <strong>You scored 90% percentile</strong> which is lower than the average percentile 72% of all engineers who took this assesment</p>
                  <div className=" bg-slate-200 border-2 border-slate-300 rounded-full p-4">
                    📈
                  </div>
              </div>

              <div className="w-[800px] h-[400px] self-center">
                <CustomLineChart percentileValue={90}/>
              </div>
            </div>
        </div>
        <div className="col-span-3 flex-col flex gap-5">
        <div className="flex flex-col p-9 gap-10 border-2 border-slate-200 rounded-xl">
          <h1 className="text-xl font-bold">
            Syllabus Wise Analysis
          </h1>

          <div>
            <span className="text-slate-600">
              HTML Tools, Forms, History
            </span>
            <div className="flex items-center gap-10">
              <Progress className="bg-blue-200 " color='blue' value={80} />
                <span>80%</span>
            </div>
          </div>

          <div>
            <span className="text-slate-600">
              Tags and References in HTML
            </span>
            <div className="flex items-center gap-10">
              <Progress className="bg-orange-200" color='orange' value={60} />
                <span>60%</span>
            </div>
          </div>

          <div>
            <span className="text-slate-600">
              Tables and References in HTML
            </span>
            <div className="flex items-center gap-10">
              <Progress className="bg-red-200" color='red' value={24} />
                <span>24%</span>
            </div>
          </div>

          <div>
            <span className="text-slate-600">
              Tables and CSS Basics
            </span>
            <div className="flex items-center gap-10">
              <Progress className="bg-green-200" color='green' value={96} />
                <span>96%</span>
            </div>
          </div>
          </div>

          <div className="flex flex-col p-9 gap-10 border-2 border-slate-200 rounded-xl">
            <div className="flex justify-between">
              <h1 className="text-xl font-bold">
                Question Analysis
              </h1>
              <span className="text-lg font-bold text-blue-700">10/15</span>
            </div>
            <div>
              <p>
                <strong>
                  You scored 10 questions correct out of 15.
                </strong>
                However, it still needs some improvements.
              </p>
            </div>
            <div className="w-[300px] h-[300px] self-center">
          <CustomPieChart correct={12}/>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
    </>
  );
}
