import { button as buttonStyles } from "@heroui/theme";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";

import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import {
    EmailIcon,
    GithubIcon,
    LinkedInIcon,
    PhoneIcon,
    TelegramIcon,
    WhatsAppIcon,
} from "@/components/icons";

//todos : 1. put my logo here. 2. maybe a short about me would make here a little bit nicer?

const HomePageBrand = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <Image
                isBlurred
                alt="Sobhan Esfandyari Portrait"
                className="mb-5 items-center justify-center"
                height={360}
                src="../static/sobhan_esfandyari_portrait.jpg"
            />
            <div className="inline-block max-w-xl text-center justify-center">
                <div className={title()}>Sobhan Esfandyari&nbsp;</div>
                <br />
                <div className={title({ color: "violet" })}>
                    Software Engineer&nbsp;
                </div>
                <br />
            </div>

            <div className="flex gap-3">
                <Link
                    isExternal
                    className={buttonStyles({
                        variant: "bordered",
                        radius: "full",
                    })}
                    href={siteConfig.links.github}
                >
                    <GithubIcon size={20} />
                    GitHub
                </Link>
                <Link
                    isExternal
                    className={buttonStyles({
                        variant: "bordered",
                        radius: "full",
                    })}
                    href={siteConfig.links.linkedIn}
                >
                    <LinkedInIcon size={20} />
                    LinkedIn
                </Link>
            </div>
            <Divider className="my-4" />
            <div>
                <p className="text-center pb-3">Reach me out :</p>
                <div className="flex gap-3">
                    <Link
                        isExternal
                        className={buttonStyles({
                            variant: "bordered",
                            radius: "full",
                        })}
                        href={siteConfig.links.phone}
                    >
                        <PhoneIcon />
                        Tel
                    </Link>

                    <Link
                        isExternal
                        className={buttonStyles({
                            variant: "bordered",
                            radius: "full",
                        })}
                        href={siteConfig.links.whatsapp}
                    >
                        <WhatsAppIcon />
                        WhatsApp
                    </Link>

                    <Link
                        isExternal
                        className={buttonStyles({
                            variant: "bordered",
                            radius: "full",
                        })}
                        href={siteConfig.links.telegram}
                    >
                        <TelegramIcon />
                        Telegram
                    </Link>

                    <Link
                        isExternal
                        className={buttonStyles({
                            variant: "bordered",
                            radius: "full",
                        })}
                        href={siteConfig.links.email}
                    >
                        <EmailIcon />
                        Email
                    </Link>
                </div>
            </div>
            <div />
        </section>
    );
};

export default HomePageBrand;
