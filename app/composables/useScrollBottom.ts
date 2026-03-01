import { ref, watchPostEffect, type Ref } from 'vue';

const isAtBottom = ref(false);

export const useScrollBottom = (
  target?: Ref<HTMLElement | null>,
  container?: Ref<HTMLElement | null>
) => {
  watchPostEffect((onCleanup) => {
    const targetEl = target?.value;
    var containerEl = container?.value;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) { isAtBottom.value = true; }
    }, { root: containerEl, threshold: 0 });

    const handleScroll = () => {
      const timeout = setTimeout(() => {
        containerEl = container?.value;
        if (!containerEl || !isAtBottom.value) return;
        const offset = containerEl.scrollHeight - (containerEl.scrollTop + containerEl.clientHeight);
        if (offset > 100) { isAtBottom.value = false; }
      }, 300);
    };

    if (targetEl) observer.observe(targetEl);
    if (containerEl) {
      containerEl.addEventListener('scroll', handleScroll, { passive: true });
    }

    onCleanup(() => {
      observer.disconnect();
      containerEl?.removeEventListener('scroll', handleScroll);
    });
  });

  return { isAtBottom };
};