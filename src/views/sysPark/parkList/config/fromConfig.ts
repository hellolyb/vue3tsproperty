export const formConfig = {
  fromHeader: {
    inline: 'true',
    'label-width': '70px'
  },
  formItemS: [
    {
      field: 'currentPage',
      type: 'input',
      label: '车库名称',
      placeholder: '请输入车库名称'
    },
    {
      field: 'parkStatus',
      type: 'select',
      label: '车位类型',
      placeholder: '请选择车位类型',
      options: [
        {
          value: '0',
          label: '地上'
        },
        {
          value: '1',
          label: '地下'
        }
      ]
    },
    {
      field: 'parkType',
      type: 'select',
      label: '使用状态',
      placeholder: '请选择使用状态',
      options: [
        {
          value: '0',
          label: '未使用'
        },
        {
          value: '1',
          label: '已使用'
        }
      ]
    },
    {
      slotName: 'button'
    }
  ]
}
