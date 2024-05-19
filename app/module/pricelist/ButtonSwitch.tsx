"use client"
import React, { useState } from "react"

export const ButtonSwitch = () => {

    const [isYearly, setIsYearly] = useState(false);

    const togglePlan = (plan: "monthly" | "yearly") => {
      setIsYearly(plan === "yearly");
    };

    return (
        <div className="my-12 p-0 overflow-hidden w-max flex font-semibold text-3xl mx-auto border-4 border-black rounded-full">
          <button
            onClick={() => togglePlan("monthly")}
            className={`rounded-l-full px-14 py-2 duration-150 ${!isYearly ? 'bg-black text-white' : ''} `}
          >
            Monthly
          </button>
          <button
            onClick={() => togglePlan("yearly")}
            className={`rounded-r-full px-14 py-2 duration-150 ${isYearly ? 'bg-black text-white' : ''} `}
          >
            Yearly
          </button>
        </div>
    )
}