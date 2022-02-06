function setCookie(
  name: string,
  value: string,
  expireTime: number | Date = 800
) {
  if (typeof expireTime === 'number') {
    const exp = new Date()
    exp.setTime(exp.getTime() + expireTime * 1000)
    document.cookie =
      name + '=' + encodeURI(value) + ';expires=' + exp.toUTCString()
  } else {
    document.cookie =
      name + '=' + encodeURI(value) + ';expires=' + expireTime.toUTCString()
  }
}

function getCookie(name: string) {
  const arr = document.cookie.match(
    new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  )
  if (arr != null) {
    return decodeURI(arr[2])
  } else {
    return null
  }
}

function clearCookie(name: string) {
  const exp = new Date()
  exp.setTime(exp.getTime() - 1)
  const cval = getCookie(name)
  if (cval != null)
    document.cookie = name + '=' + cval + ';expires=' + exp.toUTCString()
}

export default {
  setCookie,
  getCookie,
  clearCookie,
}
