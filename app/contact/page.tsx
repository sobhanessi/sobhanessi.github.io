import { Avatar } from "@heroui/avatar";
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
        <>
            <Card className="max-w-[480px]">
                <CardHeader className="justify-between">
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
                <CardBody className="px-3 py-0 text-small text-default-400">
                    <p>
                        if you need a need a developer for your company to up
                        and run your websites or your applications, or even you
                        need a guy to handle your IT stuffs, please do not
                        hesitate to contact me!
                    </p>
                </CardBody>
                <CardFooter className="gap-3">
                    <Link
                        isExternal
                        aria-label="Github"
                        href={siteConfig.links.linkedIn}
                    >
                        <LinkedInIcon className="text-default-500" />
                    </Link>
                    <Link
                        isExternal
                        aria-label="Github"
                        href={siteConfig.links.github}
                    >
                        <GithubIcon className="text-default-500" />
                    </Link>
                    <Link
                        isExternal
                        aria-label="Github"
                        href={siteConfig.links.phone}
                    >
                        <PhoneIcon className="text-default-500" />
                    </Link>
                    <Link
                        isExternal
                        aria-label="Github"
                        href={siteConfig.links.email}
                    >
                        <EmailIcon className="text-default-500" />
                    </Link>
                </CardFooter>
            </Card>
        </>
    );
}
