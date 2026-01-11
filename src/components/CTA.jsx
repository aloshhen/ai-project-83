import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Ready to Ship?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl mb-8"
        >
          Get an instant quote and schedule your shipment today!
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-background px-8 py-4 rounded-lg font-medium hover:bg-background/90 transition-colors"
        >
          Get Started
        </motion.button>
      </div>
    </section>
  )
}