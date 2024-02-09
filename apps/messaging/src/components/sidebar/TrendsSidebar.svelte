<script>
  const randomize = () => Math.floor(Math.random() * 300);
  const trends = [
    {
      category: "Pastoral and Counselling",
      content: "Be of Good courage!",
      shareCount: randomize()
    },
    {
      category: "Praise and Worship team",
      content: "Hallelujah to the lamb!!",
      shareCount: randomize()
    },
    {
      category: "Sunday School Team",
      content: "New teaching materials are out now!",
      shareCount: randomize()
    },
    {
      category: "Bible Study Groups",
      content: "It's goin well...",
      shareCount: randomize()
    },
    {
      category: "Events",
      content: "Some big events are coming!",
      shareCount: randomize()
    },
    {
      category: "Youth for Christ",
      content: "Joint fellowship we be held at FCC Kalayaan Center.",
      shareCount: randomize()
    }
  ];
  console.log(trends);
</script>

<div class="overflow-hidden flex-it rounded-2xl">
  <div class="flex-it p-4">
    <span class="text-xl font-bold">Trends</span>
  </div>
  {#each trends as trend}
    <div class="flex-it p-4 cursor-pointer transition duration-200 hover:bg-blue-800">
      <div class="flex-it">
        <span class="text-gray-400 text-sm"> {trend.category}</span>
        <span class="text-lg font-bold">{trend.content}</span>
        <span class="text-gray-400 text-sm">{trend.shareCount} shares</span>
      </div>
    </div>
  {/each}
</div>
