<template>
    <div
      class="recent-files-projects"
    >
      <div class="centered-group">
        You have no tabs open.
        <button class="button-primary" @click="newFile">
          New File
        </button>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    newFile () {
      this.$store.dispatch('NEW_UNTITLED_TAB', {})
    }
  }
}
</script>

<style scoped>
  .recent-files-projects {
    background: var(--editorBgColor);
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    & .centered-group {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: var(--editorColor);
      & button.button-primary {
        display: block;
        margin-top: 20px;
      }
    }
  }
</style>
