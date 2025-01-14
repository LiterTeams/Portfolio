import BlogArticlePageView from "@views/BlogArticlePageView";

type Props = {params:{id:number}}

export default async function BlogArticlePage ({params}:Props) {
    const { id } = await params;
    return <BlogArticlePageView id={id} />
}