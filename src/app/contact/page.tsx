'use client'
import React, { useState } from "react";
import Image from "next/image";
import Input from "../components/Input/input";
import logo from './../assets/image/Oasis Final Logo.png'
import Select from "../components/Input/select";
import { isEmail, isEmpty, getLength, isValidName } from "./../utils/validation";

interface FormState {
  first_name: string;
  last_name: string;
  email: string;
  interior: string;
  role: string;
  price: string;
  message: string;
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
    { "value": "", "label": "Role" },
    { "value": "buyer", "label": "Buyer" },
    { "value": "broker", "label": "Broker" },
  ],
  budget: [
    { "value": "", "label": "Select your budget" },
    { "value": "$500K-$1M", "label": "$500K-$1M" },
    { "value": "$1M-$2M", "label": "$1M-$2M" },
    { "value": "$2M-$3M", "label": "$2M-$3M" },
    { "value": "$3M+", "label": "$3M+" }
  ],
  interior: [ 
    { "value": "", "label": "Interested Size" },
    { "value": "studio", "label": "studio" },
    { "value": "1 Bedroom", "label": "1 Bedroom" },
    { "value": "2 Bedrooms", "label": "2 Bedrooms" },
    { "value": "3 Bedrooms", "label": "2 Bedrooms" }
  ]
};

interface InputProps {
  placeholder: string;
  onValueChange: (value: string, id: keyof FormState) => void;
  id: keyof FormState;
}

