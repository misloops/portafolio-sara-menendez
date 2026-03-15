import whatsappIcon from '../assets/icons/whatsapp.svg';

type WhatsAppButtonProps = {
  phoneNumber?: string;
  label?: string;
};

function WhatsAppButton({
  phoneNumber = '+34625977711',
  label = 'Escribeme'
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all duration-300 ease-in-out cursor-pointer shadow-md hover:opacity-90"
      style={{backgroundColor: '#98c29b', color: '#000000'}}
    >
      {label}
      <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
    </a>
  );
}

export default WhatsAppButton;
