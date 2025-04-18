---
title: 游戏意外结束问题
description: 游戏意外结束问题
---

# 游戏意外结束问题

游玩过程中，游戏意外退出。

- [游戏意外结束问题](#游戏意外结束问题)
  - [当前游戏由于分配的内存过大](#当前游戏由于分配的内存过大)

## 当前游戏由于分配的内存过大

由于系统管理的页面文件(虚拟内存)不足，导致游戏意外退出。

![运行窗口](/images/troubleshoot/1.png)

* 请按 Win + R 打开运行窗口，输入 `sysdm.cpl`，点击确定，打开系统属性窗口。<br><br>

![系统属性窗口](/images/troubleshoot/2.png)
![性能选项卡](/images/troubleshoot/3.png)

* 点击高级选项卡，然后点击设置按钮。<br><br>

![高级选项卡](/images/troubleshoot/4.png)

* 点击高级选项卡。<br><br>

![虚拟内存选项卡](/images/troubleshoot/5.png)

* 找到虚拟内存选项卡，点击更改按钮。<br><br>

![虚拟内存选项卡](/images/troubleshoot/6.png)

* 取消勾选“自动管理所有驱动器的分页文件大小”。<br><br>

![虚拟内存选项卡](/images/troubleshoot/7.png)

* 选择自定义大小，将初始大小和最大值都设置为 物理内存的1-3倍，然后点击设置按钮。<br><br>

![虚拟内存选项卡](/images/troubleshoot/8.png)

* 点击确定，直至关闭所有窗口，设置完成。<br><br>

::: tip
你如果遇到重启提示，请选择“立即重新启动”。
:::

::: warning 重启前请务必保存好所有文件。
:::

![重启窗口](/images/troubleshoot/9.png)
<br>
![重启窗口](/images/troubleshoot/10.png)