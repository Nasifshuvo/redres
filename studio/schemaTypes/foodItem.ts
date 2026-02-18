import {defineType, defineField} from 'sanity'

export const foodItem = defineType({
  name: 'foodItem',
  title: 'Food Item',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'price',
      title: 'Base Price',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'category'}]}],
    }),
    defineField({
      name: 'attributes',
      title: 'Attributes (e.g. Size)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'label', title: 'Label', type: 'string', description: 'e.g. 8 inch'},
            {name: 'price', title: 'Price', type: 'number'},
          ],
        },
      ],
    }),
    defineField({
      name: 'isAvailable',
      title: 'Is Available',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})
