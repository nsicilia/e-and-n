import {JoystickIcon} from '@sanity/icons'

export default {
  name: 'aboutpagesingle',
  title: 'About Page',
  type: 'document',
  icon: JoystickIcon,
  fields: [
    {
      name: 'abouttitle',
      title: 'Page Title',
      type: 'string',
    },
    {
      name: 'aboutdescription',
      title: 'Page Description',
      type: 'text',
    },
    {
      name: 'firstimage',
      title: 'First Image',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: 'secondimage',
      title: 'Second Image',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: 'thirdimage',
      title: 'Third Image',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    // Stat 1
    {
      name: 'stat1',
      title: 'Stat 1',
      type: 'string',
      description: 'Some number',
      validation: (Rule: any) =>
        Rule.max(120).warning(`A title shouldn't be more than 120 characters.`),
    },
    {
      name: 'stat1title',
      title: 'Stat 1 title',
      type: 'string',
      description: 'What the number represents',
      validation: (Rule: any) =>
        Rule.max(120).warning(`A title shouldn't be more than 120 characters.`),
    },
    {
      name: 'stat1description',
      title: 'Stat 1 Description',
      type: 'text',
    },
    // Stat 2
    {
      name: 'stat2',
      title: 'Stat 2',
      type: 'string',
      description: 'Some number',
      validation: (Rule: any) =>
        Rule.max(120).warning(`A title shouldn't be more than 120 characters.`),
    },
    {
      name: 'stat2title',
      title: 'Stat 2 title',
      type: 'string',
      description: 'What the number represents',
      validation: (Rule: any) =>
        Rule.max(120).warning(`A title shouldn't be more than 120 characters.`),
    },
    {
      name: 'stat2description',
      title: 'Stat 2 Description',
      type: 'text',
    },
    // Stat 3
    {
      name: 'stat3',
      title: 'Stat 3',
      type: 'string',
      description: 'Some number',
      validation: (Rule: any) =>
        Rule.max(120).warning(`A title shouldn't be more than 120 characters.`),
    },
    {
      name: 'stat3title',
      title: 'Stat 3 title',
      type: 'string',
      description: 'What the number represents',
      validation: (Rule: any) =>
        Rule.max(120).warning(`A title shouldn't be more than 120 characters.`),
    },
    {
      name: 'stat3description',
      title: 'Stat 3 Description',
      type: 'text',
    },
  ],
}
