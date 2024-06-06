"use client";
import React, { useState } from "react";
import Image from "next/image";
import Input from "../components/Input/input";
import logo from "./../assets/image/Oasis Final Logo.png";
import Select from "../components/Input/select";
import blogo1 from "./../assets/image/bsquare_logo.png";
import blogo2 from "./../assets/image/oasis_exterior1.jpeg";
import ig_icon from "./../assets/image/ig_icon.png";
import {
  isEmail,
  isEmpty,
  isValidPhoneNumber,
  isValidName,
} from "./../utils/validation";

interface FormState {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  interior: string;
  role: string;
  price: string;
}

interface Option {
  value: string;
  label: string;
}

interface ContactData {
  role: Option[];
  budget: Option[];
  interior: Option[];
}

const contactData: ContactData = {
  role: [
    { value: "", label: "Select Role*" },
    { value: "Buyer", label: "Buyer" },
    { value: "Broker", label: "Broker" },
  ],
  budget: [
    { value: "", label: "Select Your Budget*" },
    { value: "$700K-$900K", label: "$700K-$900K" },
    { value: "$900K-$1.1M", label: "$900K-$1.1M" },
    { value: "$1.1M-$1.3M", label: "$1.1M-$1.3M" },
    { value: "$1.3M+", label: "$1.3M+" },
  ],
  interior: [
    { value: "", label: "Choose Type*" },
    { value: "1 Bedroom", label: "1 Bedroom" },
    { value: "2 Bedrooms", label: "2 Bedrooms" },
  ],
};

interface InputProps {
  placeholder: string;
  onValueChange: (value: string, id: keyof FormState) => void;
  id: keyof FormState;
}

