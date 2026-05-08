'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star } from 'lucide-react'

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            className="relative h-[500px] order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/café-interior.jpg"
              alt="Café experience"
              fill
              className="object-cover rounded-lg shadow-2xl"
            />
            <motion.div
              className="absolute -bottom-8 -right-8 bg-accent p-6 rounded-lg shadow-xl z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm font-semibold text-foreground mt-2">
                "Simply Exceptional"
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em]">
                Our Story
              </span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
              Where Passion Meets Precision
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For over two decades, Cafe Toscano has been a sanctuary for coffee lovers and culture enthusiasts. Our commitment to excellence begins with sourcing the finest single-origin beans and ends with the perfect pour.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every barista in our team is a certified specialist, trained in the art and science of coffee craftsmanship. We don&apos;t just serve coffee—we create moments of pure indulgence.
            </p>

            <motion.button
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <span className="relative">Learn Our Story</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
