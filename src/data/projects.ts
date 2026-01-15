export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  video: string; // Main video (used for preview/hero if no videos array)
  videos?: string[]; // Optional array of all video links for this project
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
    videos: [
      "https://drive.google.com/file/d/1_kx8GwRt8uOzkYERJrSWzSzvIb-lOS2z/preview",
      "https://drive.google.com/file/d/1_jh0ZdgSdZwW5trHNNCJvEPGA0o5kdbk/preview",
      "https://drive.google.com/file/d/1_gZQK8HNYmdk6mgxr5NwZrGggRJwyNVp/preview",
      "https://drive.google.com/file/d/12qMbBecZqbG7lqK1eeaqIfblrZb6cjmF/preview",
      "https://drive.google.com/file/d/12q8rHdlnD_9LwkfAdqxMMrHxFba4v3zX/preview",
      "https://drive.google.com/file/d/12kkaxNsYD-uGaLezmeniT8ZYRAh3GWyz/preview",
    ],
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
    videos: [
      "https://drive.google.com/file/d/1ZEBDmml7f1g_i0WN0F9ldddoGFNBZQal/preview",
      "https://drive.google.com/file/d/1YvZ8Yvgr6ecHJV3OTA-9aLzuC8OFwJ5j/preview",
      "https://drive.google.com/file/d/1YtRBne1FWKjfPh2XO6PVS0hiBENLIkP0/preview",
      "https://drive.google.com/file/d/1bYqu-G2iovu3BoWccxADlsQW30KtNE5L/preview",
      "https://drive.google.com/file/d/1bMOFSF7SGT5NcfTdJjMvWyX9yOGUlYja/preview",
      "https://drive.google.com/file/d/1bbJFSO-SMk3auq_5nGS6keC_kI7SIdLm/preview",
      "https://drive.google.com/file/d/1bsVreMlQbkrwu_hY4-iIyVQ6eJp7FO-I/preview",
      "https://drive.google.com/file/d/1brK6Vihw28yuV-iIYFElBNTttWd5bmYt/preview",
      "https://drive.google.com/file/d/1b6PyW3n8nr7CWS6NrwRzcAzJitY2A09N/preview",
    ],
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
    videos: [
      "https://drive.google.com/file/d/1q943RAcp0ZeFjHotEdYRbdb5kegKLjLV/preview",
      "https://drive.google.com/file/d/1hTLMh1_SLiZBeLRO-8ApvOkQTjlPVQAS/preview",
      "https://drive.google.com/file/d/1q943RAcp0ZeFjHotEdYRbdb5kegKLjLV/preview", // Note: This link appeared twice in your list, I'm keeping it if it's intentional or unique content
      "https://drive.google.com/file/d/1D8S6ncefx2cyEeLg597Hq89yWnppPop2/preview",
      "https://drive.google.com/file/d/1EFmydVeqSoAarORo4nPREdKHJCXJq7Ay/preview",
      "https://drive.google.com/file/d/1kocDIXtaJ5OM5U3BZoI3TRFLU8ujR1dF/preview",
      "https://drive.google.com/file/d/1FVo1ljaBPFAEecNiEBcYt5FRwH6mg779/preview",
      "https://drive.google.com/file/d/1FdERhs0fF9lbYpqU86kc4h1wrkPC1C8r/preview",
      "https://drive.google.com/file/d/1IXEsgh_kcJZC2uUUlNcdUlK3Xx5aZP-a/preview",
    ],
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
    videos: [
      "https://drive.google.com/file/d/1zlNVUhC9Z7bMcS91VGhq0PkvOZsNAJ76/preview",
      "https://drive.google.com/file/d/1lkiCZBmtvVr_9pIArK-A-0RZPx2e4Hqv/preview",
      "https://drive.google.com/file/d/14aVYGmcNSmDCeNPqUmGqHjoLffX_FLMV/preview",
    ],
    description: "Crisp and refreshing product cinematography.",
  },
  {
    id: "osmo-pocket-3",
    title: "Osmo Pocket 3",
    category: "Tech Review",
    year: "2025",
    image: "/images/osmo-pocket.jpg",
    video: "https://drive.google.com/file/d/1JjSzrMRvpNwqBZVR_RVfBw8pUxeeEYGu/preview",
    videos: [
      "https://drive.google.com/file/d/1JjSzrMRvpNwqBZVR_RVfBw8pUxeeEYGu/preview",
      "https://drive.google.com/file/d/1UIyKUb_Q1aglgiqBSEB5niBZZHNGv6_o/preview",
      "https://drive.google.com/file/d/1sxDrGi0qcgSxDjMzbRMe9GqJ52XGAXbB/preview",
    ],
    description: "Showcasing cinematic capabilities in a compact form factor.",
  },
  {
    id: "dj-horphuray",
    title: "Big Ray",
    category: "Music Video",
    year: "2025",
    image: "/images/big-ray.jpg",
    video: "https://drive.google.com/file/d/1wjPxnovqeOQfWpsqsTe9V20NYlmDCWbd/preview",
    videos: [
      "https://drive.google.com/file/d/1wjPxnovqeOQfWpsqsTe9V20NYlmDCWbd/preview",
      "https://drive.google.com/file/d/11rIc6cxQrZ1xYXo5VXg3Nri3YbsQVV7x/preview",
    ],
    description: "Stylized performance visuals for DJ Horphuray.",
  },
  {
    id: "ethan-otedola",
    title: "Ethan Otedola",
    category: "Personal Brand",
    year: "2025",
    image: "/images/ethan-otedola.jpg",
    video: "https://drive.google.com/file/d/1N5-zfNocX-oT0IsV4uQWsr3vvNP0I-DE/preview",
    videos: [
      "https://drive.google.com/file/d/1N5-zfNocX-oT0IsV4uQWsr3vvNP0I-DE/preview",
      "https://drive.google.com/file/d/1q8s-5XszzbnZaBGdqJEmD_Oi9-wUhFmR/preview",
      "https://drive.google.com/file/d/1qDdWckBtQ9s27R5pOdUh5-UqAtr808lJ/preview",
      "https://drive.google.com/file/d/1qEvsahIx2_gExIcHd_JRN7g1dvyCp3MN/preview",
      "https://drive.google.com/file/d/1r50ocMozp2lmGeF43tycEsXY9a5yMbFF/preview",
      "https://drive.google.com/file/d/1qHWMx9gRYsQaWrkJVrorFcql51Yu9uFf/preview",
      "https://drive.google.com/file/d/1qL-YdNNUESh1GqjmUvq9lBwI2UW95kTP/preview",
      "https://drive.google.com/file/d/1qMku2RSYOn9xwR9ArWi44ZY5KuTQKV3E/preview",
      "https://drive.google.com/file/d/1r2ObbF2JRFi9-Wu3XrRpAp3b-2gJK0fk/preview",
      "https://drive.google.com/file/d/1psmTGZJr6hrJ-kVRRs7a8tGt7U8H3LV2/preview",
      "https://drive.google.com/file/d/1q7jz7d417z6i860KIHiU8OrMaquygvs9/preview",
      "https://drive.google.com/file/d/1qBx34S2O_k9Lcr8siaN54L7LFTcxXuVP/preview",
      "https://drive.google.com/file/d/1p5d0DjH4vPtmMdO3cOzNOldU_TPgTbgb/preview",
    ],
    description: "Cinematic portraiture and lifestyle branding.",
  },
  {
    id: "steven-loya",
    title: "Steven Loya",
    category: "Profile",
    year: "2025",
    image: "/images/steven-loya.jpg",
    video: "https://drive.google.com/file/d/1GXoUKfOKeuKAfqo5jVXyG-EtCSg3RjK3/preview",
    videos: [
      "https://drive.google.com/file/d/1GXoUKfOKeuKAfqo5jVXyG-EtCSg3RjK3/preview",
      "https://drive.google.com/file/d/1r8fnQy64aJNmuV2lDMyYQTlRGnTiw2_9/preview",
      "https://drive.google.com/file/d/1H-YiHJdgGWl-u2acCL59PfeoFv3XEN8d/preview",
    ],
    description: "A visual profile highlighting story and character.",
  },
  {
    id: "swebs-coding",
    title: "Swebs Coding",
    category: "Commercial",
    year: "2024",
    image: "/images/swebs-coding.jpg",
    video: "https://drive.google.com/file/d/1YTd_lIrjUMdv6WkTo3ZR1KzZlIsSjn_B/preview",
    videos: [
      "https://drive.google.com/file/d/1YTd_lIrjUMdv6WkTo3ZR1KzZlIsSjn_B/preview",
      "https://drive.google.com/file/d/1YIK6_sac8Nh99qIlrrziWkWp_yWjV1E1/preview",
      "https://drive.google.com/file/d/1YCmrnJCrZMov2gHocXhbQf7ZVChK7L2F/preview",
    ],
    description: "Showcasing modern tech education and digital skills training.",
  },
];
