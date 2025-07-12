import { defineModel, defineField } from '@stackbit/types';

export default defineModel({
  name: 'heroSection',
  label: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      label: 'Tiêu đề chính',
      type: 'string',
      required: true,
    }),
    defineField({
      name: 'subtitle',
      label: 'Tiêu đề phụ',
      type: 'string',
    }),
    defineField({
      name: 'description',
      label: 'Mô tả',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'ctaText',
      label: 'Nút CTA (Call to Action)',
      type: 'string',
      default: 'Xem thêm',
    }),
    defineField({
      name: 'ctaLink',
      label: 'Đường dẫn CTA',
      type: 'string',
      default: '#',
    }),
    defineField({
      name: 'image',
      label: 'Hình ảnh',
      type: 'image',
    }),
  ],
});
