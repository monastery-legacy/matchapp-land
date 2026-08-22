"use client";

import { motion } from "framer-motion";
import {
  FileCheck,
  Heart,
  MessageSquare,
  Sparkles,
  Target,
  CheckCircle2
} from "lucide-react";

const stages = [
  {
    id: 1,
    tag: "ETAPA 1",
    title: "Creación de Perfil Honesto",
    description: "Crea tu perfil 360° destacando tu verdadera personalidad, gustos e intereses.",
    icon: FileCheck,
    supportText: "¿Cómo Match App te apoya en esta fase?",
    bullets: [
      { text: "Verificación de perfil con foto e identidad." },
      { text: "Test inicial de compatibilidad e intereses." },
      { text: "Definición clara de expectativas de relación." }
    ],
    objective: "construir una carta de presentación auténtica e honesta."
  },
  {
    id: 2,
    tag: "ETAPA 2",
    title: "Algoritmo & Emparejamiento",
    description: "Nuestro sistema busca coincidencia de valores, estilo de vida y pasiones compartidas.",
    icon: Sparkles,
    supportText: "¿Cómo Match App te apoya en esta fase?",
    bullets: [
      { text: "Sugerencias diarias alineadas a tus preferencias." },
      { text: "Filtros por ubicación, cultura e idiomas." },
      { text: "Ver a quién le gustas (disponible en el plan Pro)." }
    ],
    objective: "descubrir perfiles con verdadera afinidad."
  },
  {
    id: 3,
    tag: "ETAPA 3",
    title: "Conversación & Conexión Directa",
    description: "Inicia chats fluidos y seguros sin barreras ni rodeos.",
    icon: MessageSquare,
    supportText: "¿Cómo Match App te apoya en esta fase?",
    bullets: [
      { text: "Mensajería directa e instantánea." },
      { text: "Intercambio cultural y de experiencias." },
      { text: "Consejos de comunicación fluida y respetuosa." }
    ],
    objective: "crear una chispa real y construir confianza mutua."
  },
  {
    id: 4,
    tag: "ETAPA 4",
    title: "La Cita & Encuentro Real",
    description: "Da el paso hacia un encuentro seguro y memorable.",
    icon: Heart,
    supportText: "¿Cómo Match App te apoya en esta fase?",
    bullets: [
      { text: "Consejos de seguridad para la primera cita." },
      { text: "Recomendación de lugares y experiencias." },
      { text: "Comunidad segura enfocada en relaciones duraderas." }
    ],
    objective: "conocer a tu pareja ideal en el mundo real."
  }
];

export default function StageDetails() {
  return (
    <section className="pt-32 bg-white overflow-hidden font-sans" id="fases-viaje">
      <div className="container mx-auto px-6 max-w-[1600px]">

        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-4 text-slate-900">
            ¡El camino hacia <br />
            tu pareja ideal!
          </h2>
          <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl">
            Conoce los pasos sencillos para conectar de forma auténtica, honesta y segura en Match App.
          </p>
        </div>

        {/* CSS Grid for nodes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-32">
            {stages.map((stage) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.id}
                  className="group relative w-full flex flex-col justify-start rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] bg-white/90 backdrop-blur-sm border border-slate-200 transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                >
                  {/* Content Layout */}
                  <div className="relative p-6 w-full flex flex-col h-full z-10">
                    
                    {/* Header line */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="text-[#9b4dca]">
                        <Icon size={24} />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#2d1b4e] to-[#9b4dca]">
                        {stage.tag}
                      </span>
                    </div>
                    
                    {stage.title && (
                      <h4 className="text-lg md:text-xl font-medium tracking-tight leading-snug mb-2 text-slate-900">
                        {stage.title}
                      </h4>
                    )}
                    
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-5">
                      {stage.description}
                    </p>

                    {/* How we help section */}
                    <div className="flex-1 border-t border-slate-100 pt-5">
                      <p className="font-medium text-xs mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#2d1b4e] to-[#9b4dca]">
                        {stage.supportText}
                      </p>
                      
                      <ul className="space-y-3 mb-6">
                        {stage.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                            <span className="text-xs text-slate-600 leading-relaxed">{bullet.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Objective */}
                    <div className="mt-auto flex items-start gap-2 pt-2">
                      <Target className="w-4 h-4 text-[#9b4dca] shrink-0 mt-0.5" />
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        <strong className="text-slate-800 font-medium">Objetivo: </strong> 
                        {stage.objective}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
