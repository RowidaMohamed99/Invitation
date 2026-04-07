import ring from "../../pic/rings.png"
export default function InvitationCard() {
return <>  
        <div className="bg-[hsl(40_37%_96%)] pb-6 pt-12 px-4 flex flex-col items-center justify-center text-center">
            <img src={ring} alt="ring" className="w-24 md:w-32 h-auto opacity-80 pb-8" />
        </div>

    <section className="w-full bg-[#f5efe6]  py-16 px-4 flex justify-center flex-col items-center">
    <div className="w-full max-w-md bg-[#f9f6f1] rounded-2xl p-8  text-center relative"
    style={{
    backgroundImage: "url('https://premiumelegante.thedigitalyes.com/assets/white-textured-paper-KasY8RAJ.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    }}
    >
        {/* Names */}
        <h2 className="text-3xl md:text-4xl font-[Great_Vibes] text-[#a67c52] italic">
            Eslam
        </h2>

        <p className="text-[#a67c52] font-[Great_Vibes] my-2">&</p>

        <h2 className="text-3xl md:text-4xl font-[Great_Vibes] text-[#a67c52] italic mb-6">
        Rowida
        </h2>

        {/* Date */}
        <p className="text-[#c9a46c] font-semibold tracking-wide mb-10">
        12 September 2026
        </p>

        {/* Footer */}
        <p className="text-sm text-[#a67c52]">
        Made with love by{" "}
        <span className="font-semibold underline">
            Rowida Mohamed
        </span>
        </p>


    </div>
    </section>
</>;
}
