import React from "react";
import { Terminal } from "lucide-react";
import { useFadeOnView } from "../../hooks/useFadeOnView"; // Importe aqui!

const TechCard = ({ title, items }) => (
  <div className="p-6 bg-stone-800/20 border border-stone-800 rounded-2xl group hover:bg-stone-800/40 transition-all text-left">
    <h4 className="text-green-400 font-mono mb-4 flex items-center gap-2">
      <Terminal size={16} /> {title}
    </h4>
    <div className="flex flex-wrap gap-x-3 gap-y-1">
      {items.map((item) => (
        <span
          key={item}
          className="text-stone-400 group-hover:text-stone-200 transition-colors"
        >
          {item}{" "}
          <span className="text-green-500/30 text-xs ml-1 font-bold">/</span>
        </span>
      ))}
    </div>
  </div>
);

export { TechCard };
