"use client";
import Image from 'next/image'; // Import Image from Next.js for optimization

import acmeLogo from '@/assets/logo-acme.png';
import apexlogo from '@/assets/logo-apex.png';
import celestialLogo from '@/assets/logo-celestial.png';
import quantumLogo from '@/assets/logo-quantum.png';
import pulseLogo from '@/assets/logo-pulse.png';
import echoLogo from '@/assets/logo-echo.png';

import { motion } from 'framer-motion';

export const LogoTicker = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2>Trusted by top innovative teams</h2>
          </div>
          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0" }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
              className="flex flex-none gap-14 pr-14 -translate-x-1/2"
            >
              {[
                { src: acmeLogo, alt: "Acme Logo" },
                { src: pulseLogo, alt: "Pulse Logo" },
                { src: echoLogo, alt: "Echo Logo" },
                { src: celestialLogo, alt: "Celestial Logo" },
                { src: apexlogo, alt: "Apex Logo" },
                { src: quantumLogo, alt: "Quantum Logo" },
                { src: acmeLogo, alt: "Acme Logo" },
                { src: pulseLogo, alt: "Pulse Logo" },
                { src: echoLogo, alt: "Echo Logo" },
                { src: celestialLogo, alt: "Celestial Logo" },
                { src: apexlogo, alt: "Apex Logo" },
                { src: quantumLogo, alt: "Quantum Logo" },
              ].map((logo) => (
                <Image
                  src={logo.src}
                  key={logo.alt}
                  alt={logo.alt}
                  className="h-6 w-auto flex-none"
                  width={100} // Add a defined width for each image
                  height={50} // Add a defined height for each image
                  priority // Ensure images load quickly
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
