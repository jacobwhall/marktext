import { app } from 'electron'
import path from 'path'

export default function __static () {
  return path.join(app.getAppPath(), '/static').replace(/\\/g, '\\\\')
}
