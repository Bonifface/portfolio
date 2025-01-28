import { Topbar } from "@components/Topbar/Topbar";
import { Header } from "@components/Header/Header";
import { Projects } from "@components/Projects/Projects";

export default function Home() {
  return (
    <div>
      <Topbar />
      <Header />
      <Projects />
    </div>
  );
}
