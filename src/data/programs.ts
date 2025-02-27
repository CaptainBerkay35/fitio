import WorkoutatHome from "../img/workoutImg/homeWorkout.jpg";
import cardio from "../img/workoutImg/cardio.jpg";
import fullBody from "../img/workoutImg/fullBodyWorkout.jpg";
import split from "../img/workoutImg/splitWorkout.jpg";
export const programs = [
  {
    title: "Evde Spor",
    img: WorkoutatHome,
    description:
      "Evde yapılacak egzersizlerle kas dayanıklılığını artırabilir ve vücut yağını azaltabilirsiniz. Ekipman gerektirmeyen bu program, vücut ağırlığıyla yapılan temel hareketlerden oluşur. Ancak dumbbell ve direnç bandı kullanarak daha verimli bir antrenman yapılabilir.",
    weeklyProgram: [
      {
        day: "Pazartesi - Biceps / Triceps",
        exercises: [
          {
            name: "Push-up",
            setreps: "3 x 12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/3389a861-c827-48a4-b277-e3367d93829d/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Dumbbell Curl",
            setreps: "3 x 12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/709b0bf2-1cb2-4f52-8865-e31561de0cb9/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Hammer Curl",
            setreps: "3 x 12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/623f02e0-9d6a-4ff4-88c3-d77e22a4e84f/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Triceps Dips",
            setreps: "3 x 12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/056232d8-55c6-5164-a204-2dbe242a048b/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Overhead Dumbbell Triceps Extension",
            setreps: "3 x 12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/01b0e03e-0e01-4aeb-8485-48a92d8d4dd7/horizontal/previews/videvo_watermarked/large.mp4",
          },
          {
            name: "Triceps Kickbacks",
            setreps: "3 x 12",
            videoUrl:
              "https://v.ftcdn.net/04/28/47/16/700_F_428471680_4s3xadO0LEaM8a8mgvsqv0UN69vfusIo_ST.mp4",
          },
        ],
      },
      {
        day: "Salı - Sırt - Bacaklar",
        exercises: [
          {
            name: "Push-up",
            setreps: "3 x 12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/3389a861-c827-48a4-b277-e3367d93829d/horizontal/previews/watermarked/large.mp4",
          },
          {
            name:"Dumbell Row",
            setreps: "3 x 12",
            videoUrl:"https://videocdn.cdnpk.net/videos/436cfb5b-fb89-4781-be4c-a6f49e19e334/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Dumbbell Squat",
            setreps: "3 x 12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/0c145702-6e83-5238-9af6-d51051f77c84/horizontal/previews/videvo_watermarked/large.mp4",
          },
          {
            name: "Lunges",
            setreps: "3 x 12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/d7486e64-3462-5eaa-9cab-f15cd92ac6da/horizontal/previews/videvo_watermarked/large.mp4",
          },
          {
            name: "Glute Bridge with Dumbbell",
            setreps: "3 x 12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/7a6aa3a2-6f0d-5f6c-b2de-691a7da01387/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Bulgarian Split Squat",
            setreps: "3 x 12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/e26fc615-e8f2-5c81-9147-b95dd3d36972/horizontal/previews/videvo_watermarked/large.mp4",
          },
        ],
      },
      {
        day: "Perşembe - Kardiyo ve Karın",
        exercises: [
          {
            name: "Jumping Jacks",
            setreps: "3 x 1 dakika",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/29f0f4a3-ec4b-5b67-b80e-4891fecb9bfa/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Burpees",
            setreps: "3 x 12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/1201945f-0aba-528b-8285-924ab1ee45c0/horizontal/previews/videvo_watermarked/large.mp4",
          },
          {
            name: "Plank",
            setreps: "3 x 1 dakika",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/5e920c04-289c-5df4-a86d-ed7c89891c60/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Mountain Climber",
            setreps: "3 x 1 dakika",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/5d8bebd3-63d0-5c15-baae-71243e03013c/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Bicycle Crunches",
            setreps: "3 x 20",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/f06cac8d-cd4f-5a7d-a0c4-f2f1e2e8d660/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Leg Raises",
            setreps: "3 x 15",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/eb53c335-71a2-543a-a9a4-5d82c99dcd24/horizontal/previews/watermarked/large.mp4",
          },
        ],
      },
      {
        day: "Cuma - Omuz - Bacak",
        exercises: [
          {
            name: "Arnold Press",
            setreps: "3 x 12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/1105f5c5-b8e3-45cc-8b1b-3623fa6e7a1e/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Lateral Raise",
            setreps: "3 x 12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/f90668db-d369-495c-88e8-44cb4d9fbe3d/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Shoulder Shrug",
            setreps: "3 x 12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/8dbdfd86-236f-49a5-a698-8995aaef9f1a/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Dumbbell Deadlift",
            setreps: "3 x 12",
            videoUrl:
              "https://videocdn.cdnpk.net/harmony/content/video/partners1652/large_watermarked/h561b7f18_Marafone000_V1-0018_preview.mp4",
          },
          {
            name: "Lunges",
            setreps: "3 x 12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/d7486e64-3462-5eaa-9cab-f15cd92ac6da/horizontal/previews/videvo_watermarked/large.mp4",
          },
        ],
      },
    ],
  },

  {
    title: "Kardiyo",
    img: cardio,
    description:
      "Yağ yakımını hızlandırmaya yönelik yoğun kardiyo ve kuvvet antrenmanlarını içeren bu program, yağ kaybını destekler ve metabolizmayı hızlandırır.",
    weeklyProgram: [
      {
        day: "Haftada 3 - 4 Gün",
        exercises: [
          {
            name: "Jumping Jacks",
            setreps: "3 x 1 dakika",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/29f0f4a3-ec4b-5b67-b80e-4891fecb9bfa/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Burpees",
            setreps: "3 x 20 tekrar",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/1201945f-0aba-528b-8285-924ab1ee45c0/horizontal/previews/videvo_watermarked/large.mp4",
          },
          {
            name: "Mountain Climber",
            setreps: "3 x 1 dakika",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/5d8bebd3-63d0-5c15-baae-71243e03013c/horizontal/previews/watermarked/large.mp4",
          },
          {
            name:"Side Planks",
            setreps:"3 x 1 dakika",
            videoUrl:"https://videocdn.cdnpk.net/videos/960c96f7-1193-5776-aa09-8905f3d099d2/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Jump Squats",
            setreps: "3 x 15 tekrar",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/dcedcd6e-04f6-450a-ab1f-bffb9b3f1b66/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Push-up",
            setreps: "4 x 15 tekrar",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/3389a861-c827-48a4-b277-e3367d93829d/horizontal/previews/watermarked/large.mp4",
          },
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
          {
            name: "Squat",
            setreps: "4 x 8-10",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/e8a1c842-05b2-4f9a-9bfa-6b37fce4bf32/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Deadlift",
            setreps: "4 x 6-8",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/a7ee92d4-11e4-488c-8982-f95928e94d82/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Bench Press",
            setreps: "4 x 8-10",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/52719a48-3b7f-4f4f-ab36-1b52dde07b65/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Barbell Row",
            setreps: "4 x 10-12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/0aabf4ae-f073-4b81-95da-6b5fe8915252/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Overhead Press",
            setreps: "3 x 10",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/ee812b9e-492e-4235-b6b6-24c4b73cba22/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Plank",
            setreps: "3 x 1 dakika",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/5e920c04-289c-5df4-a86d-ed7c89891c60/horizontal/previews/watermarked/large.mp4",
          },
        ],
      },
      {
        day: "Çarşamba - Hacim & Kas Dayanıklılığı",
        exercises: [
          {
            name: "Deadlift",
            setreps: "4 x 6-8",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/a7ee92d4-11e4-488c-8982-f95928e94d82/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Incline Dumbbell Press",
            setreps: "3 x 12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/871d5658-b0bd-4d8c-9480-533293ad13a9/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Close Grip Lat Pulldown",
            setreps: "3 x 12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/c9dd8b3c-0f7f-4422-804f-792134c177d3/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Lateral Raise",
            setreps: "3 x 12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/f90668db-d369-495c-88e8-44cb4d9fbe3d/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Cable Pulldown",
            setreps: "3 x 12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/f164ddf8-8720-4d55-b98f-fa19902c9ebd/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Leg Press",
            setreps: "3 x 12-15",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/381cc0e6-01f1-5bf1-8c58-403b17cf62b7/horizontal/previews/watermarked/large.mp4",
          },
        ],
      },
      {
        day: "Cuma - Metabolik & Kardiyo Odaklı",
        exercises: [
          {
            name: "Goblet Squat",
            setreps: "3 x 15",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/ec8267ec-cd00-4e78-8f80-48187852b61f/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Dumbbell Bench Press",
            setreps: "3 x 12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/0e5fd416-b41c-4c14-a5e5-fff36ccf1318/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Cable Chest Fly",
            setreps: "3 x 20",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/0040c9a6-3171-4acc-98e0-dfddc3d71519/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Seated Lateral Row",
            setreps: "3 x 12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/523fcdf6-6376-48fb-80b7-faf92aa95009/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Arnold Press",
            setreps: "3 x 12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/1105f5c5-b8e3-45cc-8b1b-3623fa6e7a1e/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Jump Rope",
            setreps: "3 x 1 dakika",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/24c78a5f-2916-4541-98b9-0eaea03e954b/horizontal/previews/watermarked/large.mp4",
          },
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
          {
            name: "Bench Press",
            setreps: "4 x 8-10",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/52719a48-3b7f-4f4f-ab36-1b52dde07b65/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Incline Dumbbell Press",
            setreps: "4 x 10-12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/871d5658-b0bd-4d8c-9480-533293ad13a9/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Dumbbell Fly",
            setreps: "3 x 12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/a10bb75c-6537-408c-91f8-09d02f28831e/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Skull Crusher",
            setreps: "3 x 12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/1922f8e8-e4db-433c-8ebc-9f067f08087d/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Overhead Dumbbell Triceps Extension",
            setreps: "3 x 12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/01b0e03e-0e01-4aeb-8485-48a92d8d4dd7/horizontal/previews/videvo_watermarked/large.mp4",
          },
          {
            name: "Triceps Cable PullBack",
            setreps: "3 x 12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/58b850d4-e72c-4ca3-9b3e-22c2be80359d/horizontal/previews/watermarked/large.mp4",
          },
        ],
      },
      {
        day: "Salı - Sırt & Biceps",
        exercises: [
          {
            name: "Deadlift",
            setreps: "4 x 6-8",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/a7ee92d4-11e4-488c-8982-f95928e94d82/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Pull-up",
            setreps: "4 x 8-10",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/fc9f02bc-ca22-4bee-9e97-5e04d1112c90/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Bent-over Barbell Row",
            setreps: "4 x 10-12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/631a3177-233f-4c4a-8f53-af55390b0037/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Cable Curl",
            setreps: "3 x 12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/7837a3a9-9205-4f08-abbd-f55377321ca8/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Dumbbell Curl",
            setreps: "3 x 12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/709b0bf2-1cb2-4f52-8865-e31561de0cb9/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Hammer Curl",
            setreps: "3 x 12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/623f02e0-9d6a-4ff4-88c3-d77e22a4e84f/horizontal/previews/watermarked/large.mp4",
          },
        ],
      },
      {
        day: "Çarşamba - Bacaklar",
        exercises: [
          {
            name: "Squat",
            setreps: "4 x 8-10",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/e8a1c842-05b2-4f9a-9bfa-6b37fce4bf32/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Leg Press",
            setreps: "3 x 12-15",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/381cc0e6-01f1-5bf1-8c58-403b17cf62b7/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Deadlift",
            setreps: "4 x 6-8",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/a7ee92d4-11e4-488c-8982-f95928e94d82/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Lunges",
            setreps: "3 x 12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/6a47d7a7-4f29-4ff0-98c2-ddb4048b3361/horizontal/previews/watermarked/large.mp4",
          },

          {
            name: "Dumbell Reverse Lunges",
            setreps: "3 x 15",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/6370d614-ca73-41a1-bad3-37d5e8980066/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Leg Curl",
            setreps: "3 x 12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/0b96a1e5-9da3-4a01-b438-204e07f9a51f/horizontal/previews/watermarked/small.mp4",
          },
        ],
      },
      {
        day: "Perşembe - Omuz & Karın",
        exercises: [
          {
            name: "Overhead Press",
            setreps: "3 x 10",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/ee812b9e-492e-4235-b6b6-24c4b73cba22/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Arnold Press",
            setreps: "3 x 12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/1105f5c5-b8e3-45cc-8b1b-3623fa6e7a1e/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Lateral Raise",
            setreps: "3 x 12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/f90668db-d369-495c-88e8-44cb4d9fbe3d/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Shoulder Shrug",
            setreps: "3 x 12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/8dbdfd86-236f-49a5-a698-8995aaef9f1a/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Cable Abs Crunch",
            setreps: "3 x 15",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/4f106f12-ba33-4e82-8f99-5a6dc50d851f/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Plank",
            setreps: "3 x 1 dakika",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/5e920c04-289c-5df4-a86d-ed7c89891c60/horizontal/previews/watermarked/large.mp4",
          },
        ],
      },
      {
        day: "Cuma - Full Body & Kardiyo",
        exercises: [
          {
            name: "Squat",
            setreps: "4 x 8-10",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/e8a1c842-05b2-4f9a-9bfa-6b37fce4bf32/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Pull-up",
            setreps: "3 x 10",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/fc9f02bc-ca22-4bee-9e97-5e04d1112c90/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Dumbbell Bench Press",
            setreps: "3 x 12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/0e5fd416-b41c-4c14-a5e5-fff36ccf1318/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Seated Row",
            setreps: "3 x 12",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/da878f98-9b48-4285-9294-938dfbb91ee1/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Jump Rope",
            setreps: "3 x 1 dakika",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/24c78a5f-2916-4541-98b9-0eaea03e954b/horizontal/previews/watermarked/large.mp4",
          },
          {
            name: "Running",
            setreps: "10-20 dakika",
            videoUrl:
              "https://videocdn.cdnpk.net/videos/3fa1172d-691e-414a-87f6-fd7de041ab02/horizontal/previews/watermarked/large.mp4",
          },
        ],
      },
    ],
  },
];
