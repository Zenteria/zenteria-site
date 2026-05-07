"use client";

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'market':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in zoom-in duration-500">
            {[
              { name: "VIP Üyelik", price: "100 TL", desc: "Özel yetenekler ve kozmetikler." },
              { name: "Kasa Anahtarı", price: "25 TL", desc: "Efsanevi eşyalar şansı." },
              { name: "Coin Paketi", price: "50 TL", desc: "10.000 Oyun içi coin." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-black/40 border border-white/10 backdrop-blur-xl hover:border-blue-500/50 transition-all group">
                <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{item.name}</h3>
                <p className="text-gray-400 text-sm my-4">{item.desc}</p>
                <div className="text-2xl font-black text-white mb-4">{item.price}</div>
                <button className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-all">Satın Al</button>
              </div>
            ))}
          </div>
        );
      case 'wiki':
        return (
          <div className="max-w-2xl mx-auto space-y-4 animate-in slide-in-from-bottom-8 duration-500 text-left">
            <h2 className="text-4xl font-black mb-8 text-center uppercase tracking-tighter">Sunucu Rehberi</h2>
            {["Kasaba Kurulumu", "Ekonomi Rehberi", "Irk Yetenekleri"].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md hover:bg-white/5 cursor-pointer transition-all">
                <div className="font-bold text-lg text-blue-400">{item}</div>
                <div className="text-gray-400 text-sm mt-1">Detaylı rehber içeriği yakında burada olacak.</div>
              </div>
            ))}
          </div>
        );
      case 'destek':
        return (
          <div className="max-w-md mx-auto p-8 rounded-[2.5rem] bg-black/40 border border-white/10 backdrop-blur-xl animate-in fade-in duration-500">
            <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter text-blue-400">Destek Talebi</h2>
            <div className="space-y-4">
              <input type="text" placeholder="Kullanıcı Adın" className="w-full p-4 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-blue-600 transition-all" />
              <textarea placeholder="Sorununu yaz..." rows={4} className="w-full p-4 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-blue-600 transition-all"></textarea>
              <button className="w-full py-4 bg-blue-600 font-black rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all">GÖNDER</button>
            </div>
          </div>
        );
      case 'profil':
        return (
          <div className="max-w-md mx-auto p-10 rounded-[3rem] bg-gradient-to-br from-blue-600/20 to-black/60 border border-white/10 backdrop-blur-2xl animate-in zoom-in duration-500 text-center">
            <div className="relative w-24 h-24 mx-auto mb-6">
               <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-50 animate-pulse"></div>
               <div className="relative w-full h-full bg-white text-black rounded-full flex items-center justify-center text-4xl font-black">M</div>
            </div>
            <h2 className="text-3xl font-black tracking-tighter">MELIODAS_ROOT</h2>
            <p className="text-blue-400 font-bold text-sm tracking-[0.3em] mt-2 mb-8 uppercase">Kurucu</p>
            <div className="grid grid-cols-2 gap-4">
               <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                  <span className="block text-[10px] text-gray-500 uppercase tracking-widest mb-1">Seviye</span>
                  <span className="text-2xl font-black text-white">99</span>
               </div>
               <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                  <span className="block text-[10px] text-gray-500 uppercase tracking-widest mb-1">Bakiye</span>
                  <span className="text-2xl font-black text-white">₺1,250</span>
               </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="space-y-16 animate-in fade-in zoom-in duration-1000">
            <div className="space-y-4">
              <h1 className="text-7xl md:text-[120px] leading-[0.8] font-black tracking-[-0.05em] uppercase italic bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-700">
                ZENTERIA
              </h1>
              <p className="text-lg md:text-2xl font-medium tracking-[0.4em] text-gray-400 uppercase">
                Towny ve Roleplay Deneyimi
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
               <button 
                onClick={() => {
                  navigator.clipboard.writeText("play.zenteria.com");
                  alert("IP Adresi Kopyalandı!");
                }}
                className="relative group px-16 py-6 bg-white text-black font-black text-xl rounded-2xl transition-all duration-500 hover:scale-110 shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:shadow-blue-500/50"
              >
                PLAY.ZENTERIA.COM
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
              <div className="p-10 rounded-[2.5rem] bg-black/40 border border-white/5 backdrop-blur-md hover:border-white/20 transition-all text-left group">
                <h3 className="text-2xl font-black mb-4 uppercase italic group-hover:text-blue-400 transition-colors">Towny</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Kasabanı kur, sınırlarını genişlet ve büyük savaşlara hazırlan.</p>
              </div>
              <div className="p-10 rounded-[2.5rem] bg-black/40 border border-white/5 backdrop-blur-md hover:border-white/20 transition-all text-left group">
                <h3 className="text-2xl font-black mb-4 uppercase italic text-blue-500 group-hover:text-blue-300">Özel Irklar</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Seçtiğin ırka ait büyüleri ve pasif yetenekleri keşfet.</p>
              </div>
              <div className="p-10 rounded-[2.5rem] bg-black/40 border border-white/5 backdrop-blur-md hover:border-white/20 transition-all text-left group">
                <h3 className="text-2xl font-black mb-4 uppercase italic group-hover:text-blue-400 transition-colors">Ekonomi</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Tamamen oyuncu takasına dayalı adil ve dinamik pazar sistemi.</p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white p-6 font-sans relative flex flex-col items-center overflow-x-hidden">
      {/* Uzay Arka Planı */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-40 mix-blend-screen animate-[pulse_10s_infinite]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(37,99,235,0.15),_transparent_50%)]"></div>
      </div>

      <nav className="fixed top-8 flex flex-wrap justify-center gap-2 p-2 rounded-2xl bg-black/20 border border-white/5 backdrop-blur-xl z-50">
        {['home', 'market', 'wiki', 'destek', 'profil'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-xl text-[10px] md:text-xs font-black uppercase tracking-widest transition-all ${
              activeTab === tab ? 'bg-white text-black' : 'text-gray-500 hover:text-white'
            }`}
          >
            {tab === 'home' ? 'Ana Sayfa' : tab}
          </button>
        ))}
      </nav>

      <div className="mt-40 w-full max-w-6xl text-center">
        {renderContent()}
      </div>

      <footer className="mt-20 py-10 text-gray-700 text-[10px] tracking-[0.5em] uppercase font-bold border-t border-white/5 w-full text-center">
        © 2026 Zenteria Ağı • Meliodas_Root
      </footer>
    </main>
  );
}