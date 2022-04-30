<script>
  let subtitle = "Subtitle"

  const updateSubtitle = () => {
    subtitle = "Something Different"
  }
</script>

<div class="index">
  <h2>{subtitle}</h2>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum quia quos
  perspiciatis, soluta corporis laborum dignissimos consequuntur cumque,
  inventore quaerat recusandae necessitatibus voluptas libero. Odio aut natus
  dolore cupiditate architecto!</p>

  <button on:click={updateSubtitle}>Update Title</button>
  <input type="text" bind:value={subtitle}>
</div>
