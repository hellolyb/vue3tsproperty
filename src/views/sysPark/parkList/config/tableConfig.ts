import { ref } from 'vue'
export const querys = ref({
  currentPage: 1,
  pageSize: 10,
  parkName: '',
  parkstatus: '',
  parkType: '',
  total: 0
})
export const tableConfig = {
  tableParame: {
    height: '360'
  },
  propList: [
    {
      prop: 'parkName',
      label: '车位名称'
    },
    {
      prop: 'parkNum',
      label: '序号',
      slotName: 'parkNum'
    },
    {
      prop: 'parkType',
      label: '使用状态',
      slotName: 'parkType'
    },
    {
      prop: 'parkStatus',
      label: '车位类型',
      slotName: 'parkStatus'
    },
    {
      label: '操作',
      width: '280px',
      slotName: 'operate'
    }
  ]
}
