import { ref } from 'vue'
export const querys = ref({
  buildNme: '',
  unitName: '',
  currentPage: 1,
  pageSize: 10,
  total: 0
})
export const tableConfig = {
  tableParame: {
    height: '260'
  },
  propList: [
    {
      prop: 'name',
      label: '栋数名称'
    },
    {
      prop: 'unitName',
      label: '单元名称'
    },
    {
      label: '操作',
      width: '280px',
      slotName: 'operate'
    }
  ]
}
