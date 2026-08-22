"use client";

import Link from "next/link";
import { sendMetaEvent } from "@/lib/meta-events";
import {
  Search,
  FileCheck,
  ClipboardCheck,
  MessageSquare,
  MapPin,
  Activity,
  Heart,
  ShieldCheck,
  Users,
  Clock,
  Sparkles,
  Zap,
  CheckCircle2,
} from "lucide-react";

const paths = [
  {
    title: "Match Dating",
    subtitle: "La forma sencilla y auténtica de conocer personas afines a ti.",
    description: "",
    features: [
      { text: "Creación de Perfil Completo 360°", icon: Activity, desc: "Evaluación de compatibilidad inicial." },
      { text: "Algoritmo de Emparejamiento por Afinidades", icon: Sparkles, desc: "Conexiones basadas en intereses reales." },
      { text: "Me Gustas & Conexiones Diarias", icon: Heart, desc: "Interactúa con perfiles afines diariamente." },
      { text: "Chat Directo con tus Matches", icon: MessageSquare, desc: "Mensajería fluida e instantánea." },
      { text: "Filtros Básicos por Ubicación y Edad", icon: MapPin, desc: "Encuentra personas cerca de ti." },
      { text: "Verificación de Perfil de Seguridad", icon: ShieldCheck, desc: "Seguridad y confianza en la comunidad." }
    ],
    href: "/login",
    buttonText: "Encontrar mi Pareja ahora",
    highlighted: false,
    glowColor: "bg-white/20",
    tag: "Plan Inicial",
    tagColor: "bg-gradient-to-r from-[#2d1b4e] to-[#9b4dca]"
  },
  {
    title: "Match Dating Pro",
    subtitle: "La experiencia ilimitada con máxima visibilidad y herramientas avanzadas de citas.",
    description: "",
    features: [
      { text: "Todo lo incluido en Match Dating", icon: CheckCircle2, desc: "Acceso completo al paquete estándar." },
      { text: "Me Gustas e Interacciones Ilimitadas", icon: Zap, desc: "Conecta sin límites diariamente." },
      { text: "Ver a quién le gustas antes de hacer Match", icon: Search, desc: "Ahorra tiempo y conecta al instante." },
      { text: "Filtros Avanzados de Estilo de Vida y Valores", icon: ClipboardCheck, desc: "Busca exactamente lo que deseas." },
      { text: "Boost Semanal de Visibilidad de Perfil", icon: Sparkles, desc: "Multiplica tus oportunidades de match." },
      { text: "Rebobinados Ilimitados para no perder oportunidades", icon: Clock, desc: "Recupera perfiles pasados." },
      { text: "Modo Incógnito & Control de Privacidad Total", icon: ShieldCheck, desc: "Controla quién ve tu perfil." },
      { text: "Soporte & Matchmaking Personalizado", icon: Users, desc: "Acompañamiento experto en tu búsqueda." }
    ],
    href: "/login",
    buttonText: "Encontrar mi Pareja ahora",
    highlighted: true,
    glowColor: "bg-white/20",
    tag: "¡Más Popular!",
    tagColor: "bg-gradient-to-r from-[#2d1b4e] to-[#9b4dca]"
  }
];

export default function ChooseYourPath() {
  return (
    <section id="planes" className="pt-20 md:pt-28 pb-16 md:pb-20 bg-[#050507] relative overflow-hidden font-sans">
      {/* Sutil efecto de cuadrícula de fondo */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      {/* Degradado superior para suavizar la unión con el Hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#050507] -translate-y-full" />

      <div className="container max-w-[1500px] mx-auto px-6 relative z-10">

        {/* Header Centrado Simplificado */}
        <div className="mb-12 md:mb-20 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white leading-tight mb-4">
            Elige tu Plan en Match Dating
          </h2>
          <p className="text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Selecciona la ruta ideal para tu objetivo. Herramientas y funciones exclusivas para conectar de forma auténtica y encontrar a tu pareja ideal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl gap-5 md:gap-6 lg:gap-8 mx-auto">
          {paths.map((path, index) => (
            <div key={index} className="relative group w-full flex flex-col">

              {/* Glow Effect Background */}
              <div className={`absolute -inset-2 ${path.glowColor} rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Card Content */}
              <div className="relative flex-1 bg-black border border-white/10 rounded-[2rem] p-5 md:p-6 lg:p-8 flex flex-col ring-1 ring-white/5 shadow-2xl overflow-hidden hover:bg-black transition-colors duration-300">

                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl" />

                {/* Floating Tag */}
                {path.tag && (
                  <div className={`absolute top-0 right-0 ${path.tagColor} text-white text-[10px] font-medium uppercase tracking-widest px-3 py-1.5 md:px-6 md:py-2 rounded-bl-3xl shadow-lg z-20 animate-pulse`}>
                    {path.tag}
                  </div>
                )}

                <div className="flex flex-col items-center text-center mb-4 md:mb-6 lg:mb-8">
                  <h3 className="text-xl md:text-2xl font-normal text-white tracking-tight mb-3 md:mb-4 leading-relaxed">{path.title}</h3>
                  <p className="text-slate-400 text-sm font-light leading-loose">{path.subtitle}</p>
                </div>

                <div className="flex flex-col items-center gap-3 mt-2 mb-5 md:mb-8 w-full">
                  <Link
                    href={path.href}
                    onClick={() => sendMetaEvent('Lead', { source: 'ChooseYourPath: ' + path.title })}
                    className={`w-full py-2.5 md:py-3 rounded-full bg-transparent text-white font-normal text-base shadow-2xl hover:scale-[1.03] active:scale-95 transition-all duration-300 border border-white/40 hover:bg-gradient-to-r hover:from-[#2d1b4e] hover:to-[#9b4dca] hover:border-[#2d1b4e] hover:[transition-property:transform,box-shadow] text-center`}
                    aria-label={`Ir a ${path.title}`}
                  >
                    {path.buttonText}
                  </Link>
                </div>

                <div className="space-y-4 md:space-y-5 flex-1">
                  <p className="text-white font-normal text-xs uppercase tracking-widest opacity-50 mb-3 md:mb-5 text-center">¿Qué incluye el plan?</p>
                  {path.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-slate-300 group/item cursor-default leading-loose">
                      <div className="mt-1.5 transition-transform group-hover/item:scale-110 shrink-0">
                        <feature.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                      </div>
                      <span className="text-sm font-normal text-slate-100 group-hover/item:text-white transition-colors">
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
