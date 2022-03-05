# Lamb-UI

## Selector
### prop 参数

| 参数名      | 说明                           |      类型      | 是否必须 |  默认值  |
| ----------- | ------------------------------ | :------------: | :------: | :------: |
| data        | 下拉列表选项                   | Array\<object> |   必选   |    —     |
| selected    | 选项选择回调函数，接收选择的值 |    Function    |   必选   |    —     |
| placeholder | 输入框提示文本                 |     String     |   可选   | '请选择' |





## TreeMenu

### prop

| 参数名 | 说明                           |      类型      | 是否必须 | 默认值 |
| ------ | ------------------------------ | :------------: | :------: | :----: |
| menu   | 菜单数据                       | Array\<object> |   必选   |   —    |
| choose | 点击菜单项回调，接收菜单项对象 |    Function    |   必选   |   —    |



## Link

### prop

| 参数      | 说明            | 类型    | 可选值                                      | 是否必须 |  默认值  |
| :-------- | :-------------- | :------ | :------------------------------------------ | :------: | :------: |
| type      | 类型            | String  | primary / success / warning / danger / info |   可选   |    —     |
| underline | 是否下划线      | Boolean | —                                           |   可选   |   true   |
| disabled  | 是否禁用状态    | Boolean | —                                           |   可选   |  false   |
| href      | 原生 href 属性  | String  | —                                           |   可选   |    —     |
| target    | 原生 target属性 | String  | _blank / _self / _parent / _top             |   可选   | '_blank' |





## Button

### prop

| 参数   | 说明         | 类型    | 可选值                                      | 是否必须 | 默认值 |
| :----- | :----------- | :------ | :------------------------------------------ | :------: | :----: |
| type   | 类型         | String  | primary / success / warning / danger / info |   可选   |   —    |
| round  | 是否圆角按钮 | boolean | —                                           |   可选   | false  |
| circle | 是否圆形按钮 | boolean | —                                           |   可选   | false  |



