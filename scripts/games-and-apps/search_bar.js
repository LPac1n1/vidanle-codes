function search() {
  let searchBar = document.getElementById('search-bar-input').value
  searchBar = searchBar.toLowerCase()

  const cardTitles = document.getElementsByClassName('card-title')
  const cards = document.getElementsByClassName('card')

  for(let i = 0; i < cardTitles.length; i++) {
    if(!cardTitles[i].innerHTML.toLowerCase().includes(searchBar)) {
      cards[i].style.display = 'none'
    } else {
      cards[i].style.display = 'block'
    }
  }
}