import { createFileRoute } from "@tanstack/react-router";
import JanmashtamiCanvas from "../components/janmashtami/JanmashtamiCanvas";
import SmoothScroll from "../components/janmashtami/SmoothScroll";
import AmbientAudio from "../components/janmashtami/AmbientAudio";

export const Route = createFileRoute("/janmashtami")({
  head: () => ({
    meta: [
      { title: "Janmashtami '26 — Bhaktivedanta Club IIT Kanpur" },
      {
        name: "description",
        content:
          "Experience Janmashtami at IIT Kanpur — a grand festival celebrating the appearance of Lord Krishna with cultural performances, 3D theme exhibits, ecstatic kirtan, competitions, and a sanctified feast.",
      },
      { property: "og:title", content: "Janmashtami Celebration — BVC IIT Kanpur" },
      {
        property: "og:description",
        content:
          "Experience the grand Janmashtami festival at IIT Kanpur. Music, dance, Abhishek, philosophy and feast.",
      },
      { property: "og:image", content: "/Janmashtami/images/janmashtami_loading.jpg" },
    ],
  }),
  component: JanmashtamiPage,
});

function JanmashtamiPage() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen text-white select-none" style={{ background: "#050208" }}>
        <AmbientAudio />
        <JanmashtamiCanvas />
      </main>
    </SmoothScroll>
  );
}
