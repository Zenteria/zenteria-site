"use client";

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'market':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {[
              { t: "VIP Üyelik", p: "₺100", d: "Özel yetenekler ve kozmetikler." },
              { t: "Kasa Anahtarı", p: "₺25", d: "Efsanevi eşyalar şansı." },
              { t: "Coin Paketi", p: "₺50", d: "10.000 Oyun içi coin." }
            ].map((i, k) => (
              <div key={k} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all text-center group backdrop-blur-md">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform text-2xl">💎</div>
                <h3 className="font-bold text-xl">{i.t}</h3>
                <p className="text-gray-400 text-sm my-4">{i.d}</p>
                <div className="text-blue-400 font-black text-2xl mb-4">{i.p}</div>
                <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-all">SATIN AL</button>
              </div>
            ))}
          </div>
        );
      default:
        return (
          <div className="space-y-16 animate-in fade-in duration-1000">
            <div className="relative inline-block">
                <div className="absolute -inset-8 bg-blue-600/30 blur-3xl rounded-full animate-pulse"></div>
                <h1 className="relative text-7xl md:text-9xl font-black tracking-tighter italic text-white drop-shadow-2xl uppercase">
                  ZENTERIA
                </h1>
                <p className="mt-4 text-blue-400 font-bold tracking-[0.5em] text-sm md:text-base uppercase">TOWNY & ROLEPLAY DENEYİMİ</p>
            </div>

            <div className="max-w-xl mx-auto bg-black/60 border border-white/10 backdrop-blur-xl p-3 rounded-2xl flex items-center justify-between group hover:border-blue-500/50 transition-all shadow-2xl shadow-blue-900/20">
                <div className="px-6 py-3 font-mono font-bold text-white tracking-wider">PLAY.ZENTERIA.COM</div>
                <button 
                  onClick={() => { navigator.clipboard.writeText("play.zenteria.com"); alert("IP Kopyalandı!"); }}
                  className="bg-white text-black hover:bg-blue-600 hover:text-white px-10 py-4 rounded-xl font-black text-xs transition-all active:scale-95"
                >
                  KOPYALA
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Towny", icon: "🏰", desc: "Kasabanı kur, sınırlarını genişlet ve büyük savaşlara hazırlan." },
                { title: "Özel Irklar", icon: "⚔️", desc: "Seçtiğin ırka ait büyüleri ve pasif yetenekleri keşfet." },
                { title: "Ekonomi", icon: "⚖️", desc: "Tamamen oyuncu takasına dayalı adil ve dinamik pazar sistemi." }
              ].map((box, i) => (
                <div key={i} className="bg-gradient-to-b from-white/10 to-transparent p-10 rounded-[3rem] border border-white/5 hover:border-blue-500/30 transition-all text-left backdrop-blur-sm group">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">{box.icon}</div>
                  <h3 className="text-2xl font-black mb-3 italic uppercase tracking-tight">{box.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{box.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <main className="min-h-screen relative flex flex-col items-center bg-black">
      {/* ARKA PLAN - INLINE CSS ILE ZORLANMIS HALI */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center transition-opacity duration-1000 animate-pulse"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2000')",
          opacity: 0.4
        }}
      ></div>
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/40 via-transparent to-black"></div>

      {/* Navigasyon */}
      <nav className="w-full max-w-5xl mt-10 px-8 py-5 flex items-center justify-between bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2rem] z-50">
        <div className="font-black text-2xl tracking-tighter italic text-white">ZENTERIA</div>
        <div className="hidden md:flex gap-10">
          {['home', 'market', 'wiki', 'destek'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-[11px] font-black tracking-[0.2em] transition-all uppercase ${
                activeTab === tab ? 'text-blue-500 scale-110' : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab === 'home' ? 'ANA SAYFA' : tab}
            </button>
          ))}
        </div>
        <button onClick={() => setActiveTab('profil')} className="bg-blue-600 text-white px-8 py-3 rounded-xl font-black text-[11px] hover:bg-white hover:text-black transition-all shadow-lg shadow-blue-600/30">
          GİRİŞ YAP
        </button>
      </nav>

      <div className="w-full max-w-6xl px-6 mt-24 mb-24 relative z-10">
        {renderContent()}
      </div>

      <footer className="w-full py-12 border-t border-white/5 bg-black/60 backdrop-blur-md text-center">
        <p className="text-gray-600 text-[10px] tracking-[0.5em] font-bold uppercase">
          © 2026 Zenteria Network • Meliodas_Root
        </p>
      </footer>
    </main>
  );
}