export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  video: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: "silent-echo",
    title: "The Silent Echo",
    category: "Cinematography",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1600",
    video:
      "https://player.vimeo.com/external/494252666.hd.mp4?s=2f232015243851752b02e6c5180635338efbc002&profile_id=175",
    description:
      "An exploration of solitude and sound in the modern wilderness.",
  },
  {
    id: "urban-nomads",
    title: "Urban Nomads",
    category: "Creative Direction",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=1600",
    video:
      "https://player.vimeo.com/external/517090027.hd.mp4?s=999863261276022e0324107e997f0a8d6e3e571c&profile_id=175",
    description:
      "Capturing the pulse of the city through the eyes of those who move within it.",
  },
  {
    id: "golden-hour",
    title: "Golden Hour",
    category: "Visual Story",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&q=80&w=1600",
    video:
      "https://player.vimeo.com/external/459389137.hd.mp4?s=80396035882b09a936a5c31616715f3e58980a3a&profile_id=175",
    description:
      "A cinematic study on the transition of light and human emotion.",
  },
  {
    id: "lost-in-translation",
    title: "Lost in Translation",
    category: "Documentary",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1600",
    video:
      "https://player.vimeo.com/external/370374924.hd.mp4?s=7345672951717329598&profile_id=172",
    description:
      "Finding meaning in the spaces between languages and cultures.",
  },
  {
    id: "neon-dreams",
    title: "Neon Dreams",
    category: "Cinematography",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1519750783826-e2420f4d687f?auto=format&fit=crop&q=80&w=1600",
    video:
      "https://player.vimeo.com/external/370374924.hd.mp4?s=7345672951717329598&profile_id=172",
    description: "A high-contrast exploration of nightlife and electricity.",
  },
  {
    id: "tide-and-time",
    title: "Tide and Time",
    category: "Visual Story",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80&w=1600",
    video:
      "https://player.vimeo.com/external/494252666.hd.mp4?s=2f232015243851752b02e6c5180635338efbc002&profile_id=175",
    description:
      "The rhythmic nature of the ocean and its effect on the human psyche.",
  },
  {
    id: "concrete-jungle",
    title: "Concrete Jungle",
    category: "Creative Direction",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1600",
    video:
      "https://player.vimeo.com/external/517090027.hd.mp4?s=999863261276022e0324107e997f0a8d6e3e571c&profile_id=175",
    description: "Minimalist architecture meets complex human narratives.",
  },
  {
    id: "embers",
    title: "Embers",
    category: "Cinematography",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?auto=format&fit=crop&q=80&w=1600",
    video:
      "https://player.vimeo.com/external/459389137.hd.mp4?s=80396035882b09a936a5c31616715f3e58980a3a&profile_id=175",
    description: "Capturing the warmth and fragility of fire in slow motion.",
  },
  {
    id: "azure",
    title: "Azure",
    category: "Documentary",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1600",
    video:
      "https://player.vimeo.com/external/370374924.hd.mp4?s=7345672951717329598&profile_id=172",
    description: "A deep dive into the blue economy and coastal life.",
  },
  {
    id: "solitude",
    title: "Solitude",
    category: "Visual Story",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1478720143988-87779948020b?auto=format&fit=crop&q=80&w=1600",
    video:
      "https://player.vimeo.com/external/494252666.hd.mp4?s=2f232015243851752b02e6c5180635338efbc002&profile_id=175",
    description: "A meditative look at silence in a loud world.",
  },
  {
    id: "vanguard",
    title: "Vanguard",
    category: "Creative Direction",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1511447333015-45b65e60f6d1?auto=format&fit=crop&q=80&w=1600",
    video:
      "https://player.vimeo.com/external/517090027.hd.mp4?s=999863261276022e0324107e997f0a8d6e3e571c&profile_id=175",
    description: "The intersection of fashion and futurism.",
  },
  {
    id: "pulse",
    title: "Pulse",
    category: "Cinematography",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=1600",
    video:
      "https://player.vimeo.com/external/459389137.hd.mp4?s=80396035882b09a936a5c31616715f3e58980a3a&profile_id=175",
    description: "Rhythm and light captured in experimental sequences.",
  },
  {
    id: "oasis",
    title: "Oasis",
    category: "Documentary",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&q=80&w=1600",
    video:
      "https://player.vimeo.com/external/370374924.hd.mp4?s=7345672951717329598&profile_id=172",
    description: "Resilience and life in the harshest environments.",
  },
  {
    id: "metropolis",
    title: "Metropolis",
    category: "Visual Story",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?auto=format&fit=crop&q=80&w=1600",
    video:
      "https://player.vimeo.com/external/494252666.hd.mp4?s=2f232015243851752b02e6c5180635338efbc002&profile_id=175",
    description: "The complex geometry of urban existence.",
  },
  {
    id: "afterlight",
    title: "Afterlight",
    category: "Creative Direction",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&q=80&w=1600",
    video:
      "https://player.vimeo.com/external/517090027.hd.mp4?s=999863261276022e0324107e997f0a8d6e3e571c&profile_id=175",
    description: "What remains after the lights go out.",
  },
];
