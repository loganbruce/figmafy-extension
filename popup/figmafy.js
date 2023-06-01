const init = async () => {
  let themes = await browser.storage.local.get(['figmaDark', 'figmaLight', 'figjamFlat', 'figjamPop'])
  let currentTheme = await browser.storage.local.get('savedTheme')

  let tick = document.getElementById(currentTheme.savedTheme.name)
  tick.checked = true

  const updateTheme = (themeName) => {
    
      browser.storage.local.set({savedTheme:  {name:`${themeName}`}})
      
      if (themeName === 'figma-dark') {
        browser.theme.update(themes.figmaDark.theme)
      }
      else if (themeName === 'figma-light') {
        browser.theme.update(themes.figmaLight.theme)
      }
      else if (themeName === 'figjam-flat') {
        browser.theme.update(themes.figjamFlat.theme)
      }
      else if (themeName === 'figjam-pop') {
        browser.theme.update(themes.figjamPop.theme)
    }
  }
  
  
  document.addEventListener('click', (e) => {
    updateTheme(e.target.value)
  })
} 

init()