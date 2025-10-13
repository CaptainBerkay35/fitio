# 🏋️ Fitio - Sağlıklı Yaşam ve Fitness Platformu

Fitio, kullanıcılara kişiselleştirilmiş antrenman programları, beslenme tavsiyeleri ve fitness rehberleri sunan kapsamlı bir web uygulamasıdır.

## 🌐 Canlı Demo

🔗 [https://fitio-nu.vercel.app/](https://fitio-nu.vercel.app/)

## ✨ Özellikler

### 🏃 Antrenman Programları
- **Full Body Antrenman**: Tüm vücudu çalıştıran kapsamlı program
- **Split Antrenman**: Bölgesel kas gruplarını hedefleyen detaylı program
- Video destekli egzersiz gösterimleri
- Set ve tekrar sayısı rehberi

### 🥗 Beslenme Rehberi
- Makro besin öğeleri (protein, karbonhidrat, yağ) hakkında detaylı bilgiler
- Spor öncesi ve sonrası beslenme önerileri
- İndirilebilir fit tarifler kitabı (PDF)

### 📊 Kişiselleştirilmiş Yol Haritası
- İnteraktif anket sistemi
- Kullanıcı hedeflerine göre özelleştirilmiş öneriler
- Fitness seviyesi tespiti

### 📚 Eğitim Kaynakları
- Egzersiz teknikleri ve ipuçları
- Bilimsel araştırma referansları
- Detaylı rehber sayfaları

## 🛠️ Teknolojiler

- **React 19.0.0** - UI geliştirme
- **TypeScript** - Tip güvenli kod
- **React Router DOM** - Sayfa yönlendirme
- **Framer Motion** - Animasyonlar
- **Tailwind CSS** - Stil yönetimi
- **React Icons** - İkon kütüphanesi
- **XLSX** - Excel dosya işleme
- **tsParticles** - Parçacık efektleri

## 📦 Kurulum

```bash
# Depoyu klonlayın
git clone https://github.com/kullaniciadi/fitio.git

# Proje dizinine gidin
cd fitio

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm start
```

Uygulama [http://localhost:3000](http://localhost:3000) adresinde açılacaktır.

## 🚀 Deployment

Proje Vercel üzerinde yayınlanmıştır ve her commit otomatik olarak deploy edilir.

```bash
# Production build oluşturma
npm run build
```

## 📱 Özellikler ve Sayfalar

### Ana Sayfa (/)
- Hero bölümü ile karşılama
- Özellik kartları
- Hızlı başlangıç rehberi

### Antrenman Programları (/workout)
- Full Body ve Split program seçenekleri
- Detaylı haftalık programlar
- Video destekli egzersiz rehberi

### Beslenme (/food-list)
- Makro besin öğeleri bilgileri
- Öğün önerileri
- İndirilebilir tarifler

### Yol Haritası (/roadmap)
- Fitness seviyesi belirleme anketi
- Kişiselleştirilmiş program önerileri
- İlerleyiş takibi

## 🎨 Tasarım

- Responsive tasarım (mobil, tablet, masaüstü)
- Modern ve temiz arayüz
- Yeşil (#10b981) ana renk teması
- Montserrat ve Roboto font ailesi

## 📄 Proje Yapısı

```
fitio/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── Fitio-Yemek tarifleri.pdf
├── src/
│   ├── components/
│   │   ├── Layout.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Card.tsx
│   │   ├── Table.tsx
│   │   └── VideoModal.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── WorkoutPage.tsx
│   │   ├── WorkoutPlanPage.tsx
│   │   ├── FoodListPage.tsx
│   │   └── RoadmapPage.tsx
│   ├── data/
│   │   └── programs.ts
│   ├── App.tsx
│   └── index.tsx
├── package.json
└── README.md
```

## 🤝 Katkıda Bulunma

1. Bu depoyu fork edin
2. Feature branch oluşturun (`git checkout -b feature/yeniOzellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/yeniOzellik`)
5. Pull Request oluşturun

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.


