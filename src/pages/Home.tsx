import DownloadApp from "@/components/LandingPage/DownloadApp";
import GetStarted from "@/components/LandingPage/GetStarted";
import LearnMore from "@/components/LandingPage/LearnMore";
import GetQuote from "@/components/LandingPage/GetQuote";
const Home = () => {
  return (
    <>
      <GetStarted />
      <GetQuote />
      <LearnMore />
      <DownloadApp />
    </>
  );
};

export default Home;
