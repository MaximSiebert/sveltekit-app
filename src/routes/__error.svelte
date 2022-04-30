<script context="module">
 export function load({error}) {
  return {
    props: {message: error.message}
  }
 }
</script>

<script>
  export let message
</script>

<div>
  <h2>Oops</h2>
  <p>{message}</p>

  <a href="/">Return home</a>
</div>
