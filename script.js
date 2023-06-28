const textarea = document.querySelector("textarea")
const tweetar = document.querySelector("button")

function pegarTweet(event) {
  event.preventDefault()

  const tweetTextarea = textarea.value
}

tweetar.addEventListener("click", pegarTweet)
