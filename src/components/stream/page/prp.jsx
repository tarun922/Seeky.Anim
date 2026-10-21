
import Hls from "hls.js"
import { useEffect, useRef } from "react"
import style from "../stream.module.css"
const LecturePlayer = ({ url, suburl }) => {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = url
      return () => {
        video.pause()
        video.removeAttribute("src")
        video.load()
      }
    }

    if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(url)
      hls.attachMedia(video)

      return () => hls.destroy()
    }
  }, [url])

  return (
    <video
      ref={videoRef}
      controls
      className={style["prp-player"]}
      crossOrigin="anonymous"
      style={{ width: "100%" }}
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
