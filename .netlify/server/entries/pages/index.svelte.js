var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_964d195d = require("../../chunks/index-964d195d.js");
const subscriber_queue = [];
function writable(value, start = import_index_964d195d.n) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if ((0, import_index_964d195d.a)(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = import_index_964d195d.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_964d195d.n;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
const browser = false;
const selected = writable("Loading...");
selected.subscribe((val) => browser);
const Sidebar = (0, import_index_964d195d.c)(($$result, $$props, $$bindings, slots) => {
  let $selected, $$unsubscribe_selected;
  $$unsubscribe_selected = (0, import_index_964d195d.b)(selected, (value) => $selected = value);
  $$unsubscribe_selected();
  return `<div class="${"hidden w-28 bg-gray-700 overflow-y-auto md:block"}"><div class="${"w-full py-6 flex flex-col items-center"}"><div class="${"flex-shrink-0 flex items-center"}"><img class="${"h-8 w-auto"}" src="${"https://tailwindui.com/img/logos/workflow-mark.svg?color=white"}" alt="${"Workflow"}"></div>
        <div class="${"flex-1 mt-6 w-full px-2 space-y-1"}"><div class="${(0, import_index_964d195d.e)($selected == "Home" ? "bg-gray-800 text-white" : "text-gray-100 hover:bg-gray-600 hover:text-white") + " cursor-pointer group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium"}"><svg class="${(0, import_index_964d195d.e)($selected == "Home" ? "text-white" : "text-gray-400 group-hover:text-white ") + " h-6 w-6"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"}"></path></svg>
            <span class="${"mt-2"}">Home</span></div>
  
          <div class="${(0, import_index_964d195d.e)($selected == "Explore" ? "bg-gray-800 text-white" : "text-gray-100 hover:bg-gray-600 hover:text-white") + " cursor-pointer group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium"}"><svg class="${(0, import_index_964d195d.e)($selected == "Explore" ? "text-white" : "text-gray-400 group-hover:text-white ") + " h-6 w-6"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"}"></path></svg>
            <span class="${"mt-2"}">Explore</span></div>
  
          <div class="${(0, import_index_964d195d.e)($selected == "New Post" ? "bg-gray-800 text-white" : "text-gray-100 hover:bg-gray-600 hover:text-white") + " cursor-pointer group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium"}"><svg class="${(0, import_index_964d195d.e)($selected == "New Post" ? "text-white" : "text-gray-400 group-hover:text-white ") + " h-6 w-6"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"}"></path></svg>
            <span class="${"mt-2"}">New Post</span></div>
  
          <div class="${(0, import_index_964d195d.e)($selected == "Profile" ? "bg-gray-800 text-white" : "text-gray-100 hover:bg-gray-600 hover:text-white") + " cursor-pointer group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium"}"><svg class="${(0, import_index_964d195d.e)($selected == "Profile" ? "fill-white" : "fill-gray-400 group-hover:fill-white ") + " h-6 w-6"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 448 512"}" stroke="${"currentColor"}" fill="${"none"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"}"></path></svg>
            <span class="${"mt-2"}">Profile</span></div></div></div></div>`;
});
const Searchbar = (0, import_index_964d195d.c)(($$result, $$props, $$bindings, slots) => {
  return `<header class="${"w-full"}"><div class="${"relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex"}"><div class="${"flex-1 flex justify-between px-4 sm:px-6"}"><div class="${"flex-1 flex"}"><form class="${"w-full flex md:ml-0"}" action="${"#"}" method="${"GET"}"><label for="${"search-field"}" class="${"sr-only"}">Search all files</label>
            <div class="${"relative w-full text-gray-400 focus-within:text-gray-600"}"><div class="${"pointer-events-none absolute inset-y-0 left-0 flex items-center"}">
                <svg class="${"flex-shrink-0 h-5 w-5"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}" aria-hidden="${"true"}"><path fill-rule="${"evenodd"}" d="${"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"}" clip-rule="${"evenodd"}"></path></svg></div>
              <input name="${"search-field"}" id="${"search-field"}" class="${"h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400"}" placeholder="${"Search"}" type="${"search"}"></div></form></div></div></div></header>`;
});
var MobileNavbar_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => '.notselect.svelte-9rqenp{-moz-user-select:none;user-select:none;-webkit-user-select:none}.tap.svelte-9rqenp:active{transform:translateY(5px) scale(0.9)}.ripple.svelte-9rqenp{position:relative;overflow:hidden;transform:translate3d(0, 0, 0)}.ripple.svelte-9rqenp:after{content:"";display:block;position:absolute;width:100%;height:100%;top:0;left:0;pointer-events:none;background-image:radial-gradient(circle, #fff 10%, transparent 10.01%);background-repeat:no-repeat;background-position:50%;transform:scale(10, 10);opacity:0;transition:transform .5s, opacity 1s}.ripple.svelte-9rqenp:active:after{transform:scale(0, 0);opacity:.3;transition:0s}.shadow1.svelte-9rqenp{box-shadow:0px 7px 20px rgba(124, 124, 124, 0.173)\r\n    }')();
const css = {
  code: '.notselect.svelte-9rqenp{-moz-user-select:none;user-select:none;-webkit-user-select:none}.tap.svelte-9rqenp:active{transform:translateY(5px) scale(0.9)}.ripple.svelte-9rqenp{position:relative;overflow:hidden;transform:translate3d(0, 0, 0)}.ripple.svelte-9rqenp:after{content:"";display:block;position:absolute;width:100%;height:100%;top:0;left:0;pointer-events:none;background-image:radial-gradient(circle, #fff 10%, transparent 10.01%);background-repeat:no-repeat;background-position:50%;transform:scale(10, 10);opacity:0;transition:transform .5s, opacity 1s}.ripple.svelte-9rqenp:active:after{transform:scale(0, 0);opacity:.3;transition:0s}.shadow1.svelte-9rqenp{box-shadow:0px 7px 20px rgba(124, 124, 124, 0.173)\r\n    }',
  map: null
};
const MobileNavbar = (0, import_index_964d195d.c)(($$result, $$props, $$bindings, slots) => {
  let $selected, $$unsubscribe_selected;
  $$unsubscribe_selected = (0, import_index_964d195d.b)(selected, (value) => $selected = value);
  $$result.css.add(css);
  $$unsubscribe_selected();
  return `<div class="${"w-full fixed inset-x-0 bottom-0 mx-auto notselect z-40 md:hidden svelte-9rqenp"}" style="${"background-color:transparent; fill:transparent;"}"><div class="${"flex justify-center items-center mx-auto relative bottom-0 z-10 border-gray-100 border-2 shadow1 lg:px-4 svelte-9rqenp"}" style="${"background-color: rgba(255,255,255,0.93);"}"><div class="${"w-1/4 m-auto ripple rounded-xl tap svelte-9rqenp"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 576 512"}" class="${(0, import_index_964d195d.e)($selected == "Home" ? "fill-gray-700" : "fill-gray-400  ") + " m-auto h-16 p-5"}"><path d="${"M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"}"></path></svg>
            <p class="${"mx-auto text-center text-xs text-" + (0, import_index_964d195d.e)($selected == "Home" ? "gray-800" : "gray-600") + " font-semibold -mt-3 mb-2"}">Home</p></div>

        <div class="${"w-1/4 m-auto ripple rounded-xl tap svelte-9rqenp"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 512 512"}" class="${(0, import_index_964d195d.e)($selected == "Explore" ? "fill-gray-700" : "fill-gray-400  ") + " m-auto h-16 p-5"}"><path d="${"M234.5 5.709C248.4 .7377 263.6 .7377 277.5 5.709L469.5 74.28C494.1 83.38 512 107.5 512 134.6V377.4C512 404.5 494.1 428.6 469.5 437.7L277.5 506.3C263.6 511.3 248.4 511.3 234.5 506.3L42.47 437.7C17 428.6 0 404.5 0 377.4V134.6C0 107.5 17 83.38 42.47 74.28L234.5 5.709zM256 65.98L82.34 128L256 190L429.7 128L256 65.98zM288 434.6L448 377.4V189.4L288 246.6V434.6z"}"></path></svg>
            <p class="${"mx-auto text-center text-xs text-" + (0, import_index_964d195d.e)($selected == "Explore" ? "gray-800" : "gray-600") + " font-semibold -mt-3 mb-2"}">Explore</p></div>

        <div class="${"w-1/4 m-auto ripple rounded-xl tap svelte-9rqenp"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 512 512"}" class="${(0, import_index_964d195d.e)($selected == "New Post" ? "fill-gray-700" : "fill-gray-400") + " m-auto h-16 p-5"}"><path d="${"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z"}"></path></svg>
            <p class="${"mx-auto text-center text-xs text-" + (0, import_index_964d195d.e)($selected == "New Post" ? "gray-800" : "gray-600") + " font-semibold -mt-3 mb-2"}">New Post</p></div>
        
        <div class="${"w-1/4 m-auto ripple rounded-xl tap svelte-9rqenp"}"><svg class="${(0, import_index_964d195d.e)($selected == "Profile" ? "fill-gray-700" : "fill-gray-400") + " m-auto h-16 p-5"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 448 512"}" stroke="${"currentColor"}" fill="${"none"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"}"></path></svg>
            <p class="${"mx-auto text-center text-xs text-" + (0, import_index_964d195d.e)($selected == "Profile" ? "gray-800" : "gray-600") + " font-semibold -mt-3 mb-2"}">Profile</p></div></div></div>`;
});
const Routes = (0, import_index_964d195d.c)(($$result, $$props, $$bindings, slots) => {
  let $selected, $$unsubscribe_selected;
  $$unsubscribe_selected = (0, import_index_964d195d.b)(selected, (value) => $selected = value);
  $$unsubscribe_selected();
  return `${(0, import_index_964d195d.v)(MobileNavbar, "MobileNavbar").$$render($$result, {}, {}, {})}
<div class="${"h-screen flex"}">${(0, import_index_964d195d.v)(Sidebar, "Sidebar").$$render($$result, {}, {}, {})}
  <div class="${"flex-1 flex flex-col overflow-hidden"}">${(0, import_index_964d195d.v)(Searchbar, "Searchbar").$$render($$result, {}, {}, {})}
    
    <div class="${"flex-1 flex items-stretch overflow-hidden"}"><main class="${"flex-1 overflow-y-auto"}"><div class="${"mx-auto pt-2 px-4 sm:px-6 md:px-8"}"><h1 class="${"text-2xl font-semibold text-gray-700"}">${(0, import_index_964d195d.e)($selected)}</h1></div>
        <div class="${"mx-auto px-4 sm:px-6 md:px-8"}"><div class="${"py-4"}"></div></div></main></div></div></div>`;
});
