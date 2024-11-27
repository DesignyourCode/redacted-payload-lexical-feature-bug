import { ElementNode, LexicalEditor, $applyNodeReplacement, createCommand } from 'lexical'

export const INSERT_REDACTED_COMMAND = createCommand('INSERT_REDACTED_COMMAND')

export class RedactedNode extends ElementNode {
  static getType() {
    return 'redacted'
  }

  static clone(node: RedactedNode) {
    return new RedactedNode(node.__key)
  }

  createDOM(config: any) {
    const element = document.createElement('span')
    element.className = 'redacted'
    return element
  }

  updateDOM(prevNode: RedactedNode, dom: HTMLElement) {
    return false
  }

  exportJSON() {
    return {
      type: 'redacted',
      version: 1,
    }
  }
}

export function $createRedactedNode() {
  return $applyNodeReplacement(new RedactedNode())
}

export function $isRedactedNode(node: any) {
  return node instanceof RedactedNode
}
