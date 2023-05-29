export const formConfig = {
  fromHeader: {
    inline: 'true',
    'label-width': '50px'
  },
  formItemS: [
    {
      field: 'loginName',
      type: 'input',
      label: '姓名',
      placeholder: '请输入姓名'
    },
    {
      field: 'phone',
      type: 'input',
      label: '电话',
      placeholder: '请输入电话'
    },
    {
      slotName: 'button'
    }
  ]
}
