export type article = {
    title: FormDataEntryValue | null,
    description: FormDataEntryValue | null,
    slug: FormDataEntryValue | null,
    markdown: FormDataEntryValue | Blob | null
}