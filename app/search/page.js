export async function generateMetadata({ searchParams }) {
  return {
    title: `Searching for: ${searchParams.query}`
  }
}

export default function SearchPage({ searchParams }) {
  return (
    <div className="mt-[70px]">
      <pre>{JSON.stringify(searchParams, null, 2) }</pre>
    </div>
  )
}