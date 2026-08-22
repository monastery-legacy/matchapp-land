"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { sendMetaEvent } from "@/lib/meta-events";
import {
  Search,
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
  Lock,
  Shield,
  ArrowRight
} from "lucide-react";

const paths = [
  {
    title: "Match Dating",
    subtitle: "La forma sencilla y auténtica de conocer personas afines a ti con seguridad.",
    badge: "Plan Inicial",
    badgeColor: "bg-white/10 text-white border border-white/20",
    highlighted: false,
    headerIcon: Heart,
    headerIconColor: "text-rose-400 bg-rose-500/10 border-rose-500/20",
    cardBg: "bg-[#0d0d12]/90 border-white/10 hover:border-white/20",
    glowColor: "opacity-0 group-hover:opacity-100 bg-purple-500/10",
    buttonClass: "bg-transparent text-white border border-white/30 hover:border-purple-400 hover:bg-gradient-to-r hover:from-[#2d1b4e] hover:to-[#9b4dca] hover:text-white",
    features: [
      { text: "Creación de Perfil Completo 360°", icon: Activity, desc: "Evaluación de compatibilidad inicial" },
      { text: "Algoritmo de Emparejamiento por Afinidades", icon: Sparkles, desc: "Conexiones basadas en intereses reales" },
      { text: "Me Gustas & Conexiones Diarias", icon: Heart, desc: "Interactúa con perfiles afines diariamente" },
      { text: "Chat Directo e Instantáneo con tus Matches", icon: MessageSquare, desc: "Mensajería fluida sin restricciones" },
      { text: "Filtros Básicos por Ubicación y Edad", icon: MapPin, desc: "Encuentra personas cerca de tu área" },
      { text: "Verificación de Perfil y Seguridad", icon: ShieldCheck, desc: "Seguridad y confianza en la comunidad" }
    ],
    href: "https://chat.whatsapp.com/GVlnQKclJuP63qZjeE0r24",
    buttonText: "Encontrar mi Pareja ahora"
  },
  {
    title: "Match Dating Pro",
    subtitle: "La experiencia ilimitada con máxima visibilidad y funciones avanzadas de citas.",
    badge: "✨ MÁS POPULAR & RECOMENDADO",
    badgeColor: "bg-gradient-to-r from-[#2d1b4e] via-[#6b21a8] to-[#9b4dca] text-white border border-purple-400/40 shadow-lg shadow-purple-900/40",
    highlighted: true,
    headerIcon: Zap,
    headerIconColor: "text-purple-300 bg-purple-500/20 border-purple-400/40",
    cardBg: "bg-gradient-to-b from-[#180a2e]/90 via-[#0c0617]/95 to-black border-purple-500/40 shadow-[0_0_50px_rgba(155,77,202,0.2)] hover:border-purple-400/70",
    glowColor: "opacity-100 bg-purple-600/20",
    buttonClass: "bg-gradient-to-r from-[#2d1b4e] via-[#7e22ce] to-[#9b4dca] text-white font-medium shadow-xl shadow-purple-950/50 hover:shadow-purple-500/30 border border-purple-400/40",
    features: [
      { text: "Todo lo incluido en Match Dating", icon: CheckCircle2, desc: "Acceso completo al paquete estándar" },
      { text: "Me Gustas e Interacciones Ilimitadas", icon: Zap, desc: "Conecta sin límites diariamente" },
      { text: "Saber a quién le gustas antes de hacer Match", icon: Search, desc: "Ahorra tiempo y conecta al instante" },
      { text: "Filtros Avanzados de Estilo de Vida y Valores", icon: ClipboardCheck, desc: "Busca exactamente lo que deseas" },
      { text: "Boost Semanal de Visibilidad de Perfil (x10)", icon: Sparkles, desc: "Multiplica tus oportunidades de match" },
      { text: "Rebobinados Ilimitados para no perder oportunidades", icon: Clock, desc: "Recupera perfiles pasados" },
      { text: "Modo Incógnito & Control de Privacidad Total", icon: ShieldCheck, desc: "Controla quién ve tu perfil" },
      { text: "Soporte & Matchmaking Personalizado", icon: Users, desc: "Acompañamiento experto en tu búsqueda" }
    ],
    href: "https://chat.whatsapp.com/GVlnQKclJuP63qZjeE0r24",
    buttonText: "Encontrar mi Pareja ahora"
  }
];

