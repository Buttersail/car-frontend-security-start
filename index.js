import { renderTemplate, setActive, showPage } from './utils.js'
import { getAllCars } from './js-for-pages/seeCars.js'
import { addAddCarHandlers } from './js-for-pages/addCar.js'
import { setupLoginHandlers, logout, updateLoginDependentComponents } from './js-for-pages/login.js'

function renderMenuItems(evt) {
  const element = evt.target
  setActive(element)
  const id = element.id
  renderTemplate(id) //This setups the HTML for the page
  switch (id) {
    //Here you can execute JavaScript for the selected page
    // case "page-1": {
    //   break
    // }
    case 'page-see-cars': {
      getAllCars()
      break
    }
    case 'page-add-cars': {
      addAddCarHandlers()
      break
    }
    case 'page-login': {
      setupLoginHandlers()
      break
    }
    case 'page-logout': {
      logout()
      break
    }
  }
}

document.getElementById('menu').onclick = renderMenuItems
showPage('page-about') //Set the default page to render
updateLoginDependentComponents()
