import { motion } from "framer-motion";
import { Link, useParams } from "react-router";
import { Hero } from "../components/Hero";
import { cardVariants, staggerVariants, viewport } from "../components/motion";
import { posts } from "../data/siteData";
import type { Post } from "../types";

const MotionLink = motion.create(Link);

export function Blog() {
  return (
    <>
      <Hero
        title="Stories from bootcamps, clubs, classrooms, and the road."
        text="Read updates from SMAIR's robotics programs, bootcamps, school clubs, and community experiences."
      />
      <section className="bg-zinc-50 py-20 sm:py-24">
        <motion.div
          className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerVariants}
        >
          {posts.map((post) => (
            <MotionLink
              key={post.slug}
              to={`/post/${post.slug}`}
              className="group overflow-hidden rounded-xl border border-zinc-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              variants={cardVariants}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {post.image ? (
                <img src={post.image} alt="" className="aspect-video w-full object-cover" />
              ) : (
                <div className="img-slot aspect-video w-full" />
              )}
              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-cyan">{post.date}</p>
                <h2 className="mt-2 text-lg font-bold leading-tight text-zinc-900">{post.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-500">{post.excerpt}</p>
              </div>
            </MotionLink>
          ))}
        </motion.div>
      </section>
    </>
  );
}

export function PostPage({ post }: { post: Post }) {
  return (
    <>
      <Hero title={post.title} text={post.excerpt} image={post.image} />
      <section className="bg-white py-20 sm:py-24">
        <article className="mx-auto max-w-3xl px-5 sm:px-8">
          <p className="section-kicker">{post.date}</p>
          <div className="mt-6 space-y-5 text-lg leading-8 text-zinc-600">
            <p>
              This story captures the practical spirit of SMAIR: young learners building, coding, testing,
              sharing, and growing through technology.
            </p>
            <p>
              Programs like these help students connect classroom curiosity to real projects, teamwork,
              communication, and future-ready technical confidence.
            </p>
          </div>
          <Link to="/blog" className="mt-10 inline-flex btn-dark">
            ← Back to Blog
          </Link>
        </article>
      </section>
    </>
  );
}

export function PostRoute() {
  const { slug } = useParams();
  const post = posts.find((item) => item.slug === slug);
  if (!post) return null;
  return <PostPage post={post} />;
}
