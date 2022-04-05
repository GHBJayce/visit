<template>
</template>

<script>
import moment from 'moment'
import JW from 'j-weapons'
import {message} from 'ant-design-vue'
import { reactive,toRefs } from 'vue'
export default {
  //name: 'HelloWorld',
  // props: {
  //   msg: String,
  // },
  setup() {
    const data = reactive({
      items: [
        {
          repoName: 'GHBJayce/j-weapons',
        }
      ],
      api: {
        github: {
          root: 'https://api.github.com/',
        }
      },
      input: 0,
      repos: {
        _key: undefined,
        type: 'card',
        closable: true,
        position: 'left',
        items: [{
          name: 'tab1',
          content: '123',
          closable: true,
        }],
      },

      time: '',
      minute: '',
      second: '',
      millisecond: '',
      human: () => {
      }
    })
    const getGithubRepoContentList = (repoName, path, callback) => {
      if (JW.isEmpty(repoName)) {
        message.error('Please input the repository name.')
      }
      path = path || ''
      callback = callback || (() => {})
      axios.get(data.api.github.root + 'repos/' + repoName + '/contents/' + path).then((response) => {
        if (response.status !== 200) {
          return
        }
        const responseData = response.data
        for (let i in responseData) {
          const item = responseData[i]
          let temp = buildItem(
            item.name,
            item.path,
            item.sha,
            item.type,
            item.size,
            item.download_url,
            item.name.substr(item.name.lastIndexOf('.') + 1),
          )
          currentNode.push(temp)
        }
        callback()
      })
    }
    const buildItem = (name, path, id, type, size, downloadUrl, extend, children) => {
      children = children || []
      return {
        name: name,
        path: path,
        key: id,
        type: type,
        size: size,
        downloadUrl: downloadUrl,
        extend: extend,
        children: children,
      }
    }
    const addRepo = () => {

    }
    // const input = ref()
    // const time = ref('')

    // const human = () => {
    //     console.log(23)
    //     time.value = moment.duration(input, "seconds").humanize(); // a minute
    //     console.log(time.value)
    //   }
    return {
      ...toRefs(data),
      addRepo,
      // input,
      // time,
      // human,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
