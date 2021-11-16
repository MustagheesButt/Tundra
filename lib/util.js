export function parseCurrency(str) {
  return parseFloat(str.replaceAll(/(?!\.)(\D+)/g, ''))
}

export function toast(msg, type='info', container='body') {
  const iconMap = {success: 'fa-check', info: 'fa-exclamation', warning: 'fa-warning', danger: 'fa-skull-crossbones'}
  
  const i = document.createElement('i')
  i.className = `fa ${iconMap[type]}`
  const m = document.createElement('p')
  m.innerHTML = msg
  const t = document.createElement('div')
  t.className = `toast ${type}`
  t.append(i)
  t.append(m)

  document.querySelector(container).append(t)

  setTimeout(() => {
    t.remove()
  }, 2500)
}