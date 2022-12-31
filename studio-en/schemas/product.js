import {defineField, defineType} from 'sanity'
import {BasketIcon} from '@sanity/icons'


export default defineType({
  name: 'product',
  title: 'Products',
  type: 'document',
  icon: BasketIcon,
  
  fields: [
    defineField({
      name: 'title',
      title: 'Product Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
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
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'colortemperature',
      title: 'Color Temperature',
      type: 'string',
    }),
    defineField({
      name: 'sizes',
      title: 'Sizes',
      type: 'string',
    }),
    defineField({
      name: 'greatfor',
      title: 'Great For:',
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
