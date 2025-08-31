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
      logo="/assets/OVERNAthemelogo.png"
      video="/assets/overnademo.mp4"
      prev={{ path: "/projects/racetek", label: "RACETEK" }}
      next={{ path: "/projects/aermorix", label: "AERMORIX" }}
    />
  );
}
