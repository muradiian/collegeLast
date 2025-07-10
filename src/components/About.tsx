import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BookOpen } from 'lucide-react';

const About = () => {
  const [data, setData] = useState<{
    title: string;
    description: string;
    abouImage: Array<{ url: string }>;
  } | null>(null);

  useEffect(() => {
    axios
      .get('http://localhost:1337/api/about?populate=*')
      .then((res) => {
        console.log('Данные из Strapi:', res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.error('Ошибка загрузки about:', err);
      });
  }, []);

  if (!data) return <div>Загрузка...</div>;

  const abouImage =
    data.abouImage && data.abouImage.length > 0
      ? 'http://192.168.56.1:1337' + data.abouImage[0].url
      : '';

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">{data.title}</h2>
          <p
            className="text-xl text-slate-600 max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            {abouImage && (
              <img
                src={abouImage}
                alt="About us"
                className="rounded-2xl shadow-2xl"
              />
            )}
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Բարձրորակ կրթություն
                </h3>
                <p className="text-slate-600">
                  Ժամանակակից ծրագրեր և մեթոդիկներ, որոնք համապատասխանում են միջազգային ստանդարտներին
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Մեր առաքելությունը
            </h3>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Մենք նպատակ ունենք տալ բարձրորակ կրթություն և պատրաստել մասնագետներ, ովքեր կկարողանան հաջողվել
              ժամանակակից աշխատաշուկայում և ներդրում ունենալ հայկական հասարակության զարգացման գործում։
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
