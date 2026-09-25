import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

function ContactPage() {
  return (
    <div
      className="min-h-screen text-dark"
      style={{
        background: 'linear-gradient(180deg, #d99a8a 0%, #e8927c 20%, #efb5a6 40%, #e7ccc2 55%, #e3e6e3 70%, #c3c7c3 85%, #dee2de 100%)',
        backgroundAttachment: 'fixed'
      }}
    >
      <Header activeSection="contacto" />
      <div className="h-20" />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default ContactPage;
