
const Cleaner = (data) => {
  const temp = data.data.Page.media.map((e) => {
    return e
  })
  var z = temp.map((e) => {
    e.description=e.description
      ?.replace(/<br\s*\/?>/gi, " ")
      .replace(/<[^>]*>/g, "");
    return e
  }

  )


  return z
}

export default Cleaner
