import useSWR from "swr";
import Link from "next/link";

import { generatePosts } from "../../helpers/utils";

// Only fetch the title and blurb.
const FirestoreBlogPostsURL = `https://firestore.googleapis.com/v1/projects/${process.env.FIREBASE_PROJECT_ID}/databases/(default)/documents/posts?mask.fieldPaths=blurb&mask.fieldPaths=title`;
const fetcher = (url) => fetch(url).then((r) => r.json());

export async function getServerSideProps(context) {
	const data = await fetcher(FirestoreBlogPostsURL);
	const posts = generatePosts(data);

	return { props: { posts } };
}

function Blog(props) {
	const initialData = props.posts;
	const { data } = useSWR(FirestoreBlogPostsURL, fetcher, { initialData });
	// initialData is already transformed, so only transform refetches
	const posts = data.documents ? generatePosts(data) : data;

	return (
		<div>
      {data &&
        posts.map((post, index) => (
          <div key={index} className="card">
            <Link
              href="blog/[pid]"
              as={`/blog/${post.pid}`}
            >
              <a>
                <h3>{post.title} &rarr;</h3>
                <p>{post.blurb}</p>
              </a>
            </Link>
          </div>
        ))}
		</div>
	);
}

export default Blog;
