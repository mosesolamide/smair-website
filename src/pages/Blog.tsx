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
        image="https://static.wixstatic.com/media/42289d_2a21fd5b0c19494984a17a7506e3e876~mv2.png"
      />
      <section className="bg-brand-mist/80 py-20 sm:py-24">
        <motion.div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-3" initial="hidden" whileInView="visible" viewport={viewport} variants={staggerVariants}>
          {posts.map((post) => (
            <MotionLink key={post.slug} to={`/post/${post.slug}`} className="overflow-hidden rounded-md border border-brand-blue/10 bg-white shadow-lift transition hover:-translate-y-1" variants={cardVariants} transition={{ duration: 0.45, ease: "easeOut" }}>
              <img src={post.image} alt="" className="aspect-video w-full object-cover" />
              <div className="p-6">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-brand-blue">{post.date}</p>
                <h2 className="mt-3 text-xl font-medium leading-tight text-brand-blue">{post.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{post.excerpt}</p>
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
      <section className="py-20 sm:py-24">
        <article className="mx-auto max-w-3xl px-5 text-lg leading-8 text-slate-700 sm:px-8">
          <p className="section-kicker">{post.date}</p>
          <p className="mt-6">
            This story captures the practical spirit of SMAIR: young learners building, coding, testing, sharing, and
            growing through technology.
          </p>
          <p className="mt-6">
            Programs like these help students connect classroom curiosity to real projects, teamwork, communication,
            and future-ready technical confidence.
          </p>
          <Link to="/blog" className="mt-10 inline-flex btn-dark">
            Back to Blog
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
