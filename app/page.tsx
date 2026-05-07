"use client";

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [showProfile, setShowProfile] = useState(false);
  const [showRankInfo, setShowRankInfo] = useState(false);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  
  // KULLANICI VERİSİ - Sadece senin kullanıcı adın 'Admin' yetkisi alır
  const [user, setUser] = useState({
    username: "MELIODAS_ROOT",
    rank: "KURUCU",
    balance: 50000.00,
    cart: 0
  });

  // Admin Kontrolü: Sadece senin isminle eşleşirse panel açılır
  const isOwner = user.username === "MELIODAS_ROOT";

  const renderContent = () => {
    // Admin Paneli Görünümü
    if (isAdminPanelOpen && isOwner) {
      return (
        <div className="max-w-5xl mx-auto space-y-8 animate-in zoom-in duration-500 text-left">
           <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <h2 className="text-4xl font-black italic uppercase text-red-500 tracking-tighter">ZENTERIA YÖNETİM MERKEZİ</h2>
              <button onClick={() => setIsAdminPanelOpen(false)} className="px-6 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-[10px] font-black uppercase">Geri Dön</button>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 p-8 rounded-[2rem] border border-red-500/20">
                 <p className="text-gray-500 text-[10px] font-black uppercase mb-2">Aktif Oyuncu</p>
                 <h3 className="text-3xl font-black text-white">124 / 200</h3>
              </div>
              <div className="bg-white/5 p-8 rounded-[2rem] border border-green-500/20">
                 <p className="text-gray-500 text-[10px] font-black uppercase mb-2">Günlük Kazanç</p>
                 <h3 className="text-3xl font-black text-white">₺2,450.00</h3>
              </div>
              <div className="bg-white/5 p-8 rounded-[2rem] border border-blue-500/20">
                 <p className="text-gray-500 text-[10px] font-black uppercase mb-2">Açık Talepler</p>
                 <h3 className="text-3xl font-black text-white">7</h3>
              </div>
           </div>

           <div className="bg-white/5 p-10 rounded-[3rem] border border-white/5">
              <h4 className="text-xl font-black text-white uppercase italic mb-6">Hızlı İşlemler</h4>
              <div className="flex flex-wrap gap-4">
                 <button className="px-8 py-4 bg-red-600 font-black rounded-2xl text-xs uppercase hover:bg-red-700 transition-all">Sistemi Yeniden Başlat</button>
                 <button className="px-8 py-4 bg-blue-600 font-black rounded-2xl text-xs uppercase hover:bg-blue-700 transition-all">Bakım Modunu Aç</button>
                 <button className="px-8 py-4 bg-yellow-600 font-black rounded-2xl text-xs uppercase hover:bg-yellow-700 transition-all">Rütbe Dağıtımı</button>
              </div>
           </div>
        </div>
      );
    }

    switch (activeTab) {
      case 'market':
        return (
          <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in duration-500">
            <h2 className="text-4xl font-black italic uppercase text-white tracking-tighter text-left border-l-4 border-blue-600 pl-6">TOWNY MAĞAZA</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { n: "Sponsor VIP", p: "₺150", i: "👑" },
                { n: "Kasa Anahtarı", p: "₺25", i: "🔑" },
                { n: "Kasaba Claim", p: "₺40", i: "🛡️" }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#0c121d] p-8 rounded-[2.5rem] border border-white/5 hover:border-blue-600/50 transition-all group">
                   <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{item.i}</div>
                   <h3 className="text-xl font-black text-white uppercase italic">{item.n}</h3>
                   <div className="text-2xl font-black text-blue-500 mt-4 mb-6">{item.p}</div>
                   <button className="w-full py-4 bg-white text-black font-black rounded-2xl hover:bg-blue-600 hover:text-white transition-all uppercase text-[10px]">Satın Al</button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'wiki':
        return (
          <div className="max-w-4xl mx-auto space-y-8 text-left animate-in fade-in">
             <h2 className="text-4xl font-black italic uppercase text-white border-l-4 border-blue-600 pl-4">Towny Komutları</h2>
             <div className="grid gap-4">
                {["/t help", "/t new", "/t claim", "/irk sec"].map((c, i) => (
                   <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/5 font-mono text-blue-400">{c}</div>
                ))}
             </div>
          </div>
        );
      default:
        return (
          <div className="space-y-12 animate-in fade-in duration-1000">
             <div className="space-y-4">
                <h1 className="text-8xl md:text-[140px] font-black tracking-tighter italic text-white uppercase leading-none">ZENTERIA</h1>
                <p className="text-blue-500 font-bold tracking-[0.5em] text-[10px] md:text-xs uppercase bg-black/40 backdrop-blur-sm py-2 px-8 rounded-full inline-block italic">Melonya Edition v3</p>
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
    <main className="min-h-screen relative flex flex-col items-center bg-[#050505] overflow-x-hidden">
      <div className="fixed inset-0 -z-10 bg-cover bg-center opacity-20 scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2000')" }}></div>
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black via-transparent to-black"></div>

      <nav className="w-full max-w-5xl mt-8 px-8 py-4 flex items-center justify-between bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] z-40">
        <div className="font-black text-2xl italic text-white uppercase">ZEN<span className="text-blue-600">TERIA</span></div>
        <div className="hidden lg:flex gap-8">
          {['home', 'market', 'wiki'].map((tab) => (
            <button key={tab} onClick={() => {setActiveTab(tab); setIsAdminPanelOpen(false);}} className={`text-[10px] font-black tracking-[0.3em] uppercase transition-all ${activeTab === tab && !isAdminPanelOpen ? 'text-blue-500 border-b-2 border-blue-500 pb-1' : 'text-gray-400 hover:text-white'}`}>{tab === 'home' ? 'ANA SAYFA' : tab}</button>
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

      {/* MELONYA STYLE PROFILE SIDEBAR */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-[#0a0f18] border-l border-white/5 z-50 transition-transform duration-500 transform shadow-2xl ${showProfile ? 'translate-x-0' : 'translate-x-full'}`}>
         <div className="p-8 h-full flex flex-col">
            <button onClick={() => {setShowProfile(false); setShowRankInfo(false);}} className="text-gray-500 hover:text-white mb-8 text-left font-black text-[10px] uppercase">✕ KAPAT</button>
            
            <div className="flex items-center gap-4 mb-10 border-b border-white/5 pb-8 text-left">
               <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-black font-black text-2xl">M</div>
               <div>
                  <p className="text-md font-black text-white italic uppercase leading-tight">{user.username}</p>
                  <p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">{user.rank}</p>
               </div>
            </div>
            
            <div className="space-y-2 text-left flex-1">
               {/* ADMIN BUTONU - SADECE SEN GÖREBİLİRSİN */}
               {isOwner && (
                  <button onClick={() => {setIsAdminPanelOpen(true); setShowProfile(false);}} className="w-full flex items-center gap-4 p-4 rounded-2xl bg-red-600/10 border border-red-500/20 group hover:bg-red-600/20 transition-all">
                     <span className="text-lg">⚙️</span>
                     <p className="text-[11px] font-black text-red-500 uppercase tracking-widest">Yönetim Merkezi</p>
                  </button>
               )}

               <button onClick={() => setShowRankInfo(!showRankInfo)} className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 group transition-all">
                  <span className="text-lg text-yellow-500">👤</span>
                  <p className="text-[11px] font-black text-gray-300 uppercase tracking-widest group-hover:text-white">Profil & Ranklar</p>
               </button>

               {showRankInfo && (
                  <div className="ml-10 space-y-2 animate-in slide-in-from-top-2">
                     {["KURUCU", "DEVELOPER", "ADMIN", "OYUNCU"].map((r, i) => (
                        <div key={i} className="p-3 bg-white/5 rounded-xl border border-white/5 text-[9px] font-black text-gray-500 uppercase">{r}</div>
                     ))}
                  </div>
               )}

               <div className="w-full flex items-center gap-4 p-4 hover:bg-white/5 rounded-2xl text-gray-400">
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
      
      <footer className="w-full py-10 border-t border-white/5 text-center text-gray-700 text-[9px] font-black uppercase italic tracking-[0.5em]">© 2026 ZENTERIA • POWERED BY MELIODAS_ROOT</footer>
    </main>
  );
}