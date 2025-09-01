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
  logo="/assets/racetek-logo.png"
  video="/assets/racetekdemo.mp4"
      prev={{ path: "/projects/saastrend", label: "SaaS Trend" }}
      next={{ path: "/projects/overna", label: "ØVERNA" }}
    />
  );
}
