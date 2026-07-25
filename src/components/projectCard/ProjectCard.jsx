import React, { useEffect, useRef, useState } from "react";
import { ExternalLink, Code2 } from "lucide-react";

const ProjectCard = ({
  title,
  description,
  tags,
  link,
  image,
  imageBg = "bg-stone-900",
  imageContain = false,
  delay = "0ms",
}) => {
  const ref = useRef(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisivel(true);
      },
      { threshold: 0.2 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: delay }}
      className={`group relative bg-stone-800/40 border border-stone-700/50 rounded-3xl overflow-hidden hover:border-green-500/50 transition-all duration-1000 transform ${
        visivel ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="p-8 md:p-10 flex flex-col lg:flex-row gap-8 items-center">
        {/* Conteúdo de Texto */}
        <div className="flex-1 text-left">
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
            {title}
          </h3>
          <p className="text-stone-400 mb-6 leading-relaxed text-sm md:text-base">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-wider font-mono bg-stone-900 text-green-400 border border-green-500/20 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-green-400 font-bold hover:underline"
          >
            Ver Detalhes <ExternalLink size={16} />
          </a>
        </div>

        {/* Área da Imagem com estilos dinâmicos */}
        <div
          className={`w-full lg:w-72 aspect-video ${imageBg} rounded-xl border border-stone-700 flex items-center justify-center relative overflow-hidden shadow-inner`}
        >
          {image ? (
            <img
              src={image}
              alt={title}
              className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${imageContain ? "object-contain p-4" : "object-cover"}`}
            />
          ) : (
            <Code2
              size={40}
              className="text-stone-800 group-hover:text-green-500/20 transition-colors"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export { ProjectCard };
