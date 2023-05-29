export const dialogConig = {
  fromHeader: {
    inline: 'true',
    'label-width': '60px'
  },
  formItemS: [
    {
      field: 'loginName',
      type: 'input',
      label: '姓名'
    },
    {
      field: 'sex',
      type: 'radio',
      label: '性别',
      options: [
        {
          label: '1',
          text: '男'
        },
        {
          label: '0',
          text: '女'
        }
      ]
    },
    {
      field: 'phone',
      type: 'input',
      label: '电话',
      placeholder: '请输入电话'
    },
    {
      field: 'idCard',
      type: 'input',
      label: '身份证'
    },
    {
      field: 'username',
      type: 'input',
      label: '登录名'
    },
    {
      field: 'password',
      type: 'password',
      label: '密码'
    },
    {
      field: 'status',
      type: 'radio',
      label: '离职',
      options: [
        {
          label: '1',
          text: '是'
        },
        {
          label: '0',
          text: '否'
        }
      ]
    },
    {
      field: 'isUsed',
      type: 'radio',
      label: '启用',
      options: [
        {
          label: '0',
          text: '是'
        },
        {
          label: '1',
          text: '否'
        }
      ]
    }
  ]
}
