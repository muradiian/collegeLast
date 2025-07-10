
import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Կապվեք մեզ հետ</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ունե՞ք հարցեր: Մենք այստեղ ենք Ձեզ օգնելու համար
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl text-slate-800">Հասցե</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                ք. Երևան, Արմեն Տիգրանյան 21․
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-xl text-slate-800">Հեռախոս</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                +374 (010) 200524
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-xl text-slate-800">Էլ. փոստ</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                yshtc@yahoo.com
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Ուղարկեք մեզ գրություն</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Անուն</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ձեր անունը"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Էլ. փոստ</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Հեռախոս</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+374 XX XXX-XXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Նամակ</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Գրեք Ձեր հարցը կամ մեկնաբանությունը..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Ուղարկել նամակը
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Աշխատանքային ժամեր</h3>
            <div className="bg-slate-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Clock className="h-6 w-6 text-blue-600 mr-3" />
                <span className="text-lg font-semibold text-slate-800">Ընդունարանի ժամեր</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="text-slate-700">Երկուշաբթի - Ուրբաթ</span>
                  <span className="font-medium text-slate-800">09:00 - 16:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="text-slate-700">Շաբաթ</span>
                  <span className="font-medium text-slate-800">Փակ է</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-700">Կիրակի</span>
                  <span className="font-medium text-red-600">Փակ է</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Նշում:</strong> Ամռանը (հունիս-օգոստոս) աշխատանքային ժամերը կարող են փոփոխվել: 
                  Խորհուրդ ենք տալիս նախապես զանգահարել:
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
