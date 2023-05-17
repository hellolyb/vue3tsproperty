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
