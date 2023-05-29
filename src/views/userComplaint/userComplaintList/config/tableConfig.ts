import { ref } from 'vue'
export const querys = ref({
  currentPage: 1,
  pageSize: 10,
  title: '',
  complaintContent: '',
  total: 0
})
export const tableConfig = {
  tableParame: {
    height: '260'
  },
  propList: [
    {
      prop: 'title',
      label: '标题'
    },
    {
      prop: 'complaintContent',
      label: '内容'
    },
    {
      prop: 'status',
      label: '处理状态',
      slotName: 'disposestatus'
    },
    {
      label: '操作',
      width: '100px',
      slotName: 'dispose'
    }
  ]
}
