"use client";

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [isSupportFormOpen, setIsSupportFormOpen] = useState(false);
  const [tickets, setTickets] = useState([
    // Örnek veri: Gerçekte boş başlar
  ]);

  const renderContent = () => {
    switch (activeTab) {
      case 'destek':
        return (
          <div className="max-w-5xl mx-auto space-y-6 animate-in fade-in duration-500">
            {/* Bilgi Kutusu */}
            <div className="bg-[#0a1931] border border-blue-500/30 rounded-xl p-6 flex items-start gap-4 shadow-lg relative overflow-hidden">
               <div className="bg-yellow-400 text-black p-2 rounded-lg font-black text-xl">i</div>
               <div className="text-left">
                  <h3 className="text-white font-bold text-lg">Destek oluşturmadan önce!</h3>
                  <p className="text-blue-200/70 text-xs mt-1 leading-relaxed">
                     Destek talepleri 12-24 saat içerisinde cevaplanır. Bu süre bazı günlerde istisna olarak uzayabilir. <br/>
                     Ayrıca basit şeyler için talep oluşturmayın lütfen, oyundaki yetkililerimiz bunlar için var.
                  </p>
               </div>
               <button className="ml-auto bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-[10px] font-black uppercase transition-all">Yardım Merkezi</button>
            </div>

            {/* Destek Paneli Ana Alanı */}
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden min-h-[500px]">
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div className="flex items-center gap-2">
                   <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
                   <h2 className="text-[#333] text-xl font-black uppercase tracking-tight">Destek Talepleri</h2>
                </div>
                {!isSupportFormOpen && (
                  <button onClick={() => setIsSupportFormOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-[11px] font-bold flex items-center gap-2 transition-all">
                    <span>⊕</span> DESTEK AÇ
                  </button>
                )}
              </div>

              <div className="p-12 text-center">
                {isSupportFormOpen ? (
                  /* DESTEK AÇ FORMU (Görsel d1f9d1 uyumlu) */
                  <div className="max-w-4xl mx-auto text-left space-y-6 animate-in slide-in-from-top-4">
                    <div>
                      <label className="block text-[#444] font-bold text-sm mb-2">Başlık:</label>
                      <input type="text" placeholder="Başlık girin." className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-blue-500 transition-all text-black" />
                    </div>
                    
                    <div>
                      <label className="block text-[#444] font-bold text-sm mb-2">Kategori:</label>
                      <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none text-black">
                        <option>Kategori seçin.</option>
                        <option>Ödeme Sorunları</option>
                        <option>Hata Bildirimi</option>
                        <option>Oyuncu Şikayeti</option>
                        <option>Diğer</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[#444] font-bold text-sm mb-2">Mesaj:</label>
                      <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="bg-gray-50 p-2 border-b border-gray-200 flex gap-4 text-gray-400 text-xs font-bold">
                          <span>B</span> <i>I</i> <span className="line-through">S</span> <span>🔗</span> <span>📋</span>
                        </div>
                        <textarea placeholder="Yetkili ekibimize iletmek istediğiniz mesajı girin." className="w-full p-4 h-40 outline-none text-sm text-black bg-white"></textarea>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <div className="bg-gray-100 px-4 py-2 rounded flex items-center gap-2 grayscale">
                        <div className="w-4 h-4 rounded-full border-2 border-green-500 animate-spin"></div>
                        <span className="text-[10px] font-bold text-gray-500">CLOUDFLARE</span>
                      </div>
                      <div className="flex gap-3">
                         <button onClick={() => setIsSupportFormOpen(false)} className="px-8 py-3 bg-gray-100 text-gray-500 rounded-lg font-bold text-xs hover:bg-gray-200">İPTAL</button>
                         <button className="px-10 py-3 bg-blue-600 text-white rounded-lg font-black text-xs hover:bg-blue-700 shadow-lg shadow-blue-200">GÖNDER</button>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* BOŞ DURUM (Görsel c1f9f4 uyumlu) */
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="relative">
                       <img src="https://cdn-icons-png.flaticon.com/512/7486/7486744.png" className="w-40 opacity-80" alt="Not Found" />
                    </div>
                    <div className="space-y-2">
                       <h3 className="text-[#333] text-2xl font-black">Destek bulunamadı!</h3>
                       <p className="text-gray-400 text-sm">Destek aç butonuna tıklayarak destek talebi oluşturabilirsiniz.</p>
                    </div>
                    <button onClick={() => setIsSupportFormOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-xs font-black flex items-center gap-2 transition-all transform hover:scale-105">
                       <span>⊕</span> DESTEK AÇ
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="text-center py-20 animate-in fade-in duration-1000">
             <h1 className="text-8xl font-black italic text-white mb-4 tracking-tighter">ZENTERIA</h1>
             <p className="text-blue-500 font-bold tracking-[0.4em] uppercase text-xs italic">Kadim Irkların Yükselişi</p>
          </div>
        );
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-600 selection:text-white pb-20">
      {/* Navbar */}
      <nav className="w-full max-w-6xl mx-auto p-8 flex items-center justify-between">
         <div className="text-3xl font-black italic">ZEN<span className="text-blue-600">TERIA</span></div>
         <div className="flex gap-10">
            {['home', 'market', 'destek'].map(t => (
              <button key={t} onClick={() => setActiveTab(t)} className={`text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === t ? 'text-blue-500 border-b-2 border-blue-500 pb-1' : 'text-gray-500 hover:text-white'}`}>{t === 'home' ? 'ANA SAYFA' : t}</button>
            ))}
         </div>
      </nav>

      <div className="mt-12">{renderContent()}</div>
    </main>
  );
}