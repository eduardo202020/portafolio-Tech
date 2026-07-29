import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

type ProjectTech = {
  id?: number;
  tech: string;
};

type Project = {
  id: number;
  title: string;
  content: string;
  imgurl: string;
  images?: string[];
  githubLink?: string;
  deployedLink?: string;
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
    detail: "LLM Engineering con LangChain, agentes y herramientas modernas de IA",
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
  {
    label: "IA y agentes",
    title: "OpenAI Academy",
    detail:
      "Certificados en AI Foundations, Applied AI Foundations y Agents and Workflows",
    period: "Formacion continua",
    logo: "/skillsLogos/openai.svg",
  },
];

const certifications = [
  {
    eyebrow: "Reconocimiento nacional",
    title: "1.er lugar - Hackatón Nacional Transformagob 2026",
    issuer: "Gobierno del Perú · Presidencia del Consejo de Ministros",
    date: "Julio 2026",
    dateTime: "2026-07",
    description:
      "Se otorga la presente constancia por haber obtenido el 1.º lugar en la Hackatón Nacional Transformagob 2026, al presentar la propuesta de solución más destacada frente a un desafío de innovación digital, con impacto en la resolución de problemáticas reales de entidades públicas en beneficio de la ciudadanía, en el marco de los Objetivos Prioritarios 3 (servicios digitales centrados en las personas), 4 (talento digital para todas las personas) y 6 (innovación digital) de la Política Nacional de Transformación Digital.",
    preview: "/certificados/preview-transformagob-2026.png",
    document: "/certificados/certifficacdo-pcm.pdf",
    note: "Constancia oficial firmada digitalmente",
    featured: true,
  },
  {
    eyebrow: "Ruta de aprendizaje",
    title: "Desarrollo de Apps con React Native",
    issuer: "Platzi",
    date: "26 febrero 2023",
    dateTime: "2023-02-26",
    description:
      "Ruta aprobada de desarrollo de aplicaciones móviles con React Native.",
    preview: "/certificados/preview-react-native.png",
    document: "/certificados/diploma-react-native.pdf",
    verificationUrl:
      "https://platzi.com/p/jguevaral/ruta/12-ruta/diploma/detalle/",
    note: "Certificación de aprobación online",
    featured: false,
  },
  {
    eyebrow: "Programa de formación",
    title: "Full Stack con Next.js",
    issuer: "Platzi · Escuela de Desarrollo Web",
    date: "24 febrero 2023",
    dateTime: "2023-02-24",
    description:
      "Programa completado de desarrollo full stack con Next.js para construir productos web de extremo a extremo.",
    preview: "/certificados/preview-full-stack-next.png",
    document: "/certificados/diploma-web-next.pdf",
    verificationUrl:
      "https://platzi.com/p/jguevaral/ruta/7049-ruta/diploma/detalle/",
    note: "Certificación de aprobación online",
    featured: false,
  },
  {
    eyebrow: "OpenAI Academy",
    title: "Agents and Workflows",
    issuer: "OpenAI Academy",
    date: "25 julio 2026",
    dateTime: "2026-07-25",
    description:
      "Certificado de finalización del curso Agents and Workflows, emitido por OpenAI Academy a Eduardo Guevara como formación aplicada en agentes y flujos de trabajo con inteligencia artificial.",
    preview: "/certificados/preview-openai-agents-workflows.png",
    document: "/certificados/openai-certificate.pdf",
    verificationUrl:
      "https://academy.openai.com/public/certificate/7p08p0nyp2",
    note: "Certificado oficial · ID 7p08p0nyp2",
    featured: false,
  },
];

