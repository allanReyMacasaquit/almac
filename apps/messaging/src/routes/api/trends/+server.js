import { json } from "@sveltejs/kit";

json;

export function GET() {
  const randomize = () => Math.floor(Math.random() * 300);
  const trends = [
    {
      id: "1",
      category: "Pastoral and Counselling",
      content: "Be of Good courage!",
      shareCount: randomize()
    },
    {
      id: "2",
      category: "Praise and Worship team",
      content: "Hallelujah to the lamb!!",
      shareCount: randomize()
    },
    {
      id: "3",
      category: "Sunday School Team",
      content: "New teaching materials are out now!",
      shareCount: randomize()
    },
    {
      id: "4",
      category: "Bible Study Groups",
      content: "It's goin well...",
      shareCount: randomize()
    },
    {
      id: "5",
      category: "Events",
      content: "Some big events are coming!",
      shareCount: randomize()
    },
    {
      id: "6",
      category: "Youth for Christ",
      content: "Joint fellowship we be held at FCC Kalayaan Center.",
      shareCount: randomize()
    }
  ];

  return json(trends);
}
