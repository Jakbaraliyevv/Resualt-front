import { Link } from "react-router-dom";
import insta from "../../assets/instagram.svg";
function ContactComponents() {
  return (
    <section className="w-[90%] m-auto">
      <div className="py-[20px]">
        <h2 className="py-[20px]  text-[37px] font-bold text-[#000]">
          Magic Cinema
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.205063531895!2d69.2438244758742!3d41.3044023713105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bf3870c714d%3A0x6ddece20c220333b!2sMagic%20city!5e0!3m2!1suz!2s!4v1741288833098!5m2!1suz!2s"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="mt-[20px] flex items-start justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-[19px] font-medium text-[#000]">Контакты</h2>
          <h4 className="text-[17px] font-normal text-[#000]">
            Для Информации:
          </h4>
          <a
            className="text-[19px] font-medium text-[#30cbb5]"
            href="tel:+998(71) 2052050"
          >
            +998(71) 2052050
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-[19px] font-medium text-[#000]">Адрес</h2>
          <p className="text-[19px] font-medium text-[#30cbb5]">Ташкент</p>
          <a
            className="text-[19px] font-normal text-[#30cbb5]"
            href="https://yandex.uz/maps/10335/tashkent/?feedback=object%2Fadd&feedback-context=map.controls&ll=69.244953%2C41.304595&z=18"
            target="_blank" // Bu atribut yangi tabda ochadi
            rel="noopener noreferrer" // Xavfsizlikni ta'minlash uchun qo'shish
          >
            ул. Бабура, 174
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-[19px] font-medium text-[#000]">Режим работы</h2>
          <p className="text-[17px] font-normal text-[#000]">
            С 10-00 до 23-00
          </p>
        </div>
      </div>

      <div className="py-11">
        <h2 className="text-[17px] font-normal text-[#000]">Социальные сети</h2>
        <div className="flex items-center gap-3 py-2">
          <Link
            to="#"
            onClick={() =>
              window.open(
                "https://www.instagram.com/_1.jakbaraliyev_?igsh=MWJqbTc3aWZ1N3o2Yg%3D%3D&utm_source=qr",
                "_blank"
              )
            }
          >
            <img className="w-[27px]" src={insta} alt="" />
          </Link>
          <p className="text-[17px] font-normal text-[#30cbb5]">Instagram</p>
        </div>
      </div>
    </section>
  );
}

export default ContactComponents;
