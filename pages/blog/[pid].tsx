import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Error from "next/error";

const FirestoreBlogPostsURL = `https://firestore.googleapis.com/v1/projects/${process.env.FIREBASE_PROJECT_ID}/databases/(default)/documents/posts`;
const fetcher = (url) => fetch(url).then((r) => r.json());


export default function Post({ post }) {
  const { isFallback } = useRouter();
  	if (!isFallback && !post) {
		return <Error statusCode={404} title="No Blog Post with the provided ID" />;
	}
  if (isFallback) {
    return <p>Carregando...</p>;
  }
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.blurb}</p>
      <p>{post.content}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  try {
		// Call an external API endpoint to get posts.
		const post = await fetcher(`${FirestoreBlogPostsURL}/${params.pid}`); // grabs the whole document with the provided document id (in this case pid)
		console.log(post)
    // By returning { props: posts }, the Blog component
		// will receive `posts` as a prop at build time
		return {
			props: {
				post: {
					pid: params.pid,
					title: post.fields.title.stringValue,
					blurb: post.fields.blurb.stringValue,
					content: post.fields.content.stringValue, // html content should be sanitized before using React's dangerouslySetInnerHTML
				},
        revalidate: 10000,
			},
		};
	} catch (error) {
		console.error(error);
		return { props: {} };
	}
};

// <div dangerouslySetInnerHTML={{ __html: post.content }} />
