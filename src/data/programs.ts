import evdeSpor from "../img/workoutPlan4.PNG";
import yagYakma from "../img/workoutPlan4.PNG";
import fullBody from "../img/workoutPlan4.PNG";
import split from "../img/workoutPlan4.PNG";

export const programs = [
  {
    title: "Evde Spor",
    img: evdeSpor,
    description:
      "Evde yapılacak egzersizlerle kas dayanıklılığını artırabilir ve vücut yağını azaltabilirsiniz. Ekipman gerektirmeyen bu program, vücut ağırlığıyla yapılan temel hareketlerden oluşur. Ancak dumbbell ve direnç bandı kullanarak daha verimli bir antrenman yapılabilir.",
    weeklyProgram: [
      {
        day: "Pazartesi - Biceps / Triceps",
        exercises: [
          "Dumbbell Curl - 3 x 12",
          "Hammer Curl - 3 x 12",
          "Concentration Curl - 3 x 12",
          "Triceps Dips  - 3 x 12",
          "Overhead Dumbbell Triceps Extension - 3 x 12",
          "Triceps Kickbacks  - 3 x 12",
        ],
      },
      {
        day: "Salı - Bacaklar",
        exercises: [
          "Dumbbell Squat - 3 x 12",
          "Lunges - 3 x 12",
          "Glute Bridge with Dumbbell - 3 x 12",
          "Leg Extensions - 3 x 12",
        ],
      },
      {
        day: "Çarşamba - Kardiyo ve Karın",
        exercises: [
          "Koşu veya Yürüyüş - 20-30 dakika",
          "Jumping Jacks - 3 x 1 dakika",
          "Burpees - 3 x 12",
          "Plank - 3 x 1 dakika",
          "Bicycle Crunches - 3 x 20",
          "Leg Raises - 3 x 15",
        ],
      },
      {
        day: "Perşembe - Full Body Workout",
        exercises: [
          "Dumbbell Deadlift - 3 x 12",
          "Dumbbell Shoulder Press - 3 x 12",
          "Dumbbell Row - 3 x 12",
          "Lunges - 3 x 12",
          "Glute Kickbacks (Direnç bandı ile) - 3 x 12",
        ],
      },
      {
        day: "Cuma - Göğüs",
        exercises: [
          "Push-up (Şınav) - 3 x 12",
          "Chest Press (Direnç Bandı ile) - 3 x 12",
          "Dumbbell Fly - 3 x 12",
          "Incline Push-up  - 3 x 12",
        ],
      },
    ],
  },

  {
    title: "Kardiyo",
    img: yagYakma,
    description:
      "Yağ yakımını hızlandırmaya yönelik yoğun kardiyo ve kuvvet antrenmanlarını içeren bu program, yağ kaybını destekler ve metabolizmayı hızlandırır.",
    weeklyProgram: [
      {
        day: "Haftada 3 - 4 Gün",
        exercises: [
          "High Knees (Yüksek dizler) - 3 x 30 sn",
          "Burpees - 3 x 20 tekrar",
          "Jump Squats (Zıplama Squat'ı) - 3 x 15 tekrar",
          "Skipping Rope (İp Atlama) - 3 x 1 dk",
          "Deadlift (Ağırsız) - 4 x 12 tekrar",
          "Push-up (Şınav) - 4 x 15 tekrar",
        ],
      },
    ],
  },

  {
    title: "Full Body Antrenman",
    img: fullBody,
    description:
      "Tüm vücut kaslarını dengeli bir şekilde çalıştıran bu program, kuvvet kazanımı, kas gelişimi ve yağ yakımını destekler. Haftada 3 gün uygulanması önerilir. Set ve tekrar sayıları kişinin seviyesine göre ayarlanabilir.",
    weeklyProgram: [
      {
        day: "Pazartesi - Güç & Kuvvet Odaklı",
        exercises: [
          "Squat - 4 x 8-10 (Ağır kilo)",
          "Deadlift - 4 x 6-8 (Ağır kilo)",
          "Bench Press - 4 x 8-10",
          "Barbell Row - 4 x 10-12",
          "Overhead Press - 3 x 10",
          "Plank - 3 x 1 dakika",
        ],
      },
      {
        day: "Çarşamba - Hacim & Kas Dayanıklılığı",
        exercises: [
          "Leg Press - 3 x 12-15",
          "Romanian Deadlift - 3 x 10",
          "Incline Dumbbell Press - 3 x 12",
          "Lat Pulldown - 3 x 12",
          "Dumbbell Shoulder Press - 3 x 12",
          "Hanging Leg Raise - 3 x 15",
        ],
      },
      {
        day: "Cuma - Metabolik & Kardiyo Odaklı",
        exercises: [
          "Goblet Squat - 3 x 15",
          "Kettlebell Swing - 3 x 20",
          "Dumbbell Bench Press - 3 x 12",
          "Seated Row Machine - 3 x 12",
          "Arnold Press - 3 x 12",
          "Jump Rope - 3 x 1 dakika",
        ],
      },
    ],
  },

  {
    title: "Split Antrenman",
    img: split,
    description:
      "Bölgesel kas gruplarını hedefleyen bu program, kas hacmi ve kuvvet kazanımı için uygundur. Haftada 5 gün uygulanır, her gün farklı kas grupları çalıştırılır.",
    weeklyProgram: [
      {
        day: "Pazartesi - Göğüs & Triceps",
        exercises: [
          "Bench Press - 4 x 8-10",
          "Incline Dumbbell Press - 4 x 10-12",
          "Dumbbell Fly - 3 x 12",
          "Dips - 3 x 12",
          "Overhead Dumbbell Triceps Extension - 3 x 12",
          "Triceps Rope Pushdown - 3 x 12",
        ],
      },
      {
        day: "Salı - Sırt & Biceps",
        exercises: [
          "Deadlift - 4 x 6-8",
          "Pull-up - 4 x 8-10",
          "Bent-over Barbell Row - 4 x 10-12",
          "Lat Pulldown - 3 x 12",
          "Dumbbell Curl - 3 x 12",
          "Hammer Curl - 3 x 12",
        ],
      },
      {
        day: "Çarşamba - Bacaklar",
        exercises: [
          "Squat - 4 x 8-10",
          "Leg Press - 4 x 10-12",
          "Romanian Deadlift - 3 x 10",
          "Lunges - 3 x 12",
          "Leg Curl - 3 x 12",
          "Standing Calf Raise - 3 x 15",
        ],
      },
      {
        day: "Perşembe - Omuz & Karın",
        exercises: [
          "Overhead Press - 4 x 10",
          "Arnold Press - 3 x 12",
          "Lateral Raise - 3 x 15",
          "Face Pull - 3 x 12",
          "Plank - 3 x 1 dakika",
          "Hanging Leg Raise - 3 x 15",
        ],
      },
      {
        day: "Cuma - Full Body & Kardiyo",
        exercises: [
          "Front Squat - 3 x 12",
          "Pull-up - 3 x 10",
          "Dumbbell Bench Press - 3 x 12",
          "Seated Row - 3 x 12",
          "Battle Rope - 3 x 30 saniye",
          "Jump Rope - 3 x 1 dakika",
        ],
      },
    ],
  },
];
