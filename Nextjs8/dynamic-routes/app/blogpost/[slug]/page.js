export default async function Page({ params }) {

    const { slug } = await params

    let languages = ["python", "java", "html", "css", "js", "c++", "c"]

    if (languages.includes(slug)) {
        return <div>My Post : {slug}</div>
    } else {
        return <div>Post Not Found</div>
    }
}