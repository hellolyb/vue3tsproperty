export const tableConfig = {
  tableParame: {
    height: '160'
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
      prop: 'parkName',
      label: '车位'
    },
    {
      prop: 'parkType',
      label: '车位类型',
      slotName: 'parkType'
    },
    {
      prop: 'payParkMonth',
      label: '所属月份'
    },
    {
      prop: 'payParkMoney',
      label: '缴费金额'
    },
    {
      prop: 'payParkStatus',
      label: '缴费状态',
      slotName: 'payParkStatus'
    },
    {
      label: '操作',
      width: '480px',
      slotName: 'Parkoperate'
    }
  ]
}
