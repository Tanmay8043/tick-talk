<script>
    import "../app.css";
    import MobileNavbar from "../lib/components/MobileNavbar.svelte";
  </script>
  
  <!-- svelte-ignore a11y-missing-attribute -->
  <html class="h-full">
    <body class="h-full">
      <MobileNavbar/>
    <slot />
    </body>
  </html>