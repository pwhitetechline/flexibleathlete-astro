export interface Video {
    title: string;
    description: string;
    duration: string;
    youtubeUrl: string;
    category: string;
}

export const videos: Video[] = [
    {
        title: "Understanding Knee Pain with Julie Donnelly: The Julstro Method",
        description: "Uncover her revolutionary protocol for identifying and self-treating these problematic muscle groups. She emphasizes the benefits of relieving taut muscles and increasing range of motion and strength. ",
        duration: "4:20",
        youtubeUrl: "https://www.youtube.com/watch?v=so-AbYiJnJs",
        category: "Tutorials"
    },
    {
        title: "Soothing Shin Splints and Foot Pain with Julstro Techniques: An Exclusive Look",
        description: "Julie uncovers the connection between shin splints and plantar fasciitis and takes a deeper dive into the role of the tibialis anterior muscle.",
        duration: "3:09",
        youtubeUrl: "https://www.youtube.com/watch?v=V8I268kxj10",
        category: "Tips"
    },
    {
        title: "Self-Treating Muscle and Joint Pain | ABC 7 - The View Interview",
        description: "Julie Donnelly of the Pain-Free Athlete explains a few basics of why muscles cause pain at joints and prevent you from moving freely during an interview with Stephanie Roberts of The View on ABC 7 Sarasota",
        duration: "6:23",
        youtubeUrl: "https://www.youtube.com/watch?v=ENW2K52JWOA",
        category: "Strategy"
    }
];
