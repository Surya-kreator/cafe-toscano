'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <div className="min-h-screen w-full pt-20 bg-black/40 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
    {/* <Image
      src="/table.jpg"
      alt="Background"
      fill
      priority
      className="object-cover"
    /> */}

    <div className="bg-black/40 " />
    
 
  <div className="" />
</div>
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none " />

      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
          {/* Left Content */}
          <motion.div
            className="z-10"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={item} className="mb-4">
              <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em]">
                Welcome to Luxury
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance"
            >
              Crafted Coffee. Curated Moments.
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed"
            >
              Experience the art of premium coffee crafted by master baristas. Each cup tells a story of passion, precision, and perfection.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                className="px-8 py-4 bg-primary text-primary-foreground font-semibold relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <span className="relative">Reserve Table</span>
              </motion.button>

              <motion.button
                className="px-8 py-4 border-2 border-primary text-chart-4 font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Menu
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative h-[500px] lg:h-[600px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          >
            <motion.div
              className="absolute inset-0"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Image
                src="/cafe-hero.jpg"
                alt="Luxury café interior"
                fill
                className="object-cover rounded-lg shadow-2xl"
                priority
              />
            </motion.div>

            {/* Floating gradient overlays */}
            <motion.div
              className="absolute -top-20 -right-20 w-64 h-64 bg-accent rounded-full mix-blend-screen opacity-20 blur-3xl"
              animate={{
                x: [0, 20, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary rounded-full mix-blend-screen opacity-15 blur-3xl"
              animate={{
                x: [0, -30, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-muted-foreground" size={32} />
      </motion.div>
    </div>
  )
}
