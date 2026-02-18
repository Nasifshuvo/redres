import {defineType, defineField} from 'sanity'

export const slider = defineType({
  name: 'slider',
  title: 'Homepage Slider',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Slider Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle / Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
})
