import Footer from "@/components/Footer";
import MenuNavigation from "@/components/MenuNavigation";
import Routers from "@/routes/Routers";
const Layout = () => {
  return (
    <>
      <MenuNavigation />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
