"use client";

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'market':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-700">
            {[
              { name: "VIP Üyelik", price: "100 TL", desc: "Özel yetenekler ve kozmetikler." },
              { name: "Kasa Anahtarı", price: "25 TL", desc: "Efsanevi eşyalar şansı." },
              { name: "Coin Paketi", price: "50 TL", desc: "10.000 Oyun içi coin." }
            ].map((item, i) => (
              <div key={i} className="p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-blue-600/20 transition-all">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-gray-400 text-sm my-2">{item.desc}</p>
                <div className="text-blue-400 font-black text-lg">{item.price}</div>
                <button className="mt-4 w-full py-2 bg-white text-black font-bold rounded-lg hover:bg-blue-500 hover:text-white transition-colors">Satın Al</button>
              </div>
            ))}
          </div>
        );
      case 'wiki':
        return (
          <div className="text-left space-y-6 max-w-2xl mx-auto animate-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl font-bold border-b border-blue-600 pb-2">Sunucu Rehberi</h2>
            <div className="space-y-4">
              <details className="group border border-white/10 rounded-xl p-4 bg-white/5 cursor-pointer">
                <summary className="font-bold group-hover:text-blue-400">Kasaba Nasıl Kurulur?</summary>
                <p className="text-gray-400 mt-2 text-sm">/t new [isim] komutu ile ilk kasabanızı kurabilir ve krallığınızın temellerini atabilirsiniz.</p>
              </details>
              <details className="group border border-white/10 rounded-xl p-4 bg-white/5 cursor-pointer">
                <summary className="font-bold group-hover:text-blue-400">Irk Sistemi Nedir?</summary>
                <p className="text-gray-400 mt-2 text-sm">Sunucumuzda Elf, Ork ve İnsan olmak üzere 3 ana ırk bulunur. Her birinin kendine has pasif yetenekleri vardır.</p>
              </details>
            </div>
          </div>
        );
      case 'destek':
        return (
          <div className="max-w-md mx-auto space-y-6 animate-in fade-in duration-700">
            <h2 className="text-3xl font-bold text-blue-400">Destek Talebi</h2>
            <p className="text-gray-400">Bir sorun mu yaşıyorsun? Bize mesaj gönder, en kısa sürede yardımcı olalım.</p>
            <div className="space-y-4">
              <input type="text" placeholder="Konu" className="w-full p-3 bg-white/5 border border-white/10 rounded-lg outline-none focus:border-blue-600 transition-colors" />
              <textarea placeholder="Mesajınız..." rows={4} className="w-full p-3 bg-white/5 border border-white/10 rounded-lg outline-none focus:border-blue-600 transition-colors"></textarea>
              <button className="w-full py-3 bg-blue-600 font-bold rounded-lg hover:bg-blue-700 transition-all">Gönder</button>
            </div>
          </div>
        );
      case 'profil':
        return (
          <div className="max-w-md mx-auto border border-white/10 rounded-[2.5rem] p-10 bg-gradient-to-b from-white/10 to-transparent animate-in zoom-in duration-500">
            <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-black shadow-[0_0_30px_rgba(37,99,235,0.5)]">M</div>
            <h2 className="text-2xl font-bold">Meliodas_Root</h2>
            <p className="text-blue-400 text-sm mb-6 uppercase tracking-widest font-bold">Kurucu / Geliştirici</p>
            <div className="grid grid-cols-2 gap-4 text-left">
              <div className="bg-white/5 p-4 rounded-xl">
                <div className="text-xs text-gray-500 uppercase">Seviye</div>
                <div className="text-xl font-bold text-white">99</div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl">
                <div className="text-xs text-gray-500 uppercase">Bakiye</div>
                <div className="text-xl font-bold text-white">1,250 TL</div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="space-y-12 animate-in fade-in duration-1000">
            <div className="space-y-2">
              <h1 className="text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 uppercase">
                ZENTERIA
              </h1>
              <div className="h-1 w-32 bg-blue-600 mx-auto rounded-full shadow-[0_0_20px_rgba(37,99,235,0.8)]" />
            </div>
            <p className="text-xl text-gray-400 max-w-xl mx-auto font-light tracking-wide">
              Sıradanlığın ötesinde bir <span className="text-white font-medium">Towny</span> ve <span className="text-white font-medium">Roleplay</span> deneyimi.
            </p>
            <button 
              onClick={() => {
                navigator.clipboard.writeText("play.zenteria.com");
                alert("IP Adresi Kopyalandı!");
              }}
              className="px-12 py-5 bg-white text-black font-black rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-500 hover:scale-110 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              PLAY.ZENTERIA.COM
            </button>
          </div>
        );
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-6 font-sans relative overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent -z-10" />

      {/* Navigasyon Menüsü */}
      <nav className="flex gap-4 mb-16 bg-white/5 p-2 rounded-2xl border border-white/10 backdrop-blur-md">
        {['home', 'market', 'wiki', 'destek', 'profil'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-xl text-sm font-bold uppercase tracking-wider transition-all ${
              activeTab === tab ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-500 hover:text-white'
            }`}
          >
            {tab === 'home' ? 'Ana Sayfa' : tab}
          </button>
        ))}
      </nav>

      <div className="max-w-4xl w-full text-center">
        {renderContent()}
      </div>

      <footer className="mt-20 text-gray-700 text-xs tracking-widest uppercase">
        © 2026 Zenteria Network • Meliodas_Root
      </footer>
    </main>
  );
}