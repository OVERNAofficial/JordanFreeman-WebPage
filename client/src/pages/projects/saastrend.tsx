import ProjectDetailLayout from "@/components/ProjectDetailLayout";

export default function SaasTrendPage() {
  return (
    <ProjectDetailLayout
      title="SaaS-Trend"
      description="SaaS insights aggregator with trend tracking, Product Hunt integrations, and clean modern UI for newsletters and discovery."
      features={[
        "Track rising SaaS apps and tools",
        "Product Hunt, Indie Hackers, and HN integration",
        "Newsletter-ready clean UI design",
        "Modern stack with React + Tailwind",
      ]}
  logo="/assets/saas.png"
  video="/assets/saastrenddemo.mp4"
      prev={{ path: "/projects/synterra", label: "SYNTERRA" }}
      next={{ path: "/projects/plugins", label: "Plugins" }}
    />
  );
}
