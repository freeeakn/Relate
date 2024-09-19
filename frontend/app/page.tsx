import CRMBanner from "@/components/ui/HomePage/CRMBanner";
import DemoCard from "@/components/ui/HomePage/DemoCard";

export default function Home() {
  return (
    <div className="container my-12 flex flex-col items-center gap-20">
      <CRMBanner />
      <DemoCard />
    </div>
  );
}
