import React from 'react';
import ephtqShenq from '../assets/images/ephtqShenq.jpg';
import ephtqVector from '../assets/vectors/ephtqVector-logo.png';

const Home = () => (
  <main className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 min-h-screen text-white">
    {/* Hero Block */}
    <section className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
        Բարի գալուստ <span className="text-blue-200">Երևանի Պետական հումանիտար-տեխնիկական քոլեջ</span>
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto">
        Մեր քոլեջը կրթության, նորարարության և հաջողության կենտրոն է։ Միացեք մեզ՝ ստանալու ժամանակակից գիտելիքներ և հմտություններ, որոնք կօգնեն Ձեզ կառուցել պայծառ ապագա։
      </p>
      <a href="https://dimord.emis.am/" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg">
        Դիմել հիմա
      </a>
    </section>

    {/* College Highlights */}
    <section className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white/10 rounded-2xl p-8 shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-2 text-blue-100">25+ Տարի փորձ</h2>
        <p className="text-blue-200">Հիմնադրվել է 1963 թվականին, քոլեջը պատրաստել է հազարավոր հաջողակ շրջանավարտներ։</p>
      </div>
      <div className="bg-white/10 rounded-2xl p-8 shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-2 text-blue-100">300+ Ուսանող</h2>
        <p className="text-blue-200">Մեր ուսանողները սովորում են ժամանակակից մասնագիտություններ և մասնակցում են միջազգային ծրագրերի։</p>
      </div>
      <div className="bg-white/10 rounded-2xl p-8 shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-2 text-blue-100">15+ Մասնագիտություն</h2>
        <p className="text-blue-200">Մենք առաջարկում ենք լայն ընտրանի՝ ՏՏ, ճարտարագիտություն, տնտեսագիտություն, դիզայն և այլ ոլորտներում։</p>
      </div>
    </section>

    {/* Quick Facts */}
    <section className="container mx-auto px-4 py-12">
      <div className="bg-white/10 rounded-2xl p-8 shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <img src={ephtqShenq} alt="College Building" className="w-80 h-64 object-cover rounded-xl shadow-xl bg-white/20 p-2" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-100">Արագ Փաստեր Քոլեջի Մասին</h2>
          <ul className="list-disc list-inside text-blue-200 space-y-2">
            <li>Պետական հավատարմագրված կրթական հաստատություն</li>
            <li>Բարձրակարգ դասախոսական կազմ</li>
            <li>Ժամանակակից լաբորատորիաներ և տեխնիկական հագեցվածություն</li>
            <li>Ուսանողական ակտիվ կյանք և ակումբներ</li>
            <li>Միջազգային համագործակցություն և փոխանակման ծրագրեր</li>
            <li>Աշխատանքային փորձառություն և պրակտիկա առաջատար ընկերություններում</li>
          </ul>
        </div>
      </div>
    </section>

    {/* Student Testimonials */}
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8 text-center text-blue-100">Ուսանողների կարծիքները</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white/10 rounded-2xl p-6 shadow-lg">
          <p className="text-blue-200 mb-4">"Քոլեջը ինձ տվել է ոչ միայն գիտելիքներ, այլև ինքնավստահություն և ընկերներ ամբողջ կյանքի համար։"</p>
          <div className="font-bold text-blue-100">Անահիտ Մ.</div>
        </div>
        <div className="bg-white/10 rounded-2xl p-6 shadow-lg">
          <p className="text-blue-200 mb-4">"Ուսումնական գործընթացը շատ հետաքրքիր է, դասախոսները՝ պրոֆեսիոնալ և հոգատար։"</p>
          <div className="font-bold text-blue-100">Գոռ Ս.</div>
        </div>
        <div className="bg-white/10 rounded-2xl p-6 shadow-lg">
          <p className="text-blue-200 mb-4">"Այստեղ ստացած փորձը օգնեց ինձ գտնել իմ սիրելի մասնագիտությունը և աշխատանք։"</p>
          <div className="font-bold text-blue-100">Մարիամ Ա.</div>
        </div>
      </div>
    </section>

    {/* Campus Life */}
    <section className="container mx-auto px-4 py-12">
      <div className="bg-white/10 rounded-2xl p-8 shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <div className="bg-white/80 rounded-xl shadow-xl border border-gray-200 p-4 flex items-center justify-center">
            <img src={ephtqVector} alt="Campus Life" className="w-64 h-64 object-contain" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-100">Ուսանողական Կյանք</h2>
          <p className="text-blue-200 mb-4">Մեր քոլեջում ուսանողները մասնակցում են տարբեր միջոցառումների, ակումբների և մրցույթների։ Ունենք սպորտային, մշակութային և գիտական խմբակներ, որոնք նպաստում են ուսանողների բազմակողմանի զարգացմանը։</p>
          <ul className="list-disc list-inside text-blue-200 space-y-2">
            <li>Սպորտային թիմեր և մրցույթներ</li>
            <li>Մշակութային միջոցառումներ և տոնակատարություններ</li>
            <li>Գիտական նախագծեր և օլիմպիադաներ</li>
          </ul>
        </div>
      </div>
    </section>

    {/* Call to Action */}
    <section className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold mb-4 text-blue-100">Միացեք Մեզ Հիմա</h2>
      <p className="text-xl text-blue-200 mb-8">Դարձեք մեր մեծ ընտանիքի մասը և ստացեք որակյալ կրթություն, որը կբացի Ձեր առաջ նոր հնարավորություններ։</p>
      <a href="https://dimord.emis.am/" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg">
        Դիմել հիմա
      </a>
    </section>
  </main>
);

export default Home; 