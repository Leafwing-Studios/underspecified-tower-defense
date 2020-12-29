const plugin = (hook, vm) => {
  var trans = () => {
    document.documentElement.classList.add('transition')
    window.setTimeout(() => {
      document.documentElement.classList.remove('transition')
    }, 210)
  }
	
  var setColor = ({ background, toggleBtnBg, textColor, highlightColor, divider, backgroundAlt }) => {
		var splitBackground = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(background)
		var splitBackground = splitBackground || ['', 'ff', 'ff', 'ff']
		
    document.documentElement.style.setProperty(
      '--docsify_dark_mode_bg',
      background
    )
    document.documentElement.style.setProperty(
      '--docsify_dark_mode_btn',
      toggleBtnBg
    )
    document.documentElement.style.setProperty('--text_color', textColor)
		document.documentElement.style.setProperty('--highlight_color', highlightColor)
		document.documentElement.style.setProperty('--divider_color', divider)
		document.documentElement.style.setProperty('--alternate_background', backgroundAlt)
		document.documentElement.style.setProperty(
			'--docsify_dark_mode_bg_rgb', 
			`${parseInt(splitBackground[1], 16)}, ${parseInt(splitBackground[2], 16)}, ${parseInt(splitBackground[3], 16)}`
		)
  }

  var theme = { dark: {}, light: {} }
  var defaultConfig = {
    dark: {
      background: '#002b36',
      toggleBtnBg: '#586e75', // same as divider
			textColor: '#eee8d5', // primary content (lightened)
      highlightColor: '#fdf6e3', // emphasized content (lightened)
      // textColor: '#839496', // primary content (true)
      // highlightColor: '#93a1a1', // emphasized content (true)
			divider: '#586e75', // comment/seconday content
      backgroundAlt: '#073642', // background highlights
    },
    light: {
      background: '#fdf6e3',
      toggleBtnBg: '#93a1a1',
      textColor: '#073642', // primary content (total dark)
			highlightColor: '#002b36', // emphasized content (total dark)
      // textColor: '#405d66', // primary content (darkened)
			// highlightColor: '#073642', // emphasized content (darkened)
      // textColor: '#657b83', // primary content (true)
			// highlightColor: '#586e75', // emphasized content (true)
			divider: '#93a1a1',
			backgroundAlt: '#eee8d5',
    }
  }

  theme = { ...defaultConfig, ...vm.config.darkMode }
	
	hook.mounted(function () {
		var checked = ''
		if (localStorage.getItem('DOCSIFY_DARK_MODE')) {
			currColor = localStorage.getItem('DOCSIFY_DARK_MODE');
			if (currColor === 'dark') checked = 'checked'
		}
		
    var darkEl = ` <div id="dark_mode">
     <input class="container_toggle" type="checkbox" id="switch" name="mode" ${checked} />
     <label for="switch">Toggle</label>
   </div>`
		
		const el = window.Docsify.dom.create('div', darkEl);
		const aside = window.Docsify.dom.find('aside');
		window.Docsify.dom.appendTo(aside, el);
	});

  hook.doneEach(function() {
    var currColor
    if (localStorage.getItem('DOCSIFY_DARK_MODE')) {
      currColor = localStorage.getItem('DOCSIFY_DARK_MODE')
      setColor(theme[`${currColor}`])
    } else {
      currColor = 'light'
      setColor(theme.light)
    }

    var checkbox = document.querySelector('input[name=mode]')
    
    if (!checkbox) {
      return
    }

    checkbox.addEventListener('change', function() {
      // dark
      if (currColor === 'light') {
        trans()
        setColor(theme.dark)
        localStorage.setItem('DOCSIFY_DARK_MODE', 'dark')
        currColor = 'dark'
      } else {
        trans()
        setColor(theme.light)
        localStorage.setItem('DOCSIFY_DARK_MODE', 'light')
        currColor = 'light'
      }
    })
  })
}

window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins)
