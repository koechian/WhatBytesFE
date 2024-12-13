'use client'
import { ArrowRight, Certificate, ChartBar, File } from "@phosphor-icons/react/dist/ssr";
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
  const [dialogOpen, setDialogOpen] = useState(false);
  
  // Add new state for test scores
  const [testScores, setTestScores] = useState({
    rank: 4,
    percentile: 90,
    currentScore: 12,
  });

  // Add error state
  const [errors, setErrors] = useState({
    rank: '',
    percentile: '',
    currentScore: '',
  });

  // Add handler for input changes
  const handleScoreUpdate = (field, value) => {
    const newValue = Number(value);
    let error = '';

    // Validate based on field
    switch (field) {
      case 'rank':
        if (!value) {
          error = 'Rank is required';
        } else if (isNaN(newValue) || !Number.isInteger(newValue) || newValue < 1) {
          error = 'Rank must be a positive number';
        }
        break;
      case 'percentile':
        if (isNaN(newValue) || newValue < 1 || newValue > 100) {
          error = 'Percentile must be between 1 and 100';
        }
        break;
      case 'currentScore':
        if (isNaN(newValue) || newValue < 0 || newValue > 15) {
          error = 'Score must be between 0 and 15';
        }
        break;
    }

    // Update errors
    setErrors(prev => ({
      ...prev,
      [field]: error
    }));

    // Only update value if it's valid or empty
    if (!error || !value) {
      setTestScores(prev => ({
        ...prev,
        [field]: value === '' ? '' : newValue
      }));
    }
  };

  // Add handler for saving and closing
  const handleSave = () => {
    // Check for required fields and valid values
    const newErrors = {
      rank: !testScores.rank ? 'Rank is required' : '',
      percentile: (testScores.percentile < 1 || testScores.percentile > 100) ? 'Percentile must be between 1 and 100' : '',
      currentScore: (testScores.currentScore < 0 || testScores.currentScore > 15) ? 'Score must be between 0 and 15' : '',
    };

    setErrors(newErrors);

    // Only close if there are no errors
    if (!Object.values(newErrors).some(error => error)) {
      setDialogOpen(false);
    }
  };

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

                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                  <DialogTrigger className="bg-[#13136E] text-white rounded border-2 border-black p-3 font-bold" onClick={() => setDialogOpen(true)}>
                    Update
                  </DialogTrigger>
                  <DialogContent className="p-10 min-w-[650px]">
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
                        <div className="flex flex-col items-end">
                          <input 
                            value={testScores.rank}
                            onChange={(e) => handleScoreUpdate('rank', e.target.value)}
                            placeholder="Rank" 
                            className={`max-w-[70%] outline-1 outline border-none p-1 rounded-md ${
                              errors.rank ? 'outline-red-500 bg-red-50' : 'outline-blue-400'
                            }`}
                            type="number"
                          />
                          {errors.rank && <span className="text-red-500 text-sm">{errors.rank}</span>}
                        </div>
                      </div>

                      <div className="flex justify-between items-center w-full">
                        <div className="flex gap-5 items-center">
                        <div className="w-7 h-7 grid place-items-center bg-blue-800 text-white rounded-full">2</div>
                        <div>Update your <strong>Percentile</strong></div>
                        </div>
                        <div className="flex flex-col items-end">
                          <input 
                            value={testScores.percentile}
                            onChange={(e) => handleScoreUpdate('percentile', e.target.value)}
                            placeholder="Percentile" 
                            className={`max-w-[70%] outline-1 outline border-none p-1 rounded-md ${
                              errors.percentile ? 'outline-red-500 bg-red-50' : 'outline-blue-400'
                            }`}
                            type="number"
                          />
                          {errors.percentile && <span className="text-red-500 text-sm">{errors.percentile}</span>}
                        </div>
                      </div>

                      <div className="flex justify-between items-center w-full">
                        <div className="flex gap-5 items-center">
                        <div className="w-7 h-7 grid place-items-center bg-blue-800 text-white rounded-full">3</div>
                        <div>Update your <strong>Current Score (out of 15)</strong></div>
                        </div>
                        <div className="flex flex-col items-end">
                          <input 
                            value={testScores.currentScore}
                            onChange={(e) => handleScoreUpdate('currentScore', e.target.value)}
                            placeholder="Score" 
                            className={`max-w-[70%] outline-1 outline border-none p-1 rounded-md ${
                              errors.currentScore ? 'outline-red-500 bg-red-50' : 'outline-blue-400'
                            }`}
                            type="number"
                          />
                          {errors.currentScore && <span className="text-red-500 text-sm">{errors.currentScore}</span>}
                        </div>
                      </div>


                      <div className="flex gap-5 justify-end">
                        <button 
                          onClick={() => setDialogOpen(false)} 
                          className="rounded p-2 font-semibold outline-1 text-blue-900 outline-blue-900 outline"
                        >
                          Cancel
                        </button>
                        <button 
                          onClick={handleSave}
                          className="rounded p-2 font-semibold outline-1 text-white bg-blue-900 outline-black outline"
                        >
                          <div className="flex gap-2 items-center">
                            Save <ArrowRight/>
                          </div>
                        </button>
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
                      {testScores.rank}
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
                      {testScores.percentile}%
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
                      {testScores.currentScore}/15
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
                <CustomLineChart percentileValue={testScores.percentile}/>
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
              <span className="text-lg font-bold text-blue-700">{testScores.currentScore}/15</span>
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
          <CustomPieChart correct={testScores.currentScore}/>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
    </>
  );
}
