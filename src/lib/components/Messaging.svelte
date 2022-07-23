<script>
  import ChatRoom from "./ChatRoom.svelte";
  import {auth,db} from "../../firebase";
  import {onAuthStateChanged} from "firebase/auth";
  import {onMount} from "svelte";
  import {collection, query, orderBy, onSnapshot, getDoc, doc, addDoc, setDoc, updateDoc} from "firebase/firestore";
  import {userStore} from "$lib/stores";

  var friends=[];
  onMount(async()=>{
    console.log($userStore.email);
    const q = query(collection(db, "users", $userStore.email, "chats"));

    const unsubscribe = onSnapshot(q , (querySnapshot) => {
      friends = [];
      // console.log("S  ");
      querySnapshot.forEach((doc) => {
          friends.push(doc.data());
          console.log(doc.data());
      });
      // console.log("Current cities in CA: ", cities.join(", "));
    });
  })

  const findDiff=(d1)=>{
    const now= new Date();
    const date= new Date(d1);
    let msec = now.getTime()-date.getTime();
    const hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;
    const mm = Math.floor(msec / 1000 / 60);
    msec -= mm * 1000 * 60;
    if(hh != 0){
      if(hh==1) return "an hour ago";
      else return hh +" hours ago";
    }else if(mm ==0){
      return "now";
    }else if(mm == 1){
      return "a minute ago"
    }else return mm + " minutes ago";
  }

var clicked = false;
var receiver={};
  var chats= [];
  const handleChat=async (e)=>{
    console.log(e);
    getDoc(doc(db, "usernames", e)).then(async(em)=>{
      console.log(em.data().email);
      await getDoc(doc(db, "users", em.data().email)).then((rec)=>{
        receiver = rec.data();
      })
    })
    const ref = collection(db,"users/" ,$userStore.email,"chats", e,"chats/");
    const q =query(ref, orderBy('sentAt'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      chats=[]
      querySnapshot.forEach((doc) => {
          chats.push(doc.data());
      });
      console.log(chats);
      clicked=true;
    });
  };

  var msg;
  const sendMessage=()=>{
      var date= new Date();
        var data={
            msg,
            uid: $userStore.uid,
            sentAt: date,
            avatar: $userStore.avatar,
            receiver
        }
        if(msg != ""){
            try {
                setDoc(doc(db, "users", $userStore.email, "chats", receiver.username), {
                    name: receiver.username,
                    avatar: receiver.avatar,
                    lastmsg: msg,
                    lastSent: date 
                }).then(()=>{
                    addDoc(collection(db, "users", $userStore.email, "chats", receiver.username, "chats"), data).then((ref)=>{
                        updateDoc(doc(db, "users", $userStore.email, "chats", receiver.username, "chats", ref.id),{
                            id:ref.id
                        });
                    });
                });
                setDoc(doc(db, "users", receiver.email, "chats", $userStore.username), {
                    name: $userStore.username,
                    avatar: $userStore.avatar,
                    lastmsg: msg,
                    lastSent: date 
                }).then(()=>{
                    addDoc(collection(db, "users", receiver.email, "chats", $userStore.username, "chats"), data).then((ref)=>{
                        updateDoc(doc(db, "users", receiver.email, "chats", $userStore.username, "chats", ref.id),{
                            id:ref.id
                        });
                    });
                });
                msg="";
            } catch (error) {
                console.log(error);
            }
        }
    }

</script>
<div class="container mx-auto mb-16 md:mb-0 mr-4">
    <div class="min-w-full border rounded lg:grid lg:grid-cols-3">
      <div class="border-r border-gray-300 lg:col-span-1">
        <div class="mx-3 my-3 flex rounded-md shadow">
          <div class="relative text-gray-600 flex items-stretch flex-grow focus-within:z-10 rounded">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                viewBox="0 0 24 24" class="w-6 h-6 text-gray-300">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </span>
            <input type="search" class="block w-full py-2 pl-10 rounded-l outline-none" name="search"
              placeholder="Search" required />
          </div>
          <button type="button" class="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-l-0 border-gray-500 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:shadow-md  ">
            <span>Search</span>
          </button>
        </div>

        <!-- <h2 class="my ml-2 text-lg text-gray-600">Chats</h2> -->
        <div class="overflow-auto max-h-[36rem] md:max-h-[32rem] border-t border-gray-300">
          {#each friends as friend}
            <div on:click={handleChat(friend.name)} class="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
              <img class="object-cover w-10 h-10 rounded-full" src="{friend.avatar}" alt="friend avatar" />
              <div class="w-full pb-2">
                <div class="flex justify-between">
                  <span class="block ml-2 font-semibold text-gray-600">{friend.name}</span>
                  <span class="block ml-2 text-xs text-gray-600">{findDiff(friend.lastSent.seconds*1000)}</span>
                </div>
                <span class="block ml-2 text-xs text-gray-600">{friend.lastmsg}</span>
              </div>
            </div>
          {/each}
        </div>
        </div>
        <!-- <ChatRoom/> -->
      <div class="hidden lg:col-span-2 lg:block h-[36rem]">
        <div class="w-full">
          {#if clicked}
          <div class="relative flex items-center p-3 border border-white">
            <img class="object-cover w-10 h-10 rounded-full"
              src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg" alt="username" />
            <span class="block ml-2 font-bold text-gray-600">Emma</span>
          </div>
          <div class="relative w-full p-6 overflow-y-auto h-[28rem] border-t border-gray-300">
            <ul class="space-y-2">
              {#each chats as chat}
                {#if chat.uid != $userStore.uid}
                  <li class="flex justify-start">
                    <div class="relative max-w-xl px-4 py-2 text-blue-500 bg-blue-100 rounded shadow">
                      <span class="block">{chat.msg}</span>
                    </div>
                  </li>
                {:else}
                  <li class="flex justify-end">
                    <div class="relative max-w-xl px-4 py-2 text-green-700 bg-green-100 rounded shadow">
                      <span class="block">{chat.msg}</span>
                    </div>
                  </li>
                {/if}
              {/each}
            </ul>
          </div>

          <div class=" px-4 py-3 border-t border-gray-300">
            <form class="flex items-center justify-between w-full" on:submit|preventDefault={sendMessage}>
            <!-- <button>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
            </button> -->

            <input type="text" placeholder="Type Your Message" bind:value={msg}
              class="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
              name="message" required />
            <!-- <button>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </button> -->
            <button type="submit" on:click|preventDefault={sendMessage}>
              <svg class="w-5 h-5 text-gray-500 origin-center transform rotate-90" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20" fill="currentColor">
                <path
                  d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </form>
          </div>
          {/if}
        </div>
      </div>
    </div>
  </div>