import { Burger, Container, Group, Overlay } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { ACCOMMODATION_LINK, FAQ_LINK, GALLERY_LINK, HOME_LINK, RSVP_LINK, TRAVEL_LINK } from "../../Globals";
import { LanguageChooserMenu } from "../language-chooser/LanguageChooserMenu";
import { WeddingLogo } from "../logo/WeddingLogo";
import classNames from "./Header.module.css";

export const Header = () => {
  const { t } = useTranslation();

  const [opened, { toggle }] = useDisclosure(false);

  const pages = useMemo(
    () => [
      { label: t("home"), link: HOME_LINK },
      { label: t("travel"), link: TRAVEL_LINK },
      { label: t("accommodation"), link: ACCOMMODATION_LINK },
      { label: t("faq"), link: FAQ_LINK },
      { label: t("gallery"), link: GALLERY_LINK },
      { label: t("rsvp"), link: RSVP_LINK },
    ],
    [t],
  );

  const menus = useMemo(
    () => [
      ...pages.map(({ label, link }) => (
        <Link key={label} to={link} className={classNames.link}>
          {label}
        </Link>
      )),
      <LanguageChooserMenu key="language-chooser-menu" />,
    ],
    [pages],
  );

  return (
    <header className={classNames.header}>
      <Overlay color="gold" opacity={0.25} zIndex={1} style={{ backgroundColor: "gold" }} />

      <Container fluid className={classNames.inner}>
        <WeddingLogo fontSize="54px" width={250} isClickable />
        <Group gap="xs" visibleFrom="md">
          {menus}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="md" />
      </Container>
    </header>
  );
};
