<script>
    import {selected, modalStore, userStore} from "$lib/stores";
    import Modal from "./Modal.svelte";
    import { db } from "../../firebase";
    import { doc, collection, addDoc, updateDoc, setDoc } from "firebase/firestore"; 


    export var user, show;
    var msg;
    var date= new Date();
    const sendMessage=()=>{
        var data={
            msg,
            uid: $userStore.uid,
            sentAt: date,
            avatar: $userStore.avatar,
            receiver: user
        }
        if(msg != ""){
            try {
                setDoc(doc(db, "users", $userStore.email, "chats", user.username), {
                    name: user.username,
                    avatar: user.avatar,
                    lastmsg: msg,
                    lastSent: date 
                }).then(()=>{
                    addDoc(collection(db, "users", $userStore.email, "chats", user.username, "chats"), data).then((ref)=>{
                        updateDoc(doc(db, "users", $userStore.email, "chats", user.username, "chats", ref.id),{
                            id:ref.id
                        });
                    });
                });
                setDoc(doc(db, "users", user.email, "chats", $userStore.username), {
                    name: $userStore.username,
                    avatar: $userStore.avatar,
                    lastmsg: msg,
                    lastSent: date 
                }).then(()=>{
                    addDoc(collection(db, "users", user.email, "chats", $userStore.username, "chats"), data).then((ref)=>{
                        updateDoc(doc(db, "users", user.email, "chats", $userStore.username, "chats", ref.id),{
                            id:ref.id
                        });
                    });
                });
                modalStore.set(false)
            } catch (error) {
                console.log(error);
            }
        }
    }
</script>
{#if $modalStore}
<Modal title="{user.username}'s DM">
    <div class="flex flex-col items-start border border-gray-300 p-4 rounded-md">
        <label class="float-left text-sm text-gray-700 font-semibold" for="msg">Your Message</label>
        <div class="w-full mt-2 shadow-md">
            <form class="w-full flex md:ml-0" on:submit|preventDefault={sendMessage}>
              <div class="relative w-full text-gray-400 ">
                <input bind:value={msg} class="appearance-none focus:outline-none h-full w-full border border-r-0 border-gray-500 p-2 rounded-l-md text-sm text-gray-500 focus:ring-0 focus:ring-gray-100 placeholder-gray-500  focus:placeholder-gray-400" placeholder="Type Your Message" />
              </div>
              <button on:click|preventDefault={sendMessage} type="button" class="float-right border border-l-0 border-gray-500 rounded-r-md relative inline-flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none">
                <svg class="w-5 h-5 text-gray-500 origin-center transform rotate-90" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20" fill="currentColor">
                <path
                  d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
              </button>
            </form>
          </div>
    </div>
</Modal>
{/if}

<div class="md:w-2/3 pt-5 max-h-[80vh] overflow-y-auto mx-auto">

    <div class="px-3 py-2 relative">
      
        <div class="flex flex-col gap-1 text-center">
            <a class="block mx-auto bg-center bg-no-repeat bg-cover w-20 h-20 rounded-full border border-gray-400 shadow-lg h-40 w-40" href="" style="background-image: url({user.avatar})"></a>
            <p class="font-serif font-semibold">{user.username}</p>
            <span class="text-sm text-gray-400">New York, NY - Los Angeles, CA</span>
        </div>

        {#if show}
        <button class="md:hidden absolute right-4 top-8 cursor" on:click={()=>(selected.set("Settings"))} title="Settings">
            <svg class="h-7 w-8 fill-gray-400 hover:fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z"/>
            </svg>
        </button>
        {/if}
        <div class="flex justify-center items-center gap-2 my-3">
            <div class="font-semibold text-center mx-4">
                <span class="text-gray-400">Posts</span>
                <p class="text-black">102</p>
            </div>
            <!-- <div class="font-semibold text-center mx-4">
                <p class="text-black">102</p>
                <span class="text-gray-400">Followers</span>
            </div>
            <div class="font-semibold text-center mx-4">
                <p class="text-black">102</p>
                <span class="text-gray-400">Folowing</span>
            </div> -->
        </div>
      

 
        <div class="flex justify-center gap-2 my-5">
            <!-- <button class="bg-pink-500 px-10 py-2 rounded-full text-white shadow-lg">Follow</button> -->
            <button on:click={()=>{modalStore.set(true)}} class="{show ? "hidden":""} bg-white border border-gray-500 px-10 py-2 rounded-full shadow hover:shadow-md">Send Message</button>
        </div>


           <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-2 my-3">
            <div class="block bg-center bg-no-repeat bg-cover h-40 w-full rounded-lg" style="background-image: url('https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg')" />
                <!-- <img src='https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg' alt=""> -->
            
                    <!-- <a class="block bg-center bg-no-repeat bg-cover h-40 w-full rounded-lg" href="" style="background-image: url('https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg')"></a> -->
                    <a class="block bg-center bg-no-repeat bg-cover h-40 w-full rounded-lg" href="" style="background-image: url('https://images.pexels.com/photos/247287/pexels-photo-247287.jpeg')"></a>
                    <a class="block bg-center bg-no-repeat bg-cover h-40 w-full rounded-lg" href="" style="background-image: url('https://images.pexels.com/photos/6169/woman-hand-girl-professional.jpg')"></a>

                    <a class="block bg-center bg-no-repeat bg-cover h-40 w-full rounded-lg" href="" style="background-image: url('https://images.pexels.com/photos/3851790/pexels-photo-3851790.jpeg')"></a>
                    <a class="block bg-center bg-no-repeat bg-cover h-40 w-full rounded-lg" href="" style="background-image: url('https://images.pexels.com/photos/3852159/pexels-photo-3852159.jpeg')"></a>
                    <a class="block bg-center bg-no-repeat bg-cover h-40 w-full rounded-lg" href="" style="background-image: url('https://images.pexels.com/photos/4491173/pexels-photo-4491173.jpeg')"></a>

                    <a class="block bg-center bg-no-repeat bg-cover h-40 w-full rounded-lg" href="" style="background-image: url('https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg')"></a>
                    <a class="block bg-center bg-no-repeat bg-cover h-40 w-full rounded-lg" href="" style="background-image: url('https://images.pexels.com/photos/6019812/pexels-photo-6019812.jpeg')"></a>
                    <a class="block bg-center bg-no-repeat bg-cover h-40 w-full rounded-lg" href="" style="background-image: url('https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg')"></a>
           </div>

    </div>

</div>