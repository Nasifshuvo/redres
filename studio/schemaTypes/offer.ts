import {defineType, defineField} from 'sanity'

export const offer = defineType({
  name: 'offer',
  title: 'Offers & Banners',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Offer Title',
      type: 'string',
    }),
    defineField({
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'items',
      title: 'Related Items',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'foodItem'}]}],
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})
