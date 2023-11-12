export const toMinutes = (time) => {
  const [h, m] = time.split(':')
  return h * 60 + +m
}

export const toHours = (time) => {
  return `${Math.floor(time / 60).toFixed(0)}:${(time % 60).toFixed(0).padStart(2, '0')}`
}