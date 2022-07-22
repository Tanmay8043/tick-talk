<script>
  import Sidebar from "$lib/components/Sidebar.svelte";
  import Searchbar from "$lib/components/Searchbar.svelte";
  import MobileNavbar from "$lib/components/MobileNavbar.svelte";
  import ProfilePage from "$lib/components/ProfilePage.svelte";
  import Messaging from "$lib/components/Messaging.svelte";
  import { selected } from "$lib/stores";
  import {auth, db} from "../firebase";
  import {onAuthStateChanged} from "firebase/auth";
  import {onMount} from "svelte";
  import {getDoc, doc} from "firebase/firestore"

  var us={};
  onMount(async()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
      // if($selected == "Profile") goto("/profile/{user.email}")
      console.log(user);
      const docSnap = getDoc(doc(db, "users", user.email)).then(data=>(console.log(us=data.data())));
      // us= docSnap.data();
    } else {
      // User is signed out
      // ...
    }
    console.log(us);
  });
  })

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
            {#if $selected == "Messaging"}
              <Messaging/>
            {/if}
          </div>
        </div>
      </main>
    </div>
  </div>
</div>