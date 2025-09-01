import ProjectDetailLayout from "@/components/ProjectDetailLayout";

export default function RacetekPage() {
  return (
    <ProjectDetailLayout
      title="RACETEK"
      description="AI-powered race strategy platform with real-time telemetry, tire degradation analysis, and ECHO assistant integration."
      features={[
        "Live telemetry overlays with AI analysis",
        "Tire degradation & fuel mapping predictions",
        "AI-driven pit stop timing and strategy",
        "ECHO assistant for real-time driver feedback",
      ]}
  logo="https://pub-9aefa38e687745f1bc54163088917511.r2.dev/assets/racetek-logo.png"
  video="https://pub-9aefa38e687745f1bc54163088917511.r2.dev/assets/racetekdemo.mp4"
      prev={{ path: "/projects/saastrend", label: "SaaS Trend" }}
      next={{ path: "/projects/overna", label: "ØVERNA" }}
    />
  );
}
