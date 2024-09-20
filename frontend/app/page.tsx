import CRMBanner from "@/components/ui/HomePage/CRMBanner";
import DemoCard from "@/components/ui/HomePage/DemoCard";
import DemoStatistic from "@/components/ui/HomePage/DemoStatistic";

export default function Home() {
  return (
    <div className="container flex flex-col items-center">
      <CRMBanner />
      <DemoCard />
      <DemoStatistic />
    </div>
  );
}
