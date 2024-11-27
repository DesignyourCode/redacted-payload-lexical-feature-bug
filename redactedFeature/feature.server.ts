import { createServerFeature } from '@payloadcms/richtext-lexical'

export const RedactedFeature = createServerFeature({
  key: 'redacted',
  feature: {
    ClientFeature: './feature.client#RedactedFeatureClient',
    nodes: [
      {
        node: './nodes/RedactedNode',
        command: 'INSERT_REDACTED_COMMAND',
      },
    ],
  },
})
