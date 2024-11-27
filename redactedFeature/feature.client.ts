import { createClientFeature } from '@payloadcms/richtext-lexical'
import { RedactedNode, $createRedactedNode, $isRedactedNode } from './nodes/RedactedNode'

export const RedactedFeatureClient = createClientFeature({
  key: 'redacted',
  feature: {
    nodes: [RedactedNode],
    commands: {
      INSERT_REDACTED_COMMAND: () => $createRedactedNode(),
    },
    toolbar: {
      icon: '🔒',
      command: 'INSERT_REDACTED_COMMAND',
    },
    floatingToolbar: {
      icon: '🔒',
      command: 'INSERT_REDACTED_COMMAND',
    },
    slashCommand: {
      label: 'Redacted',
      command: 'INSERT_REDACTED_COMMAND',
    },
  },
})
