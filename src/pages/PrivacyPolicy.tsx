import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Policy from "@/components/TermsAndPolicy/Policy";

const PrivacyPolicy = () => {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main>
        <Policy />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
