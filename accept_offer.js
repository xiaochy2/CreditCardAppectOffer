/**
 * Amex accept offer script
 */
const worker = setInterval(function() { 
  const offer = document.querySelector('[title="Activate Offer"]')
  if (offer) {
    offer.click() 
  } else {
    clearInterval(worker);
    console.log('Done')
  }
}, 5000);


/**
 * Chase accept offer script
 */
const worker = setInterval(function() { 
  const offer = document.querySelector('.sixersoffers__cta')
  if (offer && offer.innerText === "Add to card") {
    offer.click() 
    setTimeout(function(){document.querySelector('#flyoutClose').click()},2000)
  } else {
    clearInterval(worker);
    console.log('Done')
  }
}, 5000);


/**
 * Boa accept offer script
 */
const worker = setInterval(function() { 
  const offer = document.querySelector('.add-deal')
  if (offer) {
    offer.click() 
  } else {
    clearInterval(worker);
    console.log('Done')
  }
}, 400);
