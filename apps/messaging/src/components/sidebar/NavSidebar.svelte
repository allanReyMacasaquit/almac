<script>
  import TiSocialFlickr from "svelte-icons/ti/TiSocialFlickr.svelte";
  import navLinks from "./navLinks.js";
  import Popup from "$components/utils/Popup.svelte";
  import { getAuthContext } from "$components/context/auth/index.js";

  const { isAuthenticated } = getAuthContext();

  $: user = $isAuthenticated?.user;
</script>

<header class="lg:flex-grow flex-it items-end">
  <div class="xl:w-80 w-20 flex-it">
    <div class="h-full fixed flex-it top-0">
      <div class="flex-it h-full xl:w-80 w-20 overflow-y-auto px-3 justify-between">
        <div class="flex-it items-start">
          <div
            class="p-3 pt-4 xl:pb-3 pb-0 xl:text-2xl text-sm font-bold transition duration-200 hover:opacity-80"
          >
            <a href="/">
              <h1 class="gradient-text">Good News</h1>
            </a>
          </div>
          <div class="my-1 w-full flex-it">
            <nav class="flex-it items-start">
              {#each navLinks as link}
                <a class="flex-it items-start flex-grow w-full" href={link.href}>
                  <div
                    class="p-3 flex-row justify-center items-center flex-it rounded-3xl hover:bg-violet-800 hover:rounded-3xl transition duration-200"
                  >
                    <div class="flex-it">
                      <div class="icon">
                        <svelte:component this={link.icon} />
                      </div>
                    </div>
                    <div class="mx-4 text-2xl truncate xl:block hidden">
                      <span class="truncate">{link.name}</span>
                    </div>
                  </div>
                </a>
              {/each}
            </nav>
          </div>
          <!-- GLIDER SEND-MESSAGE BUTTON -->
          <div class="flex-it cursor-pointer xl:w-64 xl:p-16">
            <div
              class="text-white flex-it sm:bg-blue-800 sm:hover:bg-blue-700 rounded-full font-bold flex-it transition"
            >
              <div
                class=" px-1 flex-row text-xl font-bold text-white justify-start items-center truncate duration-200"
              >
                <img src="assets/images/share-icon.png" alt="share" />
                <h1 class="hidden xl:block text-sm text-center">Share</h1>
              </div>
            </div>
          </div>
        </div>
        <!-- PROFILE MENU -->
        <div class="flex-it hover:cursor-pointer">
          <Popup>
            <div
              class="flex-it items-center flex-row p-2 rounded-2xl sm:hover:bg-blue-800 hover:rounded-2xl transition duration-200 cursor-pointer"
            >
              <div class="flex-it">
                <div class="w-10 h-10 overflow-visible flex-it justify-center">
                  <img alt="" class="rounded-full border p-1" src={user?.avatar} />
                </div>
              </div>
              <div class="flex-it xl:flex hidden flex-grow flex-row justify-between items-center">
                <div class="flex-it mx-3 font-bold">{user?.username}</div>
                <div class="flex-it">
                  <div class="icon">
                    <TiSocialFlickr />
                  </div>
                  <!-- <FiMoreHorizontal /> -->
                </div>
              </div>
            </div>
          </Popup>
        </div>
      </div>
    </div>
  </div>
</header>
