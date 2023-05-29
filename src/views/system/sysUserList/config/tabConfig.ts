import { ref } from 'vue'
export const querys = ref({
  loginName: '',
  phone: '',
  curentPage: 1,
  pageSize: 10,
  total: 0
})
export const tableConfig = {
  tableParame: {
    height: '460'
  },
  propList: [
    {
      prop: 'loginName',
      label: '姓名'
    },
    {
      prop: 'phone',
      label: '电话'
    },
    {
      prop: 'idCard',
      label: '身份证号'
    },
    {
      prop: 'sex',
      label: '性别',
      align: 'center',
      slotName: 'sex'
    },
    {
      prop: 'isUsed',
      label: '是否离职',
      slotName: 'isUsed',
      align: 'center'
    },
    {
      prop: 'status',
      label: '是否启用',
      slotName: 'status',
      align: 'center'
    },
    {
      label: '操作',
      width: '280px',
      slotName: 'operate'
    }
  ]
}
