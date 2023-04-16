import { useContext } from "react";
import Spinner from "../../components/spinner";
import SampleContext from "../../contexts/SampleContext";

const PostList = () => {
  const { posts, postsLoading, refetchPosts } = useContext(SampleContext);

  return (
    <div className="container mx-auto px-4">
      <h1 className="mt-5 text-4xl text-center">Post List</h1>

      {postsLoading && <Spinner />}

      <div className="flex flex-col items-center justify-center">
        <button
          className="mt-5 px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => refetchPosts()}
        >
          Refetch
        </button>
      </div>

      {posts?.data?.map((post) => (
        <div key={post.id} className="mt-5">
          <h1 className="text-2xl">{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
