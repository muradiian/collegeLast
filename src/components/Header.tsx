import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import ephtqVector from '../assets/vectors/ephtqVector-logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="relative bg-white shadow-lg">
      <div className="bg-slate-800 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+374 (010) 200524</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>yshtc@yahoo.com</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center">
              <img src={ephtqVector} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">ԵՊՀՏՔ</h1>
              <p className="text-sm text-slate-600">Պետական հումանիտար-տեխնիկական քոլեջ</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Գլխավոր</Link>
            <Link to="/about" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Մեր մասին</Link>
            <Link to="/programs" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Ծրագրեր</Link>
            <Link to="/admissions" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Ընդունելություն</Link>
            <Link to="/contact" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Կապ</Link>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <a href="https://dimord.emis.am/">Դիմել հիմա</a>
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-slate-700 hover:text-blue-600 font-medium">Գլխավոր</Link>
              <Link to="/about" className="text-slate-700 hover:text-blue-600 font-medium">Մեր մասին</Link>
              <Link to="/programs" className="text-slate-700 hover:text-blue-600 font-medium">Ծրագրեր</Link>
              <Link to="/admissions" className="text-slate-700 hover:text-blue-600 font-medium">Ընդունելություն</Link>
              <Link to="/contact" className="text-slate-700 hover:text-blue-600 font-medium">Կապ</Link>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full">
                <a href="https://dimord.emis.am/">Դիմել հիմա</a>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
