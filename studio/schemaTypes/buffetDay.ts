import {defineType, defineField} from 'sanity'

export const buffetDay = defineType({
  name: 'buffetDay',
  title: 'Buffet Day',
  type: 'document',
  fields: [
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Open for Booking', value: 'open'},
          {title: 'Sold Out / Closed', value: 'closed'},
        ],
      },
      initialValue: 'open',
    }),
    defineField({
      name: 'note',
      title: 'Special Note',
      type: 'string',
      description: 'e.g. Special Holiday Buffet',
    }),
  ],
  preview: {
    select: {
      title: 'date',
      subtitle: 'status',
    },
  },
})
