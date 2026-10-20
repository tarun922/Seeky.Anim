// searchModule.jsx
import { useEffect } from "react"
import style from "./search.module.css"

const SearchModule = ({ searchParams, setSearchParams, inputv, setinputv }) => {
  const q = searchParams.get("q") ?? ""

  // URL bahar se badle (jaise back button) to input ko usse match karo
  useEffect(() => {
    setinputv(q)
  }, [q])

  // type karna band hone ke 400ms baad URL update karo
  useEffect(() => {
    const text = inputv.trim()
    if (text === q) return            // URL pehle se wahi hai, kuch mat karo

    const id = setTimeout(() => {
      if (text) {
        setSearchParams({ q: text }, { replace: true })
      } else {
        setSearchParams({}, { replace: true })
      }
    }, 400)

    return () => clearTimeout(id)
  }, [inputv, q, setSearchParams])

  return (
    <div className={style["box"]}>
      <input
        type="text"
        value={inputv}
        placeholder="Search anime..."
        onChange={(e) => setinputv(e.target.value)}
        className={style["field"]}
      />
    </div>
  )
}

export default SearchModule
