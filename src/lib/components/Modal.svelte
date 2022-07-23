<script>
    import { fade, fly } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import { modalStore } from "$lib/stores";
    import {clickOutside} from '../clickOutside.js';

export var title 
</script>

<div transition:fade={{ duration: 200, easing: quintOut }} class="fixed z-20 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-center px-6 justify-center min-h-screen pt-4 pb-20 text-center  sm:p-0">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div use:clickOutside on:outclick={()=>{modalStore.set(false)}} in:fly={{y:200, duration: 200, easing:quintOut}} out:fly={{y:200, duration: 200, easing:quintOut}} class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle max-w-lg w-full p-6">
        <div class="block absolute -top-2 right-0 pt-4 pr-4">
          <button type="button" on:click={()=>{$modalStore = false;}} class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
            <span class="sr-only">Close</span>
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="my-3 text-center sm:mt-0 sm:ml-4 ">
          <h3 class="text-lg leading-6 font-semibold text-gray-900" id="modal-title">{title}</h3>
        </div>
        <slot/>
      </div>
    </div>
</div>