import * as S from "./NavigationPanel_styles";
import NavLogo from "./NavLogo";
import NavIcon from "./NavIcon";
import React, { useCallback, useEffect, useState } from "react";
import MenuStandard from "./MenuStandard";

const NavigationPanel = (props) => {
  // Navigation panel
  const [icon, setIcon] = useState("noshow");

  const handleWindowSize = useCallback(() => {
    window.innerWidth > 700 ? setIcon(false) : setIcon(true);
  }, []);

  useEffect(() => {
    if (window.innerWidth > 700) {
      setIcon(false);
    } else {
      setIcon(true);
    }

    window.addEventListener("resize", handleWindowSize);

    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, [handleWindowSize]);

  return (
    <S.Container>
      <NavLogo />

      <div>
        {icon === "noshow" ? (
          ""
        ) : icon ? (
          <NavIcon onShow={props.onShow} />
        ) : (
          <MenuStandard />
        )}
      </div>
    </S.Container>
  );
};

export default NavigationPanel;
