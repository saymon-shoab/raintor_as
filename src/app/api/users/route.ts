export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const take = searchParams.get("take") || "10"
  const skip = searchParams.get("skip") || "0"

  const response = await fetch(
    `https://tech-test.raintor.com/api/users/GetUsersList?take=${take}&skip=${skip}`
  )

  const data = await response.json()

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}