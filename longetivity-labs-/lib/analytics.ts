import { siteName, siteEmail } from '@/lib/site-content'

export type TrackingConfig = {
  siteName: string
  siteIdentifier: string
  enabled: boolean
  debugMode: boolean
}

export const trackingConfig: TrackingConfig = {
  siteName: siteName,
  siteIdentifier: siteName.toLowerCase().replace(/\s+/g, '-'),
  enabled: process.env.NODE_ENV === 'production',
  debugMode: process.env.NODE_ENV === 'development',
}

export function getTrackingId(): string {
  return `${trackingConfig.siteIdentifier}-${Date.now()}`
}

export function formatTrackingLabel(section: string): string {
  return `${trackingConfig.siteName} | ${section}`
}

export const analyticsEmail = siteEmail
