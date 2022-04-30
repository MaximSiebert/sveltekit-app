export async function get({params}) {
  const guides = [
    {id: 1, title: "some time 1", body: "lorem"},
    {id: 2, title: "some time 2", body: "lorem"},
    {id: 3, title: "some time 3", body: "lorem"},
    {id: 4, title: "some time 4", body: "lorem"},
    {id: 5, title: "some time 5", body: "lorem"},
    {id: 6, title: "some time 6", body: "lorem"}
  ]

  const guide = guides.find((g) => g.id == params.id)

  if (guide) {
    return {
      status: 200,
      body: {guide}
    }
  }

  return {
    status: 404
  }
}
