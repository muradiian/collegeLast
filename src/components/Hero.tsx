
import React from 'react';
import { ArrowRight, Users, GraduationCap, Trophy } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Ձեր ապագան սկսվում է
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200"> այստեղ</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            Երևանի Պետական հումանիտար-տեխնիկական քոլեջում ստացեք բարձրորակ կրթություն 
            և պատրաստվեք հաջողակ կարիերայի
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center group">
              <a href="https://dimord.emis.am/">Դիմել հիմա</a>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300">
              Ծանոթանալ ծրագրերին
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Users className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <div className="text-3xl font-bold mb-2">2000+</div>
                <div className="text-blue-200">Ակտիվ ուսանողներ</div>
              </div>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <GraduationCap className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-blue-200">Մասնագիտություններ</div>
              </div>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Trophy className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <div className="text-3xl font-bold mb-2">25+</div>
                <div className="text-blue-200">Տարվա փորձ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
