import {defineField, defineType} from 'sanity'
import {BulbOutlineIcon} from '@sanity/icons'

export default defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  icon: BulbOutlineIcon,

  fields: [
    defineField({
      name: 'title',
      title: 'Product Name',
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
    //Bullet points for services
    defineField({
      name: 'point1',
      title: 'Point 1',
      type: 'string',
    }),
    defineField({
      name: 'point2',
      title: 'Point 2',
      type: 'string',
    }),
    defineField({
      name: 'point3',
      title: 'Point 3',
      type: 'string',
    }),
    defineField({
      name: 'point4',
      title: 'Point 4',
      type: 'string',
    }),
    defineField({
      name: 'point5',
      title: 'Point 5',
      type: 'string',
    }),
    defineField({
      name: 'point6',
      title: 'Point 6',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
