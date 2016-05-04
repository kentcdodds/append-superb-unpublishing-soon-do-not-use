import superb from 'superb'

export default appendSupurb

function appendSupurb(string = '') {
  return `${string} ${superb()}`
}
