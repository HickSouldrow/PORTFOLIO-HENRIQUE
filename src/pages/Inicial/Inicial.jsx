import { ProjectCard, TechCard } from "../../components";
import { Github, Linkedin, BookOpen, Terminal } from "lucide-react";
import { useFadeOnView } from "../../hooks/useFadeOnView";

import guardsenseImg from "../../assets/Guardsense.svg";
import glitchScreenImg from "../../assets/GlitchScreen.jpg";
import perfilImg from "../../assets/Perfil.jpeg";

const Inicial = () => {
  const heroAnim = useFadeOnView(0.1);

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 font-sans selection:bg-green-500/30 overflow-x-hidden">
      {/* BACKGROUND DECORATION */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-green-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[30vw] h-[30vw] bg-green-500/5 rounded-full blur-[100px]" />
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:py-24">
        {/* HERO SECTION - FOTO + TEXTO */}
        <section
          ref={heroAnim.ref}
          className={`flex flex-col md:flex-row items-center gap-12 transition-all duration-1000 ${heroAnim.visivel ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Avatar com efeito neon */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-stone-800 shadow-2xl">
              <img
                src={perfilImg}
                alt="Henrique Macedo"
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <span className="text-green-400 font-bold tracking-[0.7em] uppercase text-xs mb-4 block">
              Fullstack Developer
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-6">
              Henrique <span className="text-lime-500">Macedo</span>
            </h1>
            <p className="max-w-xl text-stone-400 text-lg md:text-xl leading-relaxed mb-8">
              Transformando lógica em interfaces intuitivas. Técnico pela ETEC,
              especializado em{" "}
              <span className="text-white font-medium">React</span>,{" "}
              <span className="text-white font-medium">MySQL</span> e{" "}
              <span className="text-white font-medium">Ecossistema .NET</span>.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="https://github.com/HickSouldrow"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-stone-800 hover:bg-stone-700 border border-stone-700 px-6 py-3 rounded-xl transition-all"
              >
                <Github size={20} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/henrique-da-silva-macedo"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-stone-900 font-bold px-6 py-3 rounded-xl transition-all shadow-[0_10px_30px_rgba(34,197,94,0.2)]"
              >
                <Linkedin size={20} /> LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* PROJETOS */}
        <section className="mt-40">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl font-black uppercase tracking-tighter italic">
              Projetos <span className="text-green-400">Selecionados</span>
            </h2>
            <div className="h-[2px] flex-1 bg-stone-800/50"></div>
          </div>

          <div className="grid gap-10">
            <ProjectCard
              title="GuardSense Web"
              description="Plataforma promocional para monitoramento inteligente. Foco em UX/UI minimalista, performance com Vite e total responsividade."
              tags={["React", "Node.js", "Tailwind CSS", "SPA"]}
              link="https://guardsense-web.vercel.app"
              image={guardsenseImg}
              imageBg="bg-white"
            />

            <ProjectCard
              title="GlitchScreen"
              description="Loja virtual de jogos Indie desenvolvida durante o HackTeen. Sistema de roteamento complexo e consumo de API por JSON."
              tags={["React Router", "Axios", "Vite", "Node.js"]}
              link="https://github.com/HickSouldrow/Glitchscreen"
              image={glitchScreenImg}
              delay="200ms"
              imageBg="bg-white"
              imageContain={true}
            />
          </div>
        </section>

        {/* CONHECIMENTOS & EDUCAÇÃO */}
        <section className="mt-40 grid md:grid-cols-2 gap-20">
          <div>
            <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
              <Terminal className="text-green-400" /> Tech Stack
            </h3>
            <div className="grid gap-4">
              <TechCard
                title="Frontend"
                items={[
                  "React",
                  "Javascript",
                  "Tailwind",
                  "Kotlin (Compose)",
                  "TailWindCss",
                  "C++",
                ]}
              />
              <TechCard
                title="Backend"
                items={[".NET", "Node.js", "C#", "PHP", "Firebase", "Kotlin"]}
              />
              <TechCard
                title="Tools"
                items={[
                  "Git/GitHub",
                  "Figma",
                  "Docker Basics",
                  "SQL",
                  "Astah",
                  "Visual Studio Code",
                  "Intellij",
                  "Android Studio",
                ]}
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
              <BookOpen className="text-green-400" /> Educação
            </h3>
            <div className="space-y-8">
              <div className="relative pl-6 border-l-2 border-stone-800">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                <h4 className="text-white font-bold">FATEC Zona Leste</h4>
                <p className="text-green-400 text-sm font-mono uppercase">
                  Técnico em Análise e Desenv. de Sistemas
                </p>
                <p className="text-stone-500 text-sm mt-2 italic">
                  Articulação Médio - Superior
                </p>
              </div>
              <div className="relative pl-6 border-l-2 border-stone-800">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-stone-700"></div>
                <h4 className="text-white font-bold">ETEC Zona Leste</h4>
                <p className="text-green-400 text-sm font-mono uppercase">
                  Técnico em Desenv. de Sistemas
                </p>
                <p className="text-stone-500 text-sm mt-2 italic">
                  Trabalho Relevante: HackTeen - GlitchScreen; TCC - GuardSense
                </p>
              </div>
              <div className="relative pl-6 border-l-2 border-stone-800">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-stone-700"></div>
                <h4 className="text-white font-bold">Bootcamp Akad - DIO</h4>
                <p className="text-green-400 text-sm font-mono uppercase">
                  Fullstack Developer
                </p>
                <p className="text-stone-500 text-sm mt-2">
                  Foco em .NET Core, APIs e C#
                </p>
              </div>
              <div className="relative pl-6 border-l-2 border-stone-800">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-stone-700"></div>
                <h4 className="text-white font-bold">
                  Bootcamp Santander 2026 - DIO{" "}
                </h4>
                <p className="text-green-400 text-sm font-mono uppercase">
                  AI React Front-end{" "}
                </p>
                <p className="text-stone-500 text-sm mt-2">
                  Foco em React, Typescript, AI APIs, TailwindCSS e CSS
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-40 pt-20 border-t border-stone-800 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <p className="text-stone-500 text-sm font-mono mb-2 uppercase">
                Vamos conversar?
              </p>
              <a
                href="mailto:henriquedasilvamacedo6@gmail.com"
                className="text-2xl md:text-2xl font-bold text-white hover:text-green-400 transition-colors break-all"
              >
                henriquedasilva
                <br className="md:hidden" />
                macedo6@gmail.com
              </a>
            </div>
            <div className="text-right">
              <p className="text-stone-600 text-sm italic">
                "I hope you liked it, go check my projects on Github :)."
              </p>
              <p className="text-stone-500 text-xs mt-4">
                © 2026 — São Paulo, BR
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export { Inicial };
