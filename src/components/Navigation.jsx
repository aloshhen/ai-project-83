import { Truck } from 'lucide-react'

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-md bg-background/50 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Truck className="w-6 h-6 text-primary" />
          <span className="text-xl font-bold">Express Transport</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#tariffs" className="hover:text-primary transition-colors">Tariffs</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  )
}