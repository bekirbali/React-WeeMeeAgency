import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Modal from "./Modal";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    privacyPolicy: false,
  });

  const [showKvkkModal, setShowKvkkModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.privacyPolicy) {
      alert(t("contact.privacyPolicyRequired"));
      return;
    }
    // Handle form submission here
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_MAIL_KEY
      )
      .then((result) => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          privacyPolicy: false,
        });
      })
      .catch((err) => {});
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {t("contact.title")}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("contact.phone")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => {
                    // Only allow numbers
                    const value = e.target.value;
                    if (/^\d*$/.test(value)) {
                      handleChange(e); // Update state only if input is valid
                    }
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none"
                ></textarea>
              </div>
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="privacyPolicy"
                  name="privacyPolicy"
                  checked={formData.privacyPolicy}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
                {i18n.language === "tr" ? (
                  <label
                    htmlFor="privacyPolicy"
                    className="text-sm text-gray-600"
                  >
                    {t("kvkk.personal")}{" "}
                    <button
                      type="button"
                      onClick={() => setShowKvkkModal(true)}
                      className="text-primary underline"
                    >
                      {t("kvkk.text")}
                    </button>{" "}
                    {t("kvkk.process")} *
                  </label>
                ) : (
                  <label
                    htmlFor="privacyPolicy"
                    className="text-sm text-gray-600"
                  >
                    {t("kvkk.personal")} {t("kvkk.process")}{" "}
                    <button
                      type="button"
                      onClick={() => setShowKvkkModal(true)}
                      className="text-primary underline"
                    >
                      {t("kvkk.text")}
                    </button>{" "}
                    *
                  </label>
                )}
              </div>
              <button type="submit" className="btn-primary w-full">
                {t("contact.send")}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {/* {t("contact.title")} */}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPinIcon className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-gray-600">
                      Barbaros Mah. Begonya Sok. Nidakule Ataşehir Batı Kapı
                      No:1 Daire:2 Ataşehir/İstanbul 34746
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <PhoneIcon className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-gray-600">+90 538 489 27 55</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <EnvelopeIcon className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-gray-600">info@weemeagency.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.1848774222844!2d29.094009076353185!3d40.999326519975526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac881d8b5f58b%3A0x9e5dca387091b318!2sNidakule%20Ata%C5%9Fehir%20Bat%C4%B1!5e0!3m2!1str!2str!4v1737023829572!5m2!1str!2str"
                  width="600"
                  height="450"
                  allowFullScreen=""
                  title="map"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* KVKK */}
      <Modal
        isOpen={showKvkkModal}
        onClose={() => setShowKvkkModal(false)}
        title={t("kvkk.text")}
      >
        <div className="prose prose-sm">
          <h2 className="font-extrabold text-xl">
            KİŞİSEL VERİLERİN İŞLENMESİ VE KORUNMASI POLİTİKASI
          </h2>
          <h3 className="text-lg font-bold">1. Giriş</h3>
          <p>
            İşbu Kişisel Verilerin İşlenmesi ve Korunması Politikası
            (“Politika”), Weemeagency’nin 6698 Sayılı Kişisel Verilerin
            Korunması Kanunu ve ilgili mevzuat ile hayata geçirilen veri koruma
            yükümlülüklerini yerine getirilmekle beraber ek olarak kişisel
            verileri işleme aşamasında Weemeagency içinde ve/veya Weemeagency
            tarafından uyulması gereken esasları belirlemektedir.
          </p>
          <h3 className="text-lg font-bold">2. Tanımlar</h3>
          <ul className="list-disc list-inside">
            <li>
              <span className="font-semibold">Açık Rıza: </span>Belirli bir
              konuya ilişkin bilgilendirmeye dayanan ve özgür iradeyle açıklanan
              rızayı,
            </li>
            <li>
              <span className="font-semibold">Anonim Hale Getirme: </span>
              Kişisel verinin, kişisel veri niteliğini kaybedecek ve bu durumun
              geri alınamayacağı şekilde değiştirilmesini,
            </li>
            <li>
              <span className="font-semibold">Çalışan: </span>Görev ve ünvanına
              bakılmaksızın Weemeagency personelini,
            </li>
            <li>
              <span className="font-semibold">Şirket: </span>Weemeagency’yi,
            </li>
            <li>
              <span className="font-semibold">Kanun: </span>6698 sayılı Kişisel
              Verilerin Korunması Kanunu’nu,
            </li>
            <li>
              <span className="font-semibold">Kişisel Veri Sahibi: </span>
              Kişisel verisi işlenen gerçek kişiyi,
            </li>
            <li>
              <span className="font-semibold">Kişisel Veri: </span>Kimliği
              belirli veya belirlenebilir gerçek kişiye ilişkin her türlü
              bilgiyi,
            </li>
            <li>
              <span className="font-semibold">
                Kişisel Verilerin İşlenmesi:{" "}
              </span>
              Kişisel verilerin tamamen veya kısmen otomatik olan ya da herhangi
              bir veri kayıt sisteminin parçası olmak kaydıyla otomatik olmayan
              yollarla elde edilmesi, kaydedilmesi, depolanması, muhafaza
              edilmesi, değiştirilmesi, yeniden düzenlenmesi, açıklanması,
              aktarılması, devralınması, elde edilebilir hâle getirilmesi,
              sınıflandırılması ya da kullanılmasının engellenmesi gibi veriler
              üzerinde gerçekleştirilen her türlü işlemi,
            </li>
            <li>
              <span className="font-semibold">
                Özel Nitelikli Kişisel Veri:{" "}
              </span>
              Kişilerin ırkı, etnik kökeni, siyasi düşüncesi, felsefi inancı,
              dini, mezhebi veya diğer inançları, kılık ve kıyafeti, dernek,
              vakıf ya da sendika üyeliği, sağlığı, cinsel hayatı, ceza
              mahkûmiyeti ve güvenlik tedbirleriyle ilgili verileri ile
              biyometrik ve genetik verileri,
            </li>
            <li>
              <span className="font-semibold">Veri Sorumlusu: </span>Kişisel
              verilerin işleme amaçlarını ve vasıtalarını belirleyen, veri kayıt
              sisteminin kurulmasında ve yönetilmesinden sorumlu Weemeagency’yi
              ifade eder.
            </li>
          </ul>
          <h3 className="text-lg font-bold">
            3. Kişisel Verilerin İşlenmesine İlişkin İlkeler
          </h3>
          <p>
            Weemeagency bakımından öncelikle önem arz eden hususların başında,
            kişisel verilerin işlenmesinde mevzuatta öngörülen genel ilkelere
            uygun davranılması gelmektedir. Bu kapsamda Anayasa, Kanun ve ilgili
            diğer mevzuata uygun olarak kişisel verilerin işlenmesinde aşağıda
            sıralanan ilkelere uygun hareket etmektedir.
          </p>
          <h4 className="font-bold">
            3.1. Hukuka ve Dürüstlük Kuralına Uygun Kişisel Veri İşleme
            Faaliyetlerinde Bulunma
          </h4>
          <p>
            Weemeagency, kişisel verilerin işlenmesi faaliyetleri kapsamında
            hukuka ve dürüstlük kurallarına uygun hareket etmektedir.
            Weemeagency, kişisel verilerin işlenmesinde orantılılık ve
            gereklilik prensiplerini uygulamaya koyarak sadece gerektiği kadar
            kişisel veriyi, veri işleme amaçlarına uygun düşecek seviyede
            işlemektedir.
          </p>
          <h4 className="font-bold">
            3.2. Kişisel Verilerin Doğru ve Gerektiğinde Güncel Olmasını Sağlama
          </h4>
          <p>
            Weemeagency kişisel veri sahiplerinin temel haklarını ve kendi meşru
            menfaatlerini dikkate alarak işlediği kişisel verilerin doğru ve
            güncel olmasını sağlamakta ve bu doğrultuda gerekli tedbirleri
            alarak bunları sağlamaya yönelik sistemleri kurmaktadır.
          </p>
          <h4 className="font-bold">
            3.3. Belirli, Açık ve Meşru Amaçlarla İşleme
          </h4>
          <p>
            Weemeagency, kişisel verileri yürütmekte olduğu faaliyetlerle
            bağlantılı olarak ve gerekli olduğu ölçüde meşru ve hukuka uygun
            sebeplerle işlemektedir.
          </p>
          <h4 className="font-bold">
            3.4. İşlendikleri Amaçla Bağlantılı, Sınırlı ve Ölçülü Olma
          </h4>
          <p>
            Weemeagency, kişisel verileri belirlenen amaçların
            gerçekleştirilebilmesine elverişli bir biçimde işlemekte ve amacın
            gerçekleştirilmesiyle ilgili olmayan veya ihtiyaç duyulmayan kişisel
            verilerin işlenmesinden kaçınmaktadır.
          </p>
          <h4 className="font-bold">
            3.5. İlgili Mevzuatta Öngörülen veya İşlendikleri Amaç İçin Gerekli
            Olan Süre Kadar Muhafaza Etme
          </h4>
          <p>
            Weemeagency, kişisel verileri yalnızca kanunlarda öngörülen süreler
            ile veya işlendikleri amaç ile sınırlı olarak muhafaza etmektedir.
            Bu kapsamda, ilgili mevzuatta kişisel verilerin saklanması için
            belirlenen sürelere uygun davranmaktadır. Süre belirlenmeyen
            durumlarda, kişisel veriler işlendikleri amaç için gerekli olan süre
            kadar muhafaza edilmektedir.
          </p>
          <h4 className="font-bold">
            3.6. Kişisel Verilerin Aktarımında Uyulması Gerekenler
          </h4>
          <p>
            Weemeagency, kişisel verilerin, özel nitelikli kişisel veriler
            dâhil, aktarılması bakımından aşağıda yer verilen kurallara uygun
            davranmaktadır.
          </p>
          <h4 className="font-bold">
            3.6.1. Yurtiçinde Kişisel Verilerin Aktarımı
          </h4>
          <p>
            Weemeagency, kişisel verileri, Kanunun sekizinci maddesi gereğince
            kişisel veri işleme amaçlarına uygun olarak ve gerekli güvenlik
            önlemlerini alarak üçüncü kişilere aktarmaktadır
          </p>
          <h4 className="font-bold">
            3.6.2. Yurtdışına Kişisel Verilerin Aktarılması
          </h4>
          <p>
            Weemeagency, tarafından sadece internet sitesi kullanıcılarından
            elde edilen kişisel veriler bulut depolamaları ile sınırlı olarak
            yurt dışına aktarılabilmektedir. Yurt dışına kişisel veri
            aktarılması zorunluluğu doğması halinde ise Kanunun dokuzuncu
            maddesinde öngörülen düzenlemelere uygun olarak gerekli tüm önlemler
            alındıktan sonra veri aktarımı yapılacaktır
          </p>
          <h3 className="text-lg font-bold">
            4. Weemeagency’nin Kişisel Verilerin Korunması ve İşlenmesine
            İlişkin Yükümlülükleri
          </h3>
          <h4 className="font-bold">
            4.1. Kişisel Veri Sahibini Aydınlatma Yükümlülüğü
          </h4>
          <p>
            Weemeagency, kişisel verilerin elde edilmesi sırasında, kişisel veri
            sahibini, aşağıda yer alan konularda aydınlatmaktadır:
          </p>
          <ul className="list-disc list-inside">
            <li>(1) Veri Sorumlusunun kimliği,</li>
            <li>(2) Kişisel verilerin hangi amaçla işleneceği,</li>
            <li>
              (3) Kişisel verilerin kimlere ve hangi amaçla aktarılabileceği,
            </li>
            <li>(4) Kişisel veri toplamanın yöntemi ve hukuki sebepleri,</li>
            <li>(5) Kişisel veri sahibinin sahip olduğu hakları.</li>
          </ul>
          <h4 className="font-bold">
            4.2. Kişisel Verilerin Güvenliğini Sağlama Yükümlülüğü
          </h4>
          <p>
            Kişisel Verilerin güvenliği, saklama ve imha politikamıza uygun
            olarak sağlanmaktadır.
          </p>
          <p>
            Weemeagency, Kanun’un 12. maddesine uygun olarak, işlemekte olduğu
            kişisel verilerin hukuka aykırı olarak işlenmesini ve bu verilere
            hukuka aykırı olarak erişilmesini önlemek ve verilerin muhafazasını
            sağlamak için uygun güvenlik düzeyini sağlamaya yönelik gerekli
            teknik ve idari tedbirleri almaktadır.
          </p>
          <h4 className="font-bold">
            4.3. Kişisel Veri Sahibini Bilgilendirme Yükümlülüğü
          </h4>
          <p>
            Kişisel veri sahipleri, gerek duydukları hallerde yazılı olarak veya
            Kişisel Verileri Koruma Kurulu’nun belirleyeceği diğer yöntemlerle
            başvuruda bulunarak kendi verilerine ilişkin bilgi talebinde bulunma
            hakları vardır. Bu kapsamda Weemeagency, kişisel veri sahiplerinin
            haklarının değerlendirilmesi ve kişisel veri sahiplerine gereken
            bilgilendirmenin yapılması için Kanun’un 13. maddesine uygun olarak
            gerekli mekanizmaları oluşturmuştur.
          </p>
        </div>
      </Modal>
    </section>
  );
};

export default Contact;
