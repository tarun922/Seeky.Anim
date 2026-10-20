class Local {
  constructor(prop) {
    this.id = prop
  }

  // sab kuch padhne ka ek hi jagah, null ho to khaali object
  get() {
    return JSON.parse(localStorage.getItem(this.id)) ?? {}
  }

  // key aur value alag-alag lo
  add_item(key, value) {
    const data = this.get()
    const updated = { ...data, [key]: value }
    localStorage.setItem(this.id, JSON.stringify(updated))
  }

  search(query) {
    const data = this.get()
    if (Object.hasOwn(data, query)) {
      return data[query]
    }
    return undefined
  }
}

export default Local
