import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type ProjectTech = {
  id?: number;
  tech: string;
};

type Project = {
  id: number;
  title: string;
  content: string;
  imgurl: string;
  githubLink: string;
  deployedLink: string;
  tech?: ProjectTech[];
};

type HomeProps = {
  data: Project[];
};

const studies = [
  {
    label: "Base universitaria",
    title: "Universidad Nacional de Ingenieria",
    detail: "Ingenieria Electronica · Lima",
    period: "2014 - Actualidad",
    logo: "/estudio/uni.png",
  },
  {
    label: "Especializacion continua",
    title: "Platzi",
    detail: "Rutas de desarrollo web y software",
    period: "2020 - Actualidad",
    logo: "/estudio/platzi.webp",
  },
  {
    label: "Especializacion practica",
    title: "Udemy",
    detail: "Cursos tecnicos y proyectos aplicados",
    period: "2021 - Actualidad",
    logo: "/estudio/udemy.webp",
  },
  {
    label: "Aplicacion profesional",
    title: "CTIC UNI",
    detail:
      "2025 - 2026 · Desarrollo de Blockchain UNI, Tech Lab y Guante Traductor",
    period: "2025 - 2026",
    logo: "/estudio/ctic.jpg",
  },
];

const experience = [
  {
    label: "2025 - Actualidad",
    title: "Desarrollo de tesis hardware + software",
    subtitle: "Guante traductor de lengua de señas",
    detail:
      "Investigacion y prototipado de un sistema con sensores flex, ESP32, BLE y app movil para traducir señas a texto y voz, combinando captura fisica, comunicacion inalambrica y experiencia mobile.",
  },
  {
    label: "2024 - Actualidad",
    title: "Full-Stack Software Developer",
    subtitle: "Tech Labs · Universidad Nacional de Ingenieria",
    detail:
      "Diseno y desarrollo end-to-end de una plataforma de gestion tecnologica con Next.js, TypeScript, PostgreSQL, Supabase, autenticacion por roles y despliegue en produccion.",
  },
  {
    label: "2024 - Actualidad",
    title: "Desarrollador e Integrador IoT / Software-Hardware",
    subtitle: "Proyectos academicos y personales",
    detail:
      "Desarrollo de prototipos con ESP32, MicroPython y BLE, integrados con apps moviles en React Native / Expo para escaneo, control y visualizacion en tiempo real.",
  },
  {
    label: "2014 - Actualidad",
    title: "Desarrollador Full-Stack Freelance",
    subtitle: "Proyectos propios y soluciones web",
    detail:
      "Construccion de aplicaciones web y moviles, backend con FastAPI, uso de Python y herramientas de IA para agentes, automatizacion y aceleracion del desarrollo.",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express",
      "FastAPI",
      "MongoDB",
      "Blockchain UI",
      "Supabase",
      "Python",
      "LangChain",
    ],
  },
  {
    title: "IoT y workflow",
    items: [
      "ESP32",
      "MicroPython",
      "BLE / GATT",
      "TTS / STT",
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "Kubernetes",
    ],
  },
];

const skillIcons = [
  "/skillsLogos/react.png",
  "/skillsLogos/next-js.png",
  "/skillsLogos/typescript.png",
  "/skillsLogos/node.png",
  "/skillsLogos/docker.png",
  "/skillsLogos/mongodb.png",
];

const profileImage = "/extraImages/profilePic.jpg";

