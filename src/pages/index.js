import * as React from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { Paragraph, Heading } from "../components/html-elements";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

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
            <a href="https://github.com/roburidge/uridge-gatsby">
              view the source on GitHub
            </a>
            .
          </Paragraph>
          <Paragraph size={Paragraph.size.LARGE}>
            Thanks so much for stopping by. Hope you enjoy the rest of your{" "}
            {!(new Date().getDay() % 6) ? "weekend" : "week"} ✨
          </Paragraph>
        </div>
        <div className="self-center hidden md:block">
          <StaticImage
            className="rounded"
            src="../images/rob-head-shot-profile-photo.jpg"
            alt="Photo of Robert"
            width={274}
            aspectRatio={1}
            formats={["auto", "webp", "avif"]}
            style={{
              // fix for rounding images bug in Safari
              "-webkit-backface-visibility": "hidden",
              "-webkit-transform": "translate3d(0, 0, 0)",
            }}
          />
        </div>
      </article>
      <div className="grid gap-6 mb-10 md:gap-10 sm:grid-cols-2 md:mb-20">
        <article>
          <Heading level={2}>Projects</Heading>
          <Paragraph>
            My projects/portfolio of work, past and present.
          </Paragraph>
          <Link className="group hover:no-underline" to="/projects/">
            <div className="inline-flex items-center">
              <span className="group-hover:underline">Go to Projects</span>
              <span aria-hidden="true" class="ml-2">
                →
              </span>
            </div>
          </Link>
        </article>
        <article>
          <Heading level={2}>Snippets</Heading>
          <Paragraph>A collection of useful tips and code snippets.</Paragraph>
          <Link className="group hover:no-underline" to="/snippets/">
            <div className="inline-flex items-center">
              <span className="group-hover:underline">Go to Snippets</span>
              <span aria-hidden="true" class="ml-2">
                →
              </span>
            </div>
          </Link>
        </article>
      </div>
      <article>
        <Heading level={2} size={1}>
          Life
        </Heading>
        <Paragraph size={Paragraph.size.LARGE}>
          I grew up in Sussex, lived in Yorkshire for five years, moved back
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
              src="../images/timo-volz-9-JFZIORoRw-unsplash.jpg"
              width={992}
              formats={["auto", "webp", "avif"]}
              style={{
                // fix for rounding images bug in Safari
                "-webkit-backface-visibility": "hidden",
                "-webkit-transform": "translate3d(0, 0, 0)",
              }}
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
              width={494}
              aspectRatio={1}
              formats={["auto", "webp", "avif"]}
              style={{
                // fix for rounding images bug in Safari
                "-webkit-backface-visibility": "hidden",
                "-webkit-transform": "translate3d(0, 0, 0)",
              }}
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
              width={494}
              aspectRatio={1}
              formats={["auto", "webp", "avif"]}
              style={{
                // fix for rounding images bug in Safari
                "-webkit-backface-visibility": "hidden",
                "-webkit-transform": "translate3d(0, 0, 0)",
              }}
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
              width={494}
              aspectRatio={1}
              formats={["auto", "webp", "avif"]}
              style={{
                // fix for rounding images bug in Safari
                "-webkit-backface-visibility": "hidden",
                "-webkit-transform": "translate3d(0, 0, 0)",
              }}
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
              width={494}
              aspectRatio={1}
              formats={["auto", "webp", "avif"]}
              style={{
                // fix for rounding images bug in Safari
                "-webkit-backface-visibility": "hidden",
                "-webkit-transform": "translate3d(0, 0, 0)",
              }}
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
