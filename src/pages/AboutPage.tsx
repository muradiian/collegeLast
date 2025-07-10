import React from 'react';
import ephtqShenq from '../assets/images/ephtqShenq.jpg';
import ephtqVector from '../assets/vectors/ephtqVector-logo.png';

const AboutPage = () => (
  <main className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 min-h-screen text-white">
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 flex justify-center">
          <img src={ephtqShenq} alt="College Building" className="w-96 h-72 object-cover rounded-2xl shadow-2xl bg-white/80 p-2" />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4 text-blue-100">Մեր Մասին</h1>
          <p className="text-lg text-blue-200 mb-4">
            Երևանի Պետական հումանիտար-տեխնիկական քոլեջը (ԵՊՀՏՔ) հիմնադրվել է 1963 թվականին և հանդիսանում է Հայաստանի առաջատար միջին մասնագիտական կրթական հաստատություններից մեկը։ Քոլեջը մշտապես ձգտում է ապահովել բարձրորակ կրթություն, զարգացնել ուսանողների մասնագիտական և անձնական հմտությունները՝ համադրելով ավանդույթները ժամանակակից մոտեցումներին։
          </p>
          <p className="text-lg text-blue-200 mb-4">
            Մեր առաքելությունն է պատրաստել մրցունակ, նախաձեռնող և պատասխանատու մասնագետներ, ովքեր պատրաստ են հաջողության հասնել ժամանակակից աշխատաշուկայում։ Քոլեջը մեծ ուշադրություն է դարձնում ուսանողների բազմակողմանի զարգացմանը՝ խթանելով ստեղծագործականությունը, քննադատական մտածողությունը և թիմային աշխատանքը։
          </p>
          <p className="text-lg text-blue-200 mb-4">
            ԵՊՀՏՔ-ն առաջարկում է բազմաբնույթ մասնագիտություններ՝ ՏՏ, ճարտարագիտություն, տնտեսագիտություն, դիզայն, զբոսաշրջություն և այլ ոլորտներում։ Ուսումնական գործընթացը հագեցած է ժամանակակից լաբորատորիաներով, պրակտիկ դասընթացներով և միջազգային համագործակցության ծրագրերով։
          </p>
        </div>
      </div>
    </section>

    <section className="container mx-auto px-4 py-12">
      <div className="bg-white/10 rounded-2xl p-8 shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-100">Մեր Արժեքները և Առանձնահատկությունները</h2>
          <ul className="list-disc list-inside text-blue-200 space-y-2">
            <li>Պետական հավատարմագրված կրթական հաստատություն</li>
            <li>Բարձրակարգ դասախոսական կազմ և փորձառու մասնագետներ</li>
            <li>Ժամանակակից լաբորատորիաներ և տեխնիկական հագեցվածություն</li>
            <li>Ուսանողական ակտիվ կյանք, ակումբներ և միջոցառումներ</li>
            <li>Միջազգային համագործակցություն և փոխանակման ծրագրեր</li>
            <li>Աշխատանքային փորձառություն և պրակտիկա առաջատար ընկերություններում</li>
            <li>Անհատական մոտեցում յուրաքանչյուր ուսանողին</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img src={ephtqVector} alt="College Logo" className="w-64 h-64 object-contain rounded-xl shadow-xl bg-white/80 p-4" />
        </div>
      </div>
    </section>

    <section className="container mx-auto px-4 py-12 text-center">
      <h2 className="text-2xl font-bold mb-4 text-blue-100">Մեր Մոտեցումը</h2>
      <p className="text-lg text-blue-200 max-w-3xl mx-auto mb-8">
        Քոլեջի կրթական գործընթացը հիմնված է ուսանողակենտրոն մոտեցման վրա։ Մենք խրախուսում ենք ուսանողների ինքնուրույնությունը, նախաձեռնողականությունը և ստեղծագործականությունը։ Մեր նպատակն է ստեղծել միջավայր, որտեղ յուրաքանչյուր ուսանող կարող է բացահայտել իր ներուժը և հասնել իր նպատակներին։
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <div className="bg-white/10 rounded-2xl p-6 shadow-lg flex-1">
          <h3 className="text-xl font-bold text-blue-100 mb-2">Ուսումնական Միջավայր</h3>
          <p className="text-blue-200">Հարմարավետ լսարաններ, ժամանակակից լաբորատորիաներ և տեխնիկական միջոցներ՝ արդյունավետ ուսուցման համար։</p>
        </div>
        <div className="bg-white/10 rounded-2xl p-6 shadow-lg flex-1">
          <h3 className="text-xl font-bold text-blue-100 mb-2">Ուսանողական Կյանք</h3>
          <p className="text-blue-200">Ակտիվ ուսանողական համայնք, ակումբներ, միջոցառումներ և մրցույթներ՝ ուսանողների բազմակողմանի զարգացման համար։</p>
        </div>
        <div className="bg-white/10 rounded-2xl p-6 shadow-lg flex-1">
          <h3 className="text-xl font-bold text-blue-100 mb-2">Միջազգային Կապեր</h3>
          <p className="text-blue-200">Համագործակցություն եվրոպական և այլ երկրների կրթական հաստատությունների հետ, փոխանակման ծրագրեր և պրակտիկա։</p>
        </div>
      </div>
    </section>
  </main>
);

export default AboutPage; 