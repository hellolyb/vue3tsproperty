import { ref } from 'vue'
export const querys = ref({
  currentPage: 1,
  pageSize: 10,
  title: '',
  total: 0
})
export const tableConfig = {
  tableParame: {
    height: '200'
  },
  propList: [
    {
      prop: 'title',
      label: '标题'
    },
    {
      prop: 'createTime',
      label: '时间'
    },
    {
      prop: 'noticeContent',
      label: '内容'
    },
    {
      label: '操作',
      width: '210px',
      slotName: 'noticeoperate'
    }
  ]
}
