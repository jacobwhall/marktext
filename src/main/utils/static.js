import { app } from 'electron'
import path from 'path'

export default function __static () {
  console.log(app.getAppPath())
  return path.join(app.getAppPath(), '/static').replace(/\\/g, '\\\\')
}
