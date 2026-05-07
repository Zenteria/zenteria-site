"use client";

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [showProfile, setShowProfile] = useState(false);
  const [showRankInfo, setShowRankInfo] = useState(false);
  
  const [user, setUser] = useState({
    username: "MELIODAS_ROOT",
    rank: "KURUCU",
    balance: 1250.75,
    cart: 0
  });

  // Market Kategorileri (Melonya Referanslı)
  const marketItems = [
    { name: "Sponsor VIP", price: "₺150", category: "VIP", icon: "👑", desc: "Towny'de en yüksek ayrıcalıklar." },
    { name: "Altın Anahtar x5", price: "₺45", category: "ANAHTAR", icon: "🔑", desc: "Özel kasaları açmak için kullanılır." },
    { name: "Kasaba Koruma", price: "₺60", category: "DİĞER", icon: "🛡️", desc: "30 günlük ek koruma kalkanı." },
    { name: "Özel Büyü Kitabı", price: "₺80", category: "BÜYÜLER", icon: "📖", desc: "Eşyalarınıza nadir özellikler ekleyin." }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'market':
        return (
          <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in zoom-in duration-500">
            <div className="text-left border-l-4 border-blue-600 pl-6 mb-12">
               <h2 className="text-4xl font-black italic uppercase text-white tracking-tighter">ZENTERIA TOWNY MAĞAZA</h2>
               <p className="text-gray-500 text-sm">Sunucumuza destek ol, Towny dünyasında öne geç.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {marketItems.map((item, i) => (
                <div key={i} className="bg-[#0c121d] border border-white/5 rounded-[2rem] group hover:border-blue-500/40 transition-all shadow-xl overflow-hidden">
                   <div className="h-40 bg-gradient-to-br from-blue-900/20 to-black flex items-center justify-center text-5xl group-hover:scale-110 transition-transform">
                      {item.icon}
                   </div>
                   <div className="p-6 text-left">
                      <span className="text-[8px] font-black text-blue-500 uppercase tracking-widest">{item.category}</span>
                      <h3 className="text-lg font-black text-white uppercase italic mt-1">{item.name}</h3>
                      <p className="text-gray-500 text-[10px] my-4 leading-relaxed">{item.desc}</p>
                      <div className="flex items-center justify-between mt-6">
                         <span className="text-xl font-black text-white">{item.price}</span>
                         <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl transition-all shadow-lg">🛒</button>
                      </div>
                   </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'wiki':
        return (
          <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-500 text-left">
            <h2 className="text-4xl font-black italic uppercase text-white tracking-tighter border-l-4 border-blue-600 pl-4">Towny Rehberi</h2>
            <div className="grid gap-4">
              {[
                { c: "/t new [isim]", d: "Kendi kasabanızı kurun." },
                { c: "/t claim", d: "Bulunduğunuz araziyi kasabanıza katın." },
                { c: "/t deposit [miktar]", d: "Kasaba bankasına para yatırın." }
              ].map((x, i) => (
                <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/5 flex items-center gap-6">
                   <code className="text-blue-500 font-bold bg-black/50 px-4 py-2 rounded-lg"> {x.c} </code>
                   <span className="text-gray-400 text-xs italic"> {x.d} </span>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-16 animate-in fade-in duration-1000">
             <div className="space-y-4">
                <h1 className="text-8xl md:text-[150px] font-black tracking-tighter italic text-white uppercase leading-none">ZENTERIA</h1>
                <p className="text-blue-400 font-bold tracking-[0.5em] text-[10px] md:text-xs uppercase bg-black/40 backdrop-blur-sm py-2 px-8 rounded-full inline-block">Sadece Towny, Sadece Roleplay</p>
             </div>
             <div className="max-w-xl mx-auto bg-black/40 border border-white/10 p-3 rounded-2xl flex items-center justify-between group hover:border-blue-500/50 transition-all shadow-2xl">
                <div className="px-8 py-3 font-mono font-bold text-white text-sm tracking-widest italic">PLAY.ZENTERIA.COM</div>
                <button onClick={() => alert("IP Kopyalandı!")} className="bg-white text-black hover:bg-blue-600 hover:text-white px-10 py-4 rounded-xl font-black text-[10px] uppercase transition-all">KOPYALA</button>
             </div>
          </div>
        );
    }
  };

  return (
    <main className="min-h-screen relative flex flex-col items-center bg-[#050505] selection:bg-blue-600 selection:text-white">
      <nav className="w-full max-w-5xl mt-8 px-8 py-4 flex items-center justify-between bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] z-40">
        <div className="font-black text-2xl italic text-white uppercase">ZEN<span className="text-blue-600">TERIA</span></div>
        <div className="hidden lg:flex gap-8">
          {['home', 'market', 'wiki'].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`text-[10px] font-black tracking-[0.3em] uppercase transition-all ${activeTab === tab ? 'text-blue-500 border-b-2 border-blue-500 pb-1' : 'text-gray-400 hover:text-white'}`}>{tab === 'home' ? 'ANA SAYFA' : tab}</button>
          ))}
        </div>
        <div onClick={() => setShowProfile(!showProfile)} className="flex items-center gap-3 cursor-pointer group">
           <div className="text-right hidden sm:block">
              <p className="text-[11px] font-black text-white italic group-hover:text-blue-400 transition-colors uppercase">{user.username}</p>
              <p className="text-[8px] font-bold text-blue-500 uppercase">{user.rank}</p>
           </div>
           <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-black font-black">M</div>
        </div>
      </nav>

      {/* Profil Sidebar & Rank Detayları */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-[#0a0f18] border-l border-white/5 z-50 transition-transform duration-500 transform ${showProfile ? 'translate-x-0' : 'translate-x-full'}`}>
         <div className="p-8 h-full flex flex-col">
            <button onClick={() => {setShowProfile(false); setShowRankInfo(false);}} className="text-gray-500 hover:text-white mb-8 text-left font-black text-[10px] uppercase">✕ KAPAT</button>
            
            <div className="flex items-center gap-4 mb-10 border-b border-white/5 pb-8">
               <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-black font-black text-2xl">M</div>
               <div className="text-left text-white">
                  <p className="text-md font-black italic uppercase leading-tight">{user.username}</p>
                  <p className="text-[10px] text-blue-500 font-bold uppercase">{user.rank}</p>
               </div>
            </div>
            
            <div className="space-y-2 text-left flex-1">
               <button onClick={() => setShowRankInfo(!showRankInfo)} className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 group transition-all">
                  <span className="text-lg text-yellow-500">👤</span>
                  <p className="text-[11px] font-black text-gray-300 uppercase tracking-widest group-hover:text-white">Profil & Ranklar</p>
               </button>

               {showRankInfo && (
                  <div className="ml-10 space-y-2 animate-in slide-in-from-top-2 duration-300">
                     {[
                       { r: 'KURUCU', c: 'text-red-500', d: 'Sunucu Sahibi' },
                       { r: 'DEVELOPER', c: 'text-purple-500', d: 'Sistem Geliştirici' },
                       { r: 'TOWNY-MOD', c: 'text-green-500', d: 'Kasaba Denetçisi' }
                     ].map((r, i) => (
                        <div key={i} className="p-3 bg-white/5 rounded-xl border border-white/5">
                           <p className={`text-[9px] font-black ${r.c}`}>{r.r}</p>
                           <p className="text-[8px] text-gray-500 italic">{r.d}</p>
                        </div>
                     ))}
                  </div>
               )}

               <div className="w-full flex items-center gap-4 p-4 hover:bg-white/5 rounded-2xl text-gray-400 group">
                  <span className="text-lg text-yellow-500">💰</span>
                  <p className="text-[11px] font-black uppercase tracking-widest">Bakiye: {user.balance} ₺</p>
               </div>
               
               <button className="w-full flex items-center gap-4 p-4 text-red-500 hover:bg-red-500/5 rounded-2xl mt-auto">
                  <span className="text-lg">↪️</span>
                  <p className="text-[11px] font-black uppercase">Çıkış Yap</p>
               </button>
            </div>
         </div>
      </div>

      <div className="w-full max-w-6xl px-6 mt-28 mb-28 relative z-10">{renderContent()}</div>
      <footer className="w-full py-10 border-t border-white/5 text-center text-gray-700 text-[9px] font-black uppercase italic tracking-[0.5em]">© 2026 Zenteria • Meliodas_Root</footer>
    </main>
  );
}