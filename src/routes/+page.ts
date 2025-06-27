
export async function load({ fetch }) {
    const allArticleFiles = import.meta.glob('./articles/*.md');
    const iterableArticleFiles = Object.entries(allArticleFiles);

    const articles = await Promise.all(
        iterableArticleFiles.map(async ([path, resolver]) => {
            const { metadata } = (await resolver()) as { metadata: Record<string, any> };
            const articlePath = path.slice(1, -3); // Remove ./ and .md

            return {
                meta: metadata,
                path: articlePath,
            };
        })
    );

    articles.sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());

    return {
        articles,
    };
}
