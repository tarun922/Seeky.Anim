// search.jsx
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { get_search } from "../../forker/getsearch"
import Cleaner from "../../feed/cleaner/cleaner"
import AnimeCard from "../../feed/Acard/pfp"
import style from "./search.module.css"
import SearchModule from "./searchModule"

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const q = searchParams.get("q") ?? ""
  const [details, setDetails] = useState([])
  const [inputv, setinputv] = useState(q)

  useEffect(() => {
    // search text khaali ho to fetch mat karo
    if (!q) {
      setDetails([])
      return
    }

    // purana response naye ko overwrite na kare
    let ignore = false

    get_search(q).then((res) => {
      if (!ignore) setDetails(Cleaner(res))
    })

    return () => {
      ignore = true
    }
  }, [q])

  return (
    <div className={style["search"]}>
      <div className={style["search-bar"]}>
        <SearchModule
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          inputv={inputv}
          setinputv={setinputv}
        />
      </div>

      <div className={style["grid"]}>
        {details.map((e) => (
          <AnimeCard key={e.id} {...e} />
        ))}
      </div>
    </div>
  )
}

export default Search
