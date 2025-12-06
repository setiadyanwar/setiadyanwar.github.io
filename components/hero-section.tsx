"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download, Code, Palette, Monitor, MapPin, MessageCircle, Mail, X } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect, useRef } from "react";

export default function HeroSection() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const eyeRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (contactRef.current && !contactRef.current.contains(event.target as Node)) {
        setIsContactOpen(false);
      }
    };

    if (isContactOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isContactOpen]);

  // Track mouse position for eye following
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (eyeRef.current) {
        const rect = eyeRef.current.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;
        
        const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
        const distance = Math.min(8, Math.sqrt(Math.pow(e.clientX - eyeCenterX, 2) + Math.pow(e.clientY - eyeCenterY, 2)) / 10);
        
        setMousePosition({
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-[#fafafa] dark:bg-black">
      {/* Clean Apple-style background */}
      <div className="absolute inset-0 bg-[#fafafa] dark:bg-black"></div>
      
      {/* Subtle flowing background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large flowing orbs */}
        <div 
          className="absolute w-96 h-96 rounded-full opacity-[0.03] dark:opacity-[0.05]"
          style={{
            top: '10%',
            left: '5%',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.8) 0%, transparent 70%)',
            animation: 'floatingOrb1 12s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full opacity-[0.02] dark:opacity-[0.04]"
          style={{
            top: '60%',
            right: '10%',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, transparent 70%)',
            animation: 'floatingOrb2 15s ease-in-out infinite reverse'
          }}
        />
        
        {/* Medium flowing nodes */}
        <div 
          className="absolute w-32 h-32 rounded-full opacity-[0.02] dark:opacity-[0.03]"
          style={{
            top: '25%',
            right: '30%',
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.6) 0%, transparent 60%)',
            animation: 'floatingNode1 8s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute w-24 h-24 rounded-full opacity-[0.03] dark:opacity-[0.04]"
          style={{
            bottom: '25%',
            left: '20%',
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.5) 0%, transparent 60%)',
            animation: 'floatingNode2 10s ease-in-out infinite reverse'
          }}
        />
        
        {/* Small floating particles */}
        <div 
          className="absolute w-2 h-2 rounded-full bg-indigo-400 opacity-[0.08] dark:opacity-[0.12]"
          style={{
            top: '30%',
            left: '70%',
            animation: 'floatingParticle1 6s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute w-3 h-3 rounded-full bg-purple-400 opacity-[0.06] dark:opacity-[0.1]"
          style={{
            top: '70%',
            left: '80%',
            animation: 'floatingParticle2 7s ease-in-out infinite reverse'
          }}
        />
        <div 
          className="absolute w-1.5 h-1.5 rounded-full bg-green-400 opacity-[0.1] dark:opacity-[0.15]"
          style={{
            top: '15%',
            left: '15%',
            animation: 'floatingParticle3 5s ease-in-out infinite'
          }}
        />
        
        <style jsx>{`
          @keyframes floatingOrb1 {
            0%, 100% { transform: translateY(0px) scale(1) rotate(0deg); }
            33% { transform: translateY(-30px) scale(1.1) rotate(120deg); }
            66% { transform: translateY(15px) scale(0.9) rotate(240deg); }
          }
          
          @keyframes floatingOrb2 {
            0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
            50% { transform: translateY(25px) translateX(-15px) scale(1.05); }
          }
          
          @keyframes floatingNode1 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { transform: translateY(-20px) translateX(10px) rotate(180deg); }
          }
          
          @keyframes floatingNode2 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
            33% { transform: translateY(-15px) translateX(8px) rotate(120deg); }
            66% { transform: translateY(10px) translateX(-8px) rotate(240deg); }
          }
          
          @keyframes floatingParticle1 {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-40px) scale(1.3); }
          }
          
          @keyframes floatingParticle2 {
            0%, 100% { transform: translateX(0px) translateY(0px) scale(1); }
            50% { transform: translateX(-25px) translateY(-20px) scale(0.8); }
          }
          
          @keyframes floatingParticle3 {
            0%, 100% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.8) rotate(180deg); }
          }
        `}</style>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Profile photo for mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative flex justify-center items-center mb-8 md:hidden"
            >
              <div className="relative">
                {/* Liquid glass container */}
                <div className="w-32 h-32 rounded-full overflow-hidden border border-white/20 dark:border-white/10 p-1 bg-white/20 dark:bg-black/20 backdrop-blur-2xl backdrop-saturate-150 shadow-2xl shadow-gray-200/20 dark:shadow-black/20 [background:linear-gradient(135deg,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0.1)_100%)] dark:[background:linear-gradient(135deg,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.1)_100%)]">
                  <Image
                    src="/setiady.png"
                    alt="Setiady Ibrahim Anwar"
                    width={120}
                    height={120}
                    className="rounded-full object-cover"
                  />
                </div>
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400/20 to-purple-400/20 blur-xl animate-pulse"></div>
              </div>

              {/* Liquid glass floating elements */}
              <motion.div
                className="absolute -top-2 right-24 w-8 h-8 bg-white/30 dark:bg-black/30 backdrop-blur-xl backdrop-saturate-150 rounded-full flex items-center justify-center shadow-lg shadow-indigo-200/20 dark:shadow-indigo-800/20 border border-white/20 dark:border-white/10"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                style={{
                  background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(99, 102, 241, 0.1) 100%)'
                }}
              >
                <Code className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              </motion.div>

              <motion.div
                className="absolute -bottom-2 left-24 w-8 h-8 bg-white/30 dark:bg-black/30 backdrop-blur-xl backdrop-saturate-150 rounded-full flex items-center justify-center shadow-lg shadow-orange-200/20 dark:shadow-orange-800/20 border border-white/20 dark:border-white/10"
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                style={{
                  background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.2) 0%, rgba(249, 115, 22, 0.1) 100%)'
                }}
              >
                <Palette className="w-4 h-4 text-orange-600 dark:text-orange-400" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 right-24 transform -translate-y-1/2 w-16 h-16 flex items-center justify-center"
                animate={{ x: [0, 5, 0], rotate: [0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <svg width="300" height="210" viewBox="0 0 194 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="32.144" y="44.0015" width="161" height="42.852" rx="21.426" fill="#5E6BF6"/>
                  <path d="M56.6966 62.247C56.6435 61.7118 56.4157 61.296 56.0132 60.9996C55.6106 60.7033 55.0644 60.5551 54.3743 60.5551C53.9054 60.5551 53.5096 60.6214 53.1867 60.7541C52.8638 60.8824 52.616 61.0615 52.4435 61.2916C52.2754 61.5216 52.1914 61.7826 52.1914 62.0745C52.1826 62.3178 52.2334 62.5301 52.344 62.7115C52.459 62.8928 52.616 63.0498 52.8151 63.1825C53.0141 63.3108 53.2442 63.4236 53.5051 63.5209C53.7661 63.6138 54.0448 63.6934 54.3411 63.7598L55.562 64.0517C56.1547 64.1844 56.6988 64.3614 57.1942 64.5825C57.6896 64.8037 58.1187 65.0757 58.4814 65.3986C58.8441 65.7215 59.125 66.1019 59.324 66.5399C59.5275 66.9778 59.6315 67.4798 59.6359 68.046C59.6315 68.8776 59.4191 69.5986 58.9989 70.209C58.5831 70.815 57.9816 71.2861 57.1942 71.6223C56.4113 71.954 55.4669 72.1199 54.3611 72.1199C53.2641 72.1199 52.3086 71.9518 51.4947 71.6156C50.6853 71.2795 50.0527 70.7818 49.5971 70.1228C49.1459 69.4593 48.9093 68.6387 48.8872 67.6612H51.6672C51.6982 68.1168 51.8287 68.4972 52.0587 68.8024C52.2931 69.1032 52.605 69.331 52.9942 69.4858C53.3879 69.6362 53.8325 69.7114 54.3279 69.7114C54.8144 69.7114 55.2369 69.6406 55.5952 69.4991C55.9579 69.3575 56.2388 69.1607 56.4378 68.9086C56.6369 68.6564 56.7364 68.3667 56.7364 68.0394C56.7364 67.7342 56.6457 67.4776 56.4644 67.2697C56.2874 67.0618 56.0264 66.8849 55.6814 66.7389C55.3408 66.5929 54.9228 66.4602 54.4274 66.3408L52.9478 65.9692C51.8021 65.6906 50.8976 65.2549 50.2341 64.6621C49.5706 64.0694 49.241 63.271 49.2455 62.2669C49.241 61.4442 49.46 60.7254 49.9023 60.1105C50.3491 59.4957 50.9617 59.0158 51.7402 58.6707C52.5187 58.3257 53.4034 58.1532 54.3942 58.1532C55.4027 58.1532 56.283 58.3257 57.035 58.6707C57.7914 59.0158 58.3797 59.4957 58.7999 60.1105C59.2201 60.7254 59.4368 61.4375 59.4501 62.247H56.6966ZM66.1598 72.1265C65.1114 72.1265 64.2091 71.9142 63.4527 71.4896C62.7007 71.0605 62.1213 70.4545 61.7143 69.6716C61.3074 68.8842 61.1039 67.9531 61.1039 66.8782C61.1039 65.8299 61.3074 64.9099 61.7143 64.1181C62.1213 63.3263 62.6941 62.7092 63.4328 62.2669C64.1759 61.8246 65.0473 61.6034 66.047 61.6034C66.7193 61.6034 67.3452 61.7118 67.9247 61.9285C68.5086 62.1408 69.0172 62.4615 69.4507 62.8906C69.8886 63.3197 70.2292 63.8593 70.4725 64.5095C70.7158 65.1554 70.8375 65.9117 70.8375 66.7787V67.555H62.2318V65.8034H68.1768C68.1768 65.3964 68.0883 65.0359 67.9114 64.7219C67.7345 64.4078 67.489 64.1623 67.1749 63.9854C66.8653 63.804 66.5048 63.7133 66.0934 63.7133C65.6644 63.7133 65.2839 63.8129 64.9522 64.0119C64.6249 64.2065 64.3683 64.4697 64.1825 64.8015C63.9968 65.1288 63.9017 65.4937 63.8972 65.8963V67.5617C63.8972 68.0659 63.9901 68.5016 64.1759 68.8687C64.3661 69.2359 64.6337 69.519 64.9787 69.718C65.3238 69.9171 65.7329 70.0166 66.2062 70.0166C66.5203 70.0166 66.8078 69.9724 67.0688 69.8839C67.3297 69.7954 67.5531 69.6627 67.7389 69.4858C67.9247 69.3089 68.0662 69.0921 68.1635 68.8356L70.7777 69.0081C70.645 69.6362 70.373 70.1847 69.9616 70.6536C69.5547 71.118 69.0283 71.4807 68.3825 71.7417C67.7411 71.9983 67.0002 72.1265 66.1598 72.1265ZM78.1028 61.7361V63.8593H71.9654V61.7361H78.1028ZM73.3588 59.2944H76.1853V68.7958C76.1853 69.0567 76.2251 69.2602 76.3047 69.4062C76.3843 69.5477 76.4949 69.6473 76.6365 69.7048C76.7824 69.7623 76.9505 69.791 77.1407 69.791C77.2734 69.791 77.4061 69.78 77.5388 69.7578C77.6715 69.7313 77.7733 69.7114 77.844 69.6981L78.2886 71.8014C78.147 71.8457 77.948 71.8965 77.6914 71.954C77.4349 72.016 77.123 72.0536 76.7559 72.0668C76.0747 72.0934 75.4775 72.0027 74.9644 71.7948C74.4557 71.5869 74.0599 71.264 73.7768 70.8261C73.4937 70.3882 73.3543 69.8352 73.3588 69.1673V59.2944ZM79.944 71.9275V61.7361H82.7705V71.9275H79.944ZM81.3639 60.4224C80.9437 60.4224 80.5832 60.283 80.2824 60.0044C79.986 59.7213 79.8379 59.3829 79.8379 58.9892C79.8379 58.6 79.986 58.266 80.2824 57.9873C80.5832 57.7042 80.9437 57.5627 81.3639 57.5627C81.7841 57.5627 82.1424 57.7042 82.4388 57.9873C82.7396 58.266 82.89 58.6 82.89 58.9892C82.89 59.3829 82.7396 59.7213 82.4388 60.0044C82.1424 60.283 81.7841 60.4224 81.3639 60.4224ZM87.9409 72.1199C87.2906 72.1199 86.7112 72.0071 86.2025 71.7815C85.6938 71.5515 85.2913 71.2131 84.9949 70.7664C84.703 70.3152 84.557 69.7534 84.557 69.0811C84.557 68.5149 84.661 68.0394 84.8688 67.6545C85.0767 67.2697 85.3598 66.9601 85.7181 66.7256C86.0764 66.4912 86.4834 66.3143 86.939 66.1948C87.399 66.0754 87.8811 65.9914 88.3854 65.9427C88.9781 65.8808 89.4559 65.8233 89.8186 65.7702C90.1813 65.7127 90.4445 65.6286 90.6081 65.5181C90.7718 65.4075 90.8536 65.2438 90.8536 65.0271V64.9873C90.8536 64.567 90.7209 64.2419 90.4555 64.0119C90.1946 63.7819 89.823 63.6669 89.3408 63.6669C88.8322 63.6669 88.4274 63.7797 88.1266 64.0053C87.8259 64.2264 87.6268 64.5051 87.5295 64.8413L84.9153 64.629C85.048 64.0097 85.309 63.4745 85.6982 63.0233C86.0875 62.5677 86.5895 62.2183 87.2044 61.975C87.8236 61.7273 88.5402 61.6034 89.3541 61.6034C89.9203 61.6034 90.4622 61.6698 90.9797 61.8025C91.5017 61.9352 91.9639 62.1408 92.3664 62.4195C92.7734 62.6982 93.0941 63.0565 93.3285 63.4944C93.5629 63.9279 93.6801 64.4476 93.6801 65.0536V71.9275H90.9996V70.5142H90.92C90.7563 70.8327 90.5374 71.1136 90.2631 71.3569C89.9889 71.5957 89.6593 71.7837 89.2745 71.9209C88.8897 72.0536 88.4451 72.1199 87.9409 72.1199ZM88.7503 70.1692C89.1661 70.1692 89.5333 70.0874 89.8517 69.9237C90.1702 69.7556 90.4201 69.53 90.6015 69.2469C90.7829 68.9639 90.8735 68.6432 90.8735 68.2849V67.2034C90.7851 67.2609 90.6634 67.3139 90.5086 67.3626C90.3582 67.4068 90.1879 67.4489 89.9977 67.4887C89.8075 67.5241 89.6173 67.5572 89.4271 67.5882C89.2369 67.6147 89.0644 67.6391 88.9096 67.6612C88.5778 67.7098 88.2881 67.7872 88.0404 67.8934C87.7927 67.9996 87.6003 68.1433 87.4631 68.3247C87.326 68.5016 87.2575 68.7228 87.2575 68.9882C87.2575 69.373 87.3968 69.6672 87.6755 69.8706C87.9586 70.0697 88.3168 70.1692 88.7503 70.1692ZM99.6284 72.0934C98.8544 72.0934 98.1533 71.8943 97.5251 71.4962C96.9015 71.0937 96.406 70.5032 96.0389 69.7247C95.6762 68.9417 95.4948 67.9819 95.4948 66.8451C95.4948 65.6773 95.6828 64.7064 96.0588 63.9323C96.4348 63.1538 96.9346 62.5721 97.5583 62.1873C98.1864 61.798 98.8743 61.6034 99.6218 61.6034C100.192 61.6034 100.668 61.7007 101.048 61.8953C101.433 62.0856 101.743 62.3244 101.977 62.6119C102.216 62.895 102.397 63.1737 102.521 63.4479H102.608V58.339H105.427V71.9275H102.641V70.2953H102.521C102.389 70.5784 102.201 70.8593 101.957 71.1379C101.718 71.4122 101.407 71.64 101.022 71.8213C100.641 72.0027 100.177 72.0934 99.6284 72.0934ZM100.524 69.8441C100.98 69.8441 101.365 69.7202 101.679 69.4725C101.997 69.2204 102.24 68.8687 102.409 68.4176C102.581 67.9664 102.667 67.4378 102.667 66.8318C102.667 66.2258 102.583 65.6994 102.415 65.2527C102.247 64.8059 102.004 64.4609 101.685 64.2176C101.367 63.9743 100.98 63.8527 100.524 63.8527C100.06 63.8527 99.6683 63.9787 99.3498 64.2309C99.0313 64.483 98.7902 64.8324 98.6266 65.2792C98.4629 65.726 98.3811 66.2435 98.3811 66.8318C98.3811 67.4245 98.4629 67.9487 98.6266 68.4043C98.7946 68.8555 99.0357 69.2093 99.3498 69.4659C99.6683 69.718 100.06 69.8441 100.524 69.8441ZM109.496 75.7493C109.138 75.7493 108.802 75.7205 108.488 75.663C108.178 75.6099 107.922 75.5414 107.718 75.4573L108.355 73.3474C108.687 73.4491 108.985 73.5044 109.251 73.5133C109.521 73.5221 109.753 73.4602 109.948 73.3275C110.147 73.1948 110.308 72.9692 110.432 72.6507L110.598 72.2194L106.942 61.7361H109.914L112.024 69.2204H112.13L114.26 61.7361H117.253L113.292 73.0289C113.101 73.5774 112.843 74.0551 112.515 74.4621C112.192 74.8734 111.783 75.1897 111.288 75.4109C110.792 75.6365 110.195 75.7493 109.496 75.7493ZM119.817 71.9275H116.738L121.429 58.339H125.132L129.816 71.9275H126.737L123.334 61.4442H123.228L119.817 71.9275ZM119.625 66.5863H126.897V68.8289H119.625V66.5863ZM134.225 66.0356V71.9275H131.399V61.7361H134.092V63.5342H134.212C134.437 62.9415 134.816 62.4726 135.346 62.1276C135.877 61.7781 136.521 61.6034 137.277 61.6034C137.985 61.6034 138.602 61.7582 139.128 62.0679C139.655 62.3775 140.064 62.8198 140.356 63.3949C140.648 63.9655 140.794 64.6467 140.794 65.4384V71.9275H137.967V65.9427C137.972 65.319 137.812 64.8324 137.489 64.483C137.167 64.1291 136.722 63.9522 136.156 63.9522C135.775 63.9522 135.439 64.034 135.147 64.1977C134.86 64.3614 134.634 64.6002 134.471 64.9143C134.311 65.2239 134.229 65.5977 134.225 66.0356ZM145.032 71.9275L142.258 61.7361H145.118L146.697 68.5834H146.79L148.436 61.7361H151.242L152.914 68.5436H153.001L154.553 61.7361H157.406L154.639 71.9275H151.647L149.895 65.5181H149.769L148.018 71.9275H145.032ZM161.82 72.1199C161.17 72.1199 160.59 72.0071 160.082 71.7815C159.573 71.5515 159.171 71.2131 158.874 70.7664C158.582 70.3152 158.436 69.7534 158.436 69.0811C158.436 68.5149 158.54 68.0394 158.748 67.6545C158.956 67.2697 159.239 66.9601 159.597 66.7256C159.956 66.4912 160.363 66.3143 160.818 66.1948C161.278 66.0754 161.76 65.9914 162.265 65.9427C162.857 65.8808 163.335 65.8233 163.698 65.7702C164.061 65.7127 164.324 65.6286 164.487 65.5181C164.651 65.4075 164.733 65.2438 164.733 65.0271V64.9873C164.733 64.567 164.6 64.2419 164.335 64.0119C164.074 63.7819 163.702 63.6669 163.22 63.6669C162.711 63.6669 162.307 63.7797 162.006 64.0053C161.705 64.2264 161.506 64.5051 161.409 64.8413L158.795 64.629C158.927 64.0097 159.188 63.4745 159.577 63.0233C159.967 62.5677 160.469 62.2183 161.084 61.975C161.703 61.7273 162.419 61.6034 163.233 61.6034C163.8 61.6034 164.341 61.6698 164.859 61.8025C165.381 61.9352 165.843 62.1408 166.246 62.4195C166.653 62.6982 166.973 63.0565 167.208 63.4944C167.442 63.9279 167.559 64.4476 167.559 65.0536V71.9275H164.879V70.5142H164.799C164.636 70.8327 164.417 71.1136 164.142 71.3569C163.868 71.5957 163.539 71.7837 163.154 71.9209C162.769 72.0536 162.324 72.1199 161.82 72.1199ZM162.63 70.1692C163.045 70.1692 163.413 70.0874 163.731 69.9237C164.049 69.7556 164.299 69.53 164.481 69.2469C164.662 68.9639 164.753 68.6432 164.753 68.2849V67.2034C164.664 67.2609 164.543 67.3139 164.388 67.3626C164.237 67.4068 164.067 67.4489 163.877 67.4887C163.687 67.5241 163.497 67.5572 163.306 67.5882C163.116 67.6147 162.944 67.6391 162.789 67.6612C162.457 67.7098 162.167 67.7872 161.92 67.8934C161.672 67.9996 161.48 68.1433 161.342 68.3247C161.205 68.5016 161.137 68.7228 161.137 68.9882C161.137 69.373 161.276 69.6672 161.555 69.8706C161.838 70.0697 162.196 70.1692 162.63 70.1692ZM169.752 71.9275V61.7361H172.493V63.5143H172.599C172.784 62.8818 173.096 62.404 173.534 62.0811C173.972 61.7538 174.476 61.5901 175.047 61.5901C175.189 61.5901 175.341 61.599 175.505 61.6167C175.668 61.6344 175.812 61.6587 175.936 61.6897V64.1977C175.803 64.1579 175.62 64.1225 175.385 64.0915C175.151 64.0606 174.936 64.0451 174.742 64.0451C174.326 64.0451 173.954 64.1358 173.627 64.3171C173.304 64.4941 173.048 64.7418 172.857 65.0602C172.672 65.3787 172.579 65.7459 172.579 66.1617V71.9275H169.752Z" fill="white"/>
                  <g filter="url(#filter0_d_2358_11385)">
                  <path d="M14.4037 44.0056L7 6.28564L39.5763 25.1456L23.2882 29.4979L14.4037 44.0056Z" fill="white"/>
                  <path d="M14.4037 44.0056L7 6.28564L39.5763 25.1456L23.2882 29.4979L14.4037 44.0056Z" stroke="#5E6BF6" strokeWidth="4" strokeLinecap="square"/>
                  </g>
                  <defs>
                  <filter id="filter0_d_2358_11385" x="0.898099" y="0.15342" width="47.1467" height="53.6601" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="1.09687"/>
                  <feGaussianBlur stdDeviation="1.64531"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2358_11385"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2358_11385" result="shape"/>
                  </filter>
                  </defs>
                </svg>
              </motion.div>

              <motion.div
                className="absolute top-0 left-24 transform -translate-y-1/2 w-8 h-8 bg-white/30 dark:bg-black/30 backdrop-blur-xl backdrop-saturate-150 rounded-full flex items-center justify-center shadow-lg shadow-green-200/20 dark:shadow-green-800/20 border border-white/20 dark:border-white/10"
                animate={{ x: [0, -5, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
                style={{
                  background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(34, 197, 94, 0.1) 100%)'
                }}
              >
                <Monitor className="w-4 h-4 text-green-600 dark:text-green-400" />
              </motion.div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-2 text-center md:text-left md:flex md:items-center md:gap-3"
            >
              {/* Eyes that follow cursor */}
              <div className="flex justify-center md:justify-start items-center gap-2 flex-shrink-0 mb-2 md:mb-0">
                {/* First Eye */}
                <div
                  ref={eyeRef}
                  className="relative w-6 h-6"
                >
                  {/* Eye outline */}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-400 dark:text-gray-500"
                    suppressHydrationWarning
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                  {/* Pupil that follows cursor */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-2 h-2 bg-gray-700 dark:bg-gray-300 rounded-full"
                    style={{
                      x: mousePosition.x - 4,
                      y: mousePosition.y - 4,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  />
                </div>
                {/* Second Eye */}
                <div className="relative w-6 h-6">
                  {/* Eye outline */}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-400 dark:text-gray-500"
                    suppressHydrationWarning
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                  {/* Pupil that follows cursor */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-2 h-2 bg-gray-700 dark:bg-gray-300 rounded-full"
                    style={{
                      x: mousePosition.x - 4,
                      y: mousePosition.y - 4,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  />
                </div>
              </div>
              Hello, I'm Setiady
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-500 mb-8 text-center md:text-left leading-[1.6] max-w-3xl"
            >
              I solve{" "}
              <span className="font-bold text-gray-900 dark:text-white">user problems</span>{" "}
              through thoughtful{" "}
              <span className="text-black dark:text-white font-bold">
                design
              </span>{" "}
              and {" "}
              <span className="text-black dark:text-white font-bold">
              elegant code
              </span>
              , creating digital products that matter.
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex text-center justify-center md:justify-start md:text-left mb-4 text-gray-700 dark:text-gray-300"
            >
              <h4>Founder of Kreavoks Digital Agency | </h4>
              <img
                src="/client/kreavoks.svg"
                alt="Kreavoks Logo"
                className="h-6 w-16 ml-2"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl h-20 mx-auto md:mx-0 text-center md:text-left"
            >
              <TypeAnimation
                sequence={[
                  "BNSP-Certified Web Programmer", 1000,
                  "Frontend Developer & UI/UX Enthusiast", 1000,
                  "Web Programmer with BNSP Certification and over 2 years of experience in Frontend Development and UI/UX Design", 1000
                ]}
                wrapper="p"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
                className="min-h-[80px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              {/* Combined Explore & Contact Button */}
              <div className="relative" ref={contactRef}>
                <div className="flex bg-gray-100 dark:bg-gray-800 rounded-full p-1.5 shadow-sm gap-1">
                  {/* Explore Button */}
                  <Button
                    asChild
                    className="rounded-full px-4 py-6 font-medium transition-all duration-200 bg-indigo-600 text-white hover:text-indigo-600 btn-splash"
                    size="lg"
                  >
                    <Link href="/portfolio" className="flex items-center gap-2">
                      <span>Explore Works</span>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        →
                      </motion.div>
                    </Link>
                  </Button>

                  {/* Contact Button - Icon Only */}
                  <Button
                    onClick={() => setIsContactOpen(!isContactOpen)}
                    className={`rounded-full px-4 py-6 transition-all duration-200 btn-splash ${
                      isContactOpen 
                        ? 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-2 border-gray-700 dark:border-gray-300 hover:text-gray-800 dark:hover:text-gray-200' 
                        : 'bg-transparent text-gray-700 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400'
                    }`}
                    size="lg"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </Button>
                </div>

                {/* Contact Dropdown */}
                {isContactOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-1 md:mt-2 w-48 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
                  >
                    <div className="py-2">
                      <button
                        onClick={() => {
                          const message = `Halo Setiady! 👋

Saya tertarik untuk berdiskusi tentang:
• Project collaboration
• Job opportunities  
• Consultation services
• Other inquiries

Mohon informasi lebih lanjut. Terima kasih!`;
                          const encodedMessage = encodeURIComponent(message);
                          window.open(`https://wa.me/6289662007938?text=${encodedMessage}`, '_blank');
                          setIsContactOpen(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                      >
                        <MessageCircle className="w-4 h-4 text-green-500 group-hover:text-green-600 dark:group-hover:text-green-400" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">WhatsApp</span>
                      </button>
                      
                      <div className="h-px bg-gray-100 dark:bg-gray-800 mx-2"></div>
                      
                      <button
                        onClick={() => {
                          const subject = 'Collaboration Inquiry - Portfolio Website';
                          const body = `Dear Setiady,

I hope this email finds you well. I came across your portfolio website and I'm interested in discussing:

• Potential collaboration opportunities
• Job openings in your company
• Consultation services you offer
• Other business inquiries

I would appreciate the opportunity to connect and learn more about your services.

Best regards,
[Your Name]
[Your Company/Organization]
[Your Contact Information]`;
                          const encodedSubject = encodeURIComponent(subject);
                          const encodedBody = encodeURIComponent(body);
                          window.location.href = `mailto:setiadyanwar@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
                          setIsContactOpen(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                      >
                        <Mail className="w-4 h-4 text-blue-500 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* CV Download Button */}
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-gray-600 dark:border-gray-400 text-gray-800 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-300 rounded-full px-4 py-6 font-medium transition-all duration-200 group btn-splash"
              >
                <Link href="/cv/cv_setiady.pdf" className="flex items-center gap-2">
                  <Download className="h-5 w-5 group-hover:animate-bounce" />
                  <span>Download CV</span>
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex items-center gap-4 mt-8 justify-center md:justify-start"
            >
              <Link
                href="https://behance.net/setiadyanwar"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-110 duration-300"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800">
                  <span className="font-semibold text-xs">Bē</span>
                </div>
              </Link>
              <Link
                href="https://github.com/setiadyanwar"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-110 duration-300"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800">
                  <span className="sr-only">Github</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    >
                      <path d="M9.096 21.25v-3.146a3.33 3.33 0 0 1 .758-2.115c-3.005-.4-5.28-1.859-5.28-5.798c0-1.666 1.432-3.89 1.432-3.89c-.514-1.13-.5-3.084.06-3.551c0 0 1.95.175 3.847 1.75c1.838-.495 3.764-.554 5.661 0c1.897-1.575 3.848-1.75 3.848-1.75c.558.467.573 2.422.06 3.551c0 0 1.432 2.224 1.432 3.89c0 3.94-2.276 5.398-5.28 5.798a3.33 3.33 0 0 1 .757 2.115v3.146"></path>
                      <path d="M3.086 16.57c.163.554.463 1.066.878 1.496c.414.431.932.77 1.513.988a4.46 4.46 0 0 0 3.62-.216"></path>
                    </g>
                  </svg>
                </div>
              </Link>
              <Link
                href="https://instagram.com/setiadyanwarr"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-110 duration-300"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800">
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </div>
              </Link>
              <div className="ml-4 text-gray-600 dark:text-gray-400">
                <span className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  Indonesia / Tangerang
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[500px] w-full max-w-[400px] mx-auto">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/30 dark:shadow-black/30 backdrop-blur-xl backdrop-saturate-150"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}
              >
                <Image
                  src="/setiady.png"
                  alt="Setiady Ibrahim Anwar"
                  fill
                  className="object-cover object-top"
                />
                
                {/* Thick fade effect at bottom - matches background perfectly */}
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white dark:from-black via-white/80 dark:via-black/80 to-transparent pointer-events-none"></div>
                
                {/* Subtle glass reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
              </motion.div>

              {/* Liquid glass floating elements for desktop */}
              <motion.div
                className="absolute top-10 right-0 w-12 h-12 bg-white/30 dark:bg-black/30 backdrop-blur-2xl backdrop-saturate-150 rounded-full flex items-center justify-center shadow-xl shadow-indigo-200/30 dark:shadow-indigo-800/30 border border-white/30 dark:border-white/20"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                style={{
                  background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.25) 0%, rgba(99, 102, 241, 0.1) 100%)'
                }}
              >
                <Code className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </motion.div>

              <motion.div
                className="absolute bottom-20 left-0 w-12 h-12 bg-white/30 dark:bg-black/30 backdrop-blur-2xl backdrop-saturate-150 rounded-full flex items-center justify-center shadow-xl shadow-orange-200/30 dark:shadow-orange-800/30 border border-white/30 dark:border-white/20"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                style={{
                  background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.25) 0%, rgba(249, 115, 22, 0.1) 100%)'
                }}
              >
                <Palette className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </motion.div>

              <motion.div
                className="absolute top-1/3 -right-6 w-24 h-24 flex items-center justify-center"
                animate={{ y: [0, -20, 0, 20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <svg width="300" height="210" viewBox="0 0 194 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="32.144" y="44.0015" width="161" height="42.852" rx="21.426" fill="#5E6BF6"/>
                  <path d="M56.6966 62.247C56.6435 61.7118 56.4157 61.296 56.0132 60.9996C55.6106 60.7033 55.0644 60.5551 54.3743 60.5551C53.9054 60.5551 53.5096 60.6214 53.1867 60.7541C52.8638 60.8824 52.616 61.0615 52.4435 61.2916C52.2754 61.5216 52.1914 61.7826 52.1914 62.0745C52.1826 62.3178 52.2334 62.5301 52.344 62.7115C52.459 62.8928 52.616 63.0498 52.8151 63.1825C53.0141 63.3108 53.2442 63.4236 53.5051 63.5209C53.7661 63.6138 54.0448 63.6934 54.3411 63.7598L55.562 64.0517C56.1547 64.1844 56.6988 64.3614 57.1942 64.5825C57.6896 64.8037 58.1187 65.0757 58.4814 65.3986C58.8441 65.7215 59.125 66.1019 59.324 66.5399C59.5275 66.9778 59.6315 67.4798 59.6359 68.046C59.6315 68.8776 59.4191 69.5986 58.9989 70.209C58.5831 70.815 57.9816 71.2861 57.1942 71.6223C56.4113 71.954 55.4669 72.1199 54.3611 72.1199C53.2641 72.1199 52.3086 71.9518 51.4947 71.6156C50.6853 71.2795 50.0527 70.7818 49.5971 70.1228C49.1459 69.4593 48.9093 68.6387 48.8872 67.6612H51.6672C51.6982 68.1168 51.8287 68.4972 52.0587 68.8024C52.2931 69.1032 52.605 69.331 52.9942 69.4858C53.3879 69.6362 53.8325 69.7114 54.3279 69.7114C54.8144 69.7114 55.2369 69.6406 55.5952 69.4991C55.9579 69.3575 56.2388 69.1607 56.4378 68.9086C56.6369 68.6564 56.7364 68.3667 56.7364 68.0394C56.7364 67.7342 56.6457 67.4776 56.4644 67.2697C56.2874 67.0618 56.0264 66.8849 55.6814 66.7389C55.3408 66.5929 54.9228 66.4602 54.4274 66.3408L52.9478 65.9692C51.8021 65.6906 50.8976 65.2549 50.2341 64.6621C49.5706 64.0694 49.241 63.271 49.2455 62.2669C49.241 61.4442 49.46 60.7254 49.9023 60.1105C50.3491 59.4957 50.9617 59.0158 51.7402 58.6707C52.5187 58.3257 53.4034 58.1532 54.3942 58.1532C55.4027 58.1532 56.283 58.3257 57.035 58.6707C57.7914 59.0158 58.3797 59.4957 58.7999 60.1105C59.2201 60.7254 59.4368 61.4375 59.4501 62.247H56.6966ZM66.1598 72.1265C65.1114 72.1265 64.2091 71.9142 63.4527 71.4896C62.7007 71.0605 62.1213 70.4545 61.7143 69.6716C61.3074 68.8842 61.1039 67.9531 61.1039 66.8782C61.1039 65.8299 61.3074 64.9099 61.7143 64.1181C62.1213 63.3263 62.6941 62.7092 63.4328 62.2669C64.1759 61.8246 65.0473 61.6034 66.047 61.6034C66.7193 61.6034 67.3452 61.7118 67.9247 61.9285C68.5086 62.1408 69.0172 62.4615 69.4507 62.8906C69.8886 63.3197 70.2292 63.8593 70.4725 64.5095C70.7158 65.1554 70.8375 65.9117 70.8375 66.7787V67.555H62.2318V65.8034H68.1768C68.1768 65.3964 68.0883 65.0359 67.9114 64.7219C67.7345 64.4078 67.489 64.1623 67.1749 63.9854C66.8653 63.804 66.5048 63.7133 66.0934 63.7133C65.6644 63.7133 65.2839 63.8129 64.9522 64.0119C64.6249 64.2065 64.3683 64.4697 64.1825 64.8015C63.9968 65.1288 63.9017 65.4937 63.8972 65.8963V67.5617C63.8972 68.0659 63.9901 68.5016 64.1759 68.8687C64.3661 69.2359 64.6337 69.519 64.9787 69.718C65.3238 69.9171 65.7329 70.0166 66.2062 70.0166C66.5203 70.0166 66.8078 69.9724 67.0688 69.8839C67.3297 69.7954 67.5531 69.6627 67.7389 69.4858C67.9247 69.3089 68.0662 69.0921 68.1635 68.8356L70.7777 69.0081C70.645 69.6362 70.373 70.1847 69.9616 70.6536C69.5547 71.118 69.0283 71.4807 68.3825 71.7417C67.7411 71.9983 67.0002 72.1265 66.1598 72.1265ZM78.1028 61.7361V63.8593H71.9654V61.7361H78.1028ZM73.3588 59.2944H76.1853V68.7958C76.1853 69.0567 76.2251 69.2602 76.3047 69.4062C76.3843 69.5477 76.4949 69.6473 76.6365 69.7048C76.7824 69.7623 76.9505 69.791 77.1407 69.791C77.2734 69.791 77.4061 69.78 77.5388 69.7578C77.6715 69.7313 77.7733 69.7114 77.844 69.6981L78.2886 71.8014C78.147 71.8457 77.948 71.8965 77.6914 71.954C77.4349 72.016 77.123 72.0536 76.7559 72.0668C76.0747 72.0934 75.4775 72.0027 74.9644 71.7948C74.4557 71.5869 74.0599 71.264 73.7768 70.8261C73.4937 70.3882 73.3543 69.8352 73.3588 69.1673V59.2944ZM79.944 71.9275V61.7361H82.7705V71.9275H79.944ZM81.3639 60.4224C80.9437 60.4224 80.5832 60.283 80.2824 60.0044C79.986 59.7213 79.8379 59.3829 79.8379 58.9892C79.8379 58.6 79.986 58.266 80.2824 57.9873C80.5832 57.7042 80.9437 57.5627 81.3639 57.5627C81.7841 57.5627 82.1424 57.7042 82.4388 57.9873C82.7396 58.266 82.89 58.6 82.89 58.9892C82.89 59.3829 82.7396 59.7213 82.4388 60.0044C82.1424 60.283 81.7841 60.4224 81.3639 60.4224ZM87.9409 72.1199C87.2906 72.1199 86.7112 72.0071 86.2025 71.7815C85.6938 71.5515 85.2913 71.2131 84.9949 70.7664C84.703 70.3152 84.557 69.7534 84.557 69.0811C84.557 68.5149 84.661 68.0394 84.8688 67.6545C85.0767 67.2697 85.3598 66.9601 85.7181 66.7256C86.0764 66.4912 86.4834 66.3143 86.939 66.1948C87.399 66.0754 87.8811 65.9914 88.3854 65.9427C88.9781 65.8808 89.4559 65.8233 89.8186 65.7702C90.1813 65.7127 90.4445 65.6286 90.6081 65.5181C90.7718 65.4075 90.8536 65.2438 90.8536 65.0271V64.9873C90.8536 64.567 90.7209 64.2419 90.4555 64.0119C90.1946 63.7819 89.823 63.6669 89.3408 63.6669C88.8322 63.6669 88.4274 63.7797 88.1266 64.0053C87.8259 64.2264 87.6268 64.5051 87.5295 64.8413L84.9153 64.629C85.048 64.0097 85.309 63.4745 85.6982 63.0233C86.0875 62.5677 86.5895 62.2183 87.2044 61.975C87.8236 61.7273 88.5402 61.6034 89.3541 61.6034C89.9203 61.6034 90.4622 61.6698 90.9797 61.8025C91.5017 61.9352 91.9639 62.1408 92.3664 62.4195C92.7734 62.6982 93.0941 63.0565 93.3285 63.4944C93.5629 63.9279 93.6801 64.4476 93.6801 65.0536V71.9275H90.9996V70.5142H90.92C90.7563 70.8327 90.5374 71.1136 90.2631 71.3569C89.9889 71.5957 89.6593 71.7837 89.2745 71.9209C88.8897 72.0536 88.4451 72.1199 87.9409 72.1199ZM88.7503 70.1692C89.1661 70.1692 89.5333 70.0874 89.8517 69.9237C90.1702 69.7556 90.4201 69.53 90.6015 69.2469C90.7829 68.9639 90.8735 68.6432 90.8735 68.2849V67.2034C90.7851 67.2609 90.6634 67.3139 90.5086 67.3626C90.3582 67.4068 90.1879 67.4489 89.9977 67.4887C89.8075 67.5241 89.6173 67.5572 89.4271 67.5882C89.2369 67.6147 89.0644 67.6391 88.9096 67.6612C88.5778 67.7098 88.2881 67.7872 88.0404 67.8934C87.7927 67.9996 87.6003 68.1433 87.4631 68.3247C87.326 68.5016 87.2575 68.7228 87.2575 68.9882C87.2575 69.373 87.3968 69.6672 87.6755 69.8706C87.9586 70.0697 88.3168 70.1692 88.7503 70.1692ZM99.6284 72.0934C98.8544 72.0934 98.1533 71.8943 97.5251 71.4962C96.9015 71.0937 96.406 70.5032 96.0389 69.7247C95.6762 68.9417 95.4948 67.9819 95.4948 66.8451C95.4948 65.6773 95.6828 64.7064 96.0588 63.9323C96.4348 63.1538 96.9346 62.5721 97.5583 62.1873C98.1864 61.798 98.8743 61.6034 99.6218 61.6034C100.192 61.6034 100.668 61.7007 101.048 61.8953C101.433 62.0856 101.743 62.3244 101.977 62.6119C102.216 62.895 102.397 63.1737 102.521 63.4479H102.608V58.339H105.427V71.9275H102.641V70.2953H102.521C102.389 70.5784 102.201 70.8593 101.957 71.1379C101.718 71.4122 101.407 71.64 101.022 71.8213C100.641 72.0027 100.177 72.0934 99.6284 72.0934ZM100.524 69.8441C100.98 69.8441 101.365 69.7202 101.679 69.4725C101.997 69.2204 102.24 68.8687 102.409 68.4176C102.581 67.9664 102.667 67.4378 102.667 66.8318C102.667 66.2258 102.583 65.6994 102.415 65.2527C102.247 64.8059 102.004 64.4609 101.685 64.2176C101.367 63.9743 100.98 63.8527 100.524 63.8527C100.06 63.8527 99.6683 63.9787 99.3498 64.2309C99.0313 64.483 98.7902 64.8324 98.6266 65.2792C98.4629 65.726 98.3811 66.2435 98.3811 66.8318C98.3811 67.4245 98.4629 67.9487 98.6266 68.4043C98.7946 68.8555 99.0357 69.2093 99.3498 69.4659C99.6683 69.718 100.06 69.8441 100.524 69.8441ZM109.496 75.7493C109.138 75.7493 108.802 75.7205 108.488 75.663C108.178 75.6099 107.922 75.5414 107.718 75.4573L108.355 73.3474C108.687 73.4491 108.985 73.5044 109.251 73.5133C109.521 73.5221 109.753 73.4602 109.948 73.3275C110.147 73.1948 110.308 72.9692 110.432 72.6507L110.598 72.2194L106.942 61.7361H109.914L112.024 69.2204H112.13L114.26 61.7361H117.253L113.292 73.0289C113.101 73.5774 112.843 74.0551 112.515 74.4621C112.192 74.8734 111.783 75.1897 111.288 75.4109C110.792 75.6365 110.195 75.7493 109.496 75.7493ZM119.817 71.9275H116.738L121.429 58.339H125.132L129.816 71.9275H126.737L123.334 61.4442H123.228L119.817 71.9275ZM119.625 66.5863H126.897V68.8289H119.625V66.5863ZM134.225 66.0356V71.9275H131.399V61.7361H134.092V63.5342H134.212C134.437 62.9415 134.816 62.4726 135.346 62.1276C135.877 61.7781 136.521 61.6034 137.277 61.6034C137.985 61.6034 138.602 61.7582 139.128 62.0679C139.655 62.3775 140.064 62.8198 140.356 63.3949C140.648 63.9655 140.794 64.6467 140.794 65.4384V71.9275H137.967V65.9427C137.972 65.319 137.812 64.8324 137.489 64.483C137.167 64.1291 136.722 63.9522 136.156 63.9522C135.775 63.9522 135.439 64.034 135.147 64.1977C134.86 64.3614 134.634 64.6002 134.471 64.9143C134.311 65.2239 134.229 65.5977 134.225 66.0356ZM145.032 71.9275L142.258 61.7361H145.118L146.697 68.5834H146.79L148.436 61.7361H151.242L152.914 68.5436H153.001L154.553 61.7361H157.406L154.639 71.9275H151.647L149.895 65.5181H149.769L148.018 71.9275H145.032ZM161.82 72.1199C161.17 72.1199 160.59 72.0071 160.082 71.7815C159.573 71.5515 159.171 71.2131 158.874 70.7664C158.582 70.3152 158.436 69.7534 158.436 69.0811C158.436 68.5149 158.54 68.0394 158.748 67.6545C158.956 67.2697 159.239 66.9601 159.597 66.7256C159.956 66.4912 160.363 66.3143 160.818 66.1948C161.278 66.0754 161.76 65.9914 162.265 65.9427C162.857 65.8808 163.335 65.8233 163.698 65.7702C164.061 65.7127 164.324 65.6286 164.487 65.5181C164.651 65.4075 164.733 65.2438 164.733 65.0271V64.9873C164.733 64.567 164.6 64.2419 164.335 64.0119C164.074 63.7819 163.702 63.6669 163.22 63.6669C162.711 63.6669 162.307 63.7797 162.006 64.0053C161.705 64.2264 161.506 64.5051 161.409 64.8413L158.795 64.629C158.927 64.0097 159.188 63.4745 159.577 63.0233C159.967 62.5677 160.469 62.2183 161.084 61.975C161.703 61.7273 162.419 61.6034 163.233 61.6034C163.8 61.6034 164.341 61.6698 164.859 61.8025C165.381 61.9352 165.843 62.1408 166.246 62.4195C166.653 62.6982 166.973 63.0565 167.208 63.4944C167.442 63.9279 167.559 64.4476 167.559 65.0536V71.9275H164.879V70.5142H164.799C164.636 70.8327 164.417 71.1136 164.142 71.3569C163.868 71.5957 163.539 71.7837 163.154 71.9209C162.769 72.0536 162.324 72.1199 161.82 72.1199ZM162.63 70.1692C163.045 70.1692 163.413 70.0874 163.731 69.9237C164.049 69.7556 164.299 69.53 164.481 69.2469C164.662 68.9639 164.753 68.6432 164.753 68.2849V67.2034C164.664 67.2609 164.543 67.3139 164.388 67.3626C164.237 67.4068 164.067 67.4489 163.877 67.4887C163.687 67.5241 163.497 67.5572 163.306 67.5882C163.116 67.6147 162.944 67.6391 162.789 67.6612C162.457 67.7098 162.167 67.7872 161.92 67.8934C161.672 67.9996 161.48 68.1433 161.342 68.3247C161.205 68.5016 161.137 68.7228 161.137 68.9882C161.137 69.373 161.276 69.6672 161.555 69.8706C161.838 70.0697 162.196 70.1692 162.63 70.1692ZM169.752 71.9275V61.7361H172.493V63.5143H172.599C172.784 62.8818 173.096 62.404 173.534 62.0811C173.972 61.7538 174.476 61.5901 175.047 61.5901C175.189 61.5901 175.341 61.599 175.505 61.6167C175.668 61.6344 175.812 61.6587 175.936 61.6897V64.1977C175.803 64.1579 175.62 64.1225 175.385 64.0915C175.151 64.0606 174.936 64.0451 174.742 64.0451C174.326 64.0451 173.954 64.1358 173.627 64.3171C173.304 64.4941 173.048 64.7418 172.857 65.0602C172.672 65.3787 172.579 65.7459 172.579 66.1617V71.9275H169.752Z" fill="white"/>
                  <g filter="url(#filter0_d_2358_11385)">
                  <path d="M14.4037 44.0056L7 6.28564L39.5763 25.1456L23.2882 29.4979L14.4037 44.0056Z" fill="white"/>
                  <path d="M14.4037 44.0056L7 6.28564L39.5763 25.1456L23.2882 29.4979L14.4037 44.0056Z" stroke="#5E6BF6" strokeWidth="4" strokeLinecap="square"/>
                  </g>
                  <defs>
                  <filter id="filter0_d_2358_11385" x="0.898099" y="0.15342" width="47.1467" height="53.6601" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="1.09687"/>
                  <feGaussianBlur stdDeviation="1.64531"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2358_11385"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2358_11385" result="shape"/>
                  </filter>
                  </defs>
                </svg>

              </motion.div>

              <motion.div
                className="absolute top-2/3 -left-6 w-12 h-12 bg-white/30 dark:bg-black/30 backdrop-blur-2xl backdrop-saturate-150 rounded-full flex items-center justify-center shadow-xl shadow-green-200/30 dark:shadow-green-800/30 border border-white/30 dark:border-white/20"
                animate={{ x: [0, -10, 0] }}
                transition={{
                  duration: 5.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
                style={{
                  background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.25) 0%, rgba(34, 197, 94, 0.1) 100%)'
                }}
              >
                <Monitor className="w-6 h-6 text-green-600 dark:text-green-400" />
              </motion.div>

              {/* Simple glassmorphism name tag */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute bottom-8 left-20 transform -translate-x-1/2 w-fit rounded-2xl py-3 px-6 shadow-2xl backdrop-blur-2xl backdrop-saturate-150 border border-white/30 dark:border-white/20"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)'
                }}
              >
                <div className="text-center">
                  <p className="font-semibold text-indigo-800 dark:text-white drop-shadow-sm">
                    Setiadyanwar
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-200 drop-shadow-sm">
                    UI/UX Designer | Frontend Dev
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
