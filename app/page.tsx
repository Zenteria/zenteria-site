"use client";

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [showProfile, setShowProfile] = useState(false);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  
  // Ana Kullanıcı Verisi
  const [user, setUser] = useState({
    username: "MELIODAS_ROOT",
    rank: "KURUCU", // KURUCU, DEVELOPER, ADMIN, MOD, VIP, OYUNCU
    balance: 12500.00
  });

  // Gelişmiş Destek Verisi (Cevaplar dahil)
  const [tickets, setTickets] = useState([
    { id: 1, user: "MELIODAS_ROOT", msg: "Server lag sorunu?", status: "Cevaplandı", reply: "Optimizasyon çalışması yapıldı, tekrar kontrol et.", date: "07.05.2026" },
    { id: 2, user: "Maceraci_01", msg: "Market bakiye yüklenmedi.", status: "Bekliyor", reply: null, date: "07.05.2026" }
  ]);

  // Oyuncu Listesi (Yönetim Paneli İçin)
  const [players, setPlayers] = useState([
    { name: "MELIODAS_ROOT", rank: "KURUCU", color: "text-red-500" },
    { name: "Cyber_X", rank: "VIP", color: "text-yellow-500" },
    { name: "Player_Alpha", rank: "OYUNCU", color: "text-gray-400" }
  ]);

  // Yetki Kontrolü
  const hasAdminAccess = ['KURUCU', 'DEVELOPER'].includes(user.rank);

  const renderContent = () => {
    // ADMIN PANELİ: GELİŞMİŞ VERSİYON
    if (isAdminPanelOpen && hasAdminAccess) {
      return (
        <div className="max-w-6xl mx-auto space-y-8 animate-in zoom-in duration-500 text-left">
           <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <h2 className="text-4xl font-black italic uppercase text-red-600 tracking-tighter">ZENTERIA COMMAND CENTER</h2>
              <button onClick={() => setIsAdminPanelOpen(false)} className="px-6 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-[10px] font-black uppercase">KAPAT</button>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* RANK VE OYUNCU YÖNETİMİ */}
              <div className="bg-[#0c121d] p-8 rounded-[2.5rem] border border-white/5">
                 <h4 className="text-xl font-black text-white uppercase italic mb-6">Yetki & Rank Dağıtımı</h4>
                 <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
                    {players.map((p, i) => (
                       <div key={i} className="flex items-center justify-between p-4 bg-black/40 rounded-2xl border border-white/5">
                          <div>
                             <p className="text-xs font-bold text-white">{p.name}</p>
                             <p className={`text-[9px] font-black uppercase ${p.color}`}>{p.rank}</p>
                          </div>
                          <div className="flex gap-2">
                             <button onClick={() => setPlayers(players.map(x => x.name === p.name ? {...x, rank: 'ADMIN', color: 'text-blue-500'} : x))} className="p-2 bg-blue-600 rounded-lg text-[8px] font-black uppercase">TERFİ</button>
                             <button onClick={() => setPlayers(players.map(x => x.name === p.name ? {...x, rank: 'OYUNCU', color: 'text-gray-400'} : x))} className="p-2 bg-red-600/20 text-red-500 rounded-lg text-[8px] font-black uppercase">RÜTBE AL</button>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>

              {/* TÜM DESTEK TALEPLERİNE CEVAP VERME */}
              <div className="bg-[#0c121d] p-8 rounded-[2.5rem] border border-white/5">
                 <h4 className="text-xl font-black text-white uppercase italic mb-6">Talep Yönetimi</h4>
                 <div className="space-y-4">
                    {tickets.filter(t => t.status === "Bekliyor").map(t => (
                       <div key={t.id} className="p-4 bg-white/5 rounded-2xl border border-white/10">
                          <p className="text-[10px] font-black text-blue-400 uppercase">{t.user} Yazıyor...</p>
                          <p className="text-xs text-gray-400 my-2">"{t.msg}"</p>
                          <div className="flex gap-2 mt-4">
                             <input type="text" id={`reply-${t.id}`} placeholder="Cevabınız..." className="flex-1 bg-black/50 border border-white/10 p-2 rounded-xl text-[10px] text-white outline-none" />
                             <button onClick={() => {
                                const val = (document.getElementById(`reply-${t.id}`) as HTMLInputElement).value;
                                setTickets(tickets.map(x => x.id === t.id ? {...x, status: 'Cevaplandı', reply: val} : x));
                             }} className="px-4 py-2 bg-green-600 rounded-xl text-[9px] font-black uppercase">CEVAPLA</button>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      );
    }

    switch (activeTab) {
      case 'desteklerim':
        return (
          <div className="max-w-4xl mx-auto space-y-8 animate-in slide-in-from-bottom-8 duration-500 text-left">
             <div className="border-l-4 border-blue-600 pl-6 mb-10">
                <h2 className="text-4xl font-black italic uppercase text-white tracking-tighter">DESTEK GEÇMİŞİM</h2>
                <p className="text-gray-500 text-xs">Açtığınız tüm talepler ve yetkili cevapları.</p>
             </div>
             
             <div className="grid gap-4">
                {tickets.filter(t => t.user === user.username).map(t => (
                   <div key={t.id} className="bg-[#0c121d] p-8 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
                      <div className="flex justify-between items-start mb-6">
                         <div>
                            <span className={`text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${t.status === 'Cevaplandı' ? 'bg-green-600/20 text-green-500' : 'bg-yellow-600/20 text-yellow-500'}`}>{t.status}</span>
                            <p className="text-gray-500 text-[10px] mt-2 italic">{t.date}</p>
                         </div>
                      </div>
                      <div className="space-y-4">
                         <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                            <p className="text-[10px] text-blue-500 font-black uppercase mb-1">Sizin Sorunuz:</p>
                            <p className="text-sm text-white">{t.msg}</p>
                         </div>
                         {t.reply && (
                            <div className="bg-blue-600/10 p-4 rounded-xl border border-blue-500/20 ml-6">
                               <p className="text-[10px] text-red-500 font-black uppercase mb-1">Yetkili Cevabı:</p>
                               <p className="text-sm text-gray-300 italic">"{t.reply}"</p>
                            </div>
                         )}
                      </div>
                   </div>
                ))}
             </div>
          </div>
        );

      case 'destek':
        return (
          <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in text-left">
            <div className="bg-black/60 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-xl">
              <h2 className="text-3xl font-black mb-6 uppercase italic text-white tracking-tighter">YENİ TALEP AÇ</h2>
              <textarea id="main-ticket" placeholder="Sorununuzu buraya yazın..." className="w-full p-6 bg-white/5 border border-white/10 rounded-2xl outline-none text-white mb-6 h-48 focus:border-blue-600 transition-all"></textarea>
              <button onClick={() => {
                const msg = (document.getElementById('main-ticket') as HTMLTextAreaElement).value;
                if(msg) {
                   setTickets([{ id: Date.now(), user: user.username, msg, status: "Bekliyor", reply: null, date: "07.05.2026" }, ...tickets]);
                   setActiveTab('desteklerim');
                }
              }} className="w-full py-5 bg-blue-600 font-black rounded-2xl hover:bg-blue-700 text-white transition-all uppercase tracking-[0.2em]">GÖNDER VE GEÇMİŞE GİT</button>
            </div>
          </div>
        );

      case 'market':
        return (
          <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in text-left">
            <h2 className="text-4xl font-black italic uppercase text-white tracking-tighter border-l-4 border-blue-600 pl-6">MAĞAZA</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {[{n:"SPONSOR VIP", p:"₺150", i:"💎"}, {n:"TOWNY CLAIM", p:"₺50", i:"🛡️"}, {n:"ÖZEL BÜYÜ", p:"₺75", i:"📖"}].map((x, i) => (
                  <div key={i} className="bg-[#0c121d] p-8 rounded-[3rem] border border-white/5 hover:border-blue-600/40 transition-all group">
                     <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{x.i}</div>
                     <h3 className="text-xl font-black text-white uppercase italic">{x.n}</h3>
                     <p className="text-blue-500 font-black text-2xl mt-4 mb-6">{x.p}</p>
                     <button className="w-full py-4 bg-white text-black font-black rounded-xl uppercase text-[10px] hover:bg-blue-600 hover:text-white transition-all">SEPETE EKLE</button>
                  </div>
               ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-12 animate-in fade-in duration-1000">
             <div className="space-y-4">
                <h1 className="text-8xl md:text-[140px] font-black tracking-tighter italic text-white uppercase leading-none">ZENTERIA</h1>
                <p className="text-blue-500 font-bold tracking-[0.5em] text-[10px] md:text-xs uppercase bg-black/40 backdrop-blur-sm py-2 px-8 rounded-full inline-block italic">TOWNY & MANAGEMENT EDITION</p>
             </div>
             <div className="max-w-xl mx-auto bg-black/40 border border-white/10 p-3 rounded-2xl flex items-center justify-between group hover:border-blue-500/50 transition-all shadow-2xl">
                <div className="px-8 py-3 font-mono font-bold text-white text-sm">PLAY.ZENTERIA.COM</div>
                <button onClick={() => alert("IP Kopyalandı!")} className="bg-white text-black hover:bg-blue-600 hover:text-white px-10 py-4 rounded-xl font-black text-[10px] uppercase transition-all">KOPYALA</button>
             </div>
          </div>
        );
    }
  };

  return (
    <main className="min-h-screen relative flex flex-col items-center bg-[#050505] overflow-x-hidden selection:bg-blue-600 selection:text-white">
      <div className="fixed inset-0 -z-10 bg-cover bg-center opacity-20 scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2000')" }}></div>
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black via-transparent to-black"></div>

      <nav className="w-full max-w-6xl mt-8 px-8 py-4 flex items-center justify-between bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] z-40">
        <div className="font-black text-2xl italic text-white uppercase">ZEN<span className="text-blue-600">TERIA</span></div>
        <div className="hidden lg:flex gap-8">
          {['home', 'market', 'destek', 'desteklerim'].map((tab) => (
            <button key={tab} onClick={() => {setActiveTab(tab); setIsAdminPanelOpen(false);}} className={`text-[10px] font-black tracking-[0.2em] uppercase transition-all ${activeTab === tab && !isAdminPanelOpen ? 'text-blue-500 border-b-2 border-blue-500 pb-1' : 'text-gray-400 hover:text-white'}`}>
              {tab === 'home' ? 'ANA SAYFA' : tab === 'desteklerim' ? 'DESTEKLERİM' : tab}
            </button>
          ))}
        </div>
        <div onClick={() => setShowProfile(!showProfile)} className="flex items-center gap-3 cursor-pointer group">
           <div className="text-right hidden sm:block">
              <p className="text-[11px] font-black text-white italic group-hover:text-blue-400 transition-colors uppercase">{user.username}</p>
              <p className="text-[8px] font-bold text-blue-500 uppercase tracking-widest">{user.rank}</p>
           </div>
           <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-black font-black">M</div>
        </div>
      </nav>

      {/* MELONYA STYLE PROFILE SIDEBAR */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-[#0a0f18] border-l border-white/5 z-50 transition-transform duration-500 transform shadow-2xl ${showProfile ? 'translate-x-0' : 'translate-x-full'}`}>
         <div className="p-8 h-full flex flex-col text-left">
            <button onClick={() => setShowProfile(false)} className="text-gray-500 hover:text-white mb-8 font-black text-[10px] uppercase">✕ KAPAT</button>
            <div className="flex items-center gap-4 mb-10 border-b border-white/5 pb-8">
               <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-black font-black text-2xl">M</div>
               <div>
                  <p className="text-md font-black text-white italic uppercase leading-tight">{user.username}</p>
                  <p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">{user.rank}</p>
               </div>
            </div>
            
            <div className="space-y-2 flex-1">
               {hasAdminAccess && (
                  <button onClick={() => {setIsAdminPanelOpen(true); setShowProfile(false);}} className="w-full flex items-center gap-4 p-4 rounded-2xl bg-red-600/10 border border-red-500/20 group hover:bg-red-600/20 transition-all">
                     <span className="text-lg">⚙️</span>
                     <p className="text-[11px] font-black text-red-500 uppercase tracking-widest">Yönetim Merkezi</p>
                  </button>
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
      <footer className="w-full py-10 border-t border-white/5 text-center text-gray-700 text-[9px] font-black uppercase italic tracking-[0.5em]">© 2026 ZENTERIA • DEVELOPED BY MELIODAS_ROOT</footer>
    </main>
  );
}