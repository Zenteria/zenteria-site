"use client";

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [showProfile, setShowProfile] = useState(false);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  const [isSupportFormOpen, setIsSupportFormOpen] = useState(false);
  
  // Ana Kullanıcı Verisi
  const [user, setUser] = useState({
    username: "MELIODAS_ROOT",
    rank: "KURUCU",
    balance: 15750.00,
    cart: 0
  });

  // Dinamik Veriler
  const [tickets, setTickets] = useState([
    { id: 1, user: "MELIODAS_ROOT", title: "Ödeme Sorunu", msg: "Bakiye yükledim ama gelmedi.", status: "Cevaplandı", reply: "Kontrol edildi, bakiyeniz eklendi.", category: "Ödeme", date: "07.05.2026" }
  ]);

  const [players, setPlayers] = useState([
    { name: "MELIODAS_ROOT", rank: "KURUCU", color: "text-red-500" },
    { name: "Cyber_X", rank: "VIP", color: "text-yellow-500" },
    { name: "Zenterian_1", rank: "OYUNCU", color: "text-gray-400" }
  ]);

  const hasAdminAccess = ['KURUCU', 'DEVELOPER'].includes(user.rank);

  const renderContent = () => {
    // YÖNETİM PANELİ
    if (isAdminPanelOpen && hasAdminAccess) {
      return (
        <div className="max-w-6xl mx-auto space-y-8 animate-in zoom-in duration-500 text-left">
           <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <h2 className="text-4xl font-black italic uppercase text-red-600 tracking-tighter">YÖNETİM MERKEZİ</h2>
              <button onClick={() => setIsAdminPanelOpen(false)} className="px-6 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-[10px] font-black uppercase">Panelden Çık</button>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#0c121d] p-8 rounded-[2.5rem] border border-white/5">
                 <h4 className="text-xl font-black text-white uppercase italic mb-6">Oyuncu & Yetki Yönetimi</h4>
                 <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
                    {players.map((p, i) => (
                       <div key={i} className="flex items-center justify-between p-4 bg-black/40 rounded-2xl border border-white/5">
                          <div>
                             <p className="text-xs font-bold text-white">{p.name}</p>
                             <p className={`text-[9px] font-black uppercase ${p.color}`}>{p.rank}</p>
                          </div>
                          <div className="flex gap-2">
                             <button onClick={() => setPlayers(players.map(x => x.name === p.name ? {...x, rank: 'MOD', color: 'text-blue-400'} : x))} className="p-2 bg-blue-600 rounded-lg text-[8px] font-black uppercase">YETKİ VER</button>
                             <button onClick={() => setPlayers(players.map(x => x.name === p.name ? {...x, rank: 'OYUNCU', color: 'text-gray-400'} : x))} className="p-2 bg-red-600/20 text-red-500 rounded-lg text-[8px] font-black uppercase">AL</button>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
              <div className="bg-[#0c121d] p-8 rounded-[2.5rem] border border-white/5 text-white">
                 <h4 className="text-xl font-black text-white uppercase italic mb-6">Bekleyen Talepler</h4>
                 {tickets.filter(t => t.status === "Bekliyor").map(t => (
                    <div key={t.id} className="p-4 bg-white/5 rounded-xl border border-white/10 mb-4">
                       <p className="text-[10px] text-blue-400 font-black">{t.user} - {t.title}</p>
                       <p className="text-xs text-gray-400 my-2">"{t.msg}"</p>
                       <button onClick={() => setTickets(tickets.map(x => x.id === t.id ? {...x, status: 'Cevaplandı', reply: 'Sorununuz çözüldü.'} : x))} className="w-full py-2 bg-green-600 rounded-lg text-[9px] font-black uppercase">Hızlı Cevapla</button>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      );
    }

    switch (activeTab) {
      case 'market':
        return (
          <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in text-left">
            <h2 className="text-4xl font-black italic uppercase text-white tracking-tighter border-l-4 border-blue-600 pl-6">ZENTERIA SHOP</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
               {[{n: "Sponsor VIP", p: "₺150", i: "👑"}, {n: "Kasaba Kalkanı", p: "₺60", i: "🛡️"}, {n: "Edit Balta", p: "₺80", i: "🪓"}, {n: "Mistik Kasa", p: "₺35", i: "📦"}].map((item, idx) => (
                  <div key={idx} className="bg-[#0c121d] p-6 rounded-[2.5rem] border border-white/5 group hover:border-blue-600/40 transition-all">
                     <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.i}</div>
                     <h3 className="text-lg font-black text-white uppercase italic">{item.n}</h3>
                     <p className="text-blue-500 font-black text-2xl mt-2 mb-6">{item.p}</p>
                     <button className="w-full py-3 bg-white text-black font-black rounded-xl uppercase text-[10px] hover:bg-blue-600 hover:text-white transition-all">SEPETE EKLE</button>
                  </div>
               ))}
            </div>
          </div>
        );

      case 'destek':
        return (
          <div className="max-w-5xl mx-auto space-y-6 animate-in fade-in">
            <div className="bg-[#0a1931] border border-blue-500/30 rounded-xl p-6 flex items-start gap-4 text-left">
               <div className="bg-yellow-400 text-black p-2 rounded-lg font-black text-xl italic">i</div>
               <div>
                  <h3 className="text-white font-bold text-lg uppercase italic">Destek Oluşturmadan Önce</h3>
                  <p className="text-blue-200/70 text-xs mt-1">Lütfen sadece ciddi sorunlar için talep oluşturun. Yanıt süresi 12-24 saattir.</p>
               </div>
            </div>
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden min-h-[500px]">
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h2 className="text-[#333] text-xl font-black uppercase italic">Destek Paneli</h2>
                {!isSupportFormOpen && (
                  <button onClick={() => setIsSupportFormOpen(true)} className="bg-blue-600 text-white px-6 py-2.5 rounded-lg text-[11px] font-black uppercase">⊕ Destek Aç</button>
                )}
              </div>
              <div className="p-12 text-center">
                {isSupportFormOpen ? (
                  <div className="max-w-3xl mx-auto text-left space-y-4 animate-in slide-in-from-top-4">
                    <input id="t-title" type="text" placeholder="Başlık..." className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-black" />
                    <select id="t-cat" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-black">
                       <option>Genel</option><option>Market</option><option>Hata</option>
                    </select>
                    <textarea id="t-msg" placeholder="Mesajınız..." className="w-full p-4 h-32 bg-gray-50 border border-gray-200 rounded-lg text-sm text-black"></textarea>
                    <div className="flex justify-end gap-3">
                       <button onClick={() => setIsSupportFormOpen(false)} className="px-6 py-2 bg-gray-100 text-gray-500 rounded-lg font-bold">İPTAL</button>
                       <button onClick={() => {
                          const title = (document.getElementById('t-title') as HTMLInputElement).value;
                          const msg = (document.getElementById('t-msg') as HTMLTextAreaElement).value;
                          if(title && msg) {
                             setTickets([{id: Date.now(), user: user.username, title, msg, status: "Bekliyor", reply: null, category: "Genel", date: "07.05.2026"}, ...tickets]);
                             setIsSupportFormOpen(false);
                             setActiveTab('desteklerim');
                          }
                       }} className="px-8 py-2 bg-blue-600 text-white rounded-lg font-black uppercase">GÖNDER</button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <img src="https://cdn-icons-png.flaticon.com/512/7486/7486744.png" className="w-32 mx-auto opacity-20" alt="" />
                    <h3 className="text-[#333] text-xl font-black">Aktif Talebiniz Yok</h3>
                    <p className="text-gray-400 text-sm">Sorun yaşıyorsanız destek butonuna tıklayın.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      case 'desteklerim':
        return (
          <div className="max-w-4xl mx-auto space-y-6 animate-in slide-in-from-bottom-8 text-left">
             <h2 className="text-4xl font-black italic uppercase text-white border-l-4 border-blue-600 pl-6">DESTEK GEÇMİŞİM</h2>
             <div className="grid gap-4">
                {tickets.filter(t => t.user === user.username).map(t => (
                   <div key={t.id} className="bg-[#0c121d] p-6 rounded-[2rem] border border-white/5">
                      <div className="flex justify-between mb-4">
                         <span className={`text-[10px] font-black px-4 py-1 rounded-full uppercase ${t.status === 'Cevaplandı' ? 'bg-green-600 text-white' : 'bg-yellow-600 text-white'}`}>{t.status}</span>
                         <span className="text-gray-500 text-[10px]">{t.date}</span>
                      </div>
                      <h4 className="text-white font-bold mb-2 tracking-tight">{t.title}</h4>
                      <div className="bg-black/30 p-4 rounded-xl text-gray-400 text-sm mb-4 italic">"{t.msg}"</div>
                      {t.reply && (
                         <div className="bg-blue-600/10 border-l-2 border-blue-500 p-4 rounded-r-xl ml-4">
                            <p className="text-[10px] text-blue-400 font-black uppercase mb-1">YETKİLİ CEVABI:</p>
                            <p className="text-white text-sm italic">{t.reply}</p>
                         </div>
                      )}
                   </div>
                ))}
             </div>
          </div>
        );

      case 'wiki':
        return (
          <div className="max-w-4xl mx-auto space-y-8 text-left animate-in fade-in">
             <h2 className="text-4xl font-black italic uppercase text-white border-l-4 border-blue-600 pl-6 tracking-tighter">WIKI & REHBER</h2>
             <div className="grid gap-4">
                {["/t new - Kasaba kurar", "/t claim - Arazi alır", "/t deposit - Bankaya para yatırır", "/irk sec - Irkınızı belirler"].map((c, i) => (
                   <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10 font-mono text-blue-400 text-sm">{c}</div>
                ))}
             </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-20 animate-in fade-in duration-1000">
             <h1 className="text-8xl md:text-[150px] font-black italic text-white mb-4 tracking-tighter leading-none">ZENTERIA</h1>
             <p className="text-blue-500 font-bold tracking-[0.5em] uppercase text-xs">Melonya Edition v4</p>
          </div>
        );
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-blue-600 pb-20 overflow-x-hidden">
      <nav className="w-full max-w-6xl mx-auto p-8 flex items-center justify-between">
         <div className="text-3xl font-black italic tracking-tighter">ZEN<span className="text-blue-600">TERIA</span></div>
         <div className="hidden lg:flex gap-8">
            {['home', 'market', 'destek', 'desteklerim', 'wiki'].map(t => (
              <button key={t} onClick={() => {setActiveTab(t); setIsAdminPanelOpen(false);}} className={`text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === t && !isAdminPanelOpen ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500 hover:text-white'}`}>
                {t === 'home' ? 'ANA SAYFA' : t === 'desteklerim' ? 'DESTEKLERİM' : t}
              </button>
            ))}
         </div>
         <div onClick={() => setShowProfile(!showProfile)} className="flex items-center gap-3 cursor-pointer">
            <div className="text-right hidden sm:block">
               <p className="text-[11px] font-black uppercase italic">{user.username}</p>
               <p className="text-[8px] font-bold text-blue-500 uppercase tracking-widest">{user.rank}</p>
            </div>
            <div className="w-10 h-10 bg-white rounded-xl text-black flex items-center justify-center font-black">M</div>
         </div>
      </nav>

      {/* PROFİL SIDEBAR */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-[#0a0f18] border-l border-white/5 z-50 transition-transform duration-500 transform ${showProfile ? 'translate-x-0' : 'translate-x-full'}`}>
         <div className="p-10 h-full flex flex-col text-left">
            <button onClick={() => setShowProfile(false)} className="text-gray-500 font-black text-[10px] mb-8">✕ KAPAT</button>
            <div className="flex items-center gap-4 border-b border-white/5 pb-8 mb-8">
               <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-black font-black text-2xl">M</div>
               <div>
                  <p className="text-md font-black italic leading-tight uppercase">{user.username}</p>
                  <p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">{user.rank}</p>
               </div>
            </div>
            <div className="space-y-4">
               {hasAdminAccess && (
                  <button onClick={() => {setIsAdminPanelOpen(true); setShowProfile(false);}} className="w-full p-4 rounded-2xl bg-red-600/10 border border-red-500/20 text-red-500 font-black text-[10px] uppercase">Yönetim Merkezi</button>
               )}
               <div className="p-4 bg-white/5 rounded-2xl text-[10px] font-black uppercase text-gray-400 italic tracking-widest">Bakiye: {user.balance} ₺</div>
               <button className="w-full p-4 mt-auto text-red-500 font-black text-[10px] uppercase">Çıkış Yap</button>
            </div>
         </div>
      </div>

      <div className="mt-12 px-6">{renderContent()}</div>
      <footer className="w-full py-10 text-center text-gray-800 text-[9px] font-black uppercase italic tracking-[0.5em]">© 2026 ZENTERIA • POWERED BY MELIODAS_ROOT</footer>
    </main>
  );
}