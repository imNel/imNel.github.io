import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async (context) => {
  const posts = await getCollection("blog");

  return rss({
    title: "Nel’s Blog",
    description: "Talking about whatever, whenever.",
    site: context.site!,
    items: posts.map((post) => ({
      link: `/blog/${post.slug}`,
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
    })),
    customData: `<language>en-us</language>`,
  });
};
