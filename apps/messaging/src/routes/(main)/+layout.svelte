<script>
  import TrendsSidebar from "$components/sidebar/TrendsSidebar.svelte";
  import NavSidebar from "$components/sidebar/NavSidebar.svelte";

  export let data;
</script>

<div class="w-full h-full overflow-x-hidden rgb(1, 44, 57) text-gray-100">
  <div class="flex h-full min-h-252">
    <!-- SIDEBAR START -->
    <NavSidebar />
    <!-- SIDEBARS END -->
    <main class="flex-it flex-grow flex-shrink items-start">
      <div class="flex md:w-248 w-full h-full">
        <div class="flex-it flex-grow flex-shrink">
          <div class="flex-it flex-row justify-between min-h-full">
            <div class="flex-it md:max-w-152 w-full border-x-1 border-solid border-gray-700">
              <div class="sticky z-10 flex-it top-0">
                <div
                  class="flex-it h-14 p-4 xl:text-xl text-sm font-bold z-10 backdrop-blur-md bg-opacity-70"
                >
                  Home
                </div>
                <slot />
              </div>
            </div>
            <div class="hidden sm:flex-it ml-4 mt-4">
              <!-- TRENDS SIDEBAR START -->
              <TrendsSidebar trends={data.trends} />
              <!-- TRENDS SIDEBAR END -->
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>
