<script>
import JW from 'j-weapons'
import {message} from 'ant-design-vue'

export default {
  data() {
    return {
      input: '',
      repos: {
        type: 'card',
        closable: true,
        position: 'left',
        items: [{
          name: 'tab1',
          content: '123',
          closable: true,
        }],
      }
    }
  },
  methods: {
    addRepo() {

    }
  }
}
</script>

<template>
  <div>
    <a-input @keyup.enter="addRepo" v-model="input">
      <template #addonAfter>
        <i class="bi bi-plus h4" role="button"></i>
      </template>
    </a-input>
    <ao-tab :data="repos"></ao-tab>
  </div>
</template>

<style>
</style>
