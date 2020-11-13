import refs from "./refs"
import refsObj from "./refs.js"

const shareBtn = document.getElementById("#telegram")
console.dir(shareBtn)
console.log(refsObj.ARR)

const shareTg = function (id) {
  const url = document.URL
  let text = `Hey, friend! Check this movie: 
  el.title
  Summary: el.overview`
  shareBtn.href = `https://t.me/share/url?url=${url}&text=${text}`
}
