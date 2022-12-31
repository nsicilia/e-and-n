import {CogIcon} from '@sanity/icons'

export default {
  name: 'siteSettingstest',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    {
      name: 'title1',
      title: 'Site Title',
      type: 'string',
    },
    {
      name: 'description1',
      title: 'Site Description',
      type: 'text',
    },
  ],
}
