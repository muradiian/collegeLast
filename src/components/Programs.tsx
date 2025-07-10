
import React from 'react';
import { Code, Palette, Calculator, Heart, Briefcase, Wrench, Building, Shirt, Map, BadgeDollarSign } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Programs = () => {
  const programs = [
    {
      icon: Map,
      title: "Զբոսաշրջային  ծառայությունների կազմակերպում օտար լեզուների խորացված իմացությամբ",
      description: "Սովորեք ժամանակակից ծրագրավորման լեզուներ և զարգացրեք վեբ ու մոբայլ հավելվածներ",
      duration: "3 տարի",
      level: "Մասնագիտական",
      color: "bg-blue-500"
    },
    {
      icon: Shirt,
      title: "Հագուստի մոդելավորում և նախագծում",
      description: "Ստեղծագործական մտածողություն և տեխնիկական հմտություններ գրաֆիկական դիզայնի ոլորտում",
      duration: "3 տարի", 
      level: "Մասնագիտական",
      color: "bg-purple-500"
    },
    {
      icon: Calculator,
      title: "Հաշվապահական հաշվառում",
      description: "Ուսումնասիրեք ֆինանսական կառավարումը և հաշվապահական հաշվառումը",
      duration: "3 տարի",
      level: "Մասնագիտական", 
      color: "bg-green-500"
    },
    {
      icon: Code,
      title: "Հաշվողական տեխնիկայի և ավտոմատացված համակարգերի ծրագրային ապահովում",
      description: "Պատրաստվեք աշխատելու առողջապահության ոլորտում որպես բժշկական աշխատակից",
      duration: "4 տարի",
      level: "Մասնագիտական",
      color: "bg-red-500"
    },
    {
      icon: BadgeDollarSign,
      title: "Ֆինանսներ",
      description: "Ձեռք բերեք գիտելիքներ բիզնես կառավարման և մարքեթինգի ոլորտներում",
      duration: "3 տարի",
      level: "Մասնագիտական",
      color: "bg-orange-500"
    },
    {
      icon: Building,
      title: "Քաղաքաշինական կադաստր",
      description: "Տեխնիկական սարքավորումների նորոգում և սպասարկում",
      duration: "3 տարի",
      level: "Մասնագիտական",
      color: "bg-gray-500"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Ուսումնական ծրագրեր</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ընտրեք Ձեր հետաքրքրությունների և կարիերային նպատակների համապատասխան ծրագիրը
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 ${program.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <program.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-800 mb-2">{program.title}</CardTitle>
                <div className="flex justify-center space-x-4 text-sm">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{program.duration}</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">{program.level}</span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 leading-relaxed mb-6">
                  {program.description}
                </CardDescription>
                <button className="w-full bg-slate-800 text-white py-3 rounded-lg hover:bg-slate-700 transition-colors font-medium">
                  Մանրամասն
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
            Բոլոր ծրագրերի ցանկը
          </button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
