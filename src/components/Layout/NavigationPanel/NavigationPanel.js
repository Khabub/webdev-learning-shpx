import * as S from "./NavigationPanel_styles";
import NavLogo from "./NavLogo";
import NavIcon from "./NavIcon";
import React, { useCallback, useEffect, useState, useContext } from "react";
import MenuStandard from "./MenuStandard";
import ProdFilterContext from "../../../store/context";

const NavigationPanel = (props) => {
  // Navigation panel
  const [icon, setIcon] = useState("noshow");
  const ctx = useContext(ProdFilterContext);

  const handleWindowSize = useCallback(() => {
    window.innerWidth >= 768 ? setIcon(false) : setIcon(true);
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setIcon(false);
      ctx.setSlidesValue(3);
    } else {
      setIcon(true);
      ctx.setSlidesValue(1);
    }

    window.addEventListener("resize", handleWindowSize);

    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, [handleWindowSize, ctx]);

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