const CertificatePDFViewer = dynamic(
  () => import("../components/CertificatePDFViewer"),
  {
    ssr: false,
  },
);

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
    title: "Frontend y mobile",
    items: [
      "React",
      "Next.js",
      "React Native",
      "Expo",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "Three.js",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Backend y datos",
    items: [
      "Node.js",
      "Express",
      "FastAPI",
      "MongoDB",
      "PostgreSQL",
      "Supabase",
      "SQLite",
      "Python",
    ],
  },
  {
    title: "IA y automatizacion",
    items: [
      "OpenAI",
      "ChatGPT",
      "Claude",
      "DeepSeek",
      "Codex",
      "LangChain",
      "RAG",
      "Streamlit",
    ],
  },
  {
    title: "IoT e integracion",
    items: [
      "ESP32",
      "Raspberry Pi",
      "MicroPython",
      "BLE / GATT",
      "TTS / STT",
      "Blockchain UI",
    ],
  },
  {
    title: "Workflow y documentacion",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "Kubernetes",
      "LaTeX",
    ],
  },
];

const skillLogoByName: Record<string, string> = {
  React: "/skillsLogos/react.png",
  "Next.js": "/skillsLogos/next-js.png",
  "React Native": "/skillsLogos/react.png",
  Expo: "/skillsLogos/expo.svg",
  TypeScript: "/skillsLogos/typescript.png",
  JavaScript: "/skillsLogos/js.png",
  "Tailwind CSS": "/skillsLogos/tailwind.png",
  "Framer Motion": "/skillsLogos/framer.png",
  "Three.js": "/skillsLogos/threedotjs.svg",
  HTML: "/skillsLogos/html.png",
  CSS: "/skillsLogos/css.png",
  "Node.js": "/skillsLogos/node.png",
  Express: "/skillsLogos/express.png",
  FastAPI: "/skillsLogos/fastapi.svg",
  MongoDB: "/skillsLogos/mongodb.png",
  PostgreSQL: "/skillsLogos/postgresql.svg",
  Supabase: "/skillsLogos/supabase.svg",
  SQLite: "/skillsLogos/sqlite.svg",
  Python: "/skillsLogos/python.png",
  OpenAI: "/skillsLogos/openai.svg",
  ChatGPT: "/skillsLogos/openai.svg",
  Claude: "/skillsLogos/claude.svg",
  DeepSeek: "/skillsLogos/deepseek.svg",
  Codex: "/skillsLogos/openai.svg",
  LangChain: "/skillsLogos/langchain.svg",
  RAG: "/skillsLogos/langchain.svg",
  Streamlit: "/skillsLogos/streamlit.svg",
  ESP32: "/skillsLogos/espressif.svg",
  "Raspberry Pi": "/skillsLogos/raspberrypi.svg",
  MicroPython: "/skillsLogos/micropython.svg",
  "BLE / GATT": "/skillsLogos/bluetooth.svg",
  "TTS / STT": "/skillsLogos/python.png",
  "Blockchain UI": "/extraImages/blockchain.png",
  Git: "/skillsLogos/git.png",
  GitHub: "/skillsLogos/github.png",
  Docker: "/skillsLogos/docker.png",
  Linux: "/skillsLogos/linux.png",
  Kubernetes: "/skillsLogos/kuber.png",
  LaTeX: "/skillsLogos/latex.svg",
};

const aiTools = [
  { name: "OpenAI", focus: "APIs y modelos" },
  { name: "ChatGPT", focus: "Ideación y revisión" },
  { name: "Claude", focus: "Código y contexto" },
  { name: "DeepSeek", focus: "Análisis técnico" },
] as const;

const skillIcons = [
  "/skillsLogos/react.png",
  "/skillsLogos/next-js.png",
  "/skillsLogos/typescript.png",
  "/skillsLogos/node.png",
  "/skillsLogos/docker.png",
  "/skillsLogos/mongodb.png",
];

const profileImage = "/extraImages/perfil.png";

const techLabelBySlug: Record<string, string> = {
  react: "React",
  "next-js": "Next.js",
  typescript: "TypeScript",
  js: "JavaScript",
  node: "Node.js",
  fastapi: "FastAPI",
  langchain: "LangChain",
  bluetooth: "BLE",
  mongodb: "MongoDB",
  github: "GitHub",
  docker: "Docker",
  linux: "Linux",
  python: "Python",
  express: "Express",
  firebase: "Firebase",
  html: "HTML",
  css: "CSS",
};

