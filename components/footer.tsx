'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <>
      {/* CTA Section */}
      <section className="py-24 bg-black/60 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full mix-blend-screen blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full mix-blend-screen blur-3xl" />
        </div>

        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Ready for Your Moment?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Reserve your table and experience the finest coffee craftsmanship
          </p>
          <motion.button
            className="px-12 py-4 bg-primary text-primary-foreground font-semibold text-lg relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
            <span className="relative">Book Your Reservation</span>
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Brand */}
            <motion.div variants={item}>
              <h3 className="text-2xl font-serif font-bold mb-4">
                Cafe Toscano
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                Where every cup is a masterpiece and every moment is cherished.
              </p>
            </motion.div>

            {/* Hours */}
            <motion.div variants={item}>
              <h4 className="font-semibold mb-4 uppercase text-sm tracking-widest">
                Hours
              </h4>
              <div className="space-y-2 text-sm text-primary-foreground/70">
                <p>Monday - Friday: 7am - 8pm</p>
                <p>Saturday: 8am - 9pm</p>
                <p>Sunday: 9am - 7pm</p>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div variants={item}>
              <h4 className="font-semibold mb-4 uppercase text-sm tracking-widest">
                Contact
              </h4>
              <div className="space-y-3 text-sm">
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Phone size={16} />
                  +1 (555) 123-4567
                </a>
                <a
                  href="mailto:hello@cafetoscano.com"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Mail size={16} />
                  hello@cafetoscano.com
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <MapPin size={16} />
                  123 Coffee Street, Turin, Italy
                </a>
              </div>
            </motion.div>

            {/* Social */}
            <motion.div variants={item}>
              <h4 className="font-semibold mb-4 uppercase text-sm tracking-widest">
                Follow Us
              </h4>
              <div className="flex gap-4">
                <motion.a
                  href="#"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Facebook size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Twitter size={20} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="border-t border-primary-foreground/20 pt-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
              <p>&copy; 2026 Cafe Toscano. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Terms & Conditions
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  )
}
