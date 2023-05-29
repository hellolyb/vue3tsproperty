import { ref } from 'vue'
export const querys = ref({
  buildNme: '',
  status: '',
  unitName: '',
  houseNum: '',
  currentPage: 1,
  pageSize: 10,
  total: 0
})
export const tableConfig = {
  tableParame: {
    height: '360'
  },
  propList: [
    {
      prop: 'name',
      label: '栋数名称'
    },
    {
      prop: 'unitName',
      label: '单元名称'
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
      prop: 'status',
      label: '使用状态',
      slotName: 'Usagestatus'
    },
    {
      label: '操作',
      width: '220px',
      slotName: 'operate'
    }
  ]
}
