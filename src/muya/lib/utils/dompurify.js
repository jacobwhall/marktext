import dompurify from 'dompurify'

// FIXME: "import { sanitize, isValidAttribute } from 'dompurify'" throws an Error (dompurify does not export ...)

export function isValidAttribute (tag, attr, value) {
  return dompurify.isValidAttribute(tag, attr, value)
}

export default function sanitize (source, config = {}) {
  return dompurify.sanitize(source, config)
}
