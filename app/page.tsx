"use client";

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [showProfile, setShowProfile] = useState(false);
  
  // Üye Bilgileri State'i
  const [user, setUser] = useState({
    username: "MELIODAS_ROOT",
    rank: "KURUCU", // Rütbe: 'OYUNCU', 'DEVELOPER', 'KURUCU' vb.
    balance: 1500.00,
    cartCount: 0
  });

  const [tickets, setTickets] = useState([
    { id: 1, user: "Maceracı_34", msg: "Market ürünüm gelmedi.", status: "Bekliyor" }
  ]);

  // Yetki Kontrolleri
  const canManageSupport = ['MODERATÖR', 'ADMIN', 'DEVELOPER', 'KURUCU'].includes(user.rank);
  const isHighStaff = ['DEVELOPER', 'KURUCU'].includes(user.rank);

  const renderContent = () => {
    switch (activeTab) {
      case 'wiki':
        return (
          <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-500 text-left">
            <h1 className="text-5xl font-black uppercase italic text-white tracking-tighter border-l-8 border-blue-600 pl-6">ZENTERIA WIKI</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
                <h3 className="text-xl font-black text-blue-400 mb-6 uppercase italic">Temel Komutlar</h3>
                <div className="space-y-4">
                  {[
                    { c: "/t help", d: "Kasaba komutlarını gösterir." },
                    { c: "/irk sec", d: "Irk menüsünü açar." },
                    { c: "/spawn", d: "Başlangıç noktasına döner." }
                  ].map((x, i) => (
                    <div key={i} className="flex items-center gap-3 bg-black/40 p-3 rounded-xl">
                      <code className="text-blue-300 font-mono text-sm">{x.c}</code>
                      <span className="text-gray-500 text-xs">— {x.d}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
                <h3 className="text-xl font-black text-blue-400 mb-6 uppercase italic">Sistem Rehberi</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Zenteria'da ırk yeteneklerini kullanmak için <strong className="text-white">/irk yetenek</strong> komutunu kullanın. 
                  Kasaba kurmak için ise en az <strong className="text-white">5000 ₺</strong> bakiyeye ihtiyacınız vardır.
                </p>
              </div>
            </div>
          </div>
        );
      case 'destek':
        return (
          <div className="max-w-3xl mx-auto space-y-8 animate-in zoom-in duration-500">
            <div className="bg-black/60 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-xl">
              <h2 className="text-3xl font-black mb-6 uppercase italic text-white text-left">Yeni Talep</h2>
              <textarea placeholder="Sorununuzu detaylandırın..." className="w-full p-4 bg-white/5 border border-white/10 rounded-xl outline-none text-white mb-4"></textarea>
              <button className="w-full py-4 bg-blue-600 font-black rounded-xl hover:bg-blue-700 text-white">GÖNDER</button>
            </div>
            {canManageSupport && (
              <div className="bg-blue-600/5 border border-blue-500/20 p-10 rounded-[2.5rem] backdrop-blur-2xl text-left">
                <h2 className="text-2xl font-black uppercase italic text-blue-400 mb-8">Yönetim Paneli</h2>
                {tickets.map(t => (
                  <div key={t.id} className="p-6 bg-black/80 rounded-3xl border border-white/5 relative mb-4">
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-xs font-black text-white">{t.user} <span className="text-gray-600">({t.status})</span></span>
                        {isHighStaff && <span className="text-[9px] text-yellow-500 font-black uppercase">ROL VERME YETKİSİ AKTİF</span>}
                    </div>
                    <p className="text-sm text-gray-400 mb-4">{t.msg}</p>
                    <div className="flex gap-2">
                       <input type="text" placeholder="Cevap yaz..." className="flex-1 p-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white" />
                       <button onClick={() => setTickets(tickets.map(x => x.id === t.id ? {...x, status: 'Yanıtlandı'} : x))} className="px-6 py-2 bg-blue-600 text-[10px] font-black rounded-xl">CEVAPLA</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      default:
        return (
          <div className="space-y-24 animate-in fade-in duration-1000">
            <div className="space-y-8">
                <h1 className="text-8xl md:text-[140px] font-black tracking-tighter italic text-white drop-shadow-2xl uppercase leading-[0.8]">ZENTERIA</h1>
                <p className="text-blue-400 font-bold tracking-[0.5em] text-xs md:text-sm uppercase bg-black/40 backdrop-blur-sm py-2 rounded-full inline-block px-8 italic">TOWNY VE ROLEPLAY DENEYİMİ</p>
                <div className="max-w-xl mx-auto bg-black/40 border border-white/10 p-3 rounded-2xl flex items-center justify-between group hover:border-blue-500/50 transition-all shadow-2xl">
                    <div className="px-8 py-3 font-mono font-bold text-white text-sm">PLAY.ZENTERIA.COM</div>
                    <button onClick={() => {navigator.clipboard.writeText("play.zenteria.com"); alert("IP Kopyalandı!");}} className="bg-white text-black hover:bg-blue-600 hover:text-white px-10 py-4 rounded-xl font-black text-[10px] uppercase">KOPYALA</button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {['TOWNY', 'ÖZEL IRKLAR', 'EKONOMİ'].map((x, i) => (
                 <div key={i} className="bg-white/5 p-12 rounded-[3rem] border border-white/5 hover:border-blue-500/30 transition-all text-left">
                    <h2 className="text-2xl font-black text-white italic uppercase">{x}</h2>
                 </div>
               ))}
            </div>
          </div>
        );
    }
  };

  return (
    <main className="min-h-screen relative flex flex-col items-center bg-[#050505] overflow-x-hidden">
      <div className="fixed inset-0 -z-10 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2000')" }}></div>
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/80 via-transparent to-black"></div>

      <nav className="w-full max-w-5xl mt-8 px-8 py-4 flex items-center justify-between bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] z-40">
        <div className="font-black text-2xl italic text-white tracking-tighter uppercase">ZENTERIA</div>
        <div className="hidden lg:flex gap-8">
          {['home', 'market', 'wiki', 'destek'].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`text-[10px] font-black tracking-[0.3em] uppercase transition-all ${activeTab === tab ? 'text-blue-500' : 'text-gray-400 hover:text-white'}`}>{tab === 'home' ? 'ANA SAYFA' : tab}</button>
          ))}
        </div>
        <div onClick={() => setShowProfile(!showProfile)} className="flex items-center gap-3 cursor-pointer group">
           <div className="text-right hidden sm:block">
              <p className="text-[11px] font-black text-white italic group-hover:text-blue-400 transition-colors uppercase">{user.username}</p>
              <p className="text-[8px] font-bold text-blue-500 uppercase tracking-widest">{user.rank}</p>
           </div>
           <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-black font-black hover:scale-110 transition-transform">M</div>
        </div>
      </nav>

      {/* Profil Menüsü - Görseldeki Tasarım */}
      <div className={`fixed top-0 right-0 h-full w-72 bg-[#0a0f18] border-l border-white/5 z-50 transition-transform duration-500 transform shadow-2xl ${showProfile ? 'translate-x-0' : 'translate-x-full'}`}>
         <div className="p-8">
            <button onClick={() => setShowProfile(false)} className="text-gray-500 hover:text-white mb-8 font-black text-[10px] uppercase">✕ KAPAT</button>
            <div className="flex items-center gap-4 mb-10 border-b border-white/5 pb-8">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-black text-xl">M</div>
               <div className="text-left">
                  <p className="text-sm font-black text-white">{user.username}</p>
                  <p className="text-[10px] text-gray-500 font-bold uppercase">{user.rank}</p>
               </div>
            </div>
            <div className="space-y-1 text-left">
               {[
                 { n: 'Profil', i: '👤' },
                 { n: `Bakiye: ${user.balance} ₺`, i: '💰' },
                 { n: `Sepet (${user.cartCount})`, i: '🛒' },
                 { n: 'Başvuru Formu', i: '📋' },
                 { n: 'Hediye', i: '🎁' },
                 { n: 'Çıkış Yap', i: '↪️', red: true }
               ].map((item, idx) => (
                 <button key={idx} className="w-full flex items-center gap-4 p-4 hover:bg-white/5 rounded-2xl transition-all group">
                    <span className={`text-lg ${item.red ? 'text-red-500' : 'text-yellow-500'}`}>{item.i}</span>
                    <span className={`text-[11px] font-black uppercase tracking-widest ${item.red ? 'text-red-500' : 'text-gray-400 group-hover:text-white'}`}>{item.n}</span>
                 </button>
               ))}
            </div>
         </div>
      </div>

      <div className="w-full max-w-6xl px-6 mt-28 mb-28 relative z-10">{renderContent()}</div>
      <footer className="w-full py-10 border-t border-white/5 bg-black/60 text-center text-gray-700 text-[9px] tracking-[0.6em] font-black uppercase">© 2026 Zenteria Ağı • Meliodas_Root</footer>
    </main>
  );
}