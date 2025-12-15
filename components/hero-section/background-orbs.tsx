import { motion } from "framer-motion";

interface BackgroundOrbsProps {
    isDark?: boolean;
}

export default function BackgroundOrbs({ isDark = false }: BackgroundOrbsProps) {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Large flowing orbs */}
            <div
                className="absolute w-96 h-96 rounded-full opacity-[0.03] dark:opacity-[0.05]"
                style={{
                    top: '10%',
                    left: '5%',
                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.8) 0%, transparent 70%)',
                    animation: 'floatingOrb1 12s ease-in-out infinite',
                    willChange: 'transform'
                }}
            />
            <div
                className="absolute w-80 h-80 rounded-full opacity-[0.02] dark:opacity-[0.04]"
                style={{
                    top: '60%',
                    right: '10%',
                    background: 'radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, transparent 70%)',
                    animation: 'floatingOrb2 15s ease-in-out infinite reverse',
                    willChange: 'transform'
                }}
            />

            {/* Medium flowing nodes */}
            <div
                className="absolute w-32 h-32 rounded-full opacity-[0.02] dark:opacity-[0.03]"
                style={{
                    top: '25%',
                    right: '30%',
                    background: 'radial-gradient(circle, rgba(34, 197, 94, 0.6) 0%, transparent 60%)',
                    animation: 'floatingNode1 8s ease-in-out infinite',
                    willChange: 'transform'
                }}
            />
            <div
                className="absolute w-24 h-24 rounded-full opacity-[0.03] dark:opacity-[0.04]"
                style={{
                    bottom: '25%',
                    left: '20%',
                    background: 'radial-gradient(circle, rgba(249, 115, 22, 0.5) 0%, transparent 60%)',
                    animation: 'floatingNode2 10s ease-in-out infinite reverse',
                    willChange: 'transform'
                }}
            />

            {/* Small floating particles */}
            <div
                className="absolute w-2 h-2 rounded-full bg-indigo-400 opacity-[0.08] dark:opacity-[0.12]"
                style={{
                    top: '30%',
                    left: '70%',
                    animation: 'floatingParticle1 6s ease-in-out infinite',
                    willChange: 'transform'
                }}
            />
            <div
                className="absolute w-3 h-3 rounded-full bg-purple-400 opacity-[0.06] dark:opacity-[0.1]"
                style={{
                    top: '70%',
                    left: '80%',
                    animation: 'floatingParticle2 7s ease-in-out infinite reverse',
                    willChange: 'transform'
                }}
            />
            <div
                className="absolute w-1.5 h-1.5 rounded-full bg-green-400 opacity-[0.1] dark:opacity-[0.15]"
                style={{
                    top: '15%',
                    left: '15%',
                    animation: 'floatingParticle3 5s ease-in-out infinite',
                    willChange: 'transform'
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
    );
}
