// const modal0 = document.getElementById('')
// const modal1 = document.getElementsByClassName('')
// const modal2 = document.querySelectorAll()
// const modal3 = document.querySelector(".")

// id in div -> take 1st
// classname -> list 
// selector -> take 1st, select like css
// -------all -> same as selector but list  
// innerText, HTML -> take text
// innerHTML -> take all html inside
// asign value from js to html 
// ex: a.innerHTML = 'html line'
// onclick="function-name()"
// Button.addEventListener('click', function-name)
// Button.removeEventListener('click', function-name)
// const newItem = document.createElement('div')
// newItem.classList.add('orgnioergoiehoi')
// newItem.textContent = 'ojsownofhwoirf'
// list.appendChild(newItem)
// removeChild
function collapse_panel_switch ()
{
    const element = document.querySelector('.navbar')
    if (element.style.maxHeight == '90px') 
        element.style.maxHeight = '400px'
    else 
        element.style.maxHeight = '90px'
}
function panel_collapse ()
{
    const element = document.querySelector('.navbar')
    element.style.maxHeight = '90px'
}
function section_link_noter ()
{
    
}