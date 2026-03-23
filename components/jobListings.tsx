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
                <Card
                    className="py-4 mb-4"
                    shadow="lg"
                    fullWidth
                    key={job.company + "_" + job.title}
                >
                    <CardHeader className="flex gap-3">
                        <Image
                            src={`../static/resume/company-logos/${job.image}`}
                            isZoomed
                            radius="lg"
                            shadow="lg"
                        />
                        <div className="flex flex-col w-full text-left">
                            <p className="text-lg font-semibold  w-full ">
                                {job.title} at {job.company}
                            </p>
                            <p className="text-small text-default-500 ">
                                {job.period}
                            </p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p className="text-lg">{job.description}</p>
                    </CardBody>
                    <Divider />
                    <CardFooter className="flex flex-col gap-2 justify-start items-start">
                        <p className="text-default-650">
                            Technologies/Tools I used in this job were :{" "}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {job.skills.map((skill) => (
                                <div key={skill.pic} className="shrink-0">
                                    <Image
                                        src={skill.pic}
                                        alt=""
                                        className="w-auto h-auto object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </CardFooter>
                </Card>
            ))}
        </>
    );
};

export default JobListings;
