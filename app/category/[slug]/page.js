export default function CategoryPage({params}) {
  return (
    <div className="mt-[70px]">
      <pre>{JSON.stringify(params)}</pre>
    </div>
  )
}