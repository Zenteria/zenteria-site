"use client";

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [showProfile, setShowProfile] = useState(false);
  const [showRankInfo, setShowRankInfo] = useState(false); // Profil tıklandığında rank detayları için
  
  // Üye Verileri
  const [user, setUser] = useState({
    username: "MELIODAS_ROOT",
    rank: "KURUCU", // Rank: 'OYUNCU', 'MODERATÖR', 'ADMIN', 'DEVELOPER', 'KURUCU'
    balance: 1250.75,
    cart: 0
  });

  const [tickets, setTickets] = useState([
    { id: 1, user: "Maceracı_34", msg: "Market ürünüm gelmedi.", status: "Bekliyor" }
  ]);

  // Yetkiler
  const canManageSupport = ['MODERATÖR', 'ADMIN', 'DEVELOPER', 'KURUCU'].includes(user.rank);
  const isHighStaff = ['DEVELOPER', 'KURUCU'].includes(user.rank);

  const renderContent = () => {
    switch (activeTab) {
      case 'market':
        return (
          <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in zoom-in duration-500">
            <div className="text-left border-l-4 border-blue-600 pl-6">
               <h2 className="text-4xl font-black italic uppercase text-white tracking-tighter">Zenteria Mağazası</h2>
               <p className="text-gray-500 text-sm">Sunucumuza destek olarak özel avantajlar elde edin.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { t: "VIP Üyelik", p: "₺100", d: "Özel kitler ve /feed komutu.", color: "from-blue-600" },
                { t: "Efsanevi Kasa", p: "₺35", d: "İçinden Edit eşya çıkma şansı.", color: "from-purple-600" },
                { t: "50.000 Coin", p: "₺50", d: "Hızlıca kasaba kurmak için ideal.", color: "from-yellow-600" }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden group hover:border-blue-500/50 transition-all backdrop-blur-md">
                   <div className={`h-32 bg-gradient-to-br ${item.color} to-black flex items-center justify-center text-4xl group-hover:scale-110 transition-transform`}>💎</div>
                   <div className="p-8 text-center">
                      <h3 className="text-xl font-black italic text-white uppercase mb-2">{item.t}</h3>
                      <p className="text-gray-500 text-xs mb-6">{item.d}</p>
                      <div className="text-2xl font-black text-white mb-6">{item.p}</div>
                      <button className="w-full py-3 bg-white text-black font-black rounded-xl hover:bg-blue-600 hover:text-white transition-all uppercase text-[10px]">Sepete Ekle</button>
                   </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'wiki':
        return (
          <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-500 text-left">
            <h2 className="text-4xl font-black italic uppercase text-white tracking-tighter border-l-4 border-blue-600 pl-4">Rehber & Komutlar</h2>
            <div className="bg-white/5 p-8 rounded-[2rem] border border-white/5">
              <h3 className="text-blue-400 font-bold mb-4 uppercase text-sm italic tracking-widest">Sık Kullanılan Komutlar</h3>
              <div className="grid gap-3">
                {[
                  { c: "/t help", d: "Kasaba sistemini öğrenin." },
                  { c: "/irk sec", d: "Güçlerinizi belirleyin." },
                  { c: "/ah", d: "Global pazarı açın." }
                ].map((x, i) => (
                  <div key={i} className="flex items-center gap-4 bg-black/40 p-4 rounded-xl">
                    <code className="text-blue-500 font-bold"> {x.c} </code>
                    <span className="text-gray-500 text-xs"> - {x.d} </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'destek':
        return (
          <div className="max-w-3xl mx-auto space-y-8 animate-in slide-in-from-bottom-8 duration-500">
            <div className="bg-black/60 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-xl">
              <h2 className="text-3xl font-black mb-6 uppercase italic text-white text-left tracking-tighter">Destek Talebi</h2>
              <textarea placeholder="Sorununuzu detaylıca yazın..." className="w-full p-4 bg-white/5 border border-white/10 rounded-xl outline-none text-white mb-4"></textarea>
              <button className="w-full py-4 bg-blue-600 font-black rounded-xl hover:bg-blue-700 text-white transition-all">GÖNDER</button>
            </div>
            {canManageSupport && (
              <div className="bg-blue-600/5 border border-blue-500/20 p-10 rounded-[2.5rem] backdrop-blur-2xl text-left">
                <h2 className="text-2xl font-black uppercase italic text-blue-400 mb-8">Yetkili Paneli</h2>
                {tickets.map(t => (
                  <div key={t.id} className="p-6 bg-black/80 rounded-3xl border border-white/5 mb-4">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-xs font-black text-white">{t.user} <span className="text-gray-500">({t.status})</span></span>
                        {isHighStaff && <span className="text-[9px] text-yellow-500 font-black uppercase">ROL VERME YETKİSİ AKTİF</span>}
                    </div>
                    <p className="text-sm text-gray-400 mb-4">{t.msg}</p>
                    <div className="flex gap-2">
                       <input type="text" placeholder="Yanıt yaz..." className="flex-1 p-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white outline-none focus:border-blue-500" />
                       <button onClick={() => setTickets(tickets.map(x => x.id === t.id ? {...x, status: 'Yanıtlandı'} : x))} className="px-6 py-2 bg-blue-600 text-[10px] font-black rounded-xl">GÖNDER</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      default:
        return (
          <div className="space-y-16 animate-in fade-in duration-1000">
             <div className="space-y-4">
                <h1 className="text-8xl md:text-[150px] font-black tracking-tighter italic text-white drop-shadow-2xl uppercase leading-none">ZENTERIA</h1>
                <p className="text-blue-400 font-bold tracking-[0.5em] text-[10px] md:text-xs uppercase bg-black/40 backdrop-blur-sm py-2 px-8 rounded-full inline-block">Kadim Irkların Yükselişi</p>
             </div>
             <div className="max-w-xl mx-auto bg-black/40 border border-white/10 p-3 rounded-2xl flex items-center justify-between group hover:border-blue-500/50 transition-all shadow-2xl">
                <div className="px-8 py-3 font-mono font-bold text-white text-sm italic tracking-widest">PLAY.ZENTERIA.COM</div>
                <button onClick={() => {navigator.clipboard.writeText("play.zenteria.com"); alert("IP Kopyalandı!");}} className="bg-white text-black hover:bg-blue-600 hover:text-white px-10 py-4 rounded-xl font-black text-[10px] uppercase transition-all">KOPYALA</button>
             </div>
          </div>
        );
    }
  };

  return (
    <main className="min-h-screen relative flex flex-col items-center bg-[#050505] overflow-x-hidden selection:bg-blue-600 selection:text-white">
      {/* Arka Plan */}
      <div className="fixed inset-0 -z-10 bg-cover bg-center opacity-30 animate-pulse" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2000')" }}></div>
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/80 via-transparent to-black"></div>

      {/* Navigasyon */}
      <nav className="w-full max-w-5xl mt-8 px-8 py-4 flex items-center justify-between bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] z-40">
        <div className="font-black text-2xl italic text-white tracking-tighter uppercase">ZEN<span className="text-blue-600">TERIA</span></div>
        <div className="hidden lg:flex gap-8">
          {['home', 'market', 'wiki', 'destek'].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`text-[10px] font-black tracking-[0.3em] uppercase transition-all ${activeTab === tab ? 'text-blue-500 underline underline-offset-8' : 'text-gray-400 hover:text-white'}`}>{tab === 'home' ? 'ANA SAYFA' : tab}</button>
          ))}
        </div>
        <div onClick={() => setShowProfile(!showProfile)} className="flex items-center gap-3 cursor-pointer group p-1 rounded-full hover:bg-white/5 transition-all">
           <div className="text-right hidden sm:block">
              <p className="text-[11px] font-black text-white italic group-hover:text-blue-400 transition-colors uppercase">{user.username}</p>
              <p className="text-[8px] font-bold text-blue-500 uppercase">{user.rank}</p>
           </div>
           <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-black font-black">M</div>
        </div>
      </nav>

      {/* PROFIL SIDEBAR (Melonya Style) */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-[#0a0f18] border-l border-white/5 z-50 transition-transform duration-500 transform shadow-2xl ${showProfile ? 'translate-x-0' : 'translate-x-full'}`}>
         <div className="p-8 h-full flex flex-col">
            <button onClick={() => {setShowProfile(false); setShowRankInfo(false);}} className="text-gray-500 hover:text-white mb-8 text-left font-black text-[10px] uppercase tracking-widest">✕ KAPAT</button>
            
            <div className="flex items-center gap-4 mb-10 border-b border-white/5 pb-8">
               <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-black font-black text-2xl">M</div>
               <div className="text-left">
                  <p className="text-md font-black text-white italic leading-tight uppercase">{user.username}</p>
                  <p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">{user.rank}</p>
               </div>
            </div>
            
            <div className="space-y-2 text-left flex-1">
               {/* PROFIL BUTONU - TIKLANDIĞINDA RANKLARI GÖSTERİR */}
               <button onClick={() => setShowRankInfo(!showRankInfo)} className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all group ${showRankInfo ? 'bg-blue-600/10 border border-blue-500/20' : 'hover:bg-white/5'}`}>
                  <span className="text-lg text-yellow-500">👤</span>
                  <div className="flex-1">
                    <p className="text-[11px] font-black text-gray-300 uppercase tracking-widest group-hover:text-white">Profil & Rütbe</p>
                    <p className="text-[8px] text-gray-500">Rütbe yetkilerini görmek için tıkla</p>
                  </div>
               </button>

               {showRankInfo && (
                  <div className="ml-12 space-y-2 animate-in slide-in-from-top-2 duration-300">
                     {[
                       { r: 'KURUCU', d: 'Tüm yetkilere sahip sahip.', c: 'text-red-500' },
                       { r: 'DEVELOPER', d: 'Sistem ve rütbe yönetimi.', c: 'text-purple-500' },
                       { r: 'ADMIN', d: 'Sunucu genel düzeni.', c: 'text-blue-500' },
                       { r: 'MODERATÖR', d: 'Destek ve sohbet kontrolü.', c: 'text-green-500' }
                     ].map((rank, rid) => (
                        <div key={rid} className="p-3 bg-white/5 rounded-xl border border-white/5">
                           <p className={`text-[9px] font-black ${rank.c}`}>{rank.r}</p>
                           <p className="text-[8px] text-gray-500">{rank.d}</p>
                        </div>
                     ))}
                  </div>
               )}

               <div className="w-full flex items-center gap-4 p-4 hover:bg-white/5 rounded-2xl transition-all group">
                  <span className="text-lg text-yellow-500">💰</span>
                  <p className="text-[11px] font-black text-gray-300 uppercase tracking-widest">Bakiye: {user.balance} ₺</p>
               </div>
               <div onClick={() => setActiveTab('market')} className="w-full flex items-center gap-4 p-4 hover:bg-white/5 rounded-2xl transition-all group cursor-pointer">
                  <span className="text-lg text-yellow-500">🛒</span>
                  <p className="text-[11px] font-black text-gray-300 uppercase tracking-widest">Sepet ({user.cart})</p>
               </div>
               <button className="w-full flex items-center gap-4 p-4 hover:bg-white/5 rounded-2xl transition-all group mt-auto">
                  <span className="text-lg text-red-500">↪️</span>
                  <p className="text-[11px] font-black text-red-500 uppercase tracking-widest">Çıkış Yap</p>
               </button>
            </div>
         </div>
      </div>

      <div className="w-full max-w-6xl px-6 mt-28 mb-28 relative z-10">{renderContent()}</div>
      
      <footer className="w-full py-10 border-t border-white/5 bg-black/60 text-center text-gray-700 text-[9px] tracking-[0.6em] font-black uppercase italic">© 2026 Zenteria Ağı • Meliodas_Root</footer>
    </main>
  );
}