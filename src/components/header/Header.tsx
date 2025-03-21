import { Burger, Container, Group, Menu, Overlay } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { IconBed, IconHelpHexagon, IconHome, IconLibraryPhoto, IconPencilHeart, IconRouteX } from "@tabler/icons-react";
import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router";
import {
  ACCOMMODATION_LINK,
  EXTRA_SMALL_SCREEN_BREAKPOINT,
  FAQ_LINK,
  GALLERY_LINK,
  HOME_LINK,
  RSVP_LINK,
  TRAVEL_LINK,
} from "../../Globals";
import { LanguageChooserMenu } from "../language-chooser/LanguageChooserMenu";
import { useLanguageChooser } from "../language-chooser/useLanguageChooser";
import { WeddingLogo } from "../logo/WeddingLogo";
import classNames from "./Header.module.css";

const ICON_STROKE_WIDTH = 1;

export const Header = () => {
  const { t } = useTranslation();
  const [opened, { toggle }] = useDisclosure(false);
  const isExtraSmallScreen = useMediaQuery(`(max-width: ${EXTRA_SMALL_SCREEN_BREAKPOINT}px)`);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { languageMenuItems } = useLanguageChooser();
  const navigateToPageFactory = useCallback((link: string) => () => navigate(link), [navigate]);

  const pages = useMemo(
    () => [
      { label: t("home"), link: HOME_LINK, icon: <IconHome strokeWidth={ICON_STROKE_WIDTH} /> },
      { label: t("travel"), link: TRAVEL_LINK, icon: <IconRouteX strokeWidth={ICON_STROKE_WIDTH} /> },
      { label: t("accommodation"), link: ACCOMMODATION_LINK, icon: <IconBed strokeWidth={ICON_STROKE_WIDTH} /> },
      { label: t("faq"), link: FAQ_LINK, icon: <IconHelpHexagon strokeWidth={ICON_STROKE_WIDTH} /> },
      { label: t("gallery"), link: GALLERY_LINK, icon: <IconLibraryPhoto strokeWidth={ICON_STROKE_WIDTH} /> },
      { label: t("rsvp"), link: RSVP_LINK, icon: <IconPencilHeart strokeWidth={ICON_STROKE_WIDTH} /> },
    ],
    [t],
  );

  const menus = useMemo(
    () => [
      ...pages.map(({ label, link }) => (
        <Link key={label} to={link} className={`${classNames.headerLink} ${link === pathname ? classNames.headerSelectedLink : null}`}>
          {label}
        </Link>
      )),
      <LanguageChooserMenu key="language-chooser-menu" />,
    ],
    [pages, pathname],
  );

  return (
    <header className={classNames.headerRoot}>
      <Overlay opacity={0.8} zIndex={1} className={classNames.headerOverlay} />

      <Container fluid className={classNames.headerContainer}>
        <WeddingLogo className={classNames.headerLogo} isClickable />
        <Group gap="xs" visibleFrom="md">
          {menus}
        </Group>
        <Menu classNames={{ itemLabel: classNames.headerBurgerMenuItemLabel }}>
          <Menu.Target>
            <Burger opened={opened} onClick={toggle} hiddenFrom="md" size={isExtraSmallScreen ? "sm" : "md"} />
          </Menu.Target>
          <Menu.Dropdown>
            {pages.map(({ label, link, icon }) => {
              return (
                <Menu.Item key={link} leftSection={icon} onClick={navigateToPageFactory(link)} className="">
                  {label}
                </Menu.Item>
              );
            })}
            <Menu.Divider />
            {languageMenuItems}
          </Menu.Dropdown>
        </Menu>
      </Container>
    </header>
  );
};
