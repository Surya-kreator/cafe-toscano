// components/reserve-table.tsx
'use client'

import { motion } from 'framer-motion'
import { CalendarDays, Clock, Users, Phone, ArrowRight } from 'lucide-react'

export default function ReserveTable() {
  return (
    <section id="reserve" className="relative py-24 bg-black/50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em]">
              Reserve Your Moment
            </span>

            <h2 className="mt-4 text-5xl md:text-6xl font-serif font-bold text-foreground leading-tight">
              A Table Worth Looking Forward To
            </h2>

            <p className="mt-6 text-lg text-black leading-relaxed max-w-xl">
              Step into an evening of slow conversations, beautiful coffee, and
              a setting made for lingering a little longer.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
              <div className="border border-primary/20 bg-background/30 backdrop-blur-sm p-5 rounded-lg">
                <CalendarDays className="text-accent mb-4" size={24} />
                <p className="text-ring font-semibold">Daily Service</p>
                <p className="text-sm text-chart-1 mt-1">
                  Morning to late evening
                </p>
              </div>

              <div className="border border-primary/20 bg-background/30 backdrop-blur-sm p-5 rounded-lg">
                <Clock className="text-accent mb-4" size={24} />
                <p className="text-ring font-semibold">Prime Hours</p>
                <p className="text-sm text-chart-1 mt-1">
                  Book ahead for weekends
                </p>
              </div>

              <div className="border border-primary/20 bg-background/30 backdrop-blur-sm p-5 rounded-lg">
                <Users className="text-accent mb-4" size={24} />
                <p className="text-ring font-semibold">Private Tables</p>
                <p className="text-sm text-chart-1 mt-1">
                  Perfect for small groups
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-background/80 backdrop-blur-md border border-primary/20 rounded-lg p-6 md:p-8 shadow-2xl"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-medium text-ring">
                  Name
                </span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full bg-black/30 border border-primary/20 px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none focus:border-accent rounded-md"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-ring">
                  Phone
                </span>
                <input
                  type="tel"
                  placeholder="+(555) 123-4567"
                  className="mt-2 w-full bg-black/30 border border-primary/20 px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none focus:border-accent rounded-md"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-ring">
                  Date
                </span>
                <input
                  type="date"
                  className="mt-2 w-full bg-black/30 border border-primary/20 px-4 py-3 text-foreground outline-none focus:border-accent rounded-md"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-ring">
                  Time
                </span>
                <input
                  type="time"
                  className="mt-2 w-full bg-black/30 border border-primary/20 px-4 py-3 text-foreground outline-none focus:border-accent rounded-md"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-ring">
                  Guests
                </span>
                <select className="mt-2 w-full bg-black/30 border border-primary/20 px-4 py-3 text-foreground outline-none focus:border-accent rounded-md">
                  <option>2 guests</option>
                  <option>3 guests</option>
                  <option>4 guests</option>
                  <option>5 guests</option>
                  <option>6+ guests</option>
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-medium text-ring">
                  Occasion
                </span>
                <select className="mt-2 w-full bg-black/30 border border-primary/20 px-4 py-3 text-foreground outline-none focus:border-accent rounded-md">
                  <option>Casual visit</option>
                  <option>Date night</option>
                  <option>Birthday</option>
                  <option>Business meeting</option>
                  <option>Celebration</option>
                </select>
              </label>
            </div>

            <label className="block mt-4">
              <span className="text-sm font-medium text-ring">
                Special Request
              </span>
              <textarea
                rows={4}
                placeholder="Window table, quiet corner, cake arrangement..."
                className="mt-2 w-full resize-none bg-black/30 border border-primary/20 px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none focus:border-accent rounded-md"
              />
            </label>

            <motion.button
              className="mt-6 w-full px-8 py-4 bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-3 group overflow-hidden relative"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Reserve Table</span>
              <ArrowRight
                size={20}
                className="relative z-10 transition-transform group-hover:translate-x-1"
              />
              <motion.span
                className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <div className="mt-5 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Phone size={16} className="text-accent" />
              {/* <span>Prefer calling? +91 98765 43210</span> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
