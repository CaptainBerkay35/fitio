import React from "react";
import Layout from "../components/Layout.tsx";
import bodyTypesImage from "../img/bodyType.webp"; // Görsel dosyanı buraya ekle

export default function BodyTypePage() {
  return (
    <Layout>
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-primary">Vücut Tipleri</h1>
        <p className="mt-4 text-gray-700">
          İnsan vücutları genetik yapıya bağlı olarak üç ana kategoriye ayrılır: ektomorf, mezomorf ve endomorf.
          Her vücut tipinin kendine özgü özellikleri vardır. Aşağıdaki bilgilere göz atarak kendi vücut tipinizi
          daha iyi anlayabilirsiniz.
        </p>
      </div>

      {/* Görsel Alanı */}
      <div className="flex justify-center mt-8">
        <img src={bodyTypesImage} alt="Vücut Tipleri" className="w-full max-w-2xl rounded-lg shadow-md" />
      </div>

      {/* Ektomorf */}
      <section id="ektomorf" className="mt-12">
        <h2 className="text-3xl font-semibold text-primary">Ektomorf</h2>
        <p className="mt-4 text-gray-700">
          Ektomorf vücut tipi genellikle uzun, ince ve düşük yağ oranına sahiptir. Kas kütlesi kazanmakta 
          zorlanırlar ve metabolizmaları oldukça hızlıdır. Genellikle omuzları dar, kemikleri ince ve eklemleri küçüktür.
        </p>
        <h3 className="mt-4 font-semibold">Ek Bilgiler:</h3>
        <ul className="mt-2 text-gray-700 list-disc list-inside">
          <li>Hızlı metabolizma nedeniyle kilo almak zor olabilir.</li>
          <li>Enerji seviyeleri genellikle yüksektir, ancak beslenme eksikliklerine dikkat etmelidirler.</li>
          <li>Aşırı kardiyo yerine direnç antrenmanlarına odaklanmaları önerilir.</li>
        </ul>
      </section>

      {/* Mezomorf */}
      <section id="mezomorf" className="mt-12">
        <h2 className="text-3xl font-semibold text-primary">Mezomorf</h2>
        <p className="mt-4 text-gray-700">
          Mezomorf vücut tipi kaslı, atletik ve güçlü bir yapıya sahiptir. Kas kazanımı ve yağ yakımı dengelidir. 
          Doğal olarak kaslı bir görünüm elde etmeye eğilimlidirler ve vücutları egzersizlere hızlı tepki verir.
        </p>
        <h3 className="mt-4 font-semibold">Ek Bilgiler:</h3>
        <ul className="mt-2 text-gray-700 list-disc list-inside">
          <li>Kas yapıları güçlüdür ve kas kazanımı daha kolaydır.</li>
          <li>Fazla karbonhidrat tüketimi kilo artışına neden olabilir.</li>
          <li>Egzersizlere hızlı adapte olurlar, bu yüzden antrenmanlarını sık sık değiştirmek faydalı olabilir.</li>
        </ul>
      </section>

      {/* Endomorf */}
      <section id="endomorf" className="mt-12">
        <h2 className="text-3xl font-semibold text-primary">Endomorf</h2>
        <p className="mt-4 text-gray-700">
          Endomorf vücut tipi geniş, güçlü ve kolay yağ depolayan bir yapıya sahiptir. Metabolizmaları daha yavaş çalışır 
          ve kilo almaya eğilimlidirler. Kas kazanımı kolay olsa da, vücut yağ oranını düşük tutmak zor olabilir.
        </p>
        <h3 className="mt-4 font-semibold">Ek Bilgiler:</h3>
        <ul className="mt-2 text-gray-700 list-disc list-inside">
          <li>Yavaş metabolizma nedeniyle kilo kontrolüne özen göstermelidirler.</li>
          <li>Direnç antrenmanları kas gelişimini desteklerken, kardiyo yağ yakımına yardımcı olur.</li>
          <li>İnsülin duyarlılığı düşük olabilir, bu yüzden şeker ve işlenmiş gıdalardan kaçınmak önemlidir.</li>
        </ul>
      </section>

      {/* Sayfanın en üstüne dönmek için buton */}
      <div className="mt-12 text-center">
        <a href="#" className="text-primary underline">Başa Dön</a>
      </div>
    </Layout>
  );
}
