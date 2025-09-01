import ProjectDetailLayout from "@/components/ProjectDetailLayout";

export default function SynterraPage() {
  return (
    <ProjectDetailLayout
      title="SYNTERRA OS"
      description="Local modular AI operating system with file manager, macOS automation, browser integration, and persistent agent memory."
      features={[
        "Persistent AI agent memory system",
        "Local modular apps for autonomy",
        "macOS automation integration",
        "File manager, browser, and plugin support",
      ]}
  logo="/synterra-icon.png"
  video="/synterrademo.mp4"
      prev={{ path: "/projects/aermorix", label: "AERMORIX" }}
      next={{ path: "/projects/saastrend", label: "SaaS-Trend" }}
    />
  );
}
