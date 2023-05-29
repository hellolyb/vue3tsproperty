import { ref } from 'vue'
export const querys = ref({
  userName: '',
  houseNum: '',
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
      prop: 'payPowerMoney',
      label: '缴费金额'
    },
    {
      prop: 'payPowerMonth',
      label: '所属月份'
    },
    {
      prop: 'powerNum',
      label: '表显'
    },
    {
      prop: 'payPowerStatus',
      label: '缴费状态',
      slotName: 'payPowerStatus'
    },
    {
      label: '操作',
      width: '480px',
      slotName: 'feeoperate'
    }
  ]
}
