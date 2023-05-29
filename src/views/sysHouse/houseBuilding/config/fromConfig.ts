export const formConfig = {
  fromHeader: {
    inline: 'true',
    'label-width': '90px'
  },
  formItemS: [
    {
      field: 'name',
      type: 'input',
      label: '栋数名称',
      placeholder: '请输入栋数名称'
    },
    {
      field: 'type',
      type: 'select',
      label: '房屋类型',
      placeholder: '请输入选择房屋类型',
      options: [
        {
          value: '0',
          label: '普通房'
        },
        {
          value: '1',
          label: '电梯房'
        }
      ]
    },
    {
      slotName: 'button'
    }
  ]
}
