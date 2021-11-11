import { SectionWrapper } from "@app/components/layouts";
import { LogoType } from "@app/components/molecules";
import { memo } from "react";

const PageHeader = memo(() => {
  return (
    <header className="grid">
      <div className="col-span-12 py-5 flex align-center justify-between">
        <LogoType />
        <div className="flex justify-between">
          <a href="tel:+45 1234567" className="mr-4">
            +45 12345678
          </a>
          <button>ContactButton</button>
        </div>
      </div>
      <div className="col-span-12 border-b-2 border-white border-opacity-50"></div>
    </header>
  );
});

export { PageHeader };
