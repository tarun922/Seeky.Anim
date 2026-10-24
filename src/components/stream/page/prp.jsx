import Hls from "hls.js"
import { useEffect, useRef } from "react"
import style from "../stream.module.css"

const LecturePlayer = ({ url, suburl }) => {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    console.log("url:", url, "| suburl:", suburl)

    if (!video || !url) return          // url aane tak kuch mat karo

    // 1. pehle hls.js (test.html jaisa order)
    if (Hls.isSupported()) {
      console.log("branch: hls.js")
      const hls = new Hls()

      hls.on(Hls.Events.ERROR, (_, data) => {
        console.log("HLS error:", data.type, data.details, "fatal:", data.fatal)
      })

      hls.loadSource(url)
      hls.attachMedia(video)

      return () => hls.destroy()
    }

    // 2. fallback: browser ka native HLS (Safari)
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      console.log("branch: native")
      video.src = url

      return () => {
        video.pause()
        video.removeAttribute("src")
        video.load()
      }
    }

    console.log("branch: none (HLS supported nahi)")
  }, [url])

  return (
    <video
      ref={videoRef}
      controls
      autoPlay
      playsInline
      crossOrigin="anonymous"
      className={style["prp-player"]}
    >
      {suburl && (
        <track
          key={suburl}
          kind="subtitles"
          src={suburl}
          srcLang="en"
          label="English"
          default
        />
      )}
    </video>
  )
}

export default LecturePlayer
