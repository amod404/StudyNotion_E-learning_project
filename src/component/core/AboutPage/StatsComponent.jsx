import React from "react";

const Stats = [
    {count: "5K", label:"Active Students"},
    {count: "10+", label:"Mentors"},
    {count: "200+", label:"Courses"},
    {count: "50+", label:"Awards"},
]

const StatsComponent = () => {
  return(
    <section className="w-screen bg-richblack-700">
        <div className="w-7/12 mx-auto flex flex-row justify-between p-8">
            {Stats.map( (data,index) => (
                <div key={index} className="flex flex-col text-center">
                    <h1 className="text-4xl font-bold text">{data.count}</h1>
                    <h2 className="text-richblack-200">{data.label}</h2>
                </div>
            ) )}
        </div>
    </section>
  );
};

export default StatsComponent;
