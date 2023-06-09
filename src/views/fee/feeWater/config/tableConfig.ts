import { ref } from 'vue'
export const querys = ref({
  total: 0,
  currentPage: 1,
  pageSize: 10,
  userName: '',
  houseNum: ''
})
export const tableConfig = {
  tableParame: {
    height: '200'
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
      prop: 'payWaterMoney',
      label: '缴费金额'
    },
    {
      prop: 'payWaterMonth',
      label: '所属月份'
    },
    {
      prop: 'waterrNum',
      label: '表显'
    },
    {
      prop: 'payWaterStatus',
      label: '缴费状态',
      slotName: 'payWaterStatus'
    },
    {
      label: '操作',
      width: '200px',
      slotName: 'Wateroperate'
    }
  ]
}
