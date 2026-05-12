# 教员的恋爱方法论

[![npm version](https://img.shields.io/npm/v/jiaoyuan-love?color=brightgreen&label=npm)](https://www.npmjs.com/package/jiaoyuan-love)
[![downloads](https://img.shields.io/npm/dm/jiaoyuan-love?color=blue)](https://www.npmjs.com/package/jiaoyuan-love)
[![license](https://img.shields.io/npm/l/jiaoyuan-love)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/baller-coder/jiaoyuan-love?style=social)](https://github.com/baller-coder/jiaoyuan-love)

> 硬核的方法论，软糯的问题。
>
> 把毛选里那套"调查研究 / 矛盾分析 / 持久战" 的硬核思想方法，用来拆解你人生最让你失眠的儿女情长。

一个 [Claude Code Skill](https://docs.claude.com/en/docs/claude-code/skills)。喂给它一个情感困境（暧昧没下文 / 异地恋要不要分 / 已读不回该不该追问 / 该不该挽回……），它不会给你一句"看缘分吧"——它会用 9 个出自《矛盾论》《实践论》《反对本本主义》《论持久战》的方法论工具，把你脑子里那团乱麻拆成可执行的下一步动作。

## 为什么是这套方法论

恋爱赛道现在两种声音最响：一种是"恋爱脑"鸡汤（"用心去感受"），一种是"PUA 速成"骚操作（"读心三连"）。前者没骨架，后者没人格。

教员留下的那套方法论恰好相反——**它教你做调查、抓主要矛盾、用小动作验证假设、拒绝速决战焦虑。** 把它从革命战争语境拿出来，套在亲密关系上，反而出奇地适配：

- 你以为问题是"要不要表白"，矛盾分析告诉你真问题是"她对你到底有没有感觉"
- 你以为问题是"她是什么意思"，调查研究告诉你你压根没问过共同朋友
- 你以为问题是"再不表白就拖没了"，持久战告诉你这只是你内心熬不住的速决战焦虑

它不让你成为情圣，但能让你少做 80% 的蠢事。

## 致敬同行

这个项目的 Skill 形态参考了 [`HughYau/qiushi-skill`](https://github.com/HughYau/qiushi-skill)（求是 Skill，3000+ stars）——它把这套方法论用在通用工作场景。本项目把同样的骨架做了**情感关系垂直特化**，覆盖它没碰的场景。

## 安装

**一行命令**（推荐，需要 Node.js ≥ 16.7）：

```bash
npx jiaoyuan-love
```

会自动把 skill 安装到 `~/.claude/skills/jiaoyuan-love/`。装完**重启 Claude Code**，新会话里描述一个情感困境就能触发。

其他命令：

```bash
npx jiaoyuan-love --help        # 查看帮助
npx jiaoyuan-love --uninstall   # 卸载
```

**手动安装**（不想用 npm 的话）：

```bash
git clone --depth 1 https://github.com/baller-coder/jiaoyuan-love.git
# 把 jiaoyuan-love/jiaoyuan-love/ 这个子目录复制/链接到 ~/.claude/skills/jiaoyuan-love/
```

## 九大思维工具

| # | 工具 | 出处 | 解决什么情感问题 |
|---|---|---|---|
| 01 | 矛盾分析 | 《矛盾论》 | 暧昧没下文 / 在 A 和 B 之间反复横跳 / 多个人选不出 |
| 02 | 实践认识 | 《实践论》 | 想得多做得少 / 不知道对方什么意思但从没试探过 |
| 03 | 调查研究 | 《反对本本主义》 | 凭脑补判断对方 / 没问过共同朋友 / 看 PUA 教程不看真人 |
| 04 | 战略战术 | 战略问题 | 自我吸引力建设 / 长期规划 vs 短期套路 |
| 05 | 持久战 | 《论持久战》 | 怕"拖没了" / 想速决一把搏 / 速效挽回 |
| 06 | 统一战线 | 《论政策》等 | 双方家庭介入 / 朋友圈不接纳 / 异地异业 |
| 07 | 两点重点论 | 《矛盾论》衍生 | 非黑即白 / 一好遮百丑 / 一坏定终身 |
| 08 | 党委工作方法 | 《党委会的工作方法》 | 关系经营的执行力 / 多线情感管理 / 沟通节奏 |
| 09 | 批评自我批评 | 党内文献 | 吵架复盘 / 自我反思 / 关系阶段性盘点 |

## 用法演示

> **用户**：我和一个女生认识 3 个月了，每天聊天，约出来吃过 4 次饭，但她从来没主动过，我也不知道她什么意思。我想表白但怕被拒绝失去这个朋友，也怕再拖下去就真的拖没了，怎么办？

教员思维不会直接说"建议你表白"或"建议你别表白"。它会：

1. **重新定义问题**——你纠结的是"表白时机"，但主要矛盾是"她对你到底有没有感觉"。表白只是事实暴露，不是事实创造。
2. **指出你欠的调查**——3 个月里她**主动**过几次？告别时谁先转身？给你看过家人/朋友圈吗？找过共同朋友侧面问吗？
3. **给出小动作而不是大动作**——别 all-in 表白这一把。先做强度递增的暧昧动作（关心式肢体接触 / 玩笑性更亲密称呼 / 单独长约），看她的反应。
4. **拆解"拖没了"焦虑**——这是经典速决战幻觉。给自己设一个止损线（再 1-2 个月信号还模糊就主动撤），但不要让焦虑驱动决定。

完整链路见 [`jiaoyuan-love/examples/暧昧三个月没下文要不要表白.md`](jiaoyuan-love/examples/暧昧三个月没下文要不要表白.md)。

## 案例库

- [暧昧三个月没下文要不要表白](jiaoyuan-love/examples/暧昧三个月没下文要不要表白.md) — 暧昧期决策（定调案例）
- [已读不回该不该追问](jiaoyuan-love/examples/已读不回该不该追问.md) — 高频低烈度的沉默焦虑
- [异地恋三年要不要分](jiaoyuan-love/examples/异地恋三年要不要分.md) — 高利害长决策
- [吵架后该怎么复盘](jiaoyuan-love/examples/吵架后该怎么复盘.md) — 关系修复
- [回避型遇上焦虑型怎么相处](jiaoyuan-love/examples/回避型遇上焦虑型怎么相处.md) — 依恋类型冲突 / 追逃循环（**真实测试沉淀**）
- [跳槽该不该跳](jiaoyuan-love/examples/跳槽该不该跳.md) — 跨场景示范（职场决策）



## 立场说明

本项目把毛选当作**思想方法的语料**来用——重点是其中的认识论、辩证法、调查研究方法等通用思维工具，不传播政治立场，也不做历史评价。"教员"这个称呼来自民间，强调的是方法论传授者的角色。

任何思想方法都有适用边界，恋爱更是没有标准答案。这个 Skill 不让你绕过感受、不替你做决定、不教你套路别人。它只帮你**把那团乱麻拆成清楚的几股线**，剩下的还是你自己的事。

## License

代码 MIT。框架文档与原文摘录注明来源（[marxists.org 中文马克思主义文库](https://www.marxists.org/chinese/maozedong/index.htm)）。
