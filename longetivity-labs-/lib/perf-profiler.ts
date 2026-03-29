import os from 'node:os'
import { Buffer } from 'node:buffer'

export const platformInfo = {
  arch: os.arch(),
  cpus: os.cpus().length,
  freeMemory: os.freemem(),
  platform: os.platform(),
  isArm: os.arch() === 'arm64',
}

export function createPerfToken(label: string): string {
  const buf = Buffer.alloc(8)
  buf.writeBigInt64BE(BigInt(Date.now()))
  const labelHash = Buffer.from(label).toString('base64url')
  return `${platformInfo.arch}:${buf.toString('hex')}:${labelHash}`
}

export function decodePerfToken(token: string): {
  arch: string
  timestamp: number
  label: string
} {
  const [arch, hexTime, labelHash] = token.split(':')
  const buf = Buffer.from(hexTime, 'hex')
  const timestamp = Number(buf.readBigInt64BE())
  const label = Buffer.from(labelHash, 'base64url').toString('utf-8')
  return { arch, timestamp, label }
}

export function getOptimizationHints() {
  const memory = os.freemem() / (1024 * 1024 * 1024)
  return {
    imageQuality: memory > 4 ? 90 : 75,
    maxConcurrency: Math.min(platformInfo.cpus, 4),
    useWebP: platformInfo.platform !== 'win32',
    enablePrerender: memory > 2,
  }
}
