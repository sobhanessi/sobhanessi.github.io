import { Avatar } from "@heroui/avatar";
import { button as buttonStyles } from "@heroui/theme";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Link } from "@heroui/link";

import {
    EmailIcon,
    GithubIcon,
    LinkedInIcon,
    PhoneIcon,
} from "@/components/icons";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
    return (
        <div className="flex justify-center">
            <Card className="max-w-[640px]">
                <CardHeader className="justify-center">
                    <div className="flex gap-5">
                        <Avatar
                            isBordered
                            radius="full"
                            size="lg"
                            src="../../static/sobhan_esfandyari_portrait.jpg"
                        />
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <h4 className="text-small font-semibold leading-none text-default-600">
                                Sobhan Esfandyari
                            </h4>
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="px-3 py-0 text-default-600 text-center">
                    <p>
                        if you need a need a developer for your company to up
                        and run your websites or your applications, or even you
                        need a guy to handle your IT stuffs, please do not
                        hesitate to contact me!
                    </p>
                </CardBody>
                <CardFooter className="flex flex-col gap-3">
                    <Link
                        isExternal
                        className={buttonStyles({
                            variant: "bordered",
                            radius: "full",
                        })}
                        href={siteConfig.links.github}
                    >
                        <GithubIcon size={20} />
                        See my projects in GitHub
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
                        Follow me in LinkedIn
                    </Link>

                    <Link
                        isExternal
                        className={buttonStyles({
                            variant: "bordered",
                            radius: "full",
                        })}
                        href={siteConfig.links.phone}
                    >
                        <PhoneIcon />
                        Contact me via WhatsApp!
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
                        Send me an Email
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
}
