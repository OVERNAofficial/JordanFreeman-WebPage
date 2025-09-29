import ProjectDetailLayout from "@/components/ProjectDetailLayout";

export default function PluginsPage() {
  return (
    <ProjectDetailLayout
  title="ØVERNA PORTAL VST3/AU"
  description="ØVERNA PORTAL VST3/AU is a secure, next-generation plugin manager portal designed for modern audio creators. Featuring a robust database pipeline for seamless license management and plugin organization, the portal combines advanced security with a visually stunning, intuitive interface. Experience ØVERNA’s collection of beautifully crafted VST3/AU plugins—each engineered for creative power, reliability, and a cutting-edge user experience."
      features={[
        "Secure plugin manager portal with user authentication",
        "Modern, intuitive interface for effortless plugin management",
        "Robust database pipeline for license and plugin tracking",
        "Beautifully designed VST3/AU plugins for creative audio workflows",
        "Seamless organization and deployment of plugin assets",
      ]}
  logo="https://pub-9aefa38e687745f1bc54163088917511.r2.dev/assets/OVERNAthemelogo.png"
  video="https://pub-9aefa38e687745f1bc54163088917511.r2.dev/assets/overnapllugins.mp4"
      prev={{ path: "/projects/saastrend", label: "SaaS-Trend" }}
      next={{ path: "/projects/racetek", label: "RACETEK" }}
    />
  );
}
