export const importFile = async (filePath: string) => {
    return (await import(filePath))?.default;
}