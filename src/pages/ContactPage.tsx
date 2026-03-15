import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

function ContactPage() {
  return (
    <div
      className="min-h-screen text-dark"
      style={{
        background: 'linear-gradient(120deg, #f2e8f0 0%, #ede6eb 8%, #e8dce8 10%, #d4c4d4 24%, #b8d4c0 45%, #a8d8b0 70%, #b0deb8 85%, #f0e8f0 100%)',
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
