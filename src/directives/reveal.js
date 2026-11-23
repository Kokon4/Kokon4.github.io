// Directiva v-reveal: anima la entrada de un elemento cuando aparece en pantalla.
const observer =
  typeof IntersectionObserver !== 'undefined'
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.12 },
      )
    : null

export const reveal = {
  mounted(el) {
    el.classList.add('reveal')
    if (observer) observer.observe(el)
    else el.classList.add('visible')
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
