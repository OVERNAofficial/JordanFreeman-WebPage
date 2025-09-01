import ProjectDetailLayout from "@/components/ProjectDetailLayout";

export default function AermorixPage() {
  return (
    <ProjectDetailLayout
      title="Ærmorix"
      description="AI-powered cybersecurity platform delivering real-time monitoring, automated defense, and intelligent threat analysis."
      features={[
        "Live monitoring of system health and threats",
        "AI-driven automated incident response",
        "Customizable alerting and dashboards",
        "Real-time attack detection and defense",
      ]}
  logo="https://pub-9aefa38e687745f1bc54163088917511.r2.dev/assets/AERMORIX.png"
  video="https://pub-9aefa38e687745f1bc54163088917511.r2.dev/assets/aermorixdemo.mp4"
      prev={{ path: "/projects/overna", label: "ØVERNA" }}
      next={{ path: "/projects/synterra", label: "SYNTERRA" }}
    />
  );
}
