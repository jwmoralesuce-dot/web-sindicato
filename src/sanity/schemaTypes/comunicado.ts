import { defineField, defineType } from 'sanity'

export const comunicado = defineType({
  name: 'comunicado',
  title: 'Comunicado',
  type: 'document',
  fields: [
    defineField({ name: 'titulo', title: 'Título', type: 'string' }),
    defineField({ name: 'fecha', title: 'Fecha', type: 'date' }),
    defineField({
      name: 'imagen',
      title: 'Imagen principal',
      type: 'image',
      options: {
        hotspot: true,
        accept: 'image/*',
      },
    }),
    defineField({ 
      name: 'archivo', 
      title: 'Archivo PDF', 
      type: 'file', 
      options: { accept: '.pdf' } 
    })
  ]
})