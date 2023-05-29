import { ref } from 'vue'
export const querys = ref({
  total: 0,
  currentPage: 1,
  pageSize: 10,
  userId: '',
  repairContent: ''
})
export const tableConfig = {
  tableParame: {
    height: '260'
  },
  propList: [
    {
      prop: 'repairContent',
      label: '报修内容'
    },
    {
      prop: 'repairAddress',
      label: '报修地址'
    },
    {
      prop: 'phone',
      label: '联系电话'
    },
    {
      prop: 'status',
      label: '处理状态',
      slotName: 'statusAll'
    },

    {
      label: '操作',
      width: '100px',
      slotName: 'repairoperate'
    }
  ]
}
