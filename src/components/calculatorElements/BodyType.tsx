import React, { useState } from "react";

const BodyTypeQuiz = () => {
  const questions = [
    {
      question: "Vücudunuzu en iyi tanımlayan seçenek hangisi?",
      options: ["İnce ve uzun", "Kaslı ve atletik", "Geniş ve dolgun"],
      scores: ["ektomorf", "mezomorf", "endomorf"],
    },
    {
      question: "Aynaya baktığınızda ilk hangisi dikkat çekiyor?",
      options: ["Kemiklerim", "Yağlarım", "Kaslarım"],
      scores: ["ektomorf", "mezomorf", "endomorf"],
    },
    {
      question: "Vücudunuzu nasıl tanımlarsınız?",
      options: ["Armut gibi", "Kalem gibi", "Kum saati gibi"],
      scores: ["ektomorf", "mezomorf", "endomorf"],
    },
    {
      question:
        "Egzersiz yapmaya birkaç hafta ara verdiğinizde hangisi daha sık gerçekleşiyor?",
      options: [
        "Kilo alıyorum",
        "Kilo kaybediyorum",
        "Pek değişmiyor (ya da net değil)",
      ],
      scores: ["ektomorf", "mezomorf", "endomorf"],
    },
    {
      question: "Kilo alma eğiliminiz nasıl?",
      options: [
        "Zor kilo alırım",
        "Kolay kilo alıp verebilirim",
        "Kolay kilo alırım, zor veririm",
      ],
      scores: ["ektomorf", "mezomorf", "endomorf"],
    },
  ];

  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [bodyTypeScores, setBodyTypeScores] = useState({
    ektomorf: 0,
    mezomorf: 0,
    endomorf: 0,
  });

  const handleAnswer = (questionIndex, scoreType) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = scoreType;
    setAnswers(newAnswers);

    const newScores = { ektomorf: 0, mezomorf: 0, endomorf: 0 };
    newAnswers.forEach((answer) => {
      if (answer) newScores[answer]++;
    });
    setBodyTypeScores(newScores);
  };

  const total: number = Object.values(bodyTypeScores).reduce(
    (acc: number, val: number) => acc + val,
    0
  );

  const getPercentage = (type: keyof typeof bodyTypeScores): string =>
    total > 0 ? ((bodyTypeScores[type] / total) * 100).toFixed(0) : "0";

  return (
    <div className="p-6 bg-white rounded-lg shadow-xl font-montserrat">
      <h3 className="text-xl font-bold mb-4">Vücut Tipi Testi</h3>
      <div className="flex flex-col md:flex md:flex-row gap-8 mb-4 md:mb-0">
        {/* Sorular Kısmı */}
        <div className="flex-1 flex flex-col gap-4">
          {questions.map((q, index) => (
            <div key={index}>
              <p className="font-semibold text-lg mb-2">{q.question}</p>
              <div className="flex flex-col gap-2">
                {q.options.map((option, optIndex) => (
                  <label
                    key={optIndex}
                    className="flex items-center  cursor-pointer"
                  >
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      checked={answers[index] === q.scores[optIndex]}
                      onChange={() => handleAnswer(index, q.scores[optIndex])}
                      className="hidden"
                    />
                    <span
                      className={`px-2 py-2 border rounded-lg w-full text-center transition ${
                        answers[index] === q.scores[optIndex]
                          ? "bg-primary text-white"
                          : "bg-white text-gray-700 border-gray-300"
                      }`}
                    >
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sonuçlar Kısmı */}
        <div className="flex-1 flex flex-col h-full font-montserrat">
          <div className="px-4 py-2 md:px-8 md:py-4 bg-gray-100 rounded-lg flex-grow">
            <h1 className="mb-4 md:mb-8 font-bold text-2xl">Karne</h1>

            <div className=" font-montserrat text-lg">
              <div className=" flex justify-between items-center mb-4">
                <p className="font-semibold text-xl">Ektomorf Oranı</p>
                <p className="font-bold text-2xl ">
                  {getPercentage("ektomorf")}%
                </p>
              </div>
              <div className=" flex justify-between items-center mb-4">
                <p className="font-semibold text-xl">Mezomorf Oranı</p>
                <p className="font-bold text-2xl ">
                  {getPercentage("mezomorf")}%
                </p>
              </div>

              <div className=" flex justify-between items-center mb-4">
                <p className="font-semibold text-xl">Endomorf Oranı</p>
                <p className="font-bold text-2xl ">
                  {getPercentage("endomorf")}%
                </p>
              </div>
            </div>
            <p className="text-gray-500">
                Vücut tipleri hakkında detaylı bilgi edinmek için tıklayınız.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyTypeQuiz;
