import crypto from 'node:crypto'

export function hashContent(content: string): string {
  return crypto.createHash('sha256').update(content).digest('hex').slice(0, 12)
}

export function generateCacheKey(...parts: string[]): string {
  const combined = parts.join(':')
  return `v-${hashContent(combined)}`
}

export function hashAssetPath(assetPath: string): string {
  const timestamp = Math.floor(Date.now() / 3600000)
  return `${assetPath}?h=${hashContent(assetPath + timestamp)}`
}
