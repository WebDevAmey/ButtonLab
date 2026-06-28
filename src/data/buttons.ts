export type ButtonDef = {
  id: string;
  name: string;
  category: string;
  label: string;
  className: string;
  html: string;
  css: string;
};

export const buttons: ButtonDef[] = [
  {
    id: "gradient",
    name: "Gradient",
    category: "Fill",
    label: "Get Started",
    className: "btn-gradient",
    html: `<button class="btn-gradient">Get Started</button>`,
    css: `.btn-gradient {
  color: #fff;
  font-weight: 600;
  padding: 13px 28px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background: linear-gradient(135deg, #6366f1, #ec4899);
  box-shadow: 0 8px 20px -8px rgba(99, 102, 241, 0.6);
  transition: filter 0.2s ease, box-shadow 0.2s ease;
}

.btn-gradient:hover {
  filter: brightness(1.08);
  box-shadow: 0 10px 24px -6px rgba(99, 102, 241, 0.7);
}`,
  },
  {
    id: "neumorphic",
    name: "Neumorphism",
    category: "Soft UI",
    label: "Continue",
    className: "btn-neumorphic",
    html: `<button class="btn-neumorphic">Continue</button>`,
    css: `.btn-neumorphic {
  color: #d4d4d8;
  font-weight: 600;
  padding: 13px 28px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background: #1c1d22;
  box-shadow: 6px 6px 14px #0a0a0c, -6px -6px 14px #28292f;
  transition: color 0.2s ease, box-shadow 0.15s ease;
}

.btn-neumorphic:hover {
  color: #fff;
}

.btn-neumorphic:active {
  box-shadow: inset 4px 4px 10px #0a0a0c, inset -4px -4px 10px #28292f;
}`,
  },
  {
    id: "glass",
    name: "Glassmorphism",
    category: "Translucent",
    label: "Sign In",
    className: "btn-glass",
    html: `<button class="btn-glass">Sign In</button>`,
    css: `.btn-glass {
  color: #fff;
  font-weight: 600;
  padding: 13px 28px;
  border-radius: 10px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(8px);
  transition: background 0.2s ease;
}

.btn-glass:hover {
  background: rgba(255, 255, 255, 0.14);
}`,
  },
  {
    id: "outline",
    name: "Outline",
    category: "Minimal",
    label: "Learn More",
    className: "btn-outline",
    html: `<button class="btn-outline">Learn More</button>`,
    css: `.btn-outline {
  color: #f5f5f7;
  font-weight: 600;
  padding: 13px 28px;
  border-radius: 10px;
  cursor: pointer;
  background: transparent;
  border: 1.5px solid #3f3f46;
  transition: all 0.2s ease;
}

.btn-outline:hover {
  border-color: #f5f5f7;
  background: #f5f5f7;
  color: #0e0f12;
}`,
  },
  {
    id: "neon",
    name: "Neon",
    category: "Glow",
    label: "Play Now",
    className: "btn-neon",
    html: `<button class="btn-neon">Play Now</button>`,
    css: `.btn-neon {
  color: #00e0b0;
  font-weight: 600;
  padding: 13px 28px;
  border-radius: 10px;
  cursor: pointer;
  background: transparent;
  border: 1.5px solid #00e0b0;
  text-shadow: 0 0 6px rgba(0, 224, 176, 0.6);
  transition: all 0.2s ease;
}

.btn-neon:hover {
  color: #0e0f12;
  background: #00e0b0;
  box-shadow: 0 0 18px rgba(0, 224, 176, 0.8);
}`,
  },
  {
    id: "press",
    name: "3D Press",
    category: "Tactile",
    label: "Click Me",
    className: "btn-press",
    html: `<button class="btn-press">Click Me</button>`,
    css: `.btn-press {
  color: #fff;
  font-weight: 600;
  padding: 13px 28px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background: #00b894;
  box-shadow: 0 6px 0 #007a63;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.btn-press:hover {
  transform: translateY(2px);
  box-shadow: 0 4px 0 #007a63;
}

.btn-press:active {
  transform: translateY(6px);
  box-shadow: 0 0 0 #007a63;
}`,
  },
  {
    id: "gooey",
    name: "Gooey",
    category: "Playful",
    label: "Subscribe",
    className: "btn-gooey",
    html: `<button class="btn-gooey">Subscribe</button>`,
    css: `.btn-gooey {
  color: #fff;
  font-weight: 600;
  padding: 13px 28px;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  background: #f59e0b;
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), border-radius 0.25s ease;
}

.btn-gooey:hover {
  transform: scale(1.06);
  border-radius: 14px;
}

.btn-gooey:active {
  transform: scale(0.96);
}`,
  },
  {
    id: "retro",
    name: "Retro",
    category: "Skeuomorphic",
    label: "Download",
    className: "btn-retro",
    html: `<button class="btn-retro">Download</button>`,
    css: `.btn-retro {
  color: #3f1d04;
  font-weight: 700;
  padding: 13px 28px;
  border-radius: 8px;
  cursor: pointer;
  background: linear-gradient(180deg, #ffd479, #f5a524);
  border: 1px solid #c97f0a;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6), 0 3px 0 #c97f0a;
  transition: transform 0.1s ease, box-shadow 0.1s ease;
}

.btn-retro:active {
  transform: translateY(2px);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6), 0 1px 0 #c97f0a;
}`,
  },
];
