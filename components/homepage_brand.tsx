import { button as buttonStyles } from "@heroui/theme";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, LinkedInIcon } from "@/components/icons";

const HomePageBrand = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <Image
                isBlurred
                alt="Sobhan Esfandyari Portrait"
                src="../static/sobhan_esfandyari_portrait.jpg"
                height={360}
                className="mb-5 items-center justify-center"
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
            <div className="mt-5"></div>
        </section>
    );
};

export default HomePageBrand;
