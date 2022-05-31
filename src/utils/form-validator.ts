const FORM_RULES = {
  notEmptyWidthMsg: (msg: string, trigger = 'blur') => ({
    required: true,
    message: msg || '不可为空',
    trigger,
  }),
  selectNotEmpty: (msg: string, trigger = 'blur') => ({
    required: true,
    message: msg || '不可为空',
    trigger,
  }),
  isNumber: (msg: string, trigger = 'blur') => ({
    type: 'number',
    message: msg || '必须是数字',
    trigger,
  }),
  numOrAlphabet: (msg: string, trigger = 'blur') => ({
    pattern: /^[0-9a-zA-Z]+$/,
    message: msg || '仅限英文和数字',
    trigger,
  }),
  numLengthLimit: (min: number, max: number) => ({
    pattern: RegExp('\\b' + `^\\d{${min},${max}}$` + '\\b'),
    message: `位数在 ${min} ~ ${max} 之间`,
    trigger: 'blur',
  }),
  strLengthLimit: (min: number, max: number) => ({
    min: min ?? 0,
    max: max ?? 1000,
    message: `长度在 ${min} 到 ${max} 之间`,
    trigger: 'blur',
  }),
  phoneValid: (msg: string, trigger = 'blur') => ({
    pattern: /^(13[0-9]|14[0-14-9]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
    message: msg || '手机号码格式错误',
    trigger,
  }),
  nameZhValid: (msg: string, trigger = 'blur') => ({
    pattern: /^[\u4E00-\u9FA5]{2,4}$/,
    message: msg || '姓名格式有误',
    trigger,
  }),
  carLicenseValid: (msg: string, trigger = 'blur') => ({
    pattern: /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[a-zA-Z](([DF]((?![IO])[a-zA-Z0-9](?![IO]))[0-9]{4})|([0-9]{5}[DF]))|[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1})$/,
    message: msg || '车牌号格式有误',
    trigger,
  }),
  idCardValid: (msg: string, trigger = 'change') => ({
    pattern: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
    message: msg || '身份证格式有误',
    trigger,
  }),
  passwordStrong: (msg: string, trigger = 'blur') => ({
    pattern: /\S*(?=\S{8,16})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*/,
    message: msg || '请使用字母、数字、特殊字符的组合，且至少包含一个大写字母，长度至少为 8 ~ 16 位',
    trigger,
  }),
  email: (msg: string, trigger = 'change') => ({
    pattern: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/,
    message: msg || '邮箱格式错误',
    trigger,
  }),
}

export default FORM_RULES
