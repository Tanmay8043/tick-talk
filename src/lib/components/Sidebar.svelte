<script>
    import { selected } from "$lib/stores";
</script>

<div class="hidden w-28 bg-gray-700 overflow-y-auto md:block">
  <div class="w-full py-6 flex flex-col items-center">
    <div class="flex-shrink-0 flex items-center">
      <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white" alt="Workflow">
    </div>
    <div class="flex-1 mt-6 w-full px-2 space-y-1">
      <div class="{$selected == "Home" ? "bg-gray-800 text-white":"text-gray-100 hover:bg-gray-600 hover:text-white"} cursor-pointer group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium" on:click={()=>{selected.set("Home")}}>
        <svg class="{$selected == "Home"?"text-white":"text-gray-400 group-hover:text-white "} h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <span class="mt-2">Home</span>
    </div>
    <div class="{$selected == "Messaging" ? "bg-gray-800 text-white":"text-gray-100 hover:bg-gray-600 hover:text-white"} cursor-pointer group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium" on:click={()=>{selected.set("Messaging")}}>
      <svg class="{$selected == "Messaging"?"fill-white":"fill-gray-400 group-hover:fill-white "} h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke="currentColor" fill="none">
        <path d="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.836 11.02 15.55 19.12 9.7l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z"/>
      </svg>
      <span class="mt-2">Messaging</span>
    </div>
    <div class="{$selected == "New Post" ? "bg-gray-800 text-white":"text-gray-100 hover:bg-gray-600 hover:text-white"} cursor-pointer group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium" on:click={()=>{selected.set("New Post")}}>
      <svg class="{$selected == "New Post"?"text-white":"text-gray-400 group-hover:text-white "} h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <span class="mt-2">New Post</span>
    </div>
    <div class="{$selected == "Explore" ? "bg-gray-800 text-white":"text-gray-100 hover:bg-gray-600 hover:text-white"} cursor-pointer group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium" on:click={()=>{selected.set("Explore")}}>
      <svg class="{$selected == "Explore"?"text-white":"text-gray-400 group-hover:text-white "} h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
      <span class="mt-2">Explore</span>
    </div>


    <div class="{$selected == "Profile" ? "bg-gray-800 text-white":"text-gray-100 hover:bg-gray-600 hover:text-white"} cursor-pointer group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium" on:click={()=>{selected.set("Profile")}}>
      <svg class="{$selected == "Profile"?"fill-white":"fill-gray-400 group-hover:fill-white "} h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" stroke="currentColor" fill="none">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/>
      </svg>
      <span class="mt-2">Profile</span>
    </div>
  </div>
  </div>
</div>