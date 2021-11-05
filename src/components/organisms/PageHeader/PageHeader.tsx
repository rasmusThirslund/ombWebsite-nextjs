import { SectionWrapper } from "@app/components/layouts";
import { LogoType } from "@app/components/molecules";
import { memo } from "react";

const PageHeader = memo(() => {
  return (
    <SectionWrapper marginBottom="none">
      <header className="border-b-2 border-white border-opacity-50 pt-6 pb-4 flex align-center justify-between">
        <LogoType />
        <div className="flex justify-between">
          <a href="tel:+45 1234567" className="mr-4">
            +45 12345678
          </a>
          <button>ContactButton</button>
        </div>
      </header>
    </SectionWrapper>
  );
});

export { PageHeader };
