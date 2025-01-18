// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-scroll";
// import { useTranslation } from "react-i18next";
// import { hero_img } from "../assets";

// const Hero = () => {
//   const { t } = useTranslation();

//   return (
//     <section
//       id="home"
//       className="section min-h-screen flex items-center bg-gray-50"
//     >
//       <div className="container">
//         <div className="grid md:grid-cols-2 gap-8 items-center text-center md:text-left">
//           <motion.div
//             initial={{ opacity: 0, x: -120 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h1 className="text-4xl md:text-6xl font-bold mb-6">
//               {t("hero.title")} <span className="text-primary"></span>
//             </h1>
//             <p className="text-gray-600 text-lg mb-8">{t("hero.subtitle")}</p>
//             <div className="flex gap-4 justify-center md:justify-start">
//               <Link
//                 to="contact"
//                 spy={true}
//                 smooth={true}
//                 offset={-64}
//                 duration={50}
//                 className="btn-primary cursor-pointer"
//               >
//                 {t("hero.cta")}
//               </Link>
//               <Link
//                 to="services"
//                 spy={true}
//                 smooth={true}
//                 offset={-64}
//                 duration={50}
//                 className="btn border-2 border-primary text-primary hover:bg-primary hover:text-white cursor-pointer"
//               >
//                 {t("navbar.services")}
//               </Link>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 120 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="hidden md:block"
//           >
//             <img src={hero_img} alt="hero" className="rounded-lg" />
//           </motion.div>
//           {/* <motion.div
//             initial={{ opacity: 0, x: 120 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="hidden md:block"
//           >
//             <div className="relative">
//               <div className="absolute -inset-4 bg-primary/10 rounded-lg transform rotate-3"></div>
//               <div className="relative bg-white p-6 rounded-lg shadow-lg">
//                 <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4"></div>
//                 <div className="space-y-2">
//                   <div className="h-4 bg-gray-100 rounded w-3/4"></div>
//                   <div className="h-4 bg-gray-100 rounded w-1/2"></div>
//                 </div>
//               </div>
//             </div>
//           </motion.div> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="section min-h-screen flex items-center bg-gray-50"
    >
      <div className="container flex flex-col md:flex-row items-center justify-center">
        <div className="grid md:grid-cols-1 gap-8 items-center text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-[108px] font-bold mb-6">
              {t("hero.title")} <span className="text-primary bg-black"></span>
            </h1>
            <p className="text-gray-600 text-lg md:text-2xl mb-8">
              {t("hero.subtitle")}
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-[50%]"
        >
          {/* <div className="flex gap-4 justify-center md:justify-start">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-64}
              duration={50}
              className="btn-primary cursor-pointer"
            >
              {t("hero.cta")}
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-64}
              duration={50}
              className="btn border-2 border-primary text-primary hover:bg-primary hover:text-white cursor-pointer"
            >
              {t("navbar.services")}
            </Link>
          </div> */}
          <div className="flex gap-4 justify-center md:justify-start">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-64}
              duration={50}
              className="btn-primary cursor-pointer mx-auto md:scale-150"
            >
              {t("hero.cta")}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
