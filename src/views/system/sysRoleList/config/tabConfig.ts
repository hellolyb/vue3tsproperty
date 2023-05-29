import { ref } from 'vue'
export const querys = ref({
  pageSize: 10,
  currentPage: 1,
  roleName: '',
  total: 0
})
export const tableConfig = {
  tableParame: {
    height: '260'
  },
  propList: [
    {
      prop: 'roleName',
      label: '角色名称'
    },
    {
      prop: 'remark',
      label: '备注'
    },

    {
      label: '操作',
      width: '280px',
      slotName: 'operate'
    }
  ]
}
