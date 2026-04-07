import { useState , useEffect , useRef } from "react";
import envelope from "../../pic/ER.jpeg";
import cover from "../../pic/RE.jpeg";
import Countdown from "../Countdown/Countdown";
import Venue from "../Venue/Venue";
import Footer from "../Footer/Footer";

export default function Home() {

  const toggleMusic = () => {
  if (!audioRef.current) return;

  if (isPlaying) {
    audioRef.current.pause();
  } else {
    audioRef.current.play();
  }

  setIsPlaying(!isPlaying);
};
  const [hideEnvelope, setHideEnvelope] = useState(false);
  const [showInvite, setShowInvite] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showVenue, setShowVenue] = useState(false);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {

    setHideEnvelope(true);

    setTimeout(() => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, 300);

    setTimeout(() => {
      setShowInvite(true);
    }, 2000);

  };

  useEffect(() => {
  if (showInvite) {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 500); // تأخير بسيط يخلي الانيميشن يبان

    return () => clearTimeout(timer);
  }
}, [showInvite]);

useEffect(() => {
  if (showText) {
    const timer = setTimeout(() => {
      setShowVenue(true);
    }, 2000); // بعد ما النص يظهر بشوية

    return () => clearTimeout(timer);
  }
}, [showText]);

  return <>
  
  {/* 🎵 عنصر الصوت */}
  <audio ref={audioRef} loop>
    <source src="/music.mp3.mpeg" type="audio/mpeg" />
  </audio>

  {/* 🔘 زرار الصوت */}
  <button
    onClick={toggleMusic}
    className="fixed top-4 right-4 z-50  text-white px-3 py-2 rounded-full backdrop-blur-md shadow-lg"
  >
    {isPlaying ? "🔊" : "🔇" }
  </button>

    <div className="w-full min-h-screen bg-[#f4f1ea]">

      {/* الظرف */}
      {!showInvite && (
        <div
          onClick={handleClick}
          className={`relative h-screen cursor-pointer 
          transition-opacity duration-3000
          ${hideEnvelope ? "opacity-0" : "opacity-100"}
          items-center justify-center flex`}
        >

          <img
            src={envelope}
            className="w-full h-full object-cover md:object-contain rounded-xl shadow-lg overflow-hidden inset-0"
          />

          {/* الحروف R&E */}
          {/* <div className="absolute bottom-[38%] left-1/2 -translate-x-1/2
          text-[22px] md:text-[26px] font-serif text-[#8a7b63]">
            R & E
          </div> */}

        </div>
      )}

      {/* الدعوة */}
      {showInvite && (
<>
  <div className="relative h-screen overflow-hidden">

    {/* صورة الخلفية */}
    <img src={cover}
      className="w-full h-full object-cover md:object-contain overflow-hidden"/>

    {/* الطبقة السوداء */}
    <div className="absolute inset-0 bg-black/60 overflow-hidden"></div>

    {/* النص */}


    <div className={`absolute inset-0 flex flex-col items-center justify-center text-center text-white space-y-4 sm:space-y-6 px-4 sm:px-6 md:px-12
    transition-all duration-1000 ease-in-out
    ${showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

      <h1 className={`text-white tracking-[6px] font-[Cinzel] font-bold mb-9 transition-all duration-1000 ease-in-out
      ${showText ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-10"}`}>
      WE'RE GETTING MARRIED
      </h1>

      <h3 className={`text-5xl sm:text-6xl md:text-7xl text-white font-[Great_Vibes] float-text transition-all duration-1000 ease-in-out
      ${showText ? "opacity-100 translate-y-0 delay-400" : "opacity-0 translate-y-10"}`}>
      Eslam
      </h3>

      <span className={`text-5xl sm:text-6xl md:text-7xl text-white font-[Great_Vibes] float-text transition-all duration-1000 ease-in-out
      ${showText ? "opacity-100 translate-y-0 delay-600" : "opacity-0 translate-y-10"}`}>
      &
      </span>

      <h3 className={`text-5xl sm:text-6xl md:text-7xl text-white font-[Great_Vibes] mb-20 float-text transition-all duration-1000 ease-in-out
      ${showText ? "opacity-100 translate-y-0 delay-800" : "opacity-0 translate-y-10"}`}>
      Rowida
      </h3>

      {/* <h1 className="text-white tracking-[6px] font-[Cinzel] font-bold mb-9">
        WE'RE GETTING MARRIED
      </h1>

      <h3 className="text-5xl sm:text-6xl md:text-7xl text-white font-[Great_Vibes] float-text">
          Eslam
        </h3>

        <span className="text-5xl sm:text-6xl md:text-7xl text-white font-[Great_Vibes] float-text">&</span>

        <h3 className="text-5xl sm:text-6xl md:text-7xl text-white font-[Great_Vibes] mb-20 float-text">
          Rowida
        </h3> */}

      <p className="text-white text-2xl font-[Playfair_Display] mt-0">
        16 April 2026
      </p>

      <p className="text-lg">
        La jolie Hall
      </p>
    </div>
  </div>

  <Countdown/>
  <Venue showVenue={showVenue } />
  
      </>
  
)}
    </div>
    <Footer/>
    </>
    
  ;
}