function techLabel(path: string) {
  const slug = path
    .split("/")
    .pop()
    ?.replace(/\.[^.]+$/, "");

  if (!slug) {
    return "";
  }

  return (
    techLabelBySlug[slug] ||
    slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
  );
}

export default function Home({ data }: HomeProps) {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activeCertificate, setActiveCertificate] = useState<
    (typeof certifications)[number] | null
  >(null);
  const hoverAudioRef = useRef<HTMLAudioElement | null>(null);
  const orderedProjects = [
    ...data.filter((project) => (project.images?.length ?? 0) >= 3),
    ...data.filter((project) => (project.images?.length ?? 0) < 3),
  ];

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

  return (
    <>
      <Head>
        <title>Eduardo Guevara | Portfolio</title>
        <meta
          name="description"
          content="Portafolio de Eduardo Guevara, desarrollador full stack, mobile y asistido por IA enfocado en producto, automatización, Codex e integración IoT."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Eduardo Guevara, portfolio, desarrollador full stack, Next.js, React, TypeScript, IA, Codex, RAG, IoT, Lima"
        />
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </Head>

      <div className="min-h-screen bg-[radial-gradient(circle_at_top,#202020_0%,#0d0d0d_45%,#070707_100%)] text-stone-100">
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
              <a
                href="#certificaciones"
                className="hidden transition hover:text-stone-100 xl:inline"
              >
                Logros
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
          <section className="relative grid gap-6 lg:grid-cols-[1.35fr_0.85fr]">
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

                <div className="grid gap-10 px-5 py-6 lg:grid-cols-2 lg:px-8 lg:py-8">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <p className="font-mono text-xs uppercase tracking-[0.28em] text-red-400">
                        Subject profile // web + mobile + iot + ai
                      </p>
                      <h1 className="font-display text-5xl uppercase leading-[0.9] text-stone-100 sm:text-6xl lg:text-7xl">
                        Eduardo
                        <span className="block text-stone-300/70">
                          Guevara
                        </span>
                      </h1>
                      <p className="max-w-2xl text-base leading-7 text-stone-300 sm:text-lg">
                        Ingeniero electrónico y desarrollador orientado a
                        producto. Construyo soluciones web, mobile, IoT e IA
                        aplicada, apoyándome en agentes para planificar,
                        implementar, revisar y documentar software.
                      </p>
                      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-stone-500">
                        Product architecture / ai-assisted delivery / iot integration
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
                          Web, mobile, IA e IoT
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
                          alt="Retrato profesional de Eduardo Guevara"
                          width={720}
                          height={720}
                          priority
                          className="aspect-square w-full scale-[1.1] object-cover object-center"
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
                    <strong>React / FastAPI / Python / Codex</strong>
                  </div>
                  <div className="info-row">
                    <span>Enfoque</span>
                    <strong>Producto, IA e integracion hardware-software</strong>
                  </div>
                  <div className="info-row">
                    <span>Intereses</span>
                    <strong>Agentes, RAG, automatizacion, IoT y cafe</strong>
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
                    <p>IA aplicada, RAG, automatizacion y flujos con agentes.</p>
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
                Producto, automatizacion e integracion con criterio tecnico.
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
                      alt="Retrato profesional de Eduardo Guevara"
                      width={360}
                      height={360}
                      className="aspect-square w-full object-cover object-center"
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
                    dispositivos, IA aplicada e interfaces interactivas.
                  </p>
                  <p className="mt-5 text-base leading-8 text-stone-300">
                    Uso Codex y flujos con agentes para explorar, planificar,
                    implementar, revisar y documentar software, conectando
                    frontend, backend, datos y hardware para resolver problemas
                    reales.
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

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
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
                    <div className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-white/10 bg-stone-100 p-2">
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

          <section
            id="certificaciones"
            className="panel-shell overflow-hidden p-5 md:p-7"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="section-kicker text-red-400">
                  Logros verificados
                </p>
                <h2 className="mt-4 font-display text-4xl uppercase leading-none md:text-5xl">
                  Certificaciones y reconocimientos
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-stone-400">
                Evidencia de formación técnica y de la aplicación de ese
                conocimiento en retos de innovación con impacto público.
              </p>
            </div>

            <div className="mt-7 grid gap-3 border-y border-white/10 py-4 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <strong className="font-display text-3xl text-stone-100">
                  04
                </strong>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-stone-500">
                  Credenciales
                </span>
              </div>
              <div className="flex items-center gap-3">
                <strong className="font-display text-3xl text-red-400">
                  01
                </strong>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-stone-500">
                  Reconocimiento nacional
                </span>
              </div>
              <div className="flex items-center gap-3">
                <strong className="font-display text-3xl text-[#d6b56b]">
                  03
                </strong>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-stone-500">
                  Formación técnica e IA
                </span>
              </div>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-12">
              {certifications.map((certificate, index) => (
                <motion.article
                  key={certificate.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className={`certificate-card group flex flex-col overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.025] ${
                    certificate.featured
                      ? "lg:col-span-7 lg:row-span-2"
                      : index === certifications.length - 1
                        ? "lg:col-span-12"
                        : "lg:col-span-5"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveCertificate(certificate)}
                    aria-label={`Abrir certificado: ${certificate.title}`}
                    className={`relative block w-full cursor-zoom-in overflow-hidden border-b border-white/10 bg-[#efeee9] text-left ${
                      certificate.featured ? "h-[430px]" : "h-[250px]"
                    }`}
                  >
                    <div className="absolute left-4 top-4 z-20 rounded-full border border-black/10 bg-black/80 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                      Documento {String(index + 1).padStart(2, "0")}
                    </div>
                    <Image
                      src={certificate.preview}
                      alt={`Vista previa de ${certificate.title}`}
                      fill
                      sizes={
                        certificate.featured
                          ? "(min-width: 1024px) 55vw, 100vw"
                          : "(min-width: 1024px) 40vw, 100vw"
                      }
                      className="object-contain transition duration-500 group-hover:scale-[1.02]"
                    />
                    <span className="absolute bottom-4 right-4 z-20 rounded-full border border-white/15 bg-black/80 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                      Abrir visor
                    </span>
                  </button>

                  <div className="flex flex-1 flex-col justify-between gap-6 p-5 md:p-6">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <p
                          className={`font-mono text-[10px] uppercase tracking-[0.24em] ${
                            certificate.featured
                              ? "text-red-400"
                              : "text-[#d6b56b]"
                          }`}
                        >
                          {certificate.eyebrow}
                        </p>
                        <time
                          dateTime={certificate.dateTime}
                          className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-500"
                        >
                          {certificate.date}
                        </time>
                      </div>
                      <h3
                        className={`mt-4 text-stone-100 ${
                          certificate.featured
                            ? "font-display text-4xl uppercase leading-none md:text-5xl"
                            : "text-2xl"
                        }`}
                      >
                        {certificate.title}
                      </h3>
                      <p className="mt-3 text-sm text-stone-400">
                        {certificate.issuer}
                      </p>
                      <p className="mt-5 text-sm leading-7 text-stone-300">
                        {certificate.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-stone-500">
                        {certificate.note}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {certificate.verificationUrl && (
                          <a
                            href={certificate.verificationUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-[#d6b56b]/40 bg-[#d6b56b]/5 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#f1dfb0] transition hover:border-[#d6b56b] hover:bg-[#d6b56b]/10"
                            aria-label={`Validar credencial de ${certificate.title} en el sitio del emisor`}
                          >
                            Validar credencial
                            <span aria-hidden="true">↗</span>
                          </a>
                        )}
                        <button
                          type="button"
                          onClick={() => setActiveCertificate(certificate)}
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-stone-200 transition hover:border-red-500/50 hover:text-red-300"
                        >
                          Explorar PDF
                          <span aria-hidden="true">↗</span>
                        </button>
                      </div>
                    </div>
                  </div>
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
                          <span className="skill-logo" aria-hidden="true">
                            <Image
                              src={skillLogoByName[item]}
                              alt=""
                              width={20}
                              height={20}
                              className="h-5 w-5 object-contain"
                            />
                          </span>
                          <span>{item}</span>
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
                  Cuadrícula
                </button>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-stone-500">
                Archivo visual · {orderedProjects.length} proyectos
              </div>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {orderedProjects.map((project, index) => (
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
                  className={`evidence-card flex min-h-[600px] flex-col overflow-hidden rounded-none border bg-[#0a0a0a] ${
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
                    {project.images && project.images.length > 1 ? (
                      <div className="grid h-full grid-cols-[1.35fr_1fr] grid-rows-2 gap-px bg-white/10">
                        {project.images.slice(0, 3).map((image, imageIndex) => (
                          <div
                            key={image}
                            className={`relative overflow-hidden bg-[#080808] ${
                              imageIndex === 0 ? "row-span-2" : ""
                            }`}
                          >
                            <Image
                              src={image}
                              alt={`${project.title} - vista ${imageIndex + 1}`}
                              fill
                              sizes="(min-width: 1280px) 14vw, (min-width: 768px) 24vw, 55vw"
                              className={`object-cover object-center transition duration-500 ${
                                hoveredProject === project.id
                                  ? "scale-[1.025]"
                                  : ""
                              }`}
                            />
                            <span className="absolute bottom-2 right-2 z-10 rounded-sm border border-white/10 bg-black/70 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.18em] text-stone-300">
                              {String(imageIndex + 1).padStart(2, "0")}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <Image
                        src={project.imgurl}
                        alt={project.title}
                        width={900}
                        height={620}
                        className={`h-full w-full object-cover object-top transition duration-500 ${
                          hoveredProject === project.id ? "scale-[1.03]" : ""
                        }`}
                      />
                    )}
                    {project.images && project.images.length > 1 && (
                      <div className="absolute bottom-4 left-4 z-20 rounded-full border border-white/10 bg-black/75 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.2em] text-stone-200 backdrop-blur-sm">
                        {project.images.length} vistas
                      </div>
                    )}
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
                        {project.deployedLink && (
                          <a
                            href={project.deployedLink}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-sm border border-red-500/50 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-red-400 transition hover:bg-red-500/10"
                          >
                            Demo
                          </a>
                        )}
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-sm border border-white/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-stone-300 transition hover:border-white/30"
                          >
                            Codigo
                          </a>
                        )}
                        {!project.deployedLink && !project.githubLink && (
                          <span className="rounded-sm border border-white/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-stone-500">
                            Caso visual
                          </span>
                        )}
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
                  {String(orderedProjects.length).padStart(2, "0")} files
                </p>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-red-400">
                Live feed
              </div>
            </div>
          </section>

          <section id="generative-ai" aria-labelledby="generative-ai-title">
            <motion.article
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.65 }}
              className="overflow-hidden rounded-[28px] border border-[#d6b56b]/25 bg-[linear-gradient(135deg,rgba(214,181,107,0.1),rgba(255,255,255,0.025)_48%,rgba(255,48,48,0.07))]"
            >
              <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
                <div className="border-b border-white/10 p-6 md:p-8 lg:border-b-0 lg:border-r">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#d6b56b]">
                      Aprendizaje en curso · Agentic software
                    </p>
                    <span className="rounded-full border border-[#d6b56b]/25 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.2em] text-[#f1dfb0]">
                      DeepLearning.AI
                    </span>
                  </div>
                  <h2
                    id="generative-ai-title"
                    className="mt-6 font-display text-4xl uppercase leading-none text-stone-100 md:text-5xl"
                  >
                    Generative AI for Software Development
                  </h2>
                  <p className="mt-4 text-sm text-stone-400">
                    Programa de Laurence Moroney · 32+ horas · 80 lecciones
                  </p>
                  <p className="mt-6 text-base leading-8 text-stone-300">
                    Formación aplicada para integrar LLMs durante todo el ciclo
                    de software: diseño, generación de código, pruebas,
                    depuración, documentación, dependencias, patrones y
                    arquitectura de datos.
                  </p>
                  <a
                    href="https://www.deeplearning.ai/specializations/generative-ai-for-software-development"
                    target="_blank"
                    rel="noreferrer"
                    className="cta-primary mt-7"
                  >
                    Ver especialización
                  </a>
                </div>

                <div className="p-6 md:p-8">
                  <p className="section-kicker text-red-400">
                    Foco de aplicación
                  </p>
                  <h3 className="mt-4 text-3xl text-stone-100">
                    Harness Engineering
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-stone-300">
                    La siguiente etapa no consiste solo en pedirle código a un
                    modelo. Consiste en diseñar el entorno que permite a los
                    agentes trabajar con autonomía: especificaciones,
                    conocimiento del repositorio, herramientas, permisos,
                    sandboxes, pruebas y ciclos de evaluación.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {[
                      ["01", "Contexto", "Specs y conocimiento legible"],
                      ["02", "Ejecución", "Herramientas y sandboxes seguros"],
                      ["03", "Validación", "Tests y feedback automático"],
                    ].map(([index, title, detail]) => (
                      <div
                        key={index}
                        className="rounded-[20px] border border-white/10 bg-black/20 p-4"
                      >
                        <span className="font-mono text-[10px] text-red-400">
                          {index}
                        </span>
                        <strong className="mt-3 block text-sm text-stone-100">
                          {title}
                        </strong>
                        <p className="mt-2 text-xs leading-5 text-stone-500">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-[20px] border border-white/10 bg-black/20 p-5">
                    <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-stone-500">
                      Herramientas de IA con las que trabajo
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {aiTools.map((tool) => (
                        <div
                          key={tool.name}
                          className="rounded-[16px] border border-white/10 bg-white/[0.03] p-3"
                        >
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-100 p-2">
                            <Image
                              src={skillLogoByName[tool.name]}
                              alt=""
                              width={22}
                              height={22}
                              className="h-[22px] w-[22px] object-contain"
                            />
                          </span>
                          <strong className="mt-3 block text-xs text-stone-100">
                            {tool.name}
                          </strong>
                          <span className="mt-1 block text-[10px] leading-4 text-stone-500">
                            {tool.focus}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 rounded-[20px] border border-white/10 bg-white/[0.025] p-5">
                    <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-stone-500">
                      Por qué es el futuro
                    </p>
                    <p className="mt-3 text-sm leading-7 text-stone-300">
                      OpenAI ya documentó un producto funcional construido
                      enteramente por agentes; Anthropic está logrando
                      aplicaciones full stack en sesiones de varias horas; y
                      Vercel está convirtiendo los harnesses de Codex y Claude
                      Code en una capa programable e intercambiable. El valor
                      del desarrollador se desplaza de escribir cada línea a
                      diseñar sistemas donde los agentes ejecutan y la calidad
                      se verifica de forma continua.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <a
                        href="https://openai.com/index/harness-engineering/"
                        target="_blank"
                        rel="noreferrer"
                        className="harness-source"
                      >
                        OpenAI ↗
                      </a>
                      <a
                        href="https://www.anthropic.com/engineering/harness-design-long-running-apps"
                        target="_blank"
                        rel="noreferrer"
                        className="harness-source"
                      >
                        Anthropic ↗
                      </a>
                      <a
                        href="https://vercel.com/changelog/program-agent-harnesses-with-ai-sdk"
                        target="_blank"
                        rel="noreferrer"
                        className="harness-source"
                      >
                        Vercel ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          </section>
        </main>

        <footer
          id="contacto"
          className="relative z-10 mt-4 border-t border-white/10 bg-black/25"
          aria-label="Contacto y enlaces profesionales"
        >
          <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-12">
            <div className="mb-10 grid gap-6 rounded-[28px] border border-[#d6b56b]/25 bg-[linear-gradient(135deg,rgba(214,181,107,0.12),rgba(255,255,255,0.025)_55%,rgba(255,48,48,0.08))] p-6 md:p-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="section-kicker text-[#d6b56b]">
                  Contacto directo
                </p>
                <h2 className="mt-4 max-w-3xl font-display text-4xl uppercase leading-none text-stone-100 md:text-5xl">
                  Construyamos algo útil, sólido y listo para crecer.
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-stone-300">
                  Disponible para oportunidades, colaboraciones y productos que
                  combinen software, IA, mobile o integración hardware-software.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <a
                  href="https://wa.me/51991004126"
                  target="_blank"
                  rel="noreferrer"
                  className="cta-primary"
                >
                  Escribir por WhatsApp
                </a>
                <a href="mailto:jguevaral@uni.pe" className="cta-secondary">
                  Enviar correo
                </a>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
              <div>
                <div className="flex items-center gap-4">
                  <Image
                    src="/logo.png"
                    alt="Logo de Eduardo Guevara"
                    width={54}
                    height={54}
                    className="h-14 w-14 rounded-[16px] object-cover"
                  />
                  <div>
                    <p className="font-display text-2xl uppercase tracking-[0.16em] text-stone-100">
                      Eduardo Guevara
                    </p>
                    <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-[#d6b56b]">
                      Full Stack, Mobile & AI-Assisted Developer
                    </p>
                  </div>
                </div>
                <p className="mt-6 max-w-md text-sm leading-7 text-stone-400">
                  Desarrollo de productos web, mobile, IA e IoT con una mirada
                  integral sobre experiencia, arquitectura, automatización e
                  implementación.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href="mailto:jguevaral@uni.pe"
                  className="contact-card sm:col-span-2"
                >
                  <span className="contact-label">Correo profesional</span>
                  <strong className="contact-value break-words text-base">
                    jguevaral@uni.pe
                  </strong>
                </a>
                <a
                  href="https://wa.me/51991004126"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card"
                >
                  <span className="contact-label">WhatsApp</span>
                  <strong className="contact-value text-base">
                    +51 991 004 126
                  </strong>
                </a>
                <a
                  href="https://www.linkedin.com/in/jhunior-guevara-889483162"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card"
                >
                  <span className="contact-label">LinkedIn</span>
                  <strong className="contact-value break-words text-base">
                    jhunior-guevara-889483162
                  </strong>
                </a>
                <a
                  href="https://github.com/eduardo202020"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card"
                >
                  <span className="contact-label">GitHub</span>
                  <strong className="contact-value break-words text-base">
                    github.com/eduardo202020
                  </strong>
                </a>
                <a
                  href="/extraImages/cv.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card"
                >
                  <span className="contact-label">Currículum</span>
                  <strong className="contact-value text-base">
                    Ver CV en PDF
                  </strong>
                </a>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 font-mono text-[9px] uppercase tracking-[0.2em] text-stone-500 sm:flex-row sm:items-center sm:justify-between">
              <span>© 2026 Eduardo Guevara</span>
              <a
                href="#top"
                className="transition hover:text-[#f1dfb0]"
                aria-label="Volver al inicio de la página"
              >
                Volver arriba ↑
              </a>
            </div>
          </div>
        </footer>
      </div>
      {activeCertificate && (
        <CertificatePDFViewer
          documentPath={activeCertificate.document}
          title={activeCertificate.title}
          onClose={() => setActiveCertificate(null)}
        />
      )}
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
