
import React from 'react';
import { Calendar, FileText, CheckCircle, Clock } from 'lucide-react';

const Admissions = () => {
  const steps = [
    {
      icon: FileText,
      title: "Գրանցում",
      description: "Լրացրեք դիմումը մեր կայքում կամ այցելեք քոլեջ",
      timing: "Մարտ - Հուլիս"
    },
    {
      icon: CheckCircle,  
      title: "Փաստաթղթերի ներկայացում",
      description: "Ներկայացրեք անհրաժեշտ փաստաթղթերը",
      timing: "Ապրիլ - Օգոստոս"
    },
    {
      icon: Calendar,
      title: "Ընտրություն",
      description: "Փաստաթղթերի գնահատում և ընտրություն",
      timing: "Օգոստոս"
    },
    {
      icon: Clock,
      title: "Սկիզբ",
      description: "Դասերի սկսում և կողմնորոշման շաբաթ",
      timing: "Սեպտեմբեր"
    }
  ];

  return (
    <section id="admissions" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Ընդունելության գործընթաց</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Պարզ և թափանցիկ ընդունելության գործընթաց Ձեր հարմարության համար
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{step.title}</h3>
              <p className="text-slate-600 mb-2">{step.description}</p>
              <span className="text-sm text-blue-600 font-medium">{step.timing}</span>
            </div>
          ))}
        </div>

        {/* Requirements & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Անհրաժեշտ փաստաթղթեր</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-slate-700">Ատեստատ կամ դիպլոմ (բնօրինակ և պատճեն)</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-slate-700">Ծննդյան վկայական (պատճեն)</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-slate-700">Անձնագիր (պատճեն)</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-slate-700">6 հատ 3x4 նկար</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-slate-700">Բժշկական տետր (№027/ու)</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Պատրա՞ստ եք սկսելու</h3>
            <p className="text-blue-100 mb-8 text-lg">
              Մի՛ կորցրեք հնարավորությունը: Դիմեք հիմա և ապահովեք Ձեր տեղը մեր քոլեջում:
            </p>
            
            <div className="space-y-4">
              <button className="w-full bg-white text-blue-600 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                <a href="https://dimord.emis.am/">Օնլայն դիմում</a>
              </button>
              <button className="w-full border-2 border-white text-white py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Զանգահարել մեզ
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-blue-400">
              <p className="text-sm text-blue-200">
                Հարցեր ունե՞ք: Կապվեք մեզ հետ և մենք կօգնենք Ձեզ ամեն բանի հետ:
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
