<script>
  import {db} from "../../firebase";
  import {onMount} from "svelte";
  import {doc, collection, query, orderBy, getDoc} from "firebase/firestore";
  import {userStore} from "$lib/stores";

  var msg="";
  var details;
  const handleSearch=async()=>{
    const snap=await getDoc(doc(db, "usernames", search));
    if(snap.exists()){
      msg="";
      var email= snap.data().email;
      getDoc(doc(db, "users", email)).then((data)=>{
        details=data.data();
      })
    }
    else{
       msg="No user found with userName: "+ search;
    }
  }

  var search;
</script>
  
  <header class="w-full">
      <div class="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow hover:shadow-md flex">
        <div class="flex-1 flex justify-between ">
          <div class="flex-1 flex pl-4 sm:pl-6">
            <form class="w-full flex md:ml-0" on:submit|preventDefault={handleSearch}>
              <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                  <!-- Heroicon name: solid/search -->
                  <svg class="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                  </svg>
                </div>
                <input name="search-field" id="search-field" bind:value={search} class="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400" placeholder="Search" type="search">
              </div>
              <button on:click|preventDefault={handleSearch} type="button" class="float-right relative inline-flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none">
                <span>Search</span>
              </button>
            </form>
          </div>
        </div>
      </div>
  </header>

  <div class="relative mt-6 flex-shrink-0  bg-white shadow hover:shadow-md flex">
    {#if msg != ""}
    <div class="pl-4 py-6 text-sm text-gray-500 flex">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="flex-shrink-0 fill-yellow-400 w-5 absolute">
        <path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/>
      </svg>
      <h1 class="pl-8">{msg}</h1>
    </div>
    {/if}

    {#if details}
    <a class="w-full" href="/profile/{search}">
    <div class="w-full flex items-center px-3 py-4 text-sm transition duration-150 ease-in-out  cursor-pointer hover:bg-gray-100 focus:outline-none">
      <img class="object-cover w-10 h-10 rounded-full" src="{details.avatar}" alt="friend avatar" />
      <div class="w-full pb-2">
        <div class="flex justify-between">
          <span class="block ml-2 font-semibold text-gray-600">{details.username}</span>
          <!--<span class="block ml-2 text-sm text-gray-600">25 minutes</span>-->
        </div>
        <!--<span class="block ml-2 text-sm text-gray-600">bye</span>-->
      </div>
    </div>
  </a>
    {/if}
  </div>