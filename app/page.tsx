"use client";

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  // Rütbe Hiyerarşisi: 'OYUNCU', 'MODERATÖR', 'ADMIN', 'DEVELOPER', 'KURUCU'
  const [userRank, setUserRank] = useState('KURUCU'); 
  
  // Destek Talepleri ve Mesajlaşma State'i
  const [tickets, setTickets] = useState([
    { id: 1, user: "Maceracı_34", msg: "Market ürünüm gelmedi.", status: "Bekliyor", reply: "" },
    { id: 2, user: "CraftMaster", msg: "Lobi bugu buldum.", status: "İnceleniyor", reply: "" }
  ]);

  // Yetki Kontrolleri
  const canManageSupport = ['MODERATÖR', 'ADMIN', 'DEVELOPER', 'KURUCU'].includes(userRank);
  const canAssignRanks = ['DEVELOPER', 'KURUCU'].includes(userRank); // Sadece Dev ve Kurucu rol verebilir

  const handleReply = (id: number, message: string) => {
    setTickets(tickets.map(t => t.id === id ? { ...t, reply: message, status: "Yanıtlandı" } : t));
    alert("Yanıt başarıyla gönderildi!");
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'destek':
        return (
          <div className="max-w-3xl mx-auto space-y-8 animate-in zoom-in duration-500">
            {/* Oyuncu Formu */}
            <div className="bg-black/60 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-xl shadow-2xl">
              <h2 className="text-3xl font-black mb-6 uppercase italic text-white tracking-tighter">Destek Merkezi</h2>
              <textarea rows={4} placeholder="Sorununu detaylıca yaz..." className="w-full p-4 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-blue-600 text-white mb-4"></textarea>
              <button className="w-full py-4 bg-blue-600 font-black rounded-xl hover:bg-blue-700 text-white transition-all shadow-lg shadow-blue-600/20">GÖNDER</button>
            </div>

            {/* YETKİLİ PANELİ */}
            {canManageSupport && (
              <div className="bg-blue-600/5 border border-blue-500/20 p-10 rounded-[2.5rem] backdrop-blur-2xl">
                <h2 className="text-2xl font-black uppercase italic text-blue-400 mb-8 text-left">Yönetim Paneli</h2>
                <div className="space-y-6">
                  {tickets.map(t => (
                    <div key={t.id} className="p-6 bg-black/60 rounded-2xl border border-white/5 text-left">
                      <div className="flex justify-between mb-3">
                        <span className="text-xs font-black text-white">{t.user} <span className="text-gray-500 font-normal ml-2">({t.status})</span></span>
                        {canAssignRanks && <span className="text-[9px] text-yellow-500 font-black uppercase">Rol Verme Yetkisi Aktif</span>}
                      </div>
                      <p className="text-sm text-gray-400 mb-4">{t.msg}</p>
                      
                      {/* Yanıt Yazma Alanı */}
                      <div className="flex gap-2">
                        <input 
                          id={`reply-${t.id}`}
                          type="text" 
                          placeholder="Cevabınızı yazın..." 
                          className="flex-1 p-3 bg-white/5 border border-white/10 rounded-lg text-xs outline-none focus:border-blue-500"
                        />
                        <button 
                          onClick={() => {
                            const val = (document.getElementById(`reply-${t.id}`) as HTMLInputElement).value;
                            if(val) handleReply(t.id, val);
                          }}
                          className="px-6 py-2 bg-blue-600 text-[10px] font-black rounded-lg hover:bg-blue-500 transition-all"
                        >
                          CEVAPLA
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      case 'market':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-500">
             {[
              { t: "VIP+", p: "₺150", d: "Özel komutlar ve rütbe." },
              { t: "SPAWNER", p: "₺50", d: "Efsanevi yaratık doğurucu." },
              { t: "PARA", p: "₺20", d: "10.000 Oyun içi bakiye." }
            ].map((i, k) => (
              <div key={k} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all text-center group backdrop-blur-md">
                <h3 className="font-bold text-xl text-white italic mb-4">{i.t}</h3>
                <div className="text-blue-400 font-black text-3xl mb-6">{i.p}</div>
                <button className="w-full py-4 bg-white text-black hover:bg-blue-600 hover:text-white rounded-xl font-black text-xs transition-all uppercase">SATIN AL</button>
              </div>
            ))}
          </div>
        );

      default:
        return (
          <div className="space-y-16 animate-in fade-in duration-1000">
            <h1 className="text-7xl md:text-[120px] font-black tracking-tighter italic text-white drop-shadow-2xl uppercase">ZENTERIA</h1>
            <div className="max-w-xl mx-auto bg-black/40 border border-white/10 p-3 rounded-2xl flex items-center justify-between group hover:border-blue-500/50 transition-all">
                <div className="px-8 py-3 font-mono font-bold text-white text-sm">PLAY.ZENTERIA.COM</div>
                <button onClick={() => alert("Kopyalandı!")} className="bg-white text-black hover:bg-blue-600 hover:text-white px-10 py-4 rounded-xl font-black text-[10px] transition-all">KOPYALA</button>
            </div>
          </div>
        );
    }
  };

  return (
    <main className="min-h-screen relative flex flex-col items-center bg-black">
      <div className="fixed inset-0 -z-10 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2000')" }}></div>
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/60 via-transparent to-black"></div>

      <nav className="w-full max-w-5xl mt-8 px-8 py-5 flex items-center justify-between bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl z-50">
        <div className="font-black text-2xl tracking-tighter italic text-white">ZENTERIA</div>
        <div className="hidden lg:flex gap-10">
          {['home', 'market', 'destek'].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`text-[10px] font-black tracking-[0.3em] transition-all uppercase ${activeTab === tab ? 'text-blue-500' : 'text-gray-400 hover:text-white'}`}>{tab === 'home' ? 'ANA SAYFA' : tab}</button>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
           <div className="flex flex-col items-end">
              <span className="text-[11px] font-black text-white italic tracking-tighter">MELIODAS_ROOT</span>
              <span className={`text-[8px] font-bold px-2 py-0.5 rounded-md text-white border ${userRank === 'KURUCU' ? 'bg-red-600 border-red-400' : userRank === 'DEVELOPER' ? 'bg-purple-600 border-purple-400' : 'bg-blue-600 border-blue-400'}`}>
                {userRank}
              </span>
           </div>
           {canAssignRanks && <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping" title="Yetki Düzenleme Açık"></div>}
           <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-black font-black text-sm">M</div>
        </div>
      </nav>

      <div className="w-full max-w-6xl px-6 mt-28 mb-28 relative z-10">{renderContent()}</div>
      <footer className="w-full py-10 border-t border-white/5 bg-black/60 text-center text-gray-700 text-[9px] tracking-[0.6em] font-black uppercase">© 2026 Zenteria Ağ Sistemi • Meliodas_Root</footer>
    </main>
  );
}