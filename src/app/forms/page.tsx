"use client";
import React, { useCallback } from "react";
import { object, string, number, InferType } from "yup";
import { useForm } from "react-hook-form";

const dataSchema = object({
    name: string().required(),
    nachname: string().required(),
    email: string().email().required(),
    mobil: number().positive(),
    geschaeftAdresse: string(),
    url: string().url(),
});

type Data = InferType<typeof dataSchema>;
// {
//     name: string;
//     nachname: string;
//     email: string;
//     mobil: number;
//     markenName: string;
//     geschaeftAdresse: string;
//     url: string;
// };

const useYupValidationResolver = (validationSchema) =>
    useCallback(
        async (data) => {
            try {
                const values = await validationSchema.validate(data, {
                    abortEarly: false,
                });

                return {
                    values,
                    errors: {},
                };
            } catch (errors) {
                return {
                    values: {},
                    errors: errors.inner.reduce(
                        (allErrors, currentError) => ({
                            ...allErrors,
                            [currentError.path]: {
                                type: currentError.type ?? "validation",
                                message: currentError.message,
                            },
                        }),
                        {}
                    ),
                };
            }
        },
        [validationSchema]
    );

export default function forms(): JSX.Element {
    const resolver = useYupValidationResolver(dataSchema);
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({ resolver });

    return (
        <form onSubmit={handleSubmit((data) => console.log(data))}>
            {/* {errors?.email?.message}
            <label>Name : </label>
            <input {...register("name")} />
            <br />
            {errors?.email?.message}
            <label>Email : </label>
            <input {...register("email")} />
            <br />
            {errors?.mobil?.message}
            <label>Mobil : </label>
            <input {...register("mobil")} />
            <br />
            <input type="submit" /> */}

            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                        Onboarding Formular
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        We are gathering your information to build a better
                        product for you.
                    </p>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Name :{" "}
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="text"
                                        id="name"
                                        autoComplete="name"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        {...register("name")}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
