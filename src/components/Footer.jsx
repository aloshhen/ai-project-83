export default function Footer() {
  return (
    <footer className="bg-surface py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Express Transport</h3>
            <p className="text-gray-300">Your reliable partner in nationwide shipping solutions.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#tariffs" className="hover:text-primary transition-colors">Tariffs</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="text-gray-300 space-y-2">
              <li>Phone: +1 (234) 567-890</li>
              <li>Email: info@express.com</li>
              <li>Address: 123 Main St, City</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          © 2024 Express Transport. All rights reserved.
        </div>
      </div>
    </footer>
  )
}