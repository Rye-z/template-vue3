import { reactive } from 'vue'

const UTILS = {
  /**
   * 为分页接口的每条数据生成序号
   * @param page
   * @param pageSize
   * @param data
   * @returns {*}
   */
  setUid(data, page, pageSize) {
    let uid = 1 + (page - 1) * pageSize
    return data.map((item) => {
      const result = {
        ...item,
        uid,
      }
      uid += 1
      return result
    })
  },

  /**
   * 判断是否为 null，空对象，空数组，空字符串，空 Map
   * @param val
   * @returns {boolean}
   */
  isEmpty(val) {
    let t = val
    if (t === 0)
      t += ''

    if (val instanceof Map)
      t = val.keys()

    return t === null || t === undefined || !(Object.keys(t) || t).length
  },

  /**
   * 深拷贝
   * @param obj
   * @returns {unknown[]|null|*}
   */
  deepClone(obj) {
    if (obj === null)
      return null
    const clone = { ...obj }
    Object.keys(clone)
      .forEach(
        key => (clone[key] = typeof obj[key] === 'object' ? this.deepClone(obj[key]) : obj[key]),
      )
    if (Array.isArray(obj)) {
      clone.length = obj.length
      return Array.from(clone)
    }
    return clone
  },

  /**
   * 解析列表数据为树结构数据
   * 默认顶级节点 id 为 0
   * @param data
   * @param id 节点唯一标识
   * @param pid 节点父节点唯一标识
   * @returns {*[]}
   */
  parseListToTree(data, {
    id,
    pid,
  }) {
    if (data.length === 0)
      return []

    // 用于去除子节点，保留根节点，根节点可能有多个
    const fpSet = new Set()

    const recursive = (currentNode) => {
      const children = data.filter((item) => {
        const isChild = item[pid] === currentNode[id]
        if (isChild)
          fpSet.add(item[id])

        return isChild
      })

      children.forEach((subNode) => {
        const result = recursive(subNode)

        subNode.children = result || []

        subNode.isLeaf = result.length === 0

        subNode.pNodeName = currentNode.name
      })

      return children
    }

    // 根据 parentId 升序排列
    data.sort((a, b) => parseInt(a[pid], 10) - parseInt(b[pid], 10))

    const treeData = []
    data.forEach((item) => {
      const itemClone = { ...item }

      if (!fpSet.has(item[id])) {
        itemClone.children = recursive(item)
        treeData.push(itemClone)
      }
    })

    return treeData
  },

  fetchWrapper(func, ...params) {
    return func(...params)
      .then((data) => {
        if (!data)
          return {}
        return data
      })
      .catch(error => ({ error }))
  },

  useDefaultReactive(object = {}) {
    const initialData = object
    const data = reactive({ ...object })
    const reset = () => Object.assign(data, initialData)

    return {
      data,
      reset,
    }
  },

  expandNodeByLevel(node, level = 3) {
    if (node.level >= level)
      return

    node.expand()
    node.childNodes.forEach((subNode) => {
      UTILS.expandNodeByLevel(subNode, level)
    })
  },

  getRandomArbitrary(min, max, fixed = 0) {
    return !fixed
      ? parseInt(Math.random() * (max - min) + min, 10)
      : (Math.random() * (max - min) + min).toFixed(fixed)
  },
}

export default UTILS
