"use client";

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [showProfile, setShowProfile] = useState(false);
  const [userRank, setUserRank] = useState('KURUCU'); 
  const [tickets, setTickets] = useState([
    { id: 1, user: "Maceracı_34", msg: "Irk yeteneğim çalışmıyor.", status: "Bekliyor" },
  ]);

  const canManageSupport = ['MODERATÖR', 'ADMIN', 'DEVELOPER', 'KURUCU'].includes(userRank);
  const canAssignRanks = ['DEVELOPER', 'KURUCU'].includes(userRank);

  const renderContent = () => {
    switch (activeTab) {
      case 'destek':
        return (
          <div className="max-w-3xl mx-auto space-y-8 animate-in zoom-in duration-500">
            <div className="bg-black/60 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-xl">
              <h2 className="text-3xl font-black mb-6 uppercase italic text-white text-left">Talep Oluştur</h2>
              <textarea placeholder="Sorununuzu yazın..." className="w-full p-4 bg-white/5 border border-white/10 rounded-xl outline-none text-white mb-4"></textarea>
              <button className="w-full py-4 bg-blue-600 font-black rounded-xl hover:bg-blue-700 text-white">GÖNDER</button>
            </div>
            {canManageSupport && (
              <div className="bg-blue-600/5 border border-blue-500/20 p-10 rounded-[2.5rem] backdrop-blur-2xl text-left">
                <h2 className="text-2xl font-black uppercase italic text-blue-400 mb-8">Yönetim Paneli</h2>
                {tickets.map(t => (
                  <div key={t.id} className="p-6 bg-black/80 rounded-3xl border border-white/5 relative mb-4">
                    <span className="text-xs font-black text-white">{t.user} <span className="text-gray-500">({t.status})</span></span>
                    <p className="text-sm text-gray-400 my-4">{t.msg}</p>
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
            {/* Hero Section */}
            <div className="space-y-8">
                <h1 className="text-8xl md:text-[140px] font-black tracking-tighter italic text-white drop-shadow-2xl uppercase leading-[0.8]">ZENTERIA</h1>
                <p className="text-blue-400 font-bold tracking-[0.5em] text-xs md:text-sm uppercase bg-black/40 backdrop-blur-sm py-2 rounded-full inline-block px-8 italic">Kadim Irkların Yükselişi</p>
                <div className="max-w-xl mx-auto bg-black/40 border border-white/10 p-3 rounded-2xl flex items-center justify-between group hover:border-blue-500/50 transition-all shadow-2xl">
                    <div className="px-8 py-3 font-mono font-bold text-white text-sm">PLAY.ZENTERIA.COM</div>
                    <button onClick={() => alert("Kopyalandı!")} className="bg-white text-black hover:bg-blue-600 hover:text-white px-10 py-4 rounded-xl font-black text-[10px] uppercase transition-all">KOPYALA</button>
                </div>
            </div>

            {/* SİSTEM AÇIKLAMALARI - MELONYA STYLE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {/* Irk Sistemi */}
              <div className="bg-gradient-to-br from-blue-900/20 to-black/60 border border-white/5 p-10 rounded-[3rem] backdrop-blur-xl group hover:border-blue-500/30 transition-all">
                <div className="text-5xl mb-6">🎭</div>
                <h2 className="text-3xl font-black text-white italic uppercase mb-4 tracking-tighter">Kadim Irk Sistemi</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Zenteria'da sadece bir oyuncu değilsin. **İnsan, Elf, Orklar ve Şeytanlar** arasından seçimini yap! Her ırkın kendine has pasif ve aktif yetenekleri bulunur. 
                  <br /><br />
                  Şeytanlar karanlıkta güçlenirken, Elfler ormanlarda çeviklik kazanır. Kendi stratejini belirle ve dünyayı yönet!
                </p>
                <div className="flex gap-3">
                   <span className="px-4 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-[10px] font-bold text-blue-400 uppercase">Özel Yetenekler</span>
                   <span className="px-4 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-[10px] font-bold text-purple-400 uppercase">Irk Gelişimi</span>
                </div>
              </div>

              {/* Towny Sistemi */}
              <div className="bg-gradient-to-br from-yellow-900/10 to-black/60 border border-white/5 p-10 rounded-[3rem] backdrop-blur-xl group hover:border-yellow-500/30 transition-all">
                <div className="text-5xl mb-6">🏰</div>
                <h2 className="text-3xl font-black text-white italic uppercase mb-4 tracking-tighter">Kasaba & Diplomasi</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Vahşi doğada hayatta kalmak yetmez. Kendi kasabanı kur, vergi sistemini yönet ve imparatorluğunu ilan et! 
                  <br /><br />
                  Komşu kasabalarla ittifak kurabilir veya büyük kuşatmalarda onlara savaş açabilirsin. Gerçekçi bir diplomasi ve ekonomi deneyimi seni bekliyor.
                </p>
                <div className="flex gap-3">
                   <span className="px-4 py-1 bg-yellow-600/20 border border-yellow-500/30 rounded-full text-[10px] font-bold text-yellow-500 uppercase">Kuşatma Savaşları</span>
                   <span className="px-4 py-1 bg-green-600/20 border border-green-500/30 rounded-full text-[10px] font-bold text-green-500 uppercase">Vergi Sistemi</span>
                </div>
              </div>
            </div>

            {/* Ek Özellikler */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {[
                 { t: 'Özel Ekonomi', d: 'Oyuncu odaklı, dinamik pazar sistemi.', i: '💰' },
                 { t: 'Gelişmiş Zindanlar', d: 'Efsanevi yaratıklar ve ganimetler.', i: '👹' },
                 { t: 'Adil Oyun', d: 'Pay-to-win olmayan dengeli sistem.', i: '⚖️' }
               ].map((x, i) => (
                 <div key={i} className="bg-white/5 border border-white/5 p-8 rounded-3xl hover:bg-white/10 transition-all">
                    <div className="text-3xl mb-4">{x.i}</div>
                    <h4 className="font-black text-white uppercase italic mb-2 tracking-tighter">{x.t}</h4>
                    <p className="text-gray-500 text-xs">{x.d}</p>
                 </div>
               ))}
            </div>
          </div>
        );
    }
  };

  return (
    <main className="min-h-screen relative flex flex-col items-center bg-[#050505] overflow-x-hidden">
      <div className="fixed inset-0 -z-10 bg-cover bg-center opacity-30 scale-105 transition-transform duration-[10s] animate-pulse" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2000')" }}></div>
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/80 via-transparent to-black"></div>

      <nav className="w-full max-w-5xl mt-8 px-8 py-4 flex items-center justify-between bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] z-40">
        <div className="font-black text-2xl italic text-white tracking-tighter uppercase">ZEN<span className="text-blue-600">TERIA</span></div>
        <div className="hidden lg:flex gap-8">
          {['home', 'destek'].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`text-[10px] font-black tracking-[0.3em] uppercase transition-all ${activeTab === tab ? 'text-blue-500' : 'text-gray-400 hover:text-white'}`}>{tab === 'home' ? 'ANA SAYFA' : tab}</button>
          ))}
        </div>
        <div onClick={() => setShowProfile(!showProfile)} className="flex items-center gap-3 cursor-pointer">
           <div className="text-right hidden sm:block">
              <p className="text-[11px] font-black text-white italic">MELIODAS_ROOT</p>
              <p className="text-[8px] font-bold text-blue-500 uppercase">{userRank}</p>
           </div>
           <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-black font-black">M</div>
        </div>
      </nav>

      {/* Profil Yan Menü */}
      <div className={`fixed top-0 right-0 h-full w-72 bg-[#0a0f18] border-l border-white/5 z-50 transition-transform duration-500 transform shadow-2xl ${showProfile ? 'translate-x-0' : 'translate-x-full'}`}>
         <div className="p-8">
            <button onClick={() => setShowProfile(false)} className="text-gray-500 hover:text-white mb-8 font-black text-xs uppercase">✕ Kapat</button>
            <div className="flex items-center gap-4 mb-10">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-black text-xl">M</div>
               <div className="text-left"><p className="text-sm font-black text-white">MELIODAS_ROOT</p><p className="text-[10px] text-gray-500 font-bold uppercase">{userRank}</p></div>
            </div>
            <div className="space-y-2 text-left">
               {[
                 { n: 'Profilim', i: '👤', c: 'text-yellow-500' },
                 { n: 'Bakiye: 0 ₺', i: '💰', c: 'text-yellow-500' },
                 { n: 'Market Arabası', i: '🛒', c: 'text-yellow-500' },
                 { n: 'Yetkili Başvuru', i: '📋', c: 'text-yellow-500' },
                 { n: 'Çıkış Yap', i: '↪️', c: 'text-red-500' }
               ].map((item, idx) => (
                 <button key={idx} className="w-full flex items-center gap-4 p-4 hover:bg-white/5 rounded-2xl transition-all group">
                    <span className={`text-lg ${item.c}`}>{item.i}</span>
                    <span className="text-sm font-bold text-gray-300 group-hover:text-white">{item.n}</span>
                 </button>
               ))}
            </div>
         </div>
      </div>

      <div className="w-full max-w-6xl px-6 mt-28 mb-28 relative z-10">{renderContent()}</div>
      <footer className="w-full py-10 border-t border-white/5 bg-black/60 text-center text-gray-700 text-[9px] tracking-[0.6em] font-black uppercase">© 2026 Zenteria Ağı • Tüm Hakları Saklıdır</footer>
    </main>
  );
