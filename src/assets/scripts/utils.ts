/**
 * 存储localStorage
 */
export const setStore = (name: string, content: string) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
export const getStore = (name: string) => {
  if (!name) return
  return JSON.parse(window.localStorage.getItem(name))
}

/**
 * 删除localStorage
 */
export const removeStore = (name: string) => {
  if (!name) return
  window.localStorage.removeItem(name)
}

/**
 * 存储Cookie
 */
 export const setCookie = (name: string, value: string, exdays: number) => {
  const d = new Date()
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
  const expires = 'expires=' + d.toUTCString()
  document.cookie = name + '=' + value + '; ' + expires
}

/**
 * 获取Cookie
 */
export const getCookie = (name: string | any[]) => {
  name = name + '='
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    const c = ca[i].trim()
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

/**
 * 删除Cookie
 */
export const delCookie = (name: string | any[]) => {
  const exp = new Date()
  exp.setTime(exp.getTime() - 1)
  const cval = getCookie(name)
  if (cval != null)
    document.cookie = name + '=' + cval + ';expires=' + exp.toUTCString()
}