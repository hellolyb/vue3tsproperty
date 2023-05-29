import { ref } from 'vue'
export const querys = ref({
  loginName: '',
  phone: '',
  currentPage: 1,
  pageSize: 1,
  total: 0
})
export const tableConfig = {
  tableParame: {
    height: '360'
  },
  propList: [
    {
      prop: 'loginName',
      label: '姓名'
    },
    {
      prop: 'sex',
      label: '性别',
      slotName: 'sex'
    },
    {
      prop: 'phone',
      label: '电话'
    },
    {
      prop: 'name',
      label: '栋数'
    },
    {
      prop: 'unitName',
      label: '单元'
    },
    {
      prop: 'houseNum',
      label: '房屋编号'
    },
    {
      prop: 'houseArea',
      label: '使用面积'
    },
    {
      prop: 'parkName',
      label: '车位'
    },
    {
      prop: 'status',
      label: '是否启用',
      slotName: 'todisable'
    },
    {
      label: '操作',
      width: '480px',
      slotName: 'operateAll'
    }
  ]
}
