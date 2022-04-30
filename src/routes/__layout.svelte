<script>
  import "../styles/global.css"
  import Nav from "$lib/nav.svelte"
</script>

<header>
  <Nav />
</header>
<main>
  <hr>
  <slot/>
</main>
<footer>
  <hr>
  <p>Copyright 2022</p>
</footer>
