<script lang="ts">
import { defineComponent, h } from 'vue'

export default defineComponent({
  props: {
    columns: {
      type: Number,
      default: 1,
    },
  },
  setup(props, ctx) {
    if (!ctx.slots?.default) {
      return
    }
    // Render children columns and dispatch children in them from left to right
    return () =>
      h(
        'div',
        {
          ...ctx.attrs,
          style: 'display: flex; word-break: break-word;',
        },
        Array.from(Array(props.columns)).map((col, i) =>
          h(
            'div',
            {
              style: `flex: 0 0 ${100 / props.columns}%; width: ${
                100 / props.columns
              }%;`,
            },
            ctx.slots
              ?.default?.()[0]
              .children.filter((vnode, j) => j % props.columns === i),
          ),
        ),
      )
  },
})
</script>