export default function ChooseYourPath() {
  return (
    <section id="planes" className="pt-20 md:pt-28 pb-16 md:pb-24 bg-[#050507] relative overflow-hidden font-sans">
      {/* Background Subtle Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-900/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="container max-w-[1400px] mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="mb-14 md:mb-20 max-w-3xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-purple-300 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Elige tu experiencia de citas</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight mb-5"
          >
            Elige tu Plan en Match Dating
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-slate-400 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Selecciona el plan ideal para tu objetivo. Herramientas y funciones exclusivas para conectar de forma auténtica y encontrar a tu pareja ideal.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl gap-6 md:gap-8 mx-auto items-stretch">
          {paths.map((path, index) => {
            const HeaderIcon = path.headerIcon;
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className="relative group w-full flex flex-col transition-all duration-300"
              >

                {/* Ambient Glow Background */}
                <div className={`absolute -inset-1 rounded-[2.2rem] blur-xl transition-all duration-500 ${path.glowColor}`} />

                {/* Card Container */}
                <div className={`relative flex-1 ${path.cardBg} border rounded-[2.2rem] p-6 sm:p-8 md:p-9 flex flex-col backdrop-blur-xl transition-all duration-300 h-full`}>

                  {/* Header Badge */}
                  <div className="flex items-center justify-between gap-4 mb-6 h-12 shrink-0">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 ${path.headerIconColor}`}>
                      <HeaderIcon className="w-6 h-6" strokeWidth={2} />
                    </div>

                    <span className={`text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full select-none shrink-0 ${path.badgeColor}`}>
                      {path.badge}
                    </span>
                  </div>

                  {/* Plan Titles - Height fixed to guarantee exact same Y alignment for CTA buttons */}
                  <div className="mb-6 min-h-[5rem] md:min-h-[5.5rem] flex flex-col justify-start shrink-0">
                    <h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-2">
                      {path.title}
                    </h3>
                    <p className="text-slate-400 text-sm font-light leading-relaxed">
                      {path.subtitle}
                    </p>
                  </div>

                  {/* CTA Button - Perfectly Aligned */}
                  <div className="mb-8 shrink-0">
                    <a 
                      href={path.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sendMetaEvent('Lead', { source: 'ChooseYourPath: ' + path.title })}
                      className={`w-full py-3.5 px-6 rounded-full text-center font-medium text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2.5 group/btn ${path.buttonClass}`} 
                      aria-label={`Solicitar plan ${path.title}`}
                    >
                      <span>{path.buttonText}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </div>

                  {/* Features Divider */}
                  <div className="border-t border-white/10 pt-6 flex-1 flex flex-col justify-start">
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-5">
                      ¿Qué incluye el plan?
                    </p>

                    <ul className="space-y-4 flex-1">
                      {path.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3.5 text-slate-300 group/item cursor-default">
                          <div className="mt-0.5 w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:border-purple-400/50 group-hover/item:bg-purple-500/10 transition-colors">
                            <feature.icon className="w-3.5 h-3.5 text-purple-300" strokeWidth={2} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-normal text-slate-100 group-hover/item:text-white transition-colors leading-snug">
                              {feature.text}
                            </span>
                            <span className="text-[11px] text-slate-500 font-light mt-0.5">
                              {feature.desc}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Guarantee / Trust Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-8 text-xs md:text-sm text-slate-400 font-light text-center"
        >
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>Perfiles 100% verificados con foto y teléfono</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-purple-400" />
            <span>Privacidad y datos encriptados</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Emparejamiento sin falsas expectativas</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
