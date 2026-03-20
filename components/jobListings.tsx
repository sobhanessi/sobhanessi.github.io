"use client";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import jobs from "../database/jobs";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";

const JobListings = () => {
    return (
        <>
            {jobs.map((job) => (
                <Card className="py-4 mb-4">
                    <CardHeader className="flex gap-3">
                        <Image
                            src={`../static/resume/company-logos/${job.image}`}
                            isZoomed
                            radius="lg"
                            shadow="lg"
                        />
                        <div className="flex flex-col">
                            <p className="text-md">
                                {job.title} at {job.company}
                            </p>
                            <p className="text-small text-default-500">
                                {job.period}
                            </p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p>{job.description}</p>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        {job.skills.map((skill) => (
                            <div className="flex">
                                <Image src={skill.pic} className="mr-2" />
                            </div>
                        ))}
                    </CardFooter>
                </Card>
            ))}
        </>
    );
};

export default JobListings;
