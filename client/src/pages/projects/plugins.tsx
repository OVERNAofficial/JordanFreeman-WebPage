import ProjectDetailLayout from "@/components/ProjectDetailLayout";

export default function PluginsPage() {
  return (
    <ProjectDetailLayout
      title="ØVERNA Focus (w/ Bridge)"
      description="A suite of ØVERNA audio plugins. Focus is a VST3/AU transient isolator designed to clean up kick bleeding and tighten low-end dynamics. Includes The Bridge, a creative audio utility for experimental sound design."
      features={[
        "Transient isolation to clean up kick bleeding",
        "Low-end tightening for better mix clarity",
        "Cross-platform support for VST3/AU",
        "Experimental sound design tools with The Bridge",
      ]}
  logo="/OVERNAthemelogo.png"
  video="/focusdemo.mp4"
      prev={{ path: "/projects/saastrend", label: "SaaS-Trend" }}
      next={{ path: "/projects/racetek", label: "RACETEK" }}
    />
  );
}
