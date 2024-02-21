<script>
  import { createShareApi } from "$api/share";
  import { getAuthContext } from "$components/context/auth";
  import { getUIContext } from "$components/context/ui";
  import TiImageOutline from "svelte-icons/ti/TiImageOutline.svelte";

  const { isAuthenticated } = getAuthContext();
  const { addSnackbar } = getUIContext();

  export let onAddShare;

  let form = { content: "" };
  let loading = false;

  $: user = $isAuthenticated?.user;

  async function submitShare() {
    loading = true;

    const shareData = {
      ...form,
      uid: user.uid
    };

    try {
      await new Promise((res) => {
        setTimeout(() => {
          createShareApi(shareData);
          onAddShare(shareData);
          addSnackbar("Message submitted ", "success");
          form.content = "";
          res(true);
        }, 1000);
      });
    } catch (error) {
      addSnackbar(error.message, "error");
    } finally {
      loading = false;
    }
  }
</script>

<div class="flex-it p-4 flex-row">
  <div class="flex-it mr-4">
    <div
      class="w-16 h-16 sm:w-32 sm:h-32 overflow-visible cursor-pointer transition duration-200 hover:opacity-80"
    >
      <img alt="profile" class="rounded-full object-cover border p-1" src={user?.avatar} />
    </div>
  </div>

  <!-- MESSENGER START -->
  <div class="flex-it flex-grow">
    <div class="flex-it">
      <div>
        {loading}
      </div>
      <textarea
        bind:value={form.content}
        name="content"
        rows="3"
        id="glide"
        class="bg-transparent resize-none overflow-hidden block !outline-none !border-none border-transparent focus:border-transparent focus:ring-0 text-gray-100 text-xl w-full p-0"
        placeholder={"What's new?"}
      />
    </div>

    <div class="flex-it mb-1 flex-row xs:justify-between items-center">
      <div class="flex-it mt-3 mr-3 cursor-pointer text-white hover:text-blue-400 transition">
        <div class="upload-btn-wrapper">
          <div class="icon">
            <TiImageOutline />
          </div>
          <input type="file" name="myfile" />
        </div>
      </div>
      <div class="flex-it w-32 mt-3 cursor-pointer">
        <button
          on:click={submitShare}
          type="button"
          class="disabled:cursor-not-allowed disabled:bg-gray-400 bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full flex-it transition duration-200"
        >
          <div class="flex-it flex-row text-sm font-bold text-white items-start justify-center">
            <span>Share It</span>
          </div>
        </button>
      </div>
    </div>
  </div>
  <!-- MESSENGER END -->
</div>
