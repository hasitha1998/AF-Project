import PostList from "./PostList";
import Hero from "./Hero";

import { SampleProvider } from "../../contexts/SampleContext";

const index = () => {
  return (
    <>
      <SampleProvider>
        <Hero />
        <PostList />
      </SampleProvider>
    </>
  );
};

export default index;
