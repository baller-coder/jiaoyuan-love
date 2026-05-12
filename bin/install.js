#!/usr/bin/env node
/**
 * 教员的恋爱方法论 — Claude Code Skill 安装脚本
 *
 * 用法：
 *   npx jiaoyuan-love            # 安装到 ~/.claude/skills/jiaoyuan-love
 *   npx jiaoyuan-love --uninstall # 卸载
 *   npx jiaoyuan-love --help     # 查看帮助
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

const SKILL_NAME = 'jiaoyuan-love';
const SOURCE = path.join(__dirname, '..', SKILL_NAME);
const DEST_BASE = path.join(os.homedir(), '.claude', 'skills');
const DEST = path.join(DEST_BASE, SKILL_NAME);

const args = process.argv.slice(2);
const isUninstall = args.includes('--uninstall') || args.includes('-u');
const isHelp = args.includes('--help') || args.includes('-h');

function printHeader() {
  console.log('');
  console.log('  教员的恋爱方法论 (jiaoyuan-love)');
  console.log('  https://github.com/baller-coder/jiaoyuan-love');
  console.log('');
}

function printHelp() {
  printHeader();
  console.log('  用法：');
  console.log('    npx jiaoyuan-love               安装 skill 到 ~/.claude/skills/');
  console.log('    npx jiaoyuan-love --uninstall   卸载');
  console.log('    npx jiaoyuan-love --help        查看帮助');
  console.log('');
}

function uninstall() {
  printHeader();
  if (!fs.existsSync(DEST)) {
    console.log(`  未安装：${DEST}`);
    console.log('  无需卸载。');
    return;
  }
  fs.rmSync(DEST, { recursive: true, force: true });
  console.log(`  已卸载：${DEST}`);
  console.log('');
}

function install() {
  printHeader();

  if (!fs.existsSync(SOURCE)) {
    console.error(`  [错误] 未找到 skill 源文件：${SOURCE}`);
    console.error('  这个脚本应该在 npm 包里运行，不是直接跑源码。');
    process.exit(1);
  }

  // 确保 ~/.claude/skills/ 存在
  fs.mkdirSync(DEST_BASE, { recursive: true });

  // 已存在则覆盖
  if (fs.existsSync(DEST) || fs.lstatSync(DEST, { throwIfNoEntry: false })) {
    try {
      const stat = fs.lstatSync(DEST);
      const kind = stat.isSymbolicLink() ? 'symlink/junction'
                 : stat.isDirectory() ? '目录'
                 : '文件';
      console.log(`  ! 已存在 ${kind}：${DEST}`);
      console.log(`    覆盖中（旧的将被删除）...`);
      fs.rmSync(DEST, { recursive: true, force: true });
    } catch (e) {
      // ignore — file might not exist
    }
  }

  console.log(`  安装中：`);
  console.log(`    源： ${SOURCE}`);
  console.log(`    目标：${DEST}`);
  console.log('');

  fs.cpSync(SOURCE, DEST, { recursive: true });

  console.log('  ✓ 安装成功');
  console.log('');
  console.log('  使用方法：');
  console.log('    1. 重启 Claude Code（新装的 skill 在新会话里才会被识别）');
  console.log('    2. 描述一个真实情感困境，例如：');
  console.log('       "我和暧昧对象认识 3 个月想表白又怕被拒，怎么办？"');
  console.log('       "异地恋三年了，最近越来越累，要不要分？"');
  console.log('       "我和女朋友吵架了，想和好但不知道怎么开口"');
  console.log('    3. 看 Claude 是否自动应用矛盾分析 / 调查研究等方法论');
  console.log('');
  console.log('  反馈或提 issue：');
  console.log('    https://github.com/baller-coder/jiaoyuan-love/issues');
  console.log('');
}

if (isHelp) {
  printHelp();
} else if (isUninstall) {
  uninstall();
} else {
  install();
}
