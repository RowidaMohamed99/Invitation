import React, { useEffect, useState } from "react";

export default function Countdown() {
const weddingDate = new Date("2026-04-16T20:00:00");

const calculateTimeLeft = () => {
    const now = new Date();
    const difference = weddingDate - now;

    if (difference <= 0) return {};

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
    };
};

const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
const [showWelcome, setShowWelcome] = useState(false);

useEffect(() => {
    const timer = setInterval(() => {
    setTimeLeft(calculateTimeLeft());
    }, 1000);

    // يظهر الـ Welcome بعد 2.5 ثانية
    const welcomeTimer = setTimeout(() => {
    setShowWelcome(true);
    }, 2500);

    return () => {
    clearInterval(timer);
    clearTimeout(welcomeTimer);
    };
}, []);

return (
    <section 
    className="pt-6 bg-[#f5efe6] text-[#8b6b4a] flex flex-col items-center justify-center text-center px-4"
    >

      {/* COUNTDOWN */}
    <div className="mb-10 md:mb-16 w-full py-10 flex flex-col items-center justify-center rounded-lg shadow-[0_20px_25px_-10px_rgba(0,0,0,0.25)]"
    style={{
    backgroundImage: "url('https://premiumelegante.thedigitalyes.com/assets/white-textured-paper-KasY8RAJ.png')",
    backgroundSize: "contain",
    backgroundPosition: "center",
    }}
    >
        
        <h2 className="text-4xl md:text-6xl font-[Great_Vibes] mb-4">
        Countdown
        </h2>
        <p className="tracking-[4px] text-sm md:text-lg mb-10">
        UNTIL 16 APRIL 2026
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12">

        <TimeBox value={timeLeft.days} label="DAYS" />
        <Divider />
        <TimeBox value={timeLeft.hours} label="HOURS" />
        <Divider />
        <TimeBox value={timeLeft.minutes} label="MINUTES" />

        </div>
    </div>

      {/* WELCOME */}
    <div
        className={`transition-all duration-1000 pb-10 ${
        showWelcome ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
        <h2 className="text-4xl md:text-6xl font-[Great_Vibes] mb-6">
        Welcome!
        </h2>

        <p className="max-w-xl text-base sm:text-lg md:text-xl leading-relaxed">
        We warmly invite you to celebrate our wedding day with us.
        We look forward to sharing this unforgettable moment with our most special people.
        </p>
    </div>
    </section>
);
}

/* 👇 Component للأرقام */
function TimeBox({ value, label }) {
    return (
    <div className="flex flex-col items-center">
    <span
        key={value}
        className="text-3xl sm:text-4xl md:text-6xl font-light scale-fade"
    >
        {value || "0"}
    </span>
    <span className="text-xs tracking-[3px] mt-2">{label}</span>
    </div>
);
}

/* 👇 خط فاصل */
function Divider() {
    return <div className=" md:block w-px h-10 bg-[#cbb79e]" />;
}