"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [showProfile, setShowProfile] = useState(false);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  
  // Ana Kullanıcı State'i
  const [user, setUser] = useState({
    username: "MELIODAS_ROOT",
    rank: "KURUCU", // Bu rütbe değiştikçe yetkiler de değişir
    balance: 8450.00
  });

  // Dinamik Veriler (Simülasyon için State kullanımı)
  const [tickets, setTickets] = useState([
    { id: 1, user: "Maceraci_01", msg: "Towny claim sınırı nedir?", status: "Bekliyor" },
    { id: 2, user: "Cyber_X", msg: "VIP rütbem hesabıma tanımlanmadı.", status: "İnceleniyor" }
  ]);

  const [players, setPlayers] = useState([
    { name: "Maceraci_01", rank: "OYUNCU" },
    { name: "Cyber_X", rank: "VIP" },
    { name: "Meliodas_Root", rank: "KURUCU" }
  ]);

  // Yeni Destek Talebi State'i
  const [newTicketMsg, setNewTicketMsg] = useState("");

  // Yetki Kontrolleri
  const hasAdminAccess = ['KURUCU', 'DEVELOPER'].includes(user.rank);
  const isHighStaff = ['KURUCU', 'DEVELOPER', 'ADMIN'].includes(user.rank);

  // Rol Verme / Alma Fonksiyonu
  const updatePlayerRank = (playerName: string, newRank: string) => {
    setPlayers(players.map(p => p.name === playerName ? { ...p, rank: newRank } : p));
    alert(`${playerName} oyuncusunun rütbesi ${newRank} olarak güncellendi!`);
  };

  const renderContent = () => {
    // YÖNETİM PANELİ (Sadece Yetkililere Özel)
    if (isAdminPanelOpen && hasAdminAccess) {
      return (
        <div className="max-w-6xl mx-auto space-y-8 animate-in zoom-in duration-500 text-left">
           <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <h2 className="text-4xl font-black italic uppercase text-red-600 tracking-tighter">YÖNETİM SİSTEMİ</h2>
              <button onClick={() => setIsAdminPanelOpen(false)} className="px-6 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-[10px] font-black uppercase">Çıkış Yap</button>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* ROL VERME / ALMA SİSTEMİ */}
              <div className="bg-[#0c121d] p-8 rounded-[2.5rem] border border-white/5">
                 <h4 className="text-xl font-black text-white uppercase italic mb-6">Oyuncu Yetki Kontrolü</h4>
                 <div className="space-y-4">
                    <div className="max-h-60 overflow-y-auto space-y-2 pr-2">
                       {players.map((p, i) => (
                          <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                             <div>
                                <p className="text-[11px] font-bold text-white">{p.name}</p>
                                <p className="text-[9px] text-blue-500 font-black">{p.rank}</p>
                             </div>
                             <div className="flex gap-2">
                                <button onClick={() => updatePlayerRank(p.name, 'MODERATÖR')} className="px-3 py-1 bg-blue-600 rounded-lg text-[8px] font-black uppercase">MOD YAP</button>
                                <button onClick={() => updatePlayerRank(p.name, 'OYUNCU')} className="px-3 py-1 bg-red-600/20 text-red-500 rounded-lg text-[8px] font-black uppercase">AL</button>
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>

              {/* DESTEK CEVAPLAMA SİSTEMİ (Sadece buradan cevap verilebilir) */}
              <div className="bg-[#0c121d] p-8 rounded-[2.5rem] border border-white/5">
                 <h4 className="text-xl font-black text-white uppercase italic mb-6">Destek Yanıtlama Paneli</h4>
                 <div className="space-y-4">
                    {tickets.map(t => (
                       <div key={t.id} className="p-4 bg-black/40 rounded-2xl border border-white/5">
                          <p className="text-[10px] font-black text-blue-400 mb-2">{t.user} - {t.status}</p>
                          <p className="text-xs text-gray-400 mb-4 italic">"{t.msg}"</p>
                          <div className="flex gap-2">
                             <input type="text" placeholder="Cevap yazın..." className="flex-1 bg-white/5 border border-white/10 p-2 rounded-xl text-[10px] text-white outline-none" />
                             <button onClick={() => setTickets(tickets.filter(x => x.id !== t.id))} className="px-4 py-2 bg-green-600 rounded-xl text-[9px] font-black uppercase">GÖNDER</button>
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
      case 'market':
        return (
          <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in duration-500 text-left">
            <h2 className="text-4xl font-black italic uppercase text-white tracking-tighter border-l-4 border-blue-600 pl-6">ZENTERIA MAĞAZA</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
               {[{n: "Sponsor VIP", i: "👑"}, {n: "Kasaba Kalkanı", i: "🛡️"}, {n: "Edit Kazma", i: "⛏️"}, {n: "Mistik Kasa", i: "📦"}].map((x, idx) => (
                  <div key={idx} className="bg-[#0c121d] p-6 rounded-[2rem] border border-white/5 group hover:border-blue-600/30 transition-all">
                     <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{x.i}</div>
                     <h3 className="text-lg font-black text-white uppercase italic">{x.n}</h3>
                     <button className="w-full mt-6 py-3 bg-white/10 hover:bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase transition-all">İNCELE</button>
                  </div>
               ))}
            </div>
          </div>
        );

      case 'destek':
        return (
          <div className="max-w-3xl mx-auto space-y-8 animate-in slide-in-from-bottom-8 duration-500 text-left">
            <div className="bg-black/60 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-xl">
              <h2 className="text-3xl font-black mb-2 uppercase italic text-white tracking-tighter">Destek Talebi</h2>
              <p className="text-gray-500 text-[10px] mb-8 uppercase tracking-widest">Yetkililerle iletişime geçin</p>
              <textarea 
                value={newTicketMsg}
                onChange={(e) => setNewTicketMsg(e.target.value)}
                placeholder="Lütfen sorununuzu detaylandırın..." 
                className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl outline-none text-white mb-6 h-40 focus:border-blue-500/50 transition-all"
              />
              <button 
                onClick={() => {
                   if(newTicketMsg.trim()) {
                     setTickets([...tickets, { id: Date.now(), user: user.username, msg: newTicketMsg, status: "Bekliyor" }]);
                     setNewTicketMsg("");
                     alert("Talebiniz başarıyla gönderildi!");
                   }
                }}
                className="w-full py-5 bg-blue-600 font-black rounded-2xl hover:bg-blue-700 text-white transition-all uppercase tracking-[0.2em]"
              >
                TALEBİ GÖNDER
              </button>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-12 animate-in fade-in duration-1000">
             <div className="space-y-4">
                <h1 className="text-8xl md:text-[140px] font-black tracking-tighter italic text-white uppercase leading-none">ZENTERIA</h1>
                <p className="text-blue-500 font-bold tracking-[0.5em] text-[10px] md:text-xs uppercase bg-black/40 backdrop-blur-sm py-2 px-8 rounded-full inline-block italic">Yeni Nesil Towny Deneyimi</p>
             </div>
             <div className="max-w-xl mx-auto bg-black/40 border border-white/10 p-3 rounded-2xl flex items-center justify-between group hover:border-blue-500/50 transition-all shadow-2xl">
                <div className="px-8 py-3 font-mono font-bold text-white text-sm italic">PLAY.ZENTERIA.COM</div>
                <button onClick={() => alert("IP Kopyalandı!")} className="bg-white text-black hover:bg-blue-600 hover:text-white px-10 py-4 rounded-xl font-black text-[10px] uppercase transition-all">KOPYALA</button>
             </div>
          </div>
        );
    }
  };

  return (
    <main className="min-h-screen relative flex flex-col items-center bg-[#050505] overflow-x-hidden">
      <div className="fixed inset-0 -z-10 bg-cover bg-center opacity-20 scale-110 animate-pulse" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2000')" }}></div>
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black via-transparent to-black"></div>

      <nav className="w-full max-w-5xl mt-8 px-8 py-4 flex items-center justify-between bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] z-40">
        <div className="font-black text-2xl italic text-white uppercase">ZEN<span className="text-blue-600">TERIA</span></div>
        <div className="hidden lg:flex gap-8">
          {['home', 'market', 'destek'].map((tab) => (
            <button key={tab} onClick={() => {setActiveTab(tab); setIsAdminPanelOpen(false);}} className={`text-[10px] font-black tracking-[0.3em] uppercase transition-all ${activeTab === tab && !isAdminPanelOpen ? 'text-blue-500 border-b-2 border-blue-500 pb-1' : 'text-gray-400 hover:text-white'}`}>{tab === 'home' ? 'ANA SAYFA' : tab}</button>
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

      {/* PROFİL SIDEBAR */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-[#0a0f18] border-l border-white/5 z-50 transition-transform duration-500 transform ${showProfile ? 'translate-x-0' : 'translate-x-full'}`}>
         <div className="p-8 h-full flex flex-col">
            <button onClick={() => setShowProfile(false)} className="text-gray-500 hover:text-white mb-8 text-left font-black text-[10px] uppercase tracking-widest">✕ KAPAT</button>
            
            <div className="flex items-center gap-4 mb-10 border-b border-white/5 pb-8 text-left">
               <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-black font-black text-2xl">M</div>
               <div>
                  <p className="text-md font-black text-white italic uppercase leading-tight">{user.username}</p>
                  <p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">{user.rank}</p>
               </div>
            </div>
            
            <div className="space-y-3 text-left flex-1">
               {/* SADECE KURUCU VE DEVELOPER GÖREBİLİR */}
               {hasAdminAccess && (
                  <button onClick={() => {setIsAdminPanelOpen(true); setShowProfile(false);}} className="w-full flex items-center gap-4 p-4 rounded-2xl bg-red-600/10 border border-red-500/20 group hover:bg-red-600/20 transition-all">
                     <span className="text-lg">⚙️</span>
                     <p className="text-[11px] font-black text-red-500 uppercase tracking-widest">Yönetim Paneli</p>
                  </button>
               )}

               <div className="w-full flex items-center gap-4 p-4 hover:bg-white/5 rounded-2xl text-gray-400">
                  <span className="text-lg text-yellow-500">💰</span>
                  <p className="text-[11px] font-black uppercase tracking-widest">Bakiye: {user.balance} ₺</p>
               </div>
               
               <button className="w-full flex items-center gap-4 p-4 text-red-500 hover:bg-red-500/5 rounded-2xl mt-auto transition-colors">
                  <span className="text-lg">↪️</span>
                  <p className="text-[11px] font-black uppercase tracking-widest">Çıkış Yap</p>
               </button>
            </div>
         </div>
      </div>

      <div className="w-full max-w-6xl px-6 mt-28 mb-28 relative z-10">{renderContent()}</div>
      <footer className="w-full py-10 border-t border-white/5 text-center text-gray-700 text-[9px] font-black uppercase italic tracking-[0.5em]">© 2026 ZENTERIA • POWERED BY MELIODAS_ROOT</footer>
    </main>
  );
}