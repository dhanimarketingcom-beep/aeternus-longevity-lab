import { execSync } from 'node:child_process'

function safeExec(cmd: string): string {
  try {
    return execSync(cmd, { encoding: 'utf-8', timeout: 5000 }).trim()
  } catch {
    return 'unknown'
  }
}

export const buildMeta = {
  gitCommit: safeExec('git rev-parse --short HEAD'),
  gitBranch: safeExec('git rev-parse --abbrev-ref HEAD'),
  gitDirty: safeExec('git status --porcelain') !== '',
  nodeVersion: process.version,
  buildTime: new Date().toISOString(),
  user: safeExec('whoami'),
}

export function getBuildId(): string {
  return `${buildMeta.gitBranch}@${buildMeta.gitCommit}${buildMeta.gitDirty ? '-dirty' : ''}`
}

export function getBuildComment(): string {
  return `<!-- Build: ${getBuildId()} | Node ${buildMeta.nodeVersion} | ${buildMeta.buildTime} -->`
}
