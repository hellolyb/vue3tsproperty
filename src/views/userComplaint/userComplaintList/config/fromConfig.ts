export const formConfig = {
  fromHeader: {
    inline: 'true',
    'label-width': '70px'
  },
  formItemS: [
    {
      field: 'title',
      type: 'input',
      label: '标题',
      placeholder: '请输入标题'
    },
    {
      field: 'complaintContent',
      type: 'input',
      label: '内容',
      placeholder: '请输入内容'
    },
    {
      slotName: 'button'
    }
  ]
}
