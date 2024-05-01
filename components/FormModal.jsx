import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import { useForm } from "react-hook-form";
// import { BeatLoader } from "react-spinners";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import axios from "axios";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { toast } from "sonner";

export default function FormModal({ className, variant }) {
  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ mode: "all" });

  const baseUrl = "";

  const onSubmit = async (data) => {
    console.log(data);
    // try {
    //   await axios.post(`${baseUrl}`, data, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   });
    //   setConfirmationModal(true);
    // } catch (error) {
    //   toast.error(`${error.response.data.message}`);
    // }
    setConfirmationModal(true);
  };

  const handleCloseModal = () => {
    setConfirmationModal(false);
    reset();
  };

  return (
    <div>
      <Dialog className="px-8" open={open} onOpenChange={setOpen}>
        <DialogTrigger aschild="true">
          <Button variant={variant} className={`${className}`}>
            Join waitlist <MoveRight />
          </Button>
        </DialogTrigger>
        {!confirmationModal && (
          <DialogContent className="px-8">
            <DialogHeader className="flex flex-col items-center py-1">
              <form onSubmit={handleSubmit(onSubmit)} className="w-full px-4">
                <div className="flex flex-col w-full mb-4">
                  <p className="text-2xl text-center font-semibold">
                    Join the waitlist
                  </p>
                  <p className="text-sm text-center text-secondary">
                    Help us reach out to you when we launch.
                  </p>
                </div>
                <div className="flex gap-8 mb-4">
                  <div className="flex flex-col mb-3 w-full">
                    <label
                      className="text-xs text-neutral-500 mb-1"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      {...register("firstName", {
                        required: "First Name is required",
                      })}
                      className="border border-neutral200 rounded-[8px] outline-none py-2 px-4"
                      id="firstName"
                    />
                    {errors.firstName && (
                      <p className="text-[10px] text-red-400 font-light mt-1">
                        {errors?.firstName.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col mb-3 w-full">
                    <label
                      className="text-xs text-neutral-500 mb-1"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      {...register("lastName", {
                        required: "Last Name is required",
                      })}
                      className="border border-neutral200 rounded-[8px] outline-none py-2 px-4"
                      id="lastName"
                    />
                    {errors.lastName && (
                      <p className="text-[10px] text-red-400 font-light mt-1">
                        {errors?.lastName.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex gap-8 mb-4">
                  <div className="flex flex-col mb-3 w-full">
                    <label
                      className="text-xs text-neutral-500 mb-1"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email Address is required",
                      })}
                      className="border border-neutral200 rounded-[8px] outline-none py-2 px-4"
                      id="email"
                    />
                    {errors.email && (
                      <p className="text-[10px] text-red-400 font-light mt-1">
                        {errors?.email.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col mb-3 w-full">
                    <label
                      className="text-xs text-neutral-500 mb-1"
                      htmlFor="phone"
                    >
                      Phone Number
                    </label>
                    <PhoneInput
                      defaultCountry="ng"
                      inputClassName="w-full !py-5 !rounded-r-[8px]"
                      className="w-full"
                      {...register("phoneNumber", {
                        required: "Phone Number is required",
                      })}
                    />
                    {errors.phoneNumber && (
                      <p className="text-[10px] text-red-400 font-light mt-1">
                        {errors?.phoneNumber.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col mb-3">
                  <label
                    className="text-xs text-neutral-500 mb-1"
                    htmlFor="businessType"
                  >
                    Business type
                  </label>
                  <input
                    type="text"
                    {...register("businessType", {
                      required: "Business Type is required",
                    })}
                    className="border border-neutral200 rounded-[8px] outline-none py-2 px-4"
                    id="businessType"
                  />
                  {errors.businessType && (
                    <p className="text-[10px] text-red-400 font-light mt-1">
                      {errors?.businessType.message}
                    </p>
                  )}
                </div>
                <p className="text-black/40 text-sm mt-4">
                  By submitting your details, you agree to receive updates on
                  our launch & developments.
                </p>
                <div className="text-center">
                  <Button
                    variant="default"
                    type="submit"
                    className="py-3 px-12 rounded-[9px] text-sm font-light"
                  >
                    {isSubmitting ? <p>Submitting...</p> : "Submit"}
                  </Button>
                </div>
              </form>
            </DialogHeader>
          </DialogContent>
        )}
        {confirmationModal && (
          <DialogContent className="flex flex-col items-center">
            <Image
              src="/assets/icons/verified-icon.svg"
              width={96}
              height={96}
              alt=""
            />
            <p className="text-xl text-center font-semibold mt-3">
              Congratulations! You’ve been waitlisted.
            </p>
            <p className="text-black/45 text-center">
              Thank you for submitting your information to join our waitlist.
              We’ll keep you updated on our launch & developments.
            </p>
            <DialogClose>
              <div>
                <Button
                  onClick={handleCloseModal}
                  variant="default"
                  className="py-3 px-12 rounded-[9px] text-sm font-light"
                >
                  Done
                </Button>
              </div>
            </DialogClose>
          </DialogContent>
        )}
      </Dialog>
      <Drawer open={openDrawer} onOpenChange={setOpenDrawer}>
        <DrawerTrigger aschild="true">
          <Button
            variant="default"
            className="items-center gap-2 font-normal w-[271px] mt-8 flex md:hidden"
          >
            Join waitlist <MoveRight />
          </Button>
        </DrawerTrigger>
        {!confirmationModal && (
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle className="text-center">
                Join the waitlist
              </DrawerTitle>
              <DrawerDescription>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full px-4">
                  <div className="flex flex-col w-full mb-4">
                    <p className="text-sm text-center text-secondary">
                      Help us reach out to you when we launch.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 mb-4">
                    <div className="flex flex-col mb-3 w-full">
                      <label
                        className="text-xs text-neutral-500 mb-1"
                        htmlFor="firstName"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        {...register("firstName", {
                          required: "First Name is required",
                        })}
                        className="border border-neutral200 rounded-[8px] outline-none py-2 px-4"
                        id="firstName"
                      />
                      {errors.firstName && (
                        <p className="text-[10px] text-red-400 font-light mt-1">
                          {errors?.firstName.message}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col mb-3 w-full">
                      <label
                        className="text-xs text-neutral-500 mb-1"
                        htmlFor="lastName"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        {...register("lastName", {
                          required: "Last Name is required",
                        })}
                        className="border border-neutral200 rounded-[8px] outline-none py-2 px-4"
                        id="lastName"
                      />
                      {errors.lastName && (
                        <p className="text-[10px] text-red-400 font-light mt-1">
                          {errors?.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 mb-4">
                    <div className="flex flex-col mb-3 w-full">
                      <label
                        className="text-xs text-neutral-500 mb-1"
                        htmlFor="email"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        {...register("email", {
                          required: "Email Address is required",
                        })}
                        className="border border-neutral200 rounded-[8px] outline-none py-2 px-4"
                        id="email"
                      />
                      {errors.email && (
                        <p className="text-[10px] text-red-400 font-light mt-1">
                          {errors?.email.message}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col mb-3 w-full">
                      <label
                        className="text-xs text-neutral-500 mb-1"
                        htmlFor="phone"
                      >
                        Phone Number
                      </label>
                      <PhoneInput
                        defaultCountry="ng"
                        inputClassName="w-full !py-5 !rounded-r-[8px]"
                        className="w-full"
                        {...register("phoneNumber", {
                          required: "Phone Number is required",
                        })}
                      />
                      {errors.phoneNumber && (
                        <p className="text-[10px] text-red-400 font-light mt-1">
                          {errors?.phoneNumber.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col mb-3">
                    <label
                      className="text-xs text-neutral-500 mb-1"
                      htmlFor="businessType"
                    >
                      Business type
                    </label>
                    <input
                      type="text"
                      {...register("businessType", {
                        required: "Business Type is required",
                      })}
                      className="border border-neutral200 rounded-[8px] outline-none py-2 px-4"
                      id="businessType"
                    />
                    {errors.businessType && (
                      <p className="text-[10px] text-red-400 font-light mt-1">
                        {errors?.businessType.message}
                      </p>
                    )}
                  </div>
                  <p className="text-black/40 text-xs my-4">
                    By submitting your details, you agree to receive updates on
                    our launch & developments.
                  </p>
                  <div className="text-center">
                    <Button
                      variant="default"
                      type="submit"
                      className="py-3 px-12 rounded-[9px] text-sm font-light"
                    >
                      {isSubmitting ? <p>Submitting...</p> : "Submit"}
                    </Button>
                  </div>
                </form>
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter className="pt-2"></DrawerFooter>
          </DrawerContent>
        )}
        {confirmationModal && (
          <DrawerContent className="flex flex-col items-center mb-8 px-5">
            <Image
              className="mt-4"
              src="/assets/icons/verified-icon.svg"
              width={96}
              height={96}
              alt=""
            />
            <p className="text-xl text-center font-semibold mt-3">
              Congratulations! You’ve been waitlisted.
            </p>
            <p className="text-black/45 text-center">
              Thank you for submitting your information to join our waitlist.
              We’ll keep you updated on our launch & developments.
            </p>
            <DrawerClose>
              <Button
                onClick={handleCloseModal}
                variant="default"
                className="py-3 px-12 mt-6 rounded-[9px] text-sm font-light"
              >
                Done
              </Button>
            </DrawerClose>
          </DrawerContent>
        )}
      </Drawer>
    </div>
  );
}
