import path from 'path'
import { shell } from 'electron'
import { isFile } from 'common/filesystem'
import * as actions from '../actions/help'
import { checkUpdates } from '../actions/marktext'

/// Check whether the package is updatable at runtime.
const isUpdatable = () => {
  // TODO: If not updatable, allow to check whether there is a new version available.

  const resFile = isFile(path.join(process.resourcesPath, 'app-update.yml'))
  if (!resFile) {
    // No update resource file available.
    return false
  } else if (process.env.APPIMAGE) {
    // We are running as AppImage.
    return true
  } else if (process.platform === 'win32' && isFile(path.join(process.resourcesPath, 'md.ico'))) {
    // Windows is a little but tricky. The update resource file is always available and
    // there is no way to check the target type at runtime (electron-builder#4119).
    // As workaround we check whether "md.ico" exists that is only included in the setup.
    return true
  }

  // Otherwise assume that we cannot perform an auto update (standalone binary, archives,
  // packed for package manager).
  return false
}

export default function () {
  const helpMenu = {
    label: '&Help',
    role: 'help',
    submenu: [{
      label: 'Markdown Reference...',
      click () {
        shell.openExternal('https://github.com/jacobwhall/marktext/blob/trunk/docs/MARKDOWN_SYNTAX.md')
      }
    }, {
      label: 'Changelog...',
      click () {
        shell.openExternal('https://github.com/jacobwhall/marktext/blob/trunk/.github/CHANGELOG.md')
      }
    }, {
      type: 'separator'
    }, {
      label: 'Ask a Question About MarkText...',
      click () {
        shell.openExternal('https://github.com/jacobwhall/marktext/discussions')
      }
    }, {
      label: 'Report Bug or Request Feature...',
      click () {
        shell.openExternal('https://github.com/jacobwhall/marktext/issues')
      }
    }, {
      label: 'View Source on GitHub...',
      click () {
        shell.openExternal('https://github.com/jacobwhall/marktext')
      }
    }, {
      type: 'separator'
    }, {
      label: 'License...',
      click () {
        shell.openExternal('https://github.com/jacobwhall/marktext/blob/trunk/LICENSE')
      }
    }]
  }

  if (isUpdatable()) {
    helpMenu.submenu.push({
      type: 'separator'
    }, {
      label: 'Check for Updates...',
      click (menuItem, browserWindow) {
        checkUpdates(browserWindow)
      }
    })
  }

  if (process.platform !== 'darwin') {
    helpMenu.submenu.push({
      type: 'separator'
    }, {
      label: 'About MarkText...',
      click (menuItem, browserWindow) {
        actions.showAboutDialog(browserWindow)
      }
    })
  }
  return helpMenu
}
