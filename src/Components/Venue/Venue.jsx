import venue from "../../pic/venue.jpg";
import duck from "../../pic/duck.png";
import { motion } from "framer-motion";

export default function Venue({ showVenue }) {
return <>
    <div className="bg-[hsl(40_37%_96%)] pt-8 pb-4 px-4 flex flex-col items-center justify-center text-center">
                <img src={duck} alt="ring" className="w-32 md:w-40 h-auto opacity-80 pb-8" />
            </div>
    <section className="bg-[rgb(197,164,109)] py-16 px-4">

    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={showVenue ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="max-w-md mx-auto bg-white rounded-3xl shadow-xl p-6 text-center"
    >
        {/* Title */}
        <h2
        className="text-3xl text-[#c5a46d] mb-2"
        style={{ fontFamily: "Great Vibes" }}
        >
        The Venue
        </h2>

        <p className="text-gray-500 mb-6">Where we celebrate</p>

        {/* Image */}
        <img
        src= {venue}
        alt="venue"
        className="rounded-xl mb-4"
        />

        {/* Name */}
        <h3
        className="text-xl text-[#c5a46d] mb-2"
        style={{ fontFamily: "Great Vibes" }}
        >
            La jolie Hall
        </h3>

        {/* Date */}
        <p className="text-gray-500 mb-4">
            16 April 2026
        </p>

        <hr className="my-4" />

        {/* Address */}
        <p className="text-gray-600 text-sm mb-4">
        Saad Zaghloul, Elmanakh Department,  <br />
        Port Said Governorate 8563001
        </p>

        {/* Map */}
        <div className="rounded-xl overflow-hidden mb-4">
        <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.0796527228945!2d32.28371198485539!3d31.27389188145173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f99c63c8401a3f%3A0xb031c2bcd72e803c!2zTGEgSm9saWUgLSDZhNin2obZiNmE2Yo!5e0!3m2!1sar!2seg!4v1774743119560!5m2!1sar!2seg"
            className="w-full h-48 border-0"
        ></iframe>

        </div>

        {/* Button */}
        <a
        href="https://maps.app.goo.gl/mgyWmwe7F8Kj24c1A"
        target="_blank"
        className="text-[#c5a46d] font-medium hover:opacity-70 transition"
        >
        📍 OPEN IN MAPS
        </a>
    </motion.div>

    </section>


</>;
}