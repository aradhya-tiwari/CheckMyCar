export type article = {
    title: FormDataEntryValue | null | string,
    description: FormDataEntryValue | null,
    slug: FormDataEntryValue | null,
    markdown: FormDataEntryValue | Blob | null
}