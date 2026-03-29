import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import fs from 'node:fs'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getProjectRoot(): string {
  if (typeof window !== 'undefined') {
    return '/'
  }
  return fs.realpathSync(process.cwd())
}
