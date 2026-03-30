"use client";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import { useTranslations } from "next-intl";

import jobs from "../database/jobs";

const JobListings = () => {
  const t = useTranslations("");

  return (
    <>
      {jobs["en"].map((job, index) => (
        <Card
          key={job.company + "_" + job.title}
          fullWidth
          className="py-4 mb-4"
          shadow="lg"
        >
          <CardHeader className="flex gap-3">
            <Image
              isZoomed
              radius="lg"
              shadow="lg"
              src={`../static/resume/company-logos/${job.image}`}
            />
            <div className="flex flex-col w-full text-left">
              <p className="text-lg font-semibold  w-full ">
                {t(`jobs.${index}.title`)} at {job.company}
              </p>
              <p className="text-small text-default-500 ">{job.period}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-lg">{t(`jobs.${index}.description`)}</p>
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
                    key={skill.pic}
                    alt=""
                    className="w-auto h-auto object-contain"
                    src={skill.pic}
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
