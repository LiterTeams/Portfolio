import BlogArticlePageView from "@views/BlogArticlePageView";

type Props = {params:{id:number}}

export default async function BlogArticlePage ({params}:Props) {
    const { id } = params;
    return <BlogArticlePageView id={id} />
}