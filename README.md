# draggable-tree

draggable tree for vue inspired by [Ant Design Vue](https://vue.ant.design/components/tree-cn/#API) and [Element](https://element.eleme.cn/#/zh-CN/component/tree)

# use

```bash
npm install drag-tree

```

# API

## Attributes

| 参数               | 说明                                                                                                                                    | 类型                                                               | 默认值 |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ------ |
| list(v-model)      | 展示数据                                                                                                                                | array                                                              | -      |
| props              | 配置选项，具体看下表                                                                                                                    | object                                                             | -      |
| render-content     | 树节点的内容区的渲染 Function                                                                                                           | Function({node}                                                    | -      |
| default-expand-all | 默认是否展开所有节点                                                                                                                    | boolean                                                            | true   |
| allow-drop         | 拖拽时判定目标节点能否被放置。type 参数有三种情况：'top'、'mid' 和 'bottom'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后 | Function(dragNode:{node,parent}, dragOverNode:{node,parent}, type) | -      |
| rowKey             | 每条数据的主键                                                                                                                          | String                                                             |
| selected-key       | 当前选中的节点 key                                                                                                                      | String                                                             |
| expanded-keys      | 当前展开的节点 key                                                                                                                      | String                                                             |

## Props

| 参数     | 说明                               | 类型   | 默认值   |
| -------- | ---------------------------------- | ------ | -------- |
| title    | 指定节点标签为节点对象的某个属性值 | string | title    |
| children | 指定子树为节点对象的某个属性值     | string | children |

## Events

| 事件名称 | 说明                     | 回调参数                                                                                  |
| -------- | ------------------------ | ----------------------------------------------------------------------------------------- |
| select   | 节点被点击时的回调       | 被点击的节点的数据                                                                        |
| drop     | 拖拽成功完成时触发的事件 | Function({dragNode,dragParentNode},{dropNode,dropParentNode},type)(同 allow-drop 的 type) |
| expand   | 节点展开时触发的事件     | Function(expandedKeys,{expanded:Boolean, node:OriginNode, e:DomEvent}})                   |

## Scoped Slot

| name          | 说明                                           |
| ------------- | ---------------------------------------------- |
| renderContent | 自定义树节点的内容，参数为 { node,parentNode } |

# TODO

- [x] slot，slot-scope
- [x] css style
- [x] add props for title,children
- [x] add props **allow-drop**
- [ ] support clone from outside
- [x] global toggle expandAll
