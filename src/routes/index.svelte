<script>
  import Sidebar from "$lib/components/Sidebar.svelte";
  import Searchbar from "$lib/components/Searchbar.svelte";
  import MobileNavbar from "$lib/components/MobileNavbar.svelte";
  import ProfilePage from "$lib/components/ProfilePage.svelte";
  import { selected } from "$lib/stores";
</script>
<MobileNavbar/>
<div class="h-screen flex">
  <Sidebar/>
  <div class="flex-1 flex flex-col overflow-hidden">
    <!-- <Searchbar/> -->
    <!-- Main content -->
    <div class="flex-1 flex items-stretch overflow-hidden">
      <main class="flex-1 overflow-y-auto">
        <div class=" mx-auto pt-2 px-4 sm:px-6 md:px-8 mt-10">
          <h1 class="text-2xl font-semibold text-gray-700">{$selected}</h1>
        </div>
        <div class=" mx-auto px-4 sm:px-6 md:px-8">
          <div class="py-4">
            {#if $selected == "Profile"}
              <ProfilePage/>
            {/if}
          </div>
        </div>
      </main>
    </div>
  </div>
</div>