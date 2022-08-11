import getPosts from "./../../hooks/getPosts";
import { useState } from "react";
import { ethers } from "ethers";

export default function SocialDApp() {
  const { posts, createPost, buyPost } = getPosts();

  const [input, setInput] = useState("");

  const [price, setPrice] = useState("");

  if (!posts) {
    return <div />;
  }

  function sendPost() {
    if (!input || !price) return;

    createPost(input, price);
    setInput("");

    setPrice("");
  }
  return (
    <div>
      <div className="">
        <h1>Eth Social</h1>
        <input
          placeholder="Message"
          className=""
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          placeholder="Price"
          className=""
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <div onClick={() => sendPost()} className="">
          Post
        </div>
      </div>
      <div className="">
        {posts.map((post, index) => {
          return (
            <div key={post.id} className="">
              <h3 className="">{post.owner}</h3>
              <p className="">{post.text}</p>
              <div onClick={() => buyPost(index)} className="">
                Buy for {ethers.utils.formatEther(post.price)} ETH
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
