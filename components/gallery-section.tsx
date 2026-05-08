'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const galleryImages = [
  {
    id: 1,
    src: '/cafe-hero.jpg',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 2,
    src: '/espresso.jpg',
    span: 'col-span-1',
  },
  {
    id: 3,
    src: '/latte.jpg',
    span: 'col-span-1',
  },
  {
    id: 4,
    src: '/cappuccino.jpg',
    span: 'col-span-1',
  },
  {
    id: 5,
    src: '/barista.jpg',
    span: 'col-span-1',
  },
  {
    id: 6,
    src: '/café-interior.jpg',
    span: 'md:col-span-2',
  },
]

export default function GallerySection() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="gallery" className="py-24 bg-black/40">
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
            Moments of Excellence
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A visual journey through the ambiance, artistry, and atmosphere that define Cafe Toscano
          </p>
        </motion.div>

        {/* Masonry Gallery */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {galleryImages.map((image, i) => (
            <motion.div
              key={image.id}
              variants={item}
              className={`relative h-64 md:h-80 overflow-hidden rounded-lg group cursor-pointer ${
                image.span
              }`}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={image.src}
                alt={`Gallery image ${image.id}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
              />
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                initial={{ y: 20, opacity: 0 }}
              >
                <p className="font-semibold text-sm">Curated Experience</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