export default function Coming(): JSX.Element {
  const [forms, setForms] = useState<FormState>({
    first_name: "",
    last_name: "",
    email: "",
    interior: "",
    role: "",
    price: "",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [severity, setSeverity] = useState<"success">("success");

  const priceOptions = contactData.budget;
  const residencesOptions = contactData.interior;
  const agentOptions = contactData.role;

  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.value;
    const id = target.id;
    console.log(value)
    setForms(prevForms => ({...prevForms, [id]: value }));
  
    if (!isEmpty(value)) {
      setErrors(prevErrors => ({...prevErrors, [id]: "" }));
    }
    if (!value.trim()) {
      setErrors(prevErrors => ({...prevErrors, [id]: "This field is required." }));
    }
    if (id === "email") {
      if (!/\S+@\S+\.\S+/.test(value)) {
        setErrors(prevErrors => ({...prevErrors, [id]: "Input Valid Email" }));
      }
    }
  };
  const onclick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    for (let key in forms) {
      if(key === "first_name" || key === "last_name"){
        if(!isValidName(forms[key])){
          setErrors(prevErrors => ({...prevErrors, [key]: "Input valid name" }));
        }
      }
      if(key === "email"){
        if(!isEmail(forms[key])){
          setErrors(prevErrors => ({...prevErrors, [key]: "Input valid email" }));
        }
      }
      if(key === "price" || key === "interior" || key === "role" || key === "email" || key === "first_name" || key === "last_name"){
        if(isEmpty(forms[key])){
          setErrors(prevErrors => ({...prevErrors, [key]: "This field is required" }));
        }
      }
    }
  }
  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    switch (event.target.id) {
      case "role":
        setForms({...forms, [event.target.id]: event.target.value});
        break;
      case "price":
        setForms({...forms, [event.target.id]: event.target.value});
        break;
      case "interior":
        setForms({...forms, [event.target.id]: event.target.value});
        break;
      default:
        return;
    }
    
    if(!isEmpty(event.target.value)){
      setErrors({ ...errors, [event.target.id]: ""})
    }
  };
  return(
    <>
      <div className="fixed w-full top-0 right-0 left-0 bottom-0 z-[102] bg-main-bg overflow-y-scroll lg:overflow-y-hidden">
        <div className="w-full max-w-[1440px] mx-auto flex">
          <div className="text-left px-6">
            <a
              href="/" 
              className="relative after:bg-none hover:after:h-0 after:h-0 ">
              <Image src={logo} alt="" width={200} className="mx-auto"/>
            </a>
          </div>
          <div className="item-center content-center text-right w-full px-6">
            <a 
              href="/contact"
              className="relative font-bold font-spartan cursor-pointer">
              contact
            </a>
          </div>
        </div>
        <div className="w-full lg:flex max-w-[1440px] mx-auto mt-12 sm:mt-24">
          <div className="w-full px-6">
            <p className="font-spartan text-lg">To learn more about our building, please register here.</p>
            <div className="my-6 flex-col">
              <a className="font-spartan text-lg relative cursor-pointer border-b-[2px] pt-12">nusunvernon@grevg.com</a>
              <p><a className="font-spartan text-sm relative cursor-pointer border-b-[2px] pt-12">(646) 970-3055</a></p>
            </div>
            <p className="font-spartan text-lg my-6">3055 Vernon Boulevard, Long Island City New York, NY 11102</p>
          </div>
          <form className="w-full">
            <div className="w-full lg:flex lg:mb-6 lg:space-x-6">
              <div className="w-full relative my-3 sm:my-0">
                <Input 
                  placeholder="FIRST NAME*"
                  onValueChange={onValueChange}
                  id={"first_name"}
                  className="w-[calc(100vw-24px)] sm:w-full mx-3"
                  name="first name"
                />
                {errors.first_name && <p className="float-right text-red-600 text-[12px] text-red absolute -bottom-3 left-4">{errors.first_name}</p>}
              </div>
              <div className="w-full relative my-3 sm:my-0">
                <Input 
                  placeholder="LAST NAME*"
                  onValueChange={onValueChange}
                  id={"last_name"}
                  className="w-[calc(100vw-24px)] sm:w-full mx-3"
                  name="last name"
                />
                {errors.last_name && <p className="float-right text-red-600 text-[12px] text-red absolute -bottom-3 left-4">{errors.last_name}</p>}
              </div>
            </div>
            <div className="w-full lg:my-6 space-x-3 my-3 sm:my-0 relative">
              <Input 
                placeholder="Email*"
                onValueChange={onValueChange}
                id={"email"}
                className="w-[calc(100vw-24px)] sm:w-full mx-3"
                name="email"
              />      
              {errors.email && <p className="float-right text-red-600 text-[12px] text-red absolute -bottom-3 left-1">{errors.email}</p>}
            </div>
            <div className="w-full lg:my-6 space-x-3 my-3 sm:my-0 relative">
              <Select 
                options={contactData.role}
                onChange={handleDropdownChange}
                id="role"
                name="Role (required)"
              />
              {errors.role && <p className="float-right text-red-600 text-[12px] text-red absolute -bottom-3 left-1">{errors.role}</p>}
            </div>
            <div className="w-full lg:my-6 space-x-3 my-3 sm:my-0 relative">
              <Select 
                options={contactData.interior}
                onChange={handleDropdownChange}
                id="interior"
                name = "Interested Size (required)"
              />
              {errors.interior && <p className="float-right text-red-600 text-[12px] text-red absolute -bottom-3 left-1">{errors.interior}</p>}
            </div>
            <div className="w-full lg:my-6 space-x-3 my-3 sm:my-0 relative">
              <Select 
                options={contactData.budget}
                onChange={handleDropdownChange}
                id="price"
                name="Price (required)"
              />
              {errors.price && <p className="float-right text-red-600 text-[12px] text-red absolute -bottom-3 left-1">{errors.price}</p>}
            </div>
            <Input 
              placeholder="Message"
              onValueChange={onValueChange}
              id={"message"}
              type="message"
              className="h-[200px] rounded-xl w-[calc(100vw-24px)] sm:w-full mx-3"
              name="message"
            />
            <div className="w-full my-6 text-center">
              <button onClick={(e) => onclick(e)} className="border-[2px] border-black hover:bg-black duration-1000 hover:text-main-bg rounded-full px-5 py-2 text-2xl">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      
    </>
  )
}