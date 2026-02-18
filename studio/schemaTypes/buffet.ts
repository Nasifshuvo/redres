import {defineType, defineField} from 'sanity'

export const buffet = defineType({
  name: 'buffet',
  title: 'Buffet Management',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Buffet Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'priceAdult',
      title: 'Price (Adult)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'availableSlots',
      title: 'Available Slots',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Lunch', value: 'lunch'},
          {title: 'Dinner', value: 'dinner'},
        ],
      },
    }),
    defineField({
      name: 'enabledDates',
      title: 'Enabled Dates (Calendar)',
      description: 'Select dates to allow user bookings',
      type: 'array',
      of: [{type: 'date'}],
    }),
  ],
})
