import Hero from "./assets/Components/Hero/Hero";
import HeaderNavBar from "./assets/Components/Header/HeaderNavBar";
import Footer from "./assets/Components/Footer/Footer";
import ContactPage from "./assets/Components/ContactPages/ContactPage";
import ContactHeader from "./assets/Components/ContactHeader.jsx/ContactHeader";

function App() {
  return (
    <div>
      <HeaderNavBar />
      {/* <main
        className="
        h-[calc(100vh-72px)]
        flex
        justify-end
        flex-col
        "
      >
      </main> */}

      {/* <ContactHeader /> */}
      <ContactPage />
      {/* <Hero /> */}
      <Footer />
    </div>
  );
}

export default App;
