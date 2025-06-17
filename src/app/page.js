import Carousal from "./components/carousalPage";
import LandingPage from "./components/landingPage";
import Marquee from "./components/marquee";
import PlumpKits from "./components/plumpKitsPage";

export default function Home() {
  return (
    <div className="min-h-dvh h-full py-5 overflow-x-hidden">
      <LandingPage />
      <Carousal />
      <Marquee />
      <PlumpKits />
    </div>
  );
}
