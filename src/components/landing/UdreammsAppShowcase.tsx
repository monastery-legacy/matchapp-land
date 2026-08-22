"use client";

import { sendMetaEvent } from "@/lib/meta-events";

export default function UdreammsAppShowcase() {
    return (
        <section className="py-16 md:py-24 lg:py-28 bg-black text-white overflow-hidden font-sans">
            <div className="container px-6 md:px-12 mx-auto">
                <div className="flex flex-col items-center text-center group">
                    <p className="text-white font-medium mb-6 tracking-tight uppercase text-sm md:text-base">
                        Conecta con personas afines desde cualquier lugar
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 mb-8">
                        <h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-white leading-none">
                            Descarga
                        </h2>
                        <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-500 overflow-hidden shrink-0">
                            <img
                                src="/icons/new-icon-udreamms.png"
                                alt="Match App Logo"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-white leading-none">
                            Match App
                        </h2>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-10 leading-none">
                        para encontrar pareja
                    </h2>

                    <p className="text-lg md:text-xl text-white/60 font-medium mb-12 max-w-2xl tracking-tight">
                        Utilizada por miles de personas que buscan conexiones auténticas, honestas y duraderas
                    </p>

                    {/* App Download Badges Image */}
                    <div className="relative group cursor-pointer">
                        <a
                            href="https://chat.whatsapp.com/GVlnQKclJuP63qZjeE0r24"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => sendMetaEvent('Lead', { source: 'MatchAppShowcase: Descargar Apps Image' })}
                            className="block"
                        >
                            <img
                                src="/descarga en apps-remove-bg-io.png"
                                alt="Descarga Match App en App Store y Google Play"
                                className="w-64 sm:w-80 md:w-96 lg:w-[420px] h-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-[0_10px_25px_rgba(255,255,255,0.15)]"
                            />
                        </a>
                        <span className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg border border-white/20 select-none animate-pulse">
                            Próximamente
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