export default function Coming(): JSX.Element {
  const [status, setStatus] = useState<boolean> (false)
  const [forms, setForms] = useState<FormState>({
    first_name: "",
    last_name: "",
    email: "",
    interior: "",
    role: "",
    price: "",
    phone: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [severity, setSeverity] = useState<"success">("success");

  const priceOptions = contactData.budget;
  const residencesOptions = contactData.interior;
  const agentOptions = contactData.role;
  const emailTemplate = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>New Lead for Oasis Astoria</title>
    <style>
      a { font-style: italic; font-weight: bold; color: black !important; }
    </style>
  </head>
  <body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">
    <div style="width: 100%; max-width: 750px; margin: 0 auto; padding: 20px;">
      <div style="text-align: center; font-size: 33px; color: #333; margin-bottom:40px;">New lead for Oasis Astoria</div>
      <div style="background-color: #F3EBDD; border-radius: 20px; width:100%; padding: 20px">
        <div style="font-size: 18px; color: #666; margin-top:5px; margin-bottom:5px;">First Name: ${forms.first_name}</div>
        <div style="font-size: 18px; color: #666; margin-top:5px; margin-bottom:5px;">Last Name: ${forms.last_name}</div>
        <div style="font-size: 18px; color: #666; margin-top:5px; margin-bottom:5px;">Phone Number: ${forms.phone}</div>
        <div style="font-size: 18px; color: #666; margin-top:5px; margin-bottom:5px;">Email: ${forms.email}</div>
        <div style="font-size: 18px; color: #666; margin-top:5px; margin-bottom:5px;">Property Type: ${forms.interior}</div>
        <div style="font-size: 18px; color: #666; margin-top:5px; margin-bottom:5px;">Budget: ${forms.price}</div>
        <div style="font-size: 18px; color: #666; margin-top:5px; margin-bottom:5px;">Role: ${forms.role}</div>
        <div style="font-size: 18px; color: #666; margin-top:5px; margin-bottom:5px;">Comment: ${message}</div>
      </div>
      <div style="padding: 35px 0px; width: 100%;">
        <div style="width: 100%; max-width: 400px; margin: 0 auto;">
          <div style="font-size:14px; color: #BC9067; text-align: center"> This is a new lead from Oasis Astoria website.</div>
        </div>
      </div>
    </div>
  </body>
  </html>
`;
  const onMessageChangeHandle = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value)
  }
  const onTextAreaValueChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    console.log(event);
    const target = event.target;
    const value = target.value;
    const id = target.id;
    setForms((prevForms) => ({ ...prevForms, [id]: value }));
  };
  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.value;
    const id = target.id;
    console.log(value);
    setForms((prevForms) => ({ ...prevForms, [id]: value }));

    if (!isEmpty(value)) {
      setErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
    }
    if (!value.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: "This field is required.",
      }));
    }
    if (id === "email") {
      if (!/\S+@\S+\.\S+/.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [id]: "Input Valid Email",
        }));
      }
    }
  };
  const onclick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    for (let key in forms) {
      if (key === "first_name" || key === "last_name") {
        if (!isValidName(forms[key])) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [key]: "Input valid name",
          }));
        }
      }
      if (key === "email") {
        if (!isEmail(forms[key])) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [key]: "Input valid email",
          }));
        }
      }
      if (key === "phone") {
        if (!isValidPhoneNumber(forms[key])) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [key]: "Input valid phone number",
          }));
        }
      }

      if (
        key === "price" ||
        key === "interior" ||
        key === "role" ||
        key === "email" ||
        key === "first_name" ||
        key === "last_name" ||
        key === "phone"
      ) {
        if (isEmpty(forms[key])) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [key]: "This field is required",
          }));
        }
      }
    }
    const allValid = Object.values(forms).every((field) => !isEmpty(field));
    console.log(allValid)
    if (allValid) {
      if (Object.values(errors).every((value) => isEmpty(value))) {
        try {
          const formData = new FormData();
          formData.append("from", "onboarding@resend.dev");
          formData.append("to", "simonxmachine@gmail.com");
          formData.append("subject", "New Lead for Oasis Astoria");
          formData.append("html", emailTemplate);

          const response = await fetch(
            `https://track-server.vercel.app/api/send`,
            {
              method: "POST",
              body: formData,
            }
          );

          if (!response.ok) throw new Error("Network response was not ok");
            setStatus(true)
        } catch (error) {
          window.alert(
            "Form not submitted properly - please call 646-889-9988"
          );
        }
      }
    }
  };
  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    switch (event.target.id) {
      case "role":
        setForms({ ...forms, [event.target.id]: event.target.value });
        break;
      case "price":
        setForms({ ...forms, [event.target.id]: event.target.value });
        break;
      case "interior":
        setForms({ ...forms, [event.target.id]: event.target.value });
        break;
      default:
        return;
    }

    if (!isEmpty(event.target.value)) {
      setErrors({ ...errors, [event.target.id]: "" });
    }
  };
  return (
    <>
      <div className="fixed w-full top-0 right-0 left-0 bottom-0 z-[102] bg-main-bg overflow-y-scroll no-scrollbar">
        <div className="w-full max-w-[1440px] mx-auto flex">
          <div className="text-left px-5">
            <a
              href="/"
              className="relative after:bg-none hover:after:h-0 after:h-0 "
            >
              <Image src={logo} alt="" width={250} className="mx-auto" />
            </a>
          </div>
          <div className="item-center content-center text-right w-full px-6">
            <a
              href="/contact"
              className="relative font-bold font-spartan cursor-pointer"
            >
              contact
            </a>
          </div>
        </div>
        <div className="w-full lg:flex max-w-[1440px] mx-auto mt-12 mb-12 sm:mt-24">
          <div className="w-full px-6 mb-20">
            <Image src={blogo2} alt="" width={700} className="rounded-lg" />
            <br />

            <p className="font-spartan text-lg my-6">
              <strong>Oasis Astoria</strong>
              <br />
              31-16 21st Street <br />
              Astoria, NY 11101
            </p>
            <div className="my-6 flex-col">
              <a className="font-spartan text-lg relative cursor-pointer border-b-[2px] pt-12">
                oasisastoria@gmail.com
              </a>
              <p>
                <a className="font-spartan text-sm relative cursor-pointer border-b-[2px] pt-12">
                  (646) 889-9988
                </a>
              </p>
              <br />
              <a
                href="https://www.instagram.com/oasisastoria/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative after:bg-none hover:after:h-0 after:h-0"
              >
                <div className="flex items-center">
                  <Image
                    src={ig_icon}
                    alt=""
                    width={40}
                    className="rounded-lg"
                  />{" "}
                  <span className="ml-2">Follow us on Instagram!</span>
                </div>
              </a>
            </div>
          </div>
          <div className="w-full">
            <p className="font-spartan text-lg lg:flex ml-2 lg:mb-4 lg:space-x-6 w-[calc(100%-24px)] px-3 text-yellow-800">
                <strong>
                  Introducing Oasis, an upcoming luxury residential condominium in
                  the vibrant neighborhood of Astoria, Queens. With 52 units
                  ranging from 1 to 2 bedrooms, each showcasing Bosch appliances
                  and sophisticated modern designs, Oasis offers a new standard of
                  urban living. Amenities include a bicycle storage room, resident
                  rooftop, gym, and more to be announced. Join our priority list
                  and follow us on Instagram for the latest updates on this
                  exciting development! <br /> <br />
                </strong>
              </p>
              {!status ? <form className="w-full">
              <p className="font-spartan text-lg lg:flex ml-2 lg:mb-4 lg:space-x-6 w-[calc(100%-24px)] px-3">
                For more information, please register here:
              </p>

              <div className="w-full lg:flex lg:space-x-6">
                <div className="w-full relative my-5 sm:mb-0">
                  <Input
                    placeholder="First Name*"
                    onValueChange={onValueChange}
                    id={"first_name"}
                    className="w-[calc(100%-24px)] px-3"
                    name="first name"
                  />
                  {errors.first_name && (
                    <p className="float-right text-red-600 text-[12px] text-red absolute -bottom-4 left-4">
                      {errors.first_name}
                    </p>
                  )}
                </div>
                <div className="w-full relative my-4 sm:mb-0">
                  <Input
                    placeholder="Last Name*"
                    onValueChange={onValueChange}
                    id={"last_name"}
                    className="w-[calc(100%-24px)] px-3"
                    name="last name"
                  />
                  {errors.last_name && (
                    <p className="float-right text-red-600 text-[12px] text-red absolute -bottom-4 left-4">
                      {errors.last_name}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full lg:my-6 space-x-3 my-5 sm:my-3 relative">
                <Input
                  placeholder="Email*"
                  onValueChange={onValueChange}
                  id={"email"}
                  className="w-[calc(100%-24px)] px-3"
                  name="email"
                />
                {errors.email && (
                  <p className="float-right text-red-600 text-[12px] text-red absolute -bottom-4 left-1">
                    {errors.email}
                  </p>
                )}
              </div>
              <div className="w-full lg:my-6 space-x-3 my-5 sm:my-3 relative">
                <Input
                  placeholder="Phone Number*"
                  onValueChange={onValueChange}
                  id={"phone"}
                  className="w-[calc(100%-24px)] px-3"
                  name="phone"
                />
                {errors.phone && (
                  <p className="float-right text-red-600 text-[12px] text-red absolute -bottom-4 left-1">
                    {errors.phone}
                  </p>
                )}
              </div>
              <div className="w-[calc(100%-24px)] lg:my-6 space-x-3 my-5 sm:my-3 relative">
                <Select
                  options={contactData.role}
                  onChange={handleDropdownChange}
                  id="role"
                  name="Role (required)"
                />
                {errors.role && (
                  <p className="float-right text-red-600 text-[12px] text-red absolute -bottom-4 left-1">
                    {errors.role}
                  </p>
                )}
              </div>
              <div className="w-[calc(100%-24px)] lg:my-6 space-x-3 my-5 sm:my-3 relative">
                <Select
                  options={contactData.interior}
                  onChange={handleDropdownChange}
                  id="interior"
                  name="Interested Size (required)"
                />
                {errors.interior && (
                  <p className="float-right text-red-600 text-[12px] text-red absolute -bottom-4 left-1">
                    {errors.interior}
                  </p>
                )}
              </div>
              <div className="w-[calc(100%-24px)] lg:my-6 space-x-3 my-5 sm:my-3 relative">
                <Select
                  options={contactData.budget}
                  onChange={handleDropdownChange}
                  id="price"
                  name="Price (required)"
                />
                {errors.price && (
                  <p className="float-right text-red-600 text-[12px] text-red absolute -bottom-4 left-1">
                    {errors.price}
                  </p>
                )}
              </div>
              <div className="">
                <textarea
                  placeholder="Message"
                  onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                    onMessageChangeHandle(event);
                  }}
                  value={message}
                  id={"message"}
                  className="focus-visible:outline-none rounded-xl w-[calc(100%-24px)] mx-3 bg-main-bg min-h-[100px] border-[2px] p-2"
                  name=""
                />
              </div>

              <div className="my-6 text-center w-full">
                <button
                  onClick={(e) => onclick(e)}
                  className="border-[2px] border-black hover:bg-black duration-1000 hover:text-main-bg rounded-full px-8 py-3 text-xl"
                >
                  Submit
                </button>
              </div>
            </form> : 
            <>
              <div className="w-full my-24">
                <p className="text-4xl text-center text-yellow-800">
                  Thank you
                </p>
              </div>
            </>}
            
          </div>
          
        </div>

        <div className="flex justify-between items-center mt-20 pl-4 pr-1 py-4 bg-stone-300 text-gray-600 text-sm">
          <p>&copy; 2024 Oasis Astoria. </p>
          <p>
            {" "}
            <a
              href="https://bsquarerealty.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative after:bg-none hover:after:h-0 after:h-0"
            >
              <Image src={blogo1} alt="" width={200} className="" />
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
