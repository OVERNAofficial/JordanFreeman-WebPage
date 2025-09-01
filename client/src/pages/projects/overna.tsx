import ProjectDetailLayout from "@/components/ProjectDetailLayout";

export default function OvernaPage() {
  return (
    <ProjectDetailLayout
      title="ØVERNA Composer"
      description="Autonomous DAW assistant for MIDI/sample generation, real-time automation, and seamless integration with MPC, Reaper, and Ableton."
      features={[
        "AI-driven MIDI and sample creation",
        "Real-time automation with virtual MIDI ports",
        "Drag-and-drop export to MPC and DAWs",
        "Supports multi-layer tracks with effects",
      ]}
  logo="https://pub-9aefa38e687745f1bc54163088917511.r2.dev/assets/OVERNAthemelogo.png"
  video="https://pub-9aefa38e687745f1bc54163088917511.r2.dev/assets/overnademo.mp4"
      prev={{ path: "/projects/racetek", label: "RACETEK" }}
      next={{ path: "/projects/aermorix", label: "AERMORIX" }}
    />
  );
}
