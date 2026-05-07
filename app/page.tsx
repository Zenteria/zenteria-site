"use client";

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', label: 'ANA SAYFA' },
    { id: 'market', label: 'MAĞAZA' },
    { id: 'wiki', label: 'WIKIPEDIA' },
    { id: 'destek', label: 'DESTEK' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'market':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {[
              { t: "VIP+", p: "₺150", d: "Aylık üyelik avantajları" },
              { t: "Kozmetik Seti", p: "₺75", d: "Zırh görünümleri" },
              { t: "1M Altın", p: "₺50", d: "Oyun içi para" }
            ].map((i, k) => (
              <div key={k} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all text-center group">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform text-2xl">💎</div>
                <h3 className="font-bold text-xl">{i.t}</h3>
                <p className="text-gray-400 text-sm my-2">{i.d}</p>
                <div className="text-blue-400 font-black text-2xl mb-4">{i.p}</div>
                <button className="w-full py-2 bg-blue-600 hover:bg-blue-500 rounded-lg font-bold transition-colors">İNCELE</button>
              </div>
            ))}
          </div>
        );
      default:
        return (
          <div className="space-y-12 animate-in fade-in duration-700">
            {/* Melonya Stili Hero */}
            <div className="relative inline-block">
                <div className="absolute -inset-4 bg-blue-600/20 blur-3xl rounded-full"></div>
                <h1 className="relative text-6xl md:text-8xl font-black tracking-tighter italic text-white drop-shadow-2xl">
                  ZENTERIA
                </h1>
                <p className="mt-2 text-blue-400 font-bold tracking-[0.5em] text-sm md:text-base">TOWNY & ROLEPLAY</p>
            </div>

            {/* IP Kopyalama Kartı */}
            <div className="max-w-xl mx-auto bg-black/40 border border-white/5 backdrop-blur-md p-2 rounded-2xl flex items-center justify-between group hover:border-blue-500/50 transition-all">
                <div className="px-6 py-3 font-mono font-bold text-blue-400 tracking-wider">PLAY.ZENTERIA.COM</div>
                <button 
                  onClick={() => { navigator.clipboard.writeText("play.zenteria.com"); alert("Kopyalandı!"); }}
                  className="bg-blue-600 hover:bg-blue-500 px-8 py-3 rounded-xl font-black text-sm transition-all active:scale-95"
                >
                  KOPYALA
                </button>
            </div>

            {/* Özellik Kartları */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Kasaba Sistemi", icon: "🏰", desc: "Kendi medeniyetini kur ve yönet." },
                { title: "Gelişmiş Ekonomi", icon: "⚖️", desc: "Tamamen oyuncu odaklı pazar." },
                { title: "Özel Görevler", icon: "📜", desc: "Zenteria dünyasını keşfet." }
              ].map((box, i) => (
                <div key={i} className="bg-gradient-to-b from-white/10 to-transparent p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all text-left">
                  <div className="text-4xl mb-4">{box.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{box.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{box.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <main className="min-h-screen relative flex flex-col items-center">
      {/* Melonya Tarzı Dinamik Arka Plan */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center transition-opacity duration-1000"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2000')",
          opacity: 0.3
        }}
      ></div>
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(30,64,175,0.15),_transparent)]"></div>

      {/* Melonya Tarzı Üst Menü */}
      <nav className="w-full max-w-5xl mt-8 px-6 py-4 flex items-center justify-between bg-black/20 backdrop-blur-md border border-white/5 rounded-2xl z-50">
        <div className="font-black text-xl tracking-tighter italic">ZENTERIA</div>
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`text-[11px] font-black tracking-widest transition-colors ${
                activeTab === item.id ? 'text-blue-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button onClick={() => setActiveTab('profil')} className="bg-white text-black px-5 py-2 rounded-lg font-black text-[11px] hover:bg-blue-600 hover:text-white transition-all">
          GİRİŞ YAP
        </button>
      </nav>

      {/* İçerik Alanı */}
      <div className="w-full max-w-5xl px-6 mt-24 mb-20 text-center">
        {renderContent()}
      </div>

      <footer className="w-full py-10 border-t border-white/5 bg-black/40 text-center">
        <p className="text-gray-600 text-[10px] tracking-[0.5em] font-bold uppercase">
          © 2026 Zenteria Network • Meliodas_Root
        </p>
      </footer>
    </main>
  );
