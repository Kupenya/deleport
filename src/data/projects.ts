export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  video: string;
  description: string;
}

// INSTRUCTIONS FOR THE USER:
// To use Google Drive videos:
// 1. Upload your video to Google Drive.
// 2. Right-click > Share > "Anyone with the link" can "View".
// 3. Open the video in a new window (3 dots > Open in new window).
// 4. In the new window, click 3 dots > Embed item.
// 5. Copy the URL from the src attribute of the iframe code (e.g., "https://drive.google.com/file/d/.../preview").
// 6. Paste that URL into the 'video' field below.

export const projects: Project[] = [
  {
    id: "ardo-cars",
    title: "Ardo Cars",
    category: "Commercial",
    year: "2024",
    image: "/images/ardo-cars.jpg", 
    video: "https://drive.google.com/file/d/1_kx8GwRt8uOzkYERJrSWzSzvIb-lOS2z/preview",
    description:
      "High-octane automotive cinematography capturing the essence of speed and design.",
  },
  {
    id: "cci-ikeja",
    title: "CCI Ikeja",
    category: "Event",
    year: "2024",
    image: "/images/cci-ikeja.jpg",
    video: "https://drive.google.com/file/d/1aqi97JoQGL2dLmcnPUkOPUBWofqwtnIi/preview",
    description:
      "Capturing the vibrant spiritual moments and community energy.",
  },
  {
    id: "first-bank",
    title: "First Bank",
    category: "Corporate",
    year: "2025",
    image: "/images/first-bank.jpg",
    video: "https://drive.google.com/file/d/1gqxvFnnZ0UbQsXnxqdSH6SNHMdvk0rh3/preview",
    description:
      "Professional asset management campaign focusing on trust and growth.",
  },
  {
    id: "kelar-thrillz",
    title: "Kelar Thrillz - Louder",
    category: "Music Video",
    year: "2025",
    image: "/images/kelar-thrillz.jpg",
    video: "https://drive.google.com/file/d/1q943RAcp0ZeFjHotEdYRbdb5kegKLjLV/preview",
    description: "Vibrant visuals matching the high energy of the track.",
  },
  {
    id: "love-legacy",
    title: "Love Legacy",
    category: "Documentary",
    year: "2025",
    image: "/images/love-legacy.jpg",
    video: "https://drive.google.com/file/d/160xyN9rRo7Ephf6o4zFwXzyuJs-5yeEn/preview",
    description:
      "Intimate stories of enduring love and human connection.",
  },
  {
    id: "malt-and-nestel",
    title: "Malt & Nestel",
    category: "Commercial",
    year: "2025",
    image: "/images/malt-nestel.jpg",
    video: "https://drive.google.com/file/d/1zlNVUhC9Z7bMcS91VGhq0PkvOZsNAJ76/preview",
    description: "Crisp and refreshing product cinematography.",
  },
  {
    id: "osmo-pocket-3",
    title: "Osmo Pocket 3",
    category: "Tech Review",
    year: "2025",
    image: "/images/osmo-pocket.jpg",
    video: "https://drive.google.com/file/d/1JjSzrMRvpNwqBZVR_RVfBw8pUxeeEYGu/preview",
    description: "Showcasing cinematic capabilities in a compact form factor.",
  },
  {
    id: "dj-horphuray",
    title: "Big Ray",
    category: "Music Video",
    year: "2025",
    image: "/images/big-ray.jpg",
    video: "https://drive.google.com/file/d/1wjPxnovqeOQfWpsqsTe9V20NYlmDCWbd/preview",
    description: "Stylized performance visuals for DJ Horphuray.",
  },
  {
    id: "ethan-otedola",
    title: "Ethan Otedola",
    category: "Personal Brand",
    year: "2025",
    image: "/images/ethan-otedola.jpg",
    video: "https://drive.google.com/file/d/1N5-zfNocX-oT0IsV4uQWsr3vvNP0I-DE/preview",
    description: "Cinematic portraiture and lifestyle branding.",
  },
  {
    id: "steven-loya",
    title: "Steven Loya",
    category: "Profile",
    year: "2025",
    image: "/images/steven-loya.jpg",
    video: "https://drive.google.com/file/d/1GXoUKfOKeuKAfqo5jVXyG-EtCSg3RjK3/preview",
    description: "A visual profile highlighting story and character.",
  },
  {
    id: "swebs-coding",
    title: "Swebs Coding",
    category: "Commercial",
    year: "2024",
    image: "/images/swebs-coding.jpg",
    video: "https://drive.google.com/file/d/1YTd_lIrjUMdv6WkTo3ZR1KzZlIsSjn_B/preview",
    description: "Showcasing modern tech education and digital skills training.",
  },
];
