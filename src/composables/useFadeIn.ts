import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export function useFadeIn(target: Ref<HTMLElement | null>) {
  const visible = ref(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          visible.value = true
          observer?.disconnect()
          observer = null
        }
      },
      { threshold: 0.15 },
    )
    if (target.value) {
      observer.observe(target.value)
    }
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { visible }
}
