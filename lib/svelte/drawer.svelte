<script>
    import { createEventDispatcher } from "svelte";
    import { onMount } from 'svelte';
  
    const dispatch = createEventDispatcher();
    export let isOpen = false;
    // by default Drawer opens from right. Make left-0 for left opening
    export let placement = 'right-0'
    // max size of content section
    export let maxScreenSize = 'max-w-lg'
    
    const handleClickAway = () => {
      dispatch("clickAway");
      isOpen = !isOpen;
    };
    
    let mounted = false;
    // scrolllock for content underneath drawer
    function scrollLock(isOpen) {
    if (mounted) {
      const body = document.querySelector('body');
      body.style.overflow = isOpen ? 'hidden' : 'auto';
    }
  }
  $: scrollLock(isOpen);
  
    onMount(() => {
    mounted = true;
    scrollLock(isOpen);
  });
  </script>
  
  <aside class="place-self-end">
    <div
      class="fixed inset-0 w-full h-full z-50 overflow-hidden {isOpen
        ? 'visible'
        : 'invisible'}"
    >
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="w-screen h-full bg-gray-500 cursor-pointer duration-500 transition-opacity overflow-hidden  {isOpen
          ? 'opacity-50'
          : 'opacity-0'}"
        on:click={handleClickAway}
      />
      <div
        class="absolute {placement} top-0 shadow-xl overflow-y-auto bg-white transition-all duration-300 h-full {maxScreenSize} {isOpen
          ? 'w-screen'
          : 'w-0'}"
      >
        <slot />
      </div>
    </div>
  </aside>