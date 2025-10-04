import React from 'react';
	
	export default function Home() {
	  return (
	    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
	      <header className="w-full py-6 px-6 flex justify-between items-center">
	        <div className="flex items-center gap-4">
	          <img src="/logo.png" alt="KB SPASI Logo" className="w-14 h-14 object-contain rounded-full shadow-sm" />
	          <div>
	            <div className="text-2xl font-extrabold text-emerald-800">KB SPASI</div>
	            <div className="text-sm text-gray-600">Indahnya Persaudaraan untuk Keluarga</div>
	          </div>
	        </div>
	        <nav className="hidden md:flex items-center gap-6">
	          <a href="#about" className="text-sm hover:underline">Tentang</a>
	          <a href="#kegiatan" className="text-sm hover:underline">Kegiatan</a>
	          <a href="#kontak" className="text-sm hover:underline">Kontak</a>
	        </nav>
	      </header>
	
	      <main className="flex-1 flex items-center justify-center px-6">
	        <section className="max-w-3xl text-center py-12">
	          <img src="/logo.png" alt="KB SPASI" className="mx-auto w-36 h-36 object-contain mb-6" />
	          <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-800">KB SPASI</h1>
	          <p className="mt-4 text-lg text-gray-600">Indahnya Persaudaraan untuk Keluarga</p>
	          <div className="mt-8 flex items-center justify-center gap-4">
	            <a href="#" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-emerald-900 font-semibold px-6 py-3 rounded-lg shadow">Gabung Komunitas</a>
	            <a href="#about" className="inline-block border border-emerald-200 text-emerald-800 px-5 py-3 rounded-lg">Pelajari Lebih</a>
	          </div>
	        </section>
	      </main>
	
	      <footer className="bg-white border-t py-6 px-6">
	        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
	          <div className="text-sm text-gray-600">© {new Date().getFullYear()} KB SPASI — Indahnya Persaudaraan untuk Keluarga</div>
	          <div className="flex items-center gap-4">
	            <img src="/gojek.png" alt="Gojek" className="w-8 h-8 object-contain opacity-90"/>
	            <img src="/grab.png" alt="Grab" className="w-8 h-8 object-contain opacity-90"/>
	            <img src="/maxim.png" alt="Maxim" className="w-8 h-8 object-contain opacity-90"/>
	          </div>
	        </div>
	      </footer>
	    </div>
	  );
	}
	
