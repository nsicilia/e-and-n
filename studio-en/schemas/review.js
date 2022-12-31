import {defineField, defineType} from 'sanity'
import {OkHandIcon} from '@sanity/icons'

export default defineType({
  name: 'review',
  title: 'Reviews',
  type: 'document',
  icon: OkHandIcon,

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'Description',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'company',
      author: 'name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `${author}`}
    },
  },
})
