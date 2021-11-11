import { SectionWrapper } from "@app/components/layouts";
import { memo } from "react";

const PageFooter = memo(() => {
  return (
    <>
      <footer className="grid mt-28 pb-28">
        <div className="col-span-12 lg:col-span-8 xl:col-start-2 xl:col-span-7 mb-16">
          <h2 className="font-medium text-h4 md:text-h1 max-w-5xl -mt-2">
            This is the part where you fall in love with what we do and decides to
            contact us
          </h2>
        </div>
        <div className="col-span-12 lg:col-start-10 lg:col-span-2">
          <p className="mb-8">
            <a href="mailto:hello@ombrello.io">hello@ombrello.io</a>
            <br />
            <a href="tel:+45 12345678">+45 12 34 56 78</a>
          </p>

          <p className="mb-8">
            {/* TODO:use contact address tags, link to google map,
            TODO: use next link */}
            Ombrello ApS
            <br />
            Bragesgade 10B
            <br />
            2200 Copenhagen N<br />
            Denmark
          </p>

          <p>
            Social: <br />
          </p>
          <ul className="opacity-50">
            <li>
              <a>LinkedIn</a>
            </li>
            <li>
              <a>Twitter</a>
            </li>
            <li>
              <a>Github</a>
            </li>
            <li>
              <a>Instagram</a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="w-full h-2 gradiant"></div>
    </>

  );
});

export { PageFooter };


