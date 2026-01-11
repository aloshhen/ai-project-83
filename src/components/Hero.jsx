import { motion } from 'framer-motion'
import { Truck } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-background to-surface">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Fast & Reliable Transport Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl mb-8 text-gray-300"
        >
          We deliver your goods safely and on time across the country
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-4 justify-center"
        >
          <button className="bg-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">Get a Quote</button>
          <button className="border border-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors">Learn More</button>
        </motion.div>
      </div>
      <Truck className="absolute bottom-8 left-1/2 -translate-x-1/2 w-12 h-12 text-primary animate-bounce" />
    </section>
  )
}