import { defineField, defineType } from "sanity";

export const historia = defineType({
  name: "historia",
  title: "Historia",
  type: "document",
  fields: [
    defineField({
      name: "titulo",
      title: "Título principal",
      type: "string",
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: "descripcion",
      title: "Descripción",
      type: "text",
      rows: 6,
      validation: (Rule) => Rule.required().min(80),
    }),
    defineField({
      name: "subtitulo",
      title: "Subtítulo o resumen",
      type: "string",
      validation: (Rule) => Rule.max(180),
    }),
  ],
});
