export default function Preview() {
    return
    <>
        <h1>hello</h1>
    </>;
}

export async function getStaticPaths() {
    // Return a list of possible value for id
}

export async function getStaticProps({ params }: any) {
    // Fetch necessary data for the blog post using params.id
    console.log('[getStaticProps] - ', params)
}