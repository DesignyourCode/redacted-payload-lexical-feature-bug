import { ElementNode, LexicalEditor, $applyNodeReplacement, createCommand, DOMConversionMap, DOMConversionOutput, DOMExportOutput } from 'lexical'
import { createElement } from 'react'

export const INSERT_REDACTED_COMMAND = createCommand<null>('INSERT_REDACTED_COMMAND')

export class RedactedNode extends ElementNode {
  static getType(): string {
    return 'redacted'
  }

  static clone(node: RedactedNode): RedactedNode {
    return new RedactedNode(node.__key)
  }

  createDOM(config: any): HTMLElement {
    return <span className="redacted"></span>
  }

  updateDOM(prevNode: RedactedNode, dom: HTMLElement): boolean {
    return false
  }

  exportJSON(): { type: string; version: number } {
    return {
      type: 'redacted',
      version: 1,
    }
  }

  static importDOM(): DOMConversionMap | null {
    return {
      span: (node: Node) => ({
        conversion: () => ({
          node: $createRedactedNode(),
        }),
        priority: 0,
      }),
    }
  }

  exportDOM(): DOMExportOutput {
    return { element: this.createDOM(null) }
  }
}

export function $createRedactedNode(): RedactedNode {
  return $applyNodeReplacement(new RedactedNode())
}

export function $isRedactedNode(node: any): node is RedactedNode {
  return node instanceof RedactedNode
}
