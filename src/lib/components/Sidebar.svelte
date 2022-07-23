<script>
    import { selected } from "$lib/stores";
    import {auth, db} from "../../firebase";
  import {onAuthStateChanged} from "firebase/auth";
  import {onMount} from "svelte";
import {doc, getDoc} from "firebase/firestore";
    var name;
  onMount(async()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // email = user.email;
      // if($selected == "Profile") goto("/profile/{user.email}")
      // console.log(user);
      const docSnap = getDoc(doc(db, "users", user.email)).then(data=>(name = data.data().username));
      // // us= docSnap.data();
      }
    });
  })
</script>

<div class="hidden w-28 bg-gray-700 overflow-y-auto md:block select-none">
  <div class="w-full py-6 flex flex-col items-center">
    <div class="flex-shrink-0 flex items-center">
      <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white" alt="Workflow">
    </div>
    <div class="flex-1 mt-6 w-full px-2 space-y-1">
      <a href="/" class="{$selected == "Home" ? "bg-gray-800 text-white":"text-gray-100 hover:bg-gray-600 hover:text-white"} cursor-pointer group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium" on:click={()=>{selected.set("Home")}}>
        <svg class="{$selected == "Home"?"text-white":"text-gray-400 group-hover:text-white "} h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <span class="mt-2">Home</span>
    </a>
    <a href="/" class="{$selected == "Messaging" ? "bg-gray-800 text-white":"text-gray-100 hover:bg-gray-600 hover:text-white"} cursor-pointer group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium" on:click={()=>{selected.set("Messaging")}}>
      <svg class="{$selected == "Messaging"?"fill-white":"fill-gray-400 group-hover:fill-white "} h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke="currentColor" fill="none">
        <path d="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.836 11.02 15.55 19.12 9.7l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z"/>
      </svg>
      <span class="mt-2">Messaging</span>
    </a>
    <a href="/" class="{$selected == "Search User" ? "bg-gray-800 text-white":"text-gray-100 hover:bg-gray-600 hover:text-white"} cursor-pointer group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium" on:click={()=>{selected.set("Search User")}}>
      <svg class="{$selected == "Search User"?"text-white":"text-gray-400 group-hover:text-white "} h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <span class="mt-2">Search User</span>
    </a>
    <a href="/" class="{$selected == "New Post" ? "bg-gray-800 text-white":"text-gray-100 hover:bg-gray-600 hover:text-white"} cursor-pointer group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium" on:click={()=>{selected.set("New Post")}}>
      <svg class="{$selected == "New Post"?"text-white":"text-gray-400 group-hover:text-white "} h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <span class="mt-2">New Post</span>
    </a>
    <a class="{$selected == "Profile" ? "bg-gray-800 text-white":"text-gray-100 hover:bg-gray-600 hover:text-white"} cursor-pointer group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium" on:click={()=>{selected.set("Profile")}} href="/profile/{name}">
      <svg class="{$selected == "Profile"?"fill-white":"fill-gray-400 group-hover:fill-white "} h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" stroke="currentColor" fill="none">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/>
      </svg>
      <span class="mt-2">Profile</span>
    </a>
    <a href="/" class="{$selected == "Settings" ? "bg-gray-800 text-white":"text-gray-100 hover:bg-gray-600 hover:text-white"} cursor-pointer group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium" on:click={()=>{selected.set("Settings")}}>
      <svg class="{$selected == "Settings"?"fill-white":"fill-gray-400 group-hover:fill-white "} h-6 w-6"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z"/>
      </svg>
      <span class="mt-2">Settings</span>
    </a>   
  </div>
  </div>
</div>