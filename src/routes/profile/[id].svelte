<script>
    import {page} from "$app/stores";
    import ProfilePage from "$lib/components/ProfilePage.svelte";
    import Sidebar from "../../lib/components/Sidebar.svelte";
    import MobileNavbar from "../../lib/components/MobileNavbar.svelte";
    import {auth, db} from "../../firebase";
  import {onAuthStateChanged} from "firebase/auth";
  import {onMount} from "svelte";
import {doc, getDoc} from "firebase/firestore";

var user, show=false;
onMount(async()=>{
    getDoc(doc(db, "usernames", $page.params.id)).then((data)=>{
        var email = data.data().email;
        onAuthStateChanged(auth, (user)=>{
            if(user.email == email) show=true;
        })
      getDoc(doc(db, "users",email)).then((x)=>{
          user=x.data();
          console.log(user);
          sh= true;
        })
    });

  })

  var sh=false;
</script>
<!-- <MobileNavbar/> -->
<div class="h-screen flex w-full">
    <Sidebar/>
    <div class="w-full">
        {#if sh}
            <div class=" mx-auto pt-2 px-4 sm:px-6 md:px-8 mt-10">
                <h1 class="text-2xl font-semibold text-gray-700">{$page.params.id}'s Profile</h1>
            </div>
            <ProfilePage {user} {show} />
        {/if}
    </div>
</div>