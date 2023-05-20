# Mermaid 简介

[[TOC]]

## 1. 什么是 Mermaid

[Mermaid](https://mermaid.js.org/) 允许你使用文本和代码创建图表和可视化。

它是一个基于 JavaScript 的制图和图表工具，可以渲染受 Markdown 启发的文本定义，动态地创建和修改图表。

如果你熟悉 Markdown，那么学习 Mermaid 的语法应该没有问题。

这里还有一个官方的 [在线 Mermaid 编辑器](https://mermaid.live/edit)，你可以在这里尝试 Mermaid 的语法。它还提供了更换主题、导出 SVG 等功能。

Mermaid 是一个基于 JavaScript 的图表工具，它使用 Markdown 启发的文本定义和一个渲染器来创建和修改复杂的图表。Mermaid 的主要目的是帮助文档赶上开发。

绘制图表和文档要花费开发人员宝贵的时间，而且很快就会过时。但是，没有图表或文档会破坏生产力，损害组织学习。

Mermaid 通过使用户能够创建易于修改的图表来解决这个问题，它也可以成为生产脚本（和其他代码片段）的一部分。

## 2. 示例图表

### 2.1 流程图

```mermaid:no-line-numbers
graph TD
    A-->B
    A-->C
    B-->D
    C-->D
```

```mermaid
graph TD
    A-->B
    A-->C
    B-->D
    C-->D
```

### 2.2 序列图

```mermaid:no-line-numbers
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
```

```mermaid
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
```

### 2.3 Gantt 图

```mermaid:no-line-numbers
gantt
    dateFormat  YYYY-MM-DD
    title Adding GANTT diagram to mermaid
    excludes weekdays 2014-01-10

    section A section
    Completed task      : done,    des1, 2014-01-06,2014-01-08
    Active task         : active,  des2, 2014-01-09, 3d
    Future task         :          des3, after des2, 5d
    Future task2        :          des4, after des3, 5d
```

```mermaid
gantt
    dateFormat  YYYY-MM-DD
    title Adding GANTT diagram to mermaid
    excludes weekdays 2014-01-10

    section A section
    Completed task      : done,    des1, 2014-01-06,2014-01-08
    Active task         : active,  des2, 2014-01-09, 3d
    Future task         :          des3, after des2, 5d
    Future task2        :          des4, after des3, 5d
```

### 2.4 类图

```mermaid:no-line-numbers
classDiagram
    Class01 <|-- AveryLongClass : Cool
    Class03 *-- Class04
    Class05 o-- Class06
    Class07 .. Class08
    Class09 --> C2 : Where am i?
    Class09 --* C3
    Class09 --|> Class07
    Class07 : equals()
    Class07 : Object[] elementData
    Class01 : size()
    Class01 : int chimp
    Class01 : int gorilla
    Class08 <--> C2: Cool label
```

```mermaid
classDiagram
    Class01 <|-- AveryLongClass : Cool
    Class03 *-- Class04
    Class05 o-- Class06
    Class07 .. Class08
    Class09 --> C2 : Where am i?
    Class09 --* C3
    Class09 --|> Class07
    Class07 : equals()
    Class07 : Object[] elementData
    Class01 : size()
    Class01 : int chimp
    Class01 : int gorilla
    Class08 <--> C2: Cool label
```

### 2.5 Git 图

```mermaid:no-line-numbers
gitGraph
    commit
    commit
    branch develop
    commit
    commit
    commit
    checkout main
    commit
    commit
```

```mermaid
gitGraph
    commit
    commit
    branch develop
    commit
    commit
    commit
    checkout main
    commit
    commit
```

### 2.6 ER 图

```mermaid:no-line-numbers
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```

```mermaid
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```

### 2.7 用户旅程图

```mermaid:no-line-numbers
journey
    title My working day
    section Go to work
        Make tea: 5: Me
        Go upstairs: 3: Me
        Do work: 1: Me, Cat
    section Go home
        Go downstairs: 5: Me
        Sit down: 5: Me
```

```mermaid
journey
    title My working day
    section Go to work
        Make tea: 5: Me
        Go upstairs: 3: Me
        Do work: 1: Me, Cat
    section Go home
        Go downstairs: 5: Me
        Sit down: 5: Me
```

## 3. 文档写作指南

如果你需要实际表达 Mermaid 图表，可以直接使用反引号包裹的代码块表示：

````markdown
```mermaid
graph LR
    A-->B
```
````

```mermaid
graph LR
    A-->B
```

如果你需要展示代码，可以配合 `@vuepress/plugin-shiki` 插件，将任意名称标注在 `mermaid:` 的后面即可得到代码块而不是图表。

````markdown
```mermaid:no-line-numbers
graph LR
    A-->B
```
````

```mermaid:no-line-numbers
graph LR
    A-->B
```
