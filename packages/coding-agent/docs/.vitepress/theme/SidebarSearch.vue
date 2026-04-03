<script setup>
import { ref, watch, onMounted, nextTick } from 'vue'
import { useRouter } from 'vitepress'

const query = ref('')
const router = useRouter()

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// This function filters the sidebar items based on the search query.
// It iterates through all sidebar elements and toggles their visibility.
function filterSidebar() {
  const q = query.value.trim()
  const qLower = q.toLowerCase()
  const allItems = document.querySelectorAll('.VPSidebarItem')

  if (allItems.length === 0) {
    // If no items found, try again shortly (sidebar might be loading)
    setTimeout(filterSidebar, 100)
    return
  }

  if (!q) {
    allItems.forEach(el => {
      el.style.display = ''
      const textEls = el.querySelectorAll('.text')
      textEls.forEach(textEl => {
        if (textEl.hasAttribute('data-original-html')) {
          textEl.innerHTML = textEl.getAttribute('data-original-html')
        }
      })
    })
    return
  }

  // 1. Initially hide everything and reset text
  allItems.forEach(el => {
    el.style.display = 'none'
    const textEls = el.querySelectorAll('.text')
    textEls.forEach(textEl => {
      if (!textEl.hasAttribute('data-original-html')) {
        textEl.setAttribute('data-original-html', textEl.innerHTML)
      }
      textEl.innerHTML = textEl.getAttribute('data-original-html')
    })
  })

  // 2. Show items that match and their ancestors
  allItems.forEach(el => {
    const textEls = el.querySelectorAll('.text')
    let matched = false
    
    textEls.forEach(textEl => {
      const text = textEl.textContent
      const textLower = text.toLowerCase()
      
      if (textLower.includes(qLower)) {
        matched = true
        // Highlight all matches by splitting and escaping parts
        const regex = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
        const parts = text.split(regex)
        textEl.innerHTML = parts.map((part, i) => {
          if (i % 2 === 1) {
            return `<span class="highlight">${escapeHtml(part)}</span>`
          }
          return escapeHtml(part)
        }).join('')
      }
    })

    if (matched) {
      // Show this item and all its ancestors
      let current = el
      while (current && current.classList.contains('VPSidebarItem')) {
        current.style.display = ''
        // Find parent VPSidebarItem
        let parent = current.parentElement
        while (parent && !parent.classList.contains('VPSidebarItem') && parent !== document.body) {
          parent = parent.parentElement
        }
        current = parent
      }
    }
  })
}

// Watch for query changes to filter the sidebar
watch(query, filterSidebar)

// We also need to re-apply filter if the sidebar re-renders (e.g. on navigation)
onMounted(() => {
  nextTick(() => {
    filterSidebar()
  })
})

// Re-apply filter when route changes as sidebar items are recreated
watch(() => router.route.path, () => {
  nextTick(() => {
    filterSidebar()
  })
})
</script>

<template>
  <div class="sidebar-search">
    <input
      v-model="query"
      type="text"
      placeholder="Filter sidebar..."
      class="search-input"
    />
  </div>
</template>

<style>
/* Style for highlighted text (global because injected via innerHTML) */
.VPSidebarItem .highlight {
  background-color: #ffe066 !important;
  color: #000000 !important;
  border-radius: 2px !important;
  padding: 0 2px !important;
  margin: 0 0px !important;
  font-weight: bold !important;
}
</style>

<style scoped>
.sidebar-search {
  padding: 8px 12px;
  border-bottom: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg);
  position: sticky;
  top: 0;
  z-index: 10;
}

.search-input {
  width: 100%;
  padding: 4px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background-color: var(--vp-c-bg-alt);
  font-size: 13px;
  color: var(--vp-c-text-1);
  outline: none;
  transition: border-color 0.25s;
}

.search-input:focus {
  border-color: var(--vp-c-brand-1);
}

/* Ensure the sidebar items don't have jumpy transitions when filtering */
:deep(.VPSidebarItem) {
  transition: none !important;
}
</style>
