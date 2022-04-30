<script context="module">
  export async function load({fetch, params}) {
    const id = params.id
    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    // const guide = await res.json()
    const res = await fetch(`/guides/${id}.json`)
    const {guide} = await res.json()

    if (res.ok) {
      return {
        props: {
          guide
        }
      }
    }

    return {
      // status: res.status,
      // error: new Error("Could not fetch the guide")
      status: 301,
      redirect: "/guides"
    }
  }
</script>

<script>
  export let guide
</script>

<div>
  <h2>{guide.title}</h2>
  <p>{guide.body}</p>
</div>
