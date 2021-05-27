import * as React from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { Paragraph, Heading } from "../components/html-elements";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

function IndexPage() {
  const { siteTitle } = useSiteMetadata();
  return (
    <Layout>
      <Seo title={siteTitle} />
      <article className="flex justify-between gap-8 mb-10 md:mb-20">
        <div className="md:w-8/12">
          <Heading level={1} color={Heading.color.PURPLE}>
            Hello!
          </Heading>
          <Paragraph size={Paragraph.size.LARGE} maxWidthProse>
            You found my new website! This is very much a work in progress. I'm
            working on it in the open, so if you're interested in peeking behind
            the curtain you can{" "}
            <a
              className="text-blue-700 hover:underline"
              href="https://github.com/roburidge/uridge-gatsby"
            >
              view the source on GitHub
            </a>
            .
          </Paragraph>
          <Paragraph size={Paragraph.size.LARGE}>
            Thanks so much for stopping by. Hope you enjoy the rest of your{" "}
            {!(new Date().getDay() % 6) ? "weekend" : "week"} ✨
          </Paragraph>
        </div>
        <div className="self-center hidden md:w-4/12 md:block">
          <StaticImage
            className="rounded"
            src="../images/rob-head-shot-profile-photo.jpg"
            alt="Photo of Robert"
            width={274}
            height={274}
          />
        </div>
      </article>
      <div className="grid gap-6 mb-10 md:gap-10 sm:grid-cols-2 md:mb-20">
        <article>
          <Heading level={2}>Projects</Heading>
          <Paragraph>
            My projects/portfolio of work, past and present.
          </Paragraph>
          <Link className="text-blue-700 hover:underline" to="/projects/">
            <div className="inline-flex items-center">
              Go to Projects
              <ArrowNarrowRightIcon
                className="w-5 h-5 ml-1 text-blue-700"
                aria-hidden="true"
              />
            </div>
          </Link>
        </article>
        <article>
          <Heading level={2}>Snippets</Heading>
          <Paragraph>A collection of useful tips and code snippets.</Paragraph>
          <Link className="text-blue-700 hover:underline" to="/snippets/">
            <div className="inline-flex items-center">
              Go to Snippets
              <ArrowNarrowRightIcon
                className="w-5 h-5 ml-1 text-blue-700"
                aria-hidden="true"
              />
            </div>
          </Link>
        </article>
      </div>
      <article>
        <Heading level={2} size={1}>
          Life
        </Heading>
        <Paragraph size={Paragraph.size.LARGE}>
          I was born in Sussex, lived in Yorkshire for five years, moved back
          South in 2017 and lived in Brighton for two years before emigrating to
          Taiwan in 2019.
        </Paragraph>

        <Paragraph size={Paragraph.size.LARGE}>
          I currently live in Taipei and I love it here!{" "}
          <span role="img" aria-label="flag of Taiwan">
            🇹🇼
          </span>
        </Paragraph>

        <div className="grid grid-cols-2 gap-1">
          <figure className="relative col-span-2">
            <StaticImage
              className="rounded"
              src="../images/benjamin-wong-C7u_KKSJ49I-unsplash.jpg"
              width={960}
              formats={["auto", "webp", "avif"]}
            />
            <figcaption className="absolute bottom-0 w-full p-4 text-white rounded-b bg-gradient-to-t from-black">
              <p className="text-sm font-semibold sm:text-base xl:text-lg xl:font-medium">
                Taipei
              </p>
              <p className="text-xs sm:text-sm ">2019–Present</p>
            </figcaption>
          </figure>
          <figure className="relative">
            <StaticImage
              className="rounded"
              src="../images/sam-rudkin-millichamp-sb6bReNb9ng-unsplash.jpg"
              height={500}
              width={500}
              formats={["auto", "webp", "avif"]}
            />
            <figcaption className="absolute bottom-0 w-full p-4 text-white rounded-b bg-gradient-to-t from-black">
              <p className="text-sm font-semibold sm:text-base xl:text-lg xl:font-medium">
                Brighton
              </p>
              <p className="text-xs sm:text-sm ">2017–2019</p>
            </figcaption>
          </figure>
          <figure className="relative">
            <StaticImage
              className="rounded"
              src="../images/gary-butterfield--lIVRZolbtM-unsplash.jpg"
              height={500}
              width={500}
              formats={["auto", "webp", "avif"]}
            />
            <figcaption className="absolute bottom-0 w-full p-4 text-white rounded-b bg-gradient-to-t from-black">
              <p className="text-sm font-semibold sm:text-base xl:text-lg xl:font-medium">
                Leeds
              </p>
              <p className="text-xs sm:text-sm ">2015–2017</p>
            </figcaption>
          </figure>
          <figure className="relative">
            <StaticImage
              className="rounded"
              src="../images/karl-moran-JBJmXBiCBPk-unsplash.jpg"
              height={500}
              width={500}
              formats={["auto", "webp", "avif"]}
            />
            <figcaption className="absolute bottom-0 w-full p-4 text-white rounded-b bg-gradient-to-t from-black">
              <p className="text-sm font-semibold sm:text-base xl:text-lg xl:font-medium">
                York
              </p>
              <p className="text-xs sm:text-sm ">2014–2015</p>
            </figcaption>
          </figure>
          <figure className="relative">
            <StaticImage
              className="rounded"
              src="../images/sam-knight-jhpL88kP7Y8-unsplash.jpg"
              height={500}
              width={500}
              formats={["auto", "webp", "avif"]}
            />
            <figcaption className="absolute bottom-0 w-full p-4 text-white rounded-b bg-gradient-to-t from-black">
              <p className="text-sm font-semibold sm:text-base xl:text-lg xl:font-medium">
                Sussex
              </p>
              <p className="text-xs sm:text-sm ">1986–2014</p>
            </figcaption>
          </figure>
        </div>
      </article>
    </Layout>
  );
}

export default IndexPage;
