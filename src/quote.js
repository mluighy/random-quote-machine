import { useEffect, useState } from 'react';

const getRandomNumber = (maxNum) => {
  return Math.floor(Math.random() * maxNum);
};

const getRandomColor = () => {
  const h = getRandomNumber(360);
  const s = getRandomNumber(100);
  const l = getRandomNumber(100);
  return `hsl(${h}deg, ${s}%, ${l}%)`;
};

let color1, color2
color1 = getRandomColor()

function Quote() {
  const [quote, setQuote] = useState({})

  useEffect(() => {
    getQuote();
  }, [])

  const getQuote = () => {
    color2 = color1
    color1 = getRandomColor()
    document.body.style.backgroundImage = `linear-gradient(${color1}, ${color2})`;
    // console.log(color)

  fetch('https://api.quotable.io/random')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setQuote({
        text: data.content,
        author: data.author
      })
      // console.log(data)
    })
  }

return (

<div className="col-sm-6 p-2 bg-secondary-subtle border border-4 border-secondary rounded fs-6" id="quote-box">
    <div className='p-3'>
        <p className='p-3 border rounded bg-light fs-5' id="text"><i class="bi bi-quote"></i>{quote.text}</p>
        <p className="text-end" id="author">{"- "+quote.author}</p>
    </div>
    <div className='d-flex justify-content-between fs-3'>
        <a id="tweet-quote" href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="'+quote.text+'"'+quote.author} target="_blank" rel="noreferrer" className='bg-dark-subtle btn btn-sm rounded text-black-50'><i className="bi bi-twitter fs-6"></i></a>
        <button id="new-quote" type="button" className="btn btn-sm bg-secondary text-white fs-6" onClick={getQuote} >New quote</button>
    </div>
</div>
);
}

export default Quote;