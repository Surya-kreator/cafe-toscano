'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const drinks = [
  {
    name: 'Espresso',
    description: 'Pure, bold, and intense',
    price: '$3.50',
    image: '/espresso.jpg',
  },
  {
    name: 'Cheesecake',
    description: 'Smooth blend of espresso and steam',
    price: '$4.50',
    image: '/cappuccino.jpg',
  },
  {
    name: 'Huevos Rancheros',
    description: 'Creamy and comforting',
    price: '$4.50',
    image: '/latte.jpg',
  },
  {
    name: 'Ensalada',
    description: 'cheesy tasty',
    price: '$5.00',
    image: '/Ensalada.jpg',
  },
]

export default function MenuSection() {
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
    <section id="menu" className="py-24 bg-black/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">
            Signature Selection
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each brew crafted with precision and passion using the finest beans from around the world
          </p>
        </motion.div>

        {/* Drinks Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {drinks.map((drink, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group cursor-pointer"
              whileHover={{ y: -8 }}
            >
              <div className="relative h-64 mb-6 overflow-hidden rounded-lg shadow-xl">
                <Image
                  src={drink.image}
                  alt={drink.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                />
              </div>

              <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                {drink.name}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                {drink.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-semibold text-white">
                  {/* {drink.price} */}
                </span>
                <motion.span
                  className="text-accent font-semibold text-sm"
                  whileHover={{ x: 4 }}
                >
                  →
                </motion.span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View Full Menu */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            className="px-8 py-3 border-2 border-primary text-chart-4 font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Menu
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
