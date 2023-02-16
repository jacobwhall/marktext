const COMMANDS = Object.freeze({
  EDIT_COPY: 'edit.copy',
  EDIT_COPY_AS_HTML: 'edit.copy-as-html',
  EDIT_COPY_AS_MARKDOWN: 'edit.copy-as-markdown',
  EDIT_CREATE_PARAGRAPH: 'edit.create-paragraph',
  EDIT_CUT: 'edit.cut',
  EDIT_DELETE_PARAGRAPH: 'edit.delete-paragraph',
  EDIT_DUPLICATE: 'edit.duplicate',
  EDIT_FIND: 'edit.find',
  EDIT_FIND_IN_FOLDER: 'edit.find-in-folder',
  EDIT_FIND_NEXT: 'edit.find-next',
  EDIT_FIND_PREVIOUS: 'edit.find-previous',
  EDIT_PASTE: 'edit.paste',
  EDIT_PASTE_AS_PLAINTEXT: 'edit.paste-as-plaintext',
  EDIT_REDO: 'edit.redo',
  EDIT_REPLACE: 'edit.replace',
  EDIT_SCREENSHOT: 'edit.screenshot',
  EDIT_SELECT_ALL: 'edit.select-all',
  EDIT_UNDO: 'edit.undo',

  FILE_CHECK_UPDATE: 'file.check-update',
  FILE_CLOSE_TAB: 'file.close-tab',
  FILE_CLOSE_WINDOW: 'file.close-window',
  FILE_EXPORT_FILE: 'file.export-file',
  FILE_IMPORT_FILE: 'file.import-file',
  FILE_MOVE_FILE: 'file.move-file',
  FILE_NEW_FILE: 'file.new-window',
  FILE_NEW_TAB: 'file.new-tab',
  FILE_OPEN_FILE: 'file.open-file',
  FILE_OPEN_FOLDER: 'file.open-folder',
  FILE_PREFERENCES: 'file.preferences',
  FILE_PRINT: 'file.print',
  FILE_QUICK_OPEN: 'file.quick-open',
  FILE_QUIT: 'file.quit',
  FILE_RENAME_FILE: 'file.rename-file',
  FILE_SAVE: 'file.save',
  FILE_SAVE_AS: 'file.save-as',
  FILE_EXPORT_FILE_PDF: 'file.export-file.pdf',
  // FILE_TOGGLE_AUTO_SAVE: 'file.toggle-auto-save',

  FORMAT_CLEAR_FORMAT: 'format.clear-format',
  FORMAT_EMPHASIS: 'format.emphasis',
  FORMAT_HIGHLIGHT: 'format.highlight',
  FORMAT_HYPERLINK: 'format.hyperlink',
  FORMAT_IMAGE: 'format.image',
  FORMAT_INLINE_CODE: 'format.inline-code',
  FORMAT_INLINE_MATH: 'format.inline-math',
  FORMAT_STRIKE: 'format.strike',
  FORMAT_STRONG: 'format.strong',
  FORMAT_SUBSCRIPT: 'format.subscript',
  FORMAT_SUPERSCRIPT: 'format.superscript',
  FORMAT_UNDERLINE: 'format.underline',

  MT_HIDE: 'mt.hide',
  MT_HIDE_OTHERS: 'mt.hide-others',

  PARAGRAPH_BULLET_LIST: 'paragraph.bullet-list',
  PARAGRAPH_CODE_FENCE: 'paragraph.code-fence',
  PARAGRAPH_DEGRADE_HEADING: 'paragraph.degrade-heading',
  PARAGRAPH_FRONT_MATTER: 'paragraph.front-matter',
  PARAGRAPH_HEADING_1: 'paragraph.heading-1',
  PARAGRAPH_HEADING_2: 'paragraph.heading-2',
  PARAGRAPH_HEADING_3: 'paragraph.heading-3',
  PARAGRAPH_HEADING_4: 'paragraph.heading-4',
  PARAGRAPH_HEADING_5: 'paragraph.heading-5',
  PARAGRAPH_HEADING_6: 'paragraph.heading-6',
  PARAGRAPH_HORIZONTAL_LINE: 'paragraph.horizontal-line',
  PARAGRAPH_HTML_BLOCK: 'paragraph.html-block',
  PARAGRAPH_LOOSE_LIST_ITEM: 'paragraph.loose-list-item',
  PARAGRAPH_MATH_FORMULA: 'paragraph.math-formula',
  PARAGRAPH_ORDERED_LIST: 'paragraph.order-list',
  PARAGRAPH_PARAGRAPH: 'paragraph.paragraph',
  PARAGRAPH_QUOTE_BLOCK: 'paragraph.quote-block',
  PARAGRAPH_TABLE: 'paragraph.table',
  PARAGRAPH_TASK_LIST: 'paragraph.task-list',
  PARAGRAPH_INCREASE_HEADING: 'paragraph.upgrade-heading',

  TABS_CYCLE_BACKWARD: 'tabs.cycle-backward',
  TABS_CYCLE_FORWARD: 'tabs.cycle-forward',
  TABS_SWITCH_TO_EIGHTH: 'tabs.switch-to-eighth',
  TABS_SWITCH_TO_FIFTH: 'tabs.switch-to-fifth',
  TABS_SWITCH_TO_FIRST: 'tabs.switch-to-first',
  TABS_SWITCH_TO_FOURTH: 'tabs.switch-to-fourth',
  TABS_SWITCH_TO_LEFT: 'tabs.switch-to-left',
  TABS_SWITCH_TO_NINTH: 'tabs.switch-to-ninth',
  TABS_SWITCH_TO_RIGHT: 'tabs.switch-to-right',
  TABS_SWITCH_TO_SECOND: 'tabs.switch-to-second',
  TABS_SWITCH_TO_SEVENTH: 'tabs.switch-to-seventh',
  TABS_SWITCH_TO_SIXTH: 'tabs.switch-to-sixth',
  TABS_SWITCH_TO_TENTH: 'tabs.switch-to-tenth',
  TABS_SWITCH_TO_THIRD: 'tabs.switch-to-third',

  VIEW_COMMAND_PALETTE: 'view.command-palette',
  VIEW_DEV_RELOAD: 'view.dev-reload',
  VIEW_FOCUS_MODE: 'view.focus-mode',
  VIEW_FORCE_RELOAD_IMAGES: 'view.reload-images',
  VIEW_SOURCE_CODE_MODE: 'view.source-code-mode',
  VIEW_TOGGLE_DEV_TOOLS: 'view.toggle-dev-tools',
  VIEW_TOGGLE_SIDEBAR: 'view.toggle-sidebar',
  VIEW_TOGGLE_TABBAR: 'view.toggle-tabbar',
  VIEW_TOGGLE_TOC: 'view.toggle-toc',
  VIEW_TYPEWRITER_MODE: 'view.typewriter-mode',

  WINDOW_MINIMIZE: 'window.minimize',
  WINDOW_TOGGLE_ALWAYS_ON_TOP: 'window.toggle-always-on-top',
  WINDOW_TOGGLE_FULL_SCREEN: 'window.toggle-full-screen',
  WINDOW_ZOOM_IN: 'window.zoom-in',
  WINDOW_ZOOM_OUT: 'window.zoom-out'
})

export default COMMANDS