function techLabel(path: string) {
  return path
    .split("/")
    .pop()
    ?.replace(/\.[^.]+$/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function Home({ data }: HomeProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const heroZoneRef = useRef<HTMLElement | null>(null);
  const hoverAudioRef = useRef<HTMLAudioElement | null>(null);

  const playExpandSound = () => {
    if (typeof window === "undefined") {
      return;
    }

    if (!hoverAudioRef.current) {
      hoverAudioRef.current = new Audio("/sounds/hover.mp3");
      hoverAudioRef.current.preload = "auto";
      hoverAudioRef.current.volume = 0.42;
    }

    hoverAudioRef.current.currentTime = 0;
    hoverAudioRef.current.play().catch(() => {
      // Ignore autoplay-related errors until the user interacts with the page.
    });
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const heroZone = heroZoneRef.current;

      if (!heroZone) {
        return;
      }

      const rect = heroZone.getBoundingClientRect();
      const x = Math.min(Math.max(event.clientX - rect.left, 0), rect.width);
      const y = Math.min(Math.max(event.clientY - rect.top, 0), rect.height);

      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Eduardo Guevara | Portfolio</title>
        <meta
          name="description"
          content="Portafolio de Eduardo Guevara, desarrollador full stack enfocado en construir productos web escalables con una ejecucion clara y una interfaz cuidada."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Eduardo Guevara, portfolio, desarrollador full stack, Next.js, React, TypeScript, Lima"
        />
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </Head>

      <div
        className="min-h-screen bg-[radial-gradient(circle_at_top,#202020_0%,#0d0d0d_45%,#070707_100%)] text-stone-100"
        style={
          {
            "--mouse-x": `${mousePosition.x}px`,
            "--mouse-y": `${mousePosition.y}px`,
          } as React.CSSProperties
        }
      >
        <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.07]" />
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(214,181,107,0.16),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(75,85,99,0.22),transparent_26%)]" />
        <div className="vitruvio-shell pointer-events-none fixed right-0 top-0 z-0 hidden h-screen w-[42vw] min-w-[360px] lg:block">
          <div
            className="vitruvio-art absolute inset-y-0 right-[-6%] w-full"
            style={{ backgroundImage: "url('/extraImages/vitruvio.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#070707]/36 to-[#070707]/92" />
        </div>

        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090909]/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
            <a
              href="#top"
              className="flex items-center gap-3 text-stone-200"
            >
              <Image
                src="/logo.png"
                alt="Logo de Eduardo Guevara"
                width={38}
                height={38}
                className="h-9 w-9 rounded-[10px] object-cover"
              />
              <span className="font-display text-xl uppercase tracking-[0.28em]">
                Eduardo
              </span>
            </a>

            <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.22em] text-stone-400 md:flex">
              <a href="#perfil" className="transition hover:text-stone-100">
                Perfil
              </a>
              <a href="#experiencia" className="transition hover:text-stone-100">
                Formacion
              </a>
              <a href="#skills" className="transition hover:text-stone-100">
                Stack
              </a>
              <a href="#proyectos" className="transition hover:text-stone-100">
                Proyectos
              </a>
              <a href="#contacto" className="transition hover:text-stone-100">
                Contacto
              </a>
              <a
                href="/extraImages/cv.pdf"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-stone-100"
              >
                CV
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="/extraImages/cv.pdf"
                target="_blank"
                rel="noreferrer"
                className="hidden rounded-full border border-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-stone-200 transition hover:border-white/30 hover:text-white md:inline-flex"
              >
                Ver CV
              </a>
              <a
                href="https://wa.me/51991004126"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#d6b56b]/40 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-[#f1dfb0] transition hover:bg-[#d6b56b] hover:text-[#111]"
              >
                Hablemos
              </a>
            </div>
          </div>
        </header>

        <main id="top" className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-6 md:px-8 md:py-10">
          <section
            ref={heroZoneRef}
            className="hero-zone relative grid gap-6 lg:grid-cols-[1.35fr_0.85fr]"
          >
            <div className="hero-spotlight pointer-events-none absolute inset-0 z-30 overflow-hidden rounded-[32px]">
              <div className="hero-spotlight-glow" />
              <div className="hero-scan-horizontal" />
              <div className="hero-scan-diagonal scanner-line" />
              <div className="hero-scan-dot" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              className="panel-shell relative z-20 overflow-hidden"
            >
              <div className="panel-grid">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 text-[11px] uppercase tracking-[0.24em] text-stone-400">
                  <span>Case file // Eduardo</span>
                  <span>Signal strong</span>
                </div>

                <div className="grid gap-10 px-5 py-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-8">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <p className="font-mono text-xs uppercase tracking-[0.28em] text-red-400">
                        Subject profile // web + iot
                      </p>
                      <h1 className="font-display text-5xl uppercase leading-[0.9] text-stone-100 sm:text-6xl lg:text-7xl">
                        Eduardo
                        <span className="block text-stone-800/60">
                          Guevara
                        </span>
                      </h1>
                      <p className="max-w-2xl text-base leading-7 text-stone-300 sm:text-lg">
                        Desarrollador con base en Ingenieria Electronica.
                        Construyo productos web, mobile e IoT con foco en
                        integracion, claridad tecnica y experiencia de uso.
                      </p>
                      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-stone-500">
                        Backend rigor / frontend interactivity / iot integration
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      <div className="mini-panel">
                        <span className="mini-label">Base</span>
                        <strong className="mini-value">Lima, Peru</strong>
                      </div>
                      <div className="mini-panel">
                        <span className="mini-label">Foco</span>
                        <strong className="mini-value">
                          Web, mobile e IoT
                        </strong>
                      </div>
                      <div className="mini-panel">
                        <span className="mini-label">Modo</span>
                        <strong className="mini-value">Build + improve</strong>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <a
                        href="#proyectos"
                        className="cta-primary"
                      >
                        Ver proyectos
                      </a>
                      <a
                        href="https://github.com/eduardo202020"
                        target="_blank"
                        rel="noreferrer"
                        className="cta-secondary"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://www.linkedin.com/in/jhunior-guevara-889483162"
                        target="_blank"
                        rel="noreferrer"
                        className="cta-secondary"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="/extraImages/cv.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="cta-secondary"
                      >
                        CV
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="rounded-[28px] border border-white/10 bg-[#131313] p-4">
                      <div className="profile-frame relative overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,#171717_0%,#0a0a0a_100%)]">
                        <div className="absolute left-4 top-4 z-20 font-mono text-[10px] uppercase tracking-[0.24em] text-red-400">
                          cam_04 [rec]
                        </div>
                        <div className="absolute inset-x-0 bottom-7 z-20 mx-6 border border-red-500/50 bg-red-500/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-red-300 backdrop-blur-sm">
                          open to work // remote ready
                        </div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,40,40,0.16),transparent_42%)]" />
                        <Image
                          src={profileImage}
                          alt="Eduardo Guevara"
                          width={560}
                          height={680}
                          priority
                          className="h-[420px] w-full object-cover object-center grayscale contrast-125"
                        />
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                      {skillIcons.map((icon) => (
                        <div
                          key={icon}
                          className="flex items-center gap-3 rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-3"
                        >
                          <Image
                            src={icon}
                            alt={techLabel(icon) || "Skill"}
                            width={32}
                            height={32}
                            className="h-8 w-8 object-contain"
                          />
                          <div>
                            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-stone-500">
                              Toolset
                            </p>
                            <p className="text-sm text-stone-200">
                              {techLabel(icon)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="relative z-20 flex flex-col gap-6"
            >
              <div className="panel-shell p-5">
                <p className="section-kicker">Estado</p>
                <h2 className="mt-3 font-display text-3xl uppercase leading-none">
                  Perfil activo
                </h2>
                <p className="mt-4 text-sm leading-7 text-stone-300">
                  Busco proyectos donde se crucen software, producto y una
                  implementacion tecnica bien resuelta.
                </p>
                <div className="mt-6 space-y-3 text-sm text-stone-300">
                  <div className="info-row">
                    <span>Stack base</span>
                    <strong>React / Next.js / ESP32 / FastAPI</strong>
                  </div>
                  <div className="info-row">
                    <span>Enfoque</span>
                    <strong>UX, integracion hardware-software</strong>
                  </div>
                  <div className="info-row">
                    <span>Intereses</span>
                    <strong>IoT, blockchain, IA aplicada y cafe</strong>
                  </div>
                </div>
              </div>

              <div className="panel-shell p-5">
                <p className="section-kicker">Resumen</p>
                <div className="mt-4 grid gap-3">
                  <div className="summary-card">
                    <span className="summary-index">01</span>
                    <p>Interfaces con criterio visual y estructura tecnica.</p>
                  </div>
                  <div className="summary-card">
                    <span className="summary-index">02</span>
                    <p>Integracion real entre mobile, BLE y hardware.</p>
                  </div>
                  <div className="summary-card">
                    <span className="summary-index">03</span>
                    <p>Blockchain, tesis IoT y ejecucion end-to-end.</p>
                  </div>
                </div>
              </div>
            </motion.aside>
          </section>

          <section
            id="perfil"
            className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65 }}
              className="panel-shell p-5 md:p-7"
            >
              <p className="section-kicker text-red-400">Subject profile</p>
              <h2 className="mt-4 font-display text-4xl uppercase leading-none text-stone-100 md:text-5xl">
                Desarrollo con enfoque tecnico y sensibilidad por la experiencia.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="panel-shell p-5 md:p-7"
            >
              <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
                <div className="rounded-[24px] border border-white/10 bg-white/[0.02] p-4">
                  <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-[#101010]">
                    <Image
                      src={profileImage}
                      alt="Avatar de GitHub de Eduardo"
                      width={360}
                      height={360}
                      className="aspect-square w-full object-cover grayscale"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-red-500/30 to-transparent" />
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-stone-500">
                        Class
                      </p>
                      <p className="mt-2 text-stone-100">Dev Fullstack</p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-stone-500">
                        XP level
                      </p>
                      <p className="mt-2 text-stone-100">Build + Ship</p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-stone-500">
                        Lang 1
                      </p>
                      <p className="mt-2 text-stone-100">ES</p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-stone-500">
                        Lang 2
                      </p>
                      <p className="mt-2 text-stone-100">EN</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-red-400">
                      competence_analysis_report
                    </p>
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-stone-500">
                      [read_only]
                    </span>
                  </div>
                  <p className="mt-6 text-base leading-8 text-stone-300">
                    Me interesa construir productos utiles, claros y bien
                    ejecutados. Trabajo en la interseccion entre software,
                    dispositivos, blockchain e interfaces interactivas.
                  </p>
                  <p className="mt-5 text-base leading-8 text-stone-300">
                    Mi linea mas fuerte hoy es conectar frontend, backend y
                    hardware para resolver problemas reales de comunicacion,
                    operacion y accesibilidad.
                  </p>
                </div>
              </div>
            </motion.div>
          </section>

          <section className="panel-shell p-5 md:p-7">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="section-kicker">Experiencia</p>
                <h2 className="mt-4 font-display text-4xl uppercase leading-none md:text-5xl">
                  Trayectoria aplicada
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-stone-400">
                Experiencia en producto web, mobile, hardware e integracion
                tecnica aplicada.
              </p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-4">
              {experience.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#d6b56b]">
                    {item.label}
                  </p>
                  <h3 className="mt-5 text-2xl text-stone-100">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-stone-400">{item.subtitle}</p>
                  <p className="mt-6 text-sm leading-7 text-stone-300">
                    {item.detail}
                  </p>
                </motion.article>
              ))}
            </div>
          </section>

          <section id="experiencia" className="panel-shell p-5 md:p-7">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="section-kicker">Formacion</p>
                <h2 className="mt-4 font-display text-4xl uppercase leading-none md:text-5xl">
                  Ruta de aprendizaje
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-stone-400">
                Base academica, aprendizaje continuo y trabajo aplicado.
              </p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-4">
              {studies.map((study, index) => (
                <motion.article
                  key={study.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#d6b56b]">
                      {study.label}
                    </p>
                    <div className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-white/10 bg-white/[0.04] p-2">
                      <Image
                        src={study.logo}
                        alt={study.title}
                        width={40}
                        height={40}
                        className="h-8 w-8 object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="mt-5 text-2xl text-stone-100">
                    {study.title}
                  </h3>
                  <p className="mt-3 text-sm text-stone-400">{study.detail}</p>
                </motion.article>
              ))}
            </div>
          </section>

          <section id="skills" className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="panel-shell p-5 md:p-7">
              <p className="section-kicker">Competencias</p>
              <h2 className="mt-4 font-display text-4xl uppercase leading-none md:text-5xl">
                Stack organizado para construir y entregar.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-stone-400">
                Stack orientado a pasar de idea a producto funcional en web,
                mobile e IoT.
              </p>
            </div>

            <div className="grid gap-4">
              {skillGroups.map((group, index) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="panel-shell p-5"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="md:max-w-[180px]">
                      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#d6b56b]">
                        {group.title}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="skill-pill">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="proyectos" className="panel-shell p-5 md:p-7">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="section-kicker text-red-400">Evidence board</p>
                <h2 className="mt-4 font-display text-4xl uppercase leading-none md:text-5xl">
                  Evidencia de trabajo
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-stone-400">
                Casos reales en web, mobile, blockchain e IoT.
              </p>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4 border-y border-white/10 py-4">
              <div className="flex items-center gap-3">
                <button className="rounded-sm border border-red-500/40 bg-red-500/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-red-400">
                  Slider
                </button>
                <button className="rounded-sm border border-white/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-stone-500">
                  List
                </button>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-stone-500">
                Sector: web scanning active
              </div>
            </div>

            <div className="evidence-scroll mt-8 flex gap-5 overflow-x-auto pb-4">
              {data.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  onMouseEnter={() => {
                    if (hoveredProject !== project.id) {
                      playExpandSound();
                    }
                    setHoveredProject(project.id);
                  }}
                  onMouseLeave={() => setHoveredProject(null)}
                  className={`evidence-card flex min-h-[620px] min-w-[220px] flex-col overflow-hidden rounded-none border bg-[#0a0a0a] ${
                    hoveredProject === project.id
                      ? "is-active border-red-500/80"
                      : hoveredProject !== null
                        ? "is-inactive border-white/10"
                        : "border-white/10"
                  }`}
                >
                  <div className="relative h-[430px] overflow-hidden border-b border-white/10 bg-black/20">
                    <div className="absolute left-5 top-5 z-20 font-mono text-[10px] uppercase tracking-[0.22em] text-red-400">
                      Evidence #{String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="absolute right-4 top-10 z-20 [writing-mode:vertical-rl] font-mono text-[9px] uppercase tracking-[0.22em] text-red-500/80">
                      Interface / prototype
                    </div>
                    <Image
                      src={project.imgurl}
                      alt={project.title}
                      width={900}
                      height={620}
                      className={`h-full w-full object-cover object-top transition duration-500 ${
                        hoveredProject === project.id ? "scale-[1.03]" : ""
                      }`}
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between gap-5 p-5">
                    <div>
                      <h3
                        className={`font-display leading-none text-stone-100 transition-all duration-300 ${
                          hoveredProject === project.id || hoveredProject === null
                            ? "text-4xl"
                            : "text-[2rem]"
                        }`}
                      >
                        {project.title}
                      </h3>
                      <p
                        className={`mt-4 text-sm leading-7 text-stone-400 transition-all duration-300 ${
                          hoveredProject === project.id || hoveredProject === null
                            ? "max-h-40 opacity-100"
                            : "max-h-0 overflow-hidden opacity-0"
                        }`}
                      >
                        {project.content}
                      </p>
                    </div>

                    <div
                      className={`space-y-4 transition-all duration-300 ${
                        hoveredProject === project.id || hoveredProject === null
                          ? "opacity-100"
                          : "opacity-55"
                      }`}
                    >
                      <div className="flex flex-wrap gap-2">
                        {project.tech?.map((tech, techIndex) => (
                          <span
                            key={`${project.id}-${tech.tech}-${techIndex}`}
                            className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] transition-all duration-300 ${
                              hoveredProject === project.id || hoveredProject === null
                                ? "border-white/10 text-stone-300"
                                : "border-white/5 text-stone-500"
                            }`}
                          >
                            {techLabel(tech.tech)}
                          </span>
                        ))}
                      </div>

                      <div
                        className={`flex flex-wrap gap-3 transition-all duration-300 ${
                          hoveredProject === project.id || hoveredProject === null
                            ? "translate-y-0 opacity-100"
                            : "translate-y-2 opacity-0"
                        }`}
                      >
                        <a
                          href={project.deployedLink}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-sm border border-red-500/50 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-red-400 transition hover:bg-red-500/10"
                        >
                          Demo
                        </a>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-sm border border-white/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-stone-300 transition hover:border-white/30"
                        >
                          Codigo
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
              <div className="rounded-sm border border-white/10 px-4 py-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-stone-500">
                  Evidence archive
                </p>
                <p className="mt-2 font-display text-2xl text-stone-100">
                  {String(data.length).padStart(2, "0")} files
                </p>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-red-400">
                Live feed
              </div>
            </div>
          </section>

          <section id="contacto" className="panel-shell p-5 md:p-7">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="section-kicker">Contacto</p>
                <h2 className="mt-4 font-display text-4xl uppercase leading-none md:text-5xl">
                  Si tienes una idea, la podemos convertir en producto.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-stone-300">
                  Estoy abierto a nuevas oportunidades, colaboraciones y
                  proyectos donde el producto necesite tanto implementacion como
                  una presencia visual con mas personalidad, o una integracion
                  solida entre software, mobile e IoT.
                </p>
              </div>

              <div className="grid gap-4">
                <a
                  href="/extraImages/cv.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card"
                >
                  <span className="contact-label">CV</span>
                  <strong className="contact-value">Ver currículum PDF</strong>
                </a>
                <a
                  href="https://wa.me/51991004126"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card"
                >
                  <span className="contact-label">WhatsApp</span>
                  <strong className="contact-value">+51 991 004 126</strong>
                </a>
                <a
                  href="https://github.com/eduardo202020"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card"
                >
                  <span className="contact-label">GitHub</span>
                  <strong className="contact-value">
                    github.com/eduardo202020
                  </strong>
                </a>
                <a
                  href="https://www.linkedin.com/in/jhunior-guevara-889483162"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card"
                >
                  <span className="contact-label">LinkedIn</span>
                  <strong className="contact-value">
                    jhunior-guevara-889483162
                  </strong>
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const fs = require("fs/promises");
  const path = require("path");
  const filePath = path.join(process.cwd(), "data", "data.json");

  const rawData = await fs.readFile(filePath, "utf-8");
  const parsed = JSON.parse(rawData);

  return {
    props: {
      data: parsed.data.data,
    },
  };
}
