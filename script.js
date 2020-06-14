'use strict';

/*const searchUrl = 'https://api.edamam.com/search'
const searchEsp = 'https://test-es.edamam.com/search'
const appKey = 
'6b8cfdaccb097ac92ce06472d5d3e2c5'	
const appId = 'f9a8889a'
/* https://api.edamam.com/search?q=gochujang&q=rice&app_id=f9a8889a&app_key=
6b8cfdaccb097ac92ce06472d5d3e2c5 */

$(document).ready(function(){
  console.log("Waiting for user input!");
  $("body").hide(0).delay(400).fadeIn(3000)
  processEnInput()
  buttons()
})

function buttons(){
  $('#ingredients').click(event => {
    $('#welcome').addClass('hidden')
    $('#english-search').removeClass('hidden')
    $('#label').text(`What ingredients would you like to use?`)
  })
  $('#dishes').click(event => {
    $('#welcome').addClass('hidden')
    $('#english-search').removeClass('hidden')
    $('#label').text(`What are we cooking?`)
  })
}

function findRecipes(q){
  fetch('https://api.edamam.com/search?q=' + q + '&app_id=f9a8889a&app_key=6b8cfdaccb097ac92ce06472d5d3e2c5')
   .then(response => response.json())
   .then(responseJson => {
    displayRecipes(responseJson)
  }).catch(error => alert("Sorry, something went wrong."))
}


function displayRecipes(responseJson, q){
  console.log(responseJson)
  if (responseJson.more == false) {
    $('#results').removeClass('hidden')
    $('#results').empty()
    $('#results').append(`<p>Sorry, no results found. Try again!</p>`)
  } else {
    responseJson.hits.forEach(hit => console.log(hit.recipe))
  $('#results').removeClass('hidden')  
  $('#results').empty()
    for (let i = 0; i < responseJson.hits.length; i++){
      $('#results').append(
        `<p><a href="${responseJson.hits[i].recipe.url}" target="_blank">${responseJson.hits[i].recipe.label}</a><p>`)  
    }
}
}


function processEnInput(){
  $('#en-search').click(event=> {
    event.preventDefault()
    const q = $('#en-search-term').val()
    findRecipes(q)
    $('#back').removeClass('hidden')
  })
}