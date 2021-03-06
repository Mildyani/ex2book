import booksCollection from './books.json'

import './main.scss'

document.addEventListener('DOMContentLoaded', function(){
  const cards = document.getElementById('cards')
  console.log(booksCollection);
  const booksdata = booksCollection.data;
  booksdata.forEach(book=> {
    let cardDOM = buildCardDOM(book)
    cards.insertAdjacentHTML('beforeend', cardDOM) 
  })
})


function buildCardDOM(book) {
    
    return (
      `<div class="card">
        <img src="${booksCollection.image_base_url.concat(book.ImageURL)}" alt="#">
        <div class="books-info">
            <div class="Title">${book.Title}</div>
            <div class="Authors">${book.Authors}</div>
            <div class="Format">${book.Format}</div>
        </div>
       </div>`
    )
}
