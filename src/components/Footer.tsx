
import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import ephtqVector from '../assets/vectors/ephtqVector-logo.png'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{backgroundColor:'white'}}>
                <img src={ephtqVector}/>
              </div>
              <div>
                <h3 className="text-xl font-bold">ԵՊՀՏՔ</h3>
                <p className="text-sm text-slate-400">Պետական տեխնիկական քոլեջ</p>
              </div>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Ձեր ապագայի հիմքերը կառուցում ենք բարձրորակ կրթությամբ և գործնական հմտություններով:
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/yshtcollege" className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/yshtc_/" className="bg-slate-800 p-2 rounded-lg hover:bg-pink-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Արագ հղումներ</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">Մեր մասին</a></li>
              <li><a href="#programs" className="text-slate-400 hover:text-white transition-colors">Ծրագրեր</a></li>
              <li><a href="#admissions" className="text-slate-400 hover:text-white transition-colors">Ընդունելություն</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">Կապ</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Մասնագիտություններ</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Ծրագրավորում</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Դիզայն</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Հաշվապահություն</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Մարքեթինգ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Կապ</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-400">ք. Երևան, Արմեն Տիգրանյան 21</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <p className="text-slate-400">+374 (010) 202524</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <p className="text-slate-400">yshtc@yahoo.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2025 Երևանի Պետական հումանիտար-տեխնիկական քոլեջ: Բոլոր իրավունքները պաշտպանված են:
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Գաղտնիության քաղաքականություն</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Օգտագործման պայմաններ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
