import { motion } from 'framer-motion'
import { Truck, MapPin, Clock } from 'lucide-react'

export default function About() {
  const steps = [
    {
      icon: <Truck className="w-8 h-8 text-primary" />,
      title: "Request a Quote",
      description: "Fill out our simple form to get an instant price estimate."
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Schedule Pickup",
      description: "Choose a convenient time for us to collect your shipment."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Track & Deliver",
      description: "Monitor your shipment in real-time until safe delivery."
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          How It Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-surface p-8 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}