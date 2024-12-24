export default function About() {
  return (
    <div className="grow flex flex-col justify-center items-center px-6">
      <div>
        <p className="leading-7">
          🚀 This project was made to explore the new features in <span className="italic font-bold">React 19</span> and <span className="italic font-bold">Next.js 15</span>.
        </p>
        <p className="leading-7">
          ⚠️ By no means is it intended to be a fully functional app.
        </p>
        <p className="leading-5 text-xs mt-4 text-neutral-400">
          🔍 Some Pokémon images may be missing because <span className="italic font-bold">PokeAPI</span> doesn't have them on their GitHub.
        </p>
      </div>
    </div>
  )
}