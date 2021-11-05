import { memo } from "react";
import { LogoSvg } from "./Components/LogoSvg/LogoSvg";
import { TypeSvg } from "./Components/TypeSvg/TypeSvg";

const LogoType = memo(() => {
  return (
    <div className="flex  flex-row items-center">
      <div className="pr-3">
        <LogoSvg />
      </div>
      <div>
        <TypeSvg />
      </div>
    </div>
  );
});

LogoType.displayName = "LogoType";

export { LogoType };
