import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Terms from "@/components/TermsAndPolicy/Terms";

const TermsOfService = () => {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main>
        <Terms />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default TermsOfService;
