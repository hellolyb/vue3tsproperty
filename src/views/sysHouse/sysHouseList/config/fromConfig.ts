export const formConfig = {
  fromHeader: {
    inline: 'true',
    'label-width': '69px'
  },
  formItemS: [
    {
      field: 'buildNme',
      type: 'input',
      label: '栋数名称',
      placeholder: '请输入栋数名称'
    },
    {
      field: 'unitName',
      type: 'input',
      label: '单元名称',
      placeholder: '请输入单元名称'
    },
    {
      field: 'houseNum',
      type: 'input',
      label: '房屋编号',
      placeholder: '请输入房屋编号'
    },
    {
      field: 'status',
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
