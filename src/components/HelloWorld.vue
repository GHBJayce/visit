
<template>
  <div>
    <div>
      <a-input @keyup.enter="addRepository" v-model="input">
        <template #addonAfter>
          Add
        </template>
      </a-input>
    </div>
    <a-tabs v-model:activeKey="repository.active" hide-add type="editable-card">
      <a-tab-pane v-for="item in repository.items" :key="item.id" :tab="item.package" closable>

      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import {ref} from 'vue'
import JW from 'j-weapons'
export default {
  setup() {
    let input = ref<String>('')
    let repository = ref<Object>({
      active: 0,
      items: [],
    })
    const pushRepository = (packageName) => {
      repository.items.push(toRepositoryItemFormat(getRepositoryNextId(), '', packageName))
    }
    const addRepository = () => {
      input = ''
      pushRepository(input)
    }
    const getRepositoryNextId = () => {
      const ids = JW.pluck(repository.items, 'id')
      return ids.length === 0 ? 0 : Math.max(...ids)
    }
    const getRepository = (packageName) => {
      axios.get('https://api.github.com/repos/'+packageName+'/contents', {
        params: {},
      }).then((res) => {
        console.log(res)
      })
    }
    const toRepositoryItemFormat = (id, name, packageName, items) => {
      return {
        id: id,
        name: name || '',
        package: packageName,
        items: items || [],
      }
    }
    const toContentItemFormat = (type, name, size, downloadUrl, sha) => {
      return {
        type: type,
        name: name,
        downloadUrl: downloadUrl,
        size: size,
        sha: sha,
      }
    }
    return {
      input,
      repository,
      addRepository,
    }
  },
}
</script>


<style scoped>

</style>
