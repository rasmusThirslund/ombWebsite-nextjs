import { SectionWrapper } from "@app/components/layouts";
import { memo } from "react";

const PageFooter = memo(() => {
  return (
    <SectionWrapper marginBottom="none" size="large">
      <footer className="flex flex-col lg:flex-row lg:justify-between pb-6">
        <p className="text-h4 md:text-h3 xl:text-h2 xxl:text-h1 lg:max-w-w788 mb-8">
          This is the part where you fall in love with what we do and decides to
          contact us
        </p>
        <div className="lg:min-w-w208 mr-0 ml-auto">
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
    </SectionWrapper>
  );
});

export { PageFooter };
