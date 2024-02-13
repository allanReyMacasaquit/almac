import { json } from "@sveltejs/kit";

export function GET() {
  const randomize = () => Math.floor(Math.random() * 300);
  const trends = [
    {
      id: "1",
      category: "Pastoral and Counselling",
      content: "Be of Good courage!",
      shareCount: randomize(),
      icon: "assets/images/mentor.png"
    },
    {
      id: "2",
      category: "Praise and Worship team",
      content: "Hallelujah to the lamb!!",
      shareCount: randomize(),
      icon: "assets/images/music.png"
    },
    {
      id: "3",
      category: "Sunday School Team",
      content: "New teaching materials are out now!",
      shareCount: randomize(),
      icon: "assets/images/education.png"
    },
    {
      id: "4",
      category: "Bible Study Groups",
      content: "It's goin well...",
      shareCount: randomize(),
      icon: "assets/images/groups.png"
    },
    {
      id: "5",
      category: "Events",
      content: "Some big events are coming!",
      shareCount: randomize(),
      icon: "assets/images/schedule.png"
    },
    {
      id: "6",
      category: "Youth for Christ",
      content:
        "Joint fellowship we be held at FCC Kalayaan Center.Joint fellowship we be held at FCC Kalayaan Center",
      shareCount: randomize(),
      icon: "assets/images/youth.png"
    }
  ];

  return json(trends);
}
