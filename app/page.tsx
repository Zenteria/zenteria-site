"use client";

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [showProfile, setShowProfile] = useState(false);
  
  // ÜYE BİLGİLERİ (Örnek Data)
  const [user, setUser] = useState({
    username: "MELIODAS_ROOT",
    rank: "KURUCU", // 'OYUNCU', 'MODERATÖR', 'ADMIN', 'DEVELOPER', 'KURUCU'
    balance: 1250.50,
    cartItems: 3
  });

  const [tickets, setTickets] = useState([
    { id: 1, user: "Maceracı_34", msg: "Irk yeteneğim çalışmıyor.", status: "Bekliyor" },
  ]);

  // YETKİ KONTROLLERİ
  const canManageSupport = ['MODERATÖR', 'ADMIN', 'DEVELOPER', 'KURUCU'].includes(user.rank);
  const canAssignRanks = ['DEVELOPER', 'KURUCU'].includes(user.rank); // Sadece bu iki rol verebilir

  const renderContent = () => {
    switch (activeTab) {
      case 'destek':
        return (
          <div className="max-w-3xl mx-auto space-y-8 animate-in zoom-in duration-500">
            {/* Destek Formu */}
            <div className="bg-black/60 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-xl">
              <h2 className="text-3xl font-black mb-6 uppercase italic text-white text-left tracking-tighter">Talep Oluştur</h2>
              <textarea placeholder="Sorununuzu yazın..." className="w-full p-4 bg-white/5 border border-white/10 rounded-xl outline-none text-white mb-4"></textarea>
              <button className="w-full py-4 bg-blue-600 font-black rounded-xl hover:bg-blue-700 text-white transition-all shadow-lg shadow-blue-600/20">TALEP GÖNDER</button>
            </div>
            {/* Yetkili Paneli */}
            {canManageSupport && (
              <div className="bg-blue-600/5 border border-blue-500/20 p-10 rounded-[2.5rem] backdrop-blur-2xl text-left">
                <h2 className="text-2xl font-black uppercase italic text-blue-400 mb-8 tracking-tight">Yönetim Paneli</h2>
                {tickets.map(t => (
                  <div key={t.id} className="p-6 bg-black/80 rounded-3xl border border-white/5 relative mb-4">
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-black text-white">{t.user} <span className="text-gray-500 font-normal ml-1">({t.status})</span></span>
                        {canAssignRanks && <span className="text-[9px] text-yellow-500 font-black uppercase tracking-tighter shadow-sm">RÜTBE DÜZENLEME AÇIK</span>}
                    </div>
                    <p className="text-sm text-gray-400 my-4">{t.msg}</p>
                    <div className="flex gap-2">
                       <input type="text" placeholder="Cevap yaz..." className="flex-1 p-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white outline-none focus:border-blue-500" />
                       <button onClick={() => setTickets(tickets.map(x => x.id === t.id ? {...x, status: 'Yanıtlandı'} : x))} className="px-6 py-2 bg-blue-600 text-[10px] font-black rounded-xl hover:bg-blue-500 transition-all">CEVAPLA</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      case 'wiki':
        return (
          <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in duration-500 text-left">
            <h1 className="text-5xl font-black uppercase italic text-white tracking-tighter border-l-4 border-blue-600 pl-4">Zenteria wikipedia</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="space-y-4">
                  <h3 className="text-xl font-black text-blue-400 uppercase italic">Ana Komutlar</h3>
                  {[
                    { c: "/t help", d: "Towny komut rehberini açar." },
                    { c: "/irk sec", d: "Sunucuya ilk girişte ırk belirler." },
                    { c: "/ah", d: "Oyuncu pazarını açar." },
                    { c: "/rankup", d: "Oyun içi para ile rütbe atlar." }
                  ].map((x, i) => (
                    <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5 flex gap-4 items-center">
                       <code className="text-blue-300 font-mono text-sm bg-black px-3 py-1 rounded-md">{x.c}</code>
                       <span className="text-gray-400 text-xs">{x.d}</span>
                    </div>
                  ))}
               </div>
               <div className="space-y-4">
                  <h3 className="text-xl font-black text-blue-400 uppercase italic">Irk Güçleri</h3>
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                     <p className="text-sm text-gray-400 leading-relaxed">Zenteria'da 4 ana ırk bulunur: <strong className="text-white">İnsan, Elf, Ork, Şeytan</strong>. <br /><br />
                     Komut: <code className="text-yellow-400 font-mono text-sm">/irk yetenek</code> yazarak ırkına ait pasif ve aktif güçleri görebilirsin. Yetenekler genellikle 'G' tuşu veya sağ tık ile aktif olur.</p>
                  </div>
               </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="space-y-24 animate-in fade-in duration-1000">
            <div className="space-y-8">
                <h1 className="text-8xl md:text-[140px] font-black tracking-tighter italic text-white drop-shadow-2xl uppercase leading-[0.8]">ZENTERIA</h1>
                <p className="text-blue-400 font-bold tracking-[0.5em] text-xs md:text-sm uppercase bg-black/40 backdrop-blur-sm py-2 rounded-full inline-block px-8 italic shadow-xl">Kadim Irkların Yükselişi</p>
                <div className="max-w-xl mx-auto bg-black/40 border border-white/10 p-3 rounded-2xl flex items-center justify-between group hover:border-blue-500/50 transition-all shadow-2xl">
                    <div className="px-8 py-3 font-mono font-bold text-white text-sm italic tracking-widest">PLAY.ZENTERIA.COM</div>
                    <button onClick={() => {navigator.clipboard.writeText("play.zenteria.com"); alert("Kopyalandı!");}} className="bg-white text-black hover:bg-blue-600 hover:text-white px-10 py-4 rounded-xl font-black text-[10px] uppercase transition-all">KOPYALA</button>
                </div>
            </div>
            {/* ... Ana sayfa kartları buraya gelecek ... */}
          </div>
        );
    }
  };

  return (
    <main className="min-h-screen relative flex flex-col items-center bg-[#050505] overflow-x-hidden selection:bg-blue-600 selection:text-white">
      {/* ARKA PLAN */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center transition-opacity duration-1000 opacity-40 scale-105" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2000')" }}
      ></div>
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/80 via-transparent to-black"></div>

      {/* Navigasyon */}
      <nav className="w-full max-w-5xl mt-8 px-8 py-4 flex items-center justify-between bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] z-40">
        <div className="font-black text-2xl italic text-white tracking-tighter uppercase">ZEN<span className="text-blue-600">TERIA</span></div>
        <div className="hidden lg:flex gap-8">
          {['home', 'market', 'wiki', 'destek'].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`text-[10px] font-black tracking-[0.3em] uppercase transition-all ${activeTab === tab ? 'text-blue-500 underline underline-offset-8' : 'text-gray-400 hover:text-white'}`}>{tab === 'home' ? 'ANA SAYFA' : tab}</button>
          ))}
        </div>
        
        {/* PROFIL TETIKLEYICI - GÖRSEL TABANLI */}
        <div onClick={() => setShowProfile(!showProfile)} className="flex items-center gap-3 cursor-pointer group p-1.5 rounded-full hover:bg-white/5 transition-all">
           <div className="text-right hidden sm:block">
              <p className="text-[11px] font-black text-white italic group-hover:text-blue-400 transition-colors uppercase">{user.username}</p>
              <p className="text-[8px] font-bold text-blue-500 uppercase tracking-widest">{user.rank}</p>
           </div>
           <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-black font-black hover:scale-110 transition-transform">M</div>
        </div>
      </nav>

      {/* PROFIL YAN MENÜ (SIDEBAR) - GÖRSEL STILI */}
      <div className={`fixed top-0 right-0 h-full w-72 bg-[#0a0f18] border-l border-white/5 z-50 transition-transform duration-500 transform shadow-2xl ${showProfile ? 'translate-x-0' : 'translate-x-full'}`}>
         <div className="p-8 relative">
            <button onClick={() => setShowProfile(false)} className="text-gray-500 hover:text-white mb-8 font-black text-[10px] uppercase tracking-widest active:scale-95 transition-all">✕ KAPAT</button>
            <div className="flex items-center gap-4 mb-10 text-left border-b border-white/5 pb-8">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-black text-xl">M</div>
               <div>
                  <p className="text-sm font-black text-white">{user.username}</p>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{user.rank}</p>
               </div>
            </div>
            
            {/* ÜYE PANELI VE BAKİYE/SEPET GÖRSEL TABANLI */}
            <div className="space-y-1 text-left">
               {[
                 { n: 'Profilim', i: '👤', c: 'text-yellow-500' },
                 { n: `Bakiye: ${user.balance.toFixed(2)} ₺`, i: '💰', c: 'text-yellow-500' },
                 { n: `Sepet (${user.cartItems})`, i: '🛒', c: 'text-yellow-500' },
                 { n: 'Yetkili Başvuru', i: '📋', c: 'text-yellow-500' },
                 { n: 'Hediye Al', i: '🎁', c: 'text-yellow-500' },
                 { n: 'Çıkış Yap', i: '↪️', c: 'text-red-500' }
               ].map((item, idx) => (
                 <button key={idx} className="w-full flex items-center gap-4 p-4 hover:bg-white/5 rounded-2xl transition-all group active:scale-98">
                    <span className={`text-lg ${item.c}`}>{item.i}</span>
                    <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest group-hover:text-white transition-colors">{item.n}</span>
                 </button>
               ))}
            </div>
         </div>
      </div>

      <div className="w-full max-w-6xl px-6 mt-28 mb-28 relative z-10">{renderContent()}</div>
      
      <footer className="w-full py-10 border-t border-white/5 bg-black/60 text-center text-gray-700 text-[9px] tracking-[0.6em] font-black uppercase italic">© 2026 Zenteria Ağ Sistemi • Meliodas_Root tarafından geliştirildi</footer>
    </main>
  );
