const body_el = document.querySelector('body')

export const Useopenmenu = (displaymobilenav) => {
 
  const display_el = document.querySelector('.'+displaymobilenav)
  display_el.classList.toggle('open')
  display_el.style.animation = `openmenu .25s linear forwards`

  body_el.classList.toggle('body')
}

export const UseRemovemenu = (displaymobilenav) => {
    const remove_el = document.querySelector('.'+displaymobilenav)
    remove_el.style.animation = `closemenu .25s linear forwards`

    setTimeout(()=> {remove_el.classList.remove('open');  body_el.classList.remove('body')}, 300)
  }