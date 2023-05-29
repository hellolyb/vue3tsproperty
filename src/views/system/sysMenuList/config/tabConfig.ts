export const tableConfig = {
  tableParame: {
    height: '460',
    'row-key': 'menuId'
  },
  showPagination: true,
  propList: [
    {
      prop: 'menuLabel',
      label: '菜单名称'
    },
    {
      prop: 'type',
      label: '菜单类型',
      slotName: 'type'
    },
    {
      prop: 'icon',
      label: '菜单图标'
    },
    {
      prop: 'path',
      label: '路由名称'
    },
    {
      prop: 'status',
      label: '路由地址'
    },
    {
      prop: 'url',
      label: '组件路径'
    },
    {
      prop: 'menuCode',
      label: '权限字段'
    },
    {
      label: '操作',
      width: '200px',
      slotName: 'operate'
    }
  ]
}
