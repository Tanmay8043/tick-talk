<script>
    import {selected} from '$lib/stores.js';
    import {fly,fade} from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
</script>

<style>
    /* .twg{
        background-image: linear-gradient(rgba(255,255,255,0), white 15%);
    } */
    .notselect{
        user-select: none;
        -webkit-user-select: none;
    }
    .tap:active{
        transform: translateY(5px) scale(0.9);
    }
    /* .blur{
        filter: blur(3px);
    } */
    .ripple {
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
    }

    .ripple:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform .5s, opacity 1s;
    }

    .ripple:active:after {
    transform: scale(0, 0);
    opacity: .3;
    transition: 0s;
    }
    .shadow1{
        box-shadow: 0px 7px 20px rgba(124, 124, 124, 0.173)
    }
</style>

<div class="w-full fixed inset-x-0 bottom-0 mx-auto notselect z-40 md:hidden" style=" background-color:transparent; fill:transparent;">
    <div class="flex justify-center items-center mx-auto  relative bottom-0 z-10  border-gray-100 border-2 shadow1  lg:px-4" style=" background-color: rgba(255,255,255,0.93);" in:fly="{{duration: 250, x: 0, y: 250, opacity: 0.5, easing: quintOut}}">
        <div class="w-1/4 m-auto ripple rounded-xl tap" on:click={()=>{selected.set("Home")}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="{$selected == "Home"?"fill-gray-700":"fill-gray-400  "} m-auto h-16 p-5">
                <path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"/>
            </svg>
            <p class="mx-auto text-center text-xs text-{$selected=='Home'?'gray-800':'gray-600'} font-semibold -mt-3 mb-2">Home</p>
        </div>

        <div class="w-1/4 m-auto ripple rounded-xl tap" on:click={()=>{selected.set("Explore")}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="{$selected == "Explore"?"fill-gray-700":"fill-gray-400  "} m-auto h-16 p-5">
                <path d="M234.5 5.709C248.4 .7377 263.6 .7377 277.5 5.709L469.5 74.28C494.1 83.38 512 107.5 512 134.6V377.4C512 404.5 494.1 428.6 469.5 437.7L277.5 506.3C263.6 511.3 248.4 511.3 234.5 506.3L42.47 437.7C17 428.6 0 404.5 0 377.4V134.6C0 107.5 17 83.38 42.47 74.28L234.5 5.709zM256 65.98L82.34 128L256 190L429.7 128L256 65.98zM288 434.6L448 377.4V189.4L288 246.6V434.6z"/>
            </svg>
            <p class="mx-auto text-center text-xs text-{$selected=='Explore'?'gray-800':'gray-600'} font-semibold -mt-3 mb-2">Explore</p>
        </div>

        <div class="w-1/4 m-auto ripple rounded-xl tap" on:click={()=>{selected.set("New Post")}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="{$selected == "New Post"?"fill-gray-700":"fill-gray-400"} m-auto h-16 p-5">
                <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z"/>
            </svg>
            <p class="mx-auto text-center text-xs text-{$selected=='New Post'?'gray-800':'gray-600'} font-semibold -mt-3 mb-2">New Post</p>
        </div>
        
        <div class="w-1/4 m-auto ripple rounded-xl tap" on:click={()=>{selected.set("Profile")}}>
            <svg class="{$selected == "Profile"?"fill-gray-700":"fill-gray-400"} m-auto h-16 p-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" stroke="currentColor" fill="none">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/>
            </svg>
            <p class="mx-auto text-center text-xs text-{$selected=='Profile'?'gray-800':'gray-600'} font-semibold -mt-3 mb-2">Profile</p>
        </div>
    </div>
</div>