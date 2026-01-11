import { Clock, ShieldCheck, MapPin, Package } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Features() {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Fast Delivery",
      description: "We guarantee timely delivery with our optimized routes and modern fleet."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "Safe Transport",
      description: "Your goods are insured and handled with utmost care by our professionals."
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Wide Coverage",
      description: "We operate nationwide with reliable partners in every region."
    },
    {
      icon: <Package className="w-8 h-8 text-primary" />,
      title: "Various Goods",
      description: "From small packages to large shipments, we handle all types of cargo."
    }
  ]

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Why Choose Us?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-background p-8 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}