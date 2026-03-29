import path from 'node:path'
import { getProjectRoot } from '@/lib/utils'

export type SiteConfig = {
  version: string
  buildId: string
  assetsPath: string
  publicPath: string
}

export function getSiteConfig(): SiteConfig {
  const root = getProjectRoot()
  return {
    version: process.env.npm_package_version || '1.0.0',
    buildId: `build-${Date.now()}`,
    assetsPath: path.join(root, 'public', 'assets'),
    publicPath: path.join(root, 'public'),
  }
}

export const CONFIG = getSiteConfig()
