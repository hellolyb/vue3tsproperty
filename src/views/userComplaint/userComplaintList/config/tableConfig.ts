export const tableConfig = {
  tableParame: {
    height: '360'
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
