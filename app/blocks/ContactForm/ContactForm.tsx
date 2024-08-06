"use client";
import { useState } from "react";
import ReactiveButton from "reactive-button";
import {
  FieldErrors,
  SubmitHandler,
  useForm,
  UseFormRegister,
} from "react-hook-form";

import style from "./component.module.css";
import ContentContainer from "@/app/components/ContentContainer/ContentContainer";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

interface IFormInputInfo {
  label: string;
  value: string;
  placeholder: string;
}

const formInputInfo: IFormInputInfo[] = [
  { label: "Name", value: "name", placeholder: "John A. Smith" },
  { label: "Email", value: "email", placeholder: "johnsmith@email.com" },
  {
    label: "Message",
    value: "message",
    placeholder: "Tell us more about what you need...",
  },
];

interface IFormInput {
  label: string;
  value: string;
  placeholder: string;
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
}

const FormInput = ({
  label,
  value,
  placeholder,
  register,
  errors,
}: IFormInput) => {
  return (
    <label className={style.formInputContainer}>
      <span className={style.formLabel}>{label}:</span>
      <input
        {...register(value as "name" | "email" | "message", { required: true })}
        className={style.formInput}
        placeholder={placeholder}
      />
      {errors.name && <span className={style.formError}>Name is required</span>}
    </label>
  );
};

interface IGridInfoItem {
  label: string;
  value: string;
}

const interestsGridInfo: IGridInfoItem[] = [
  { label: "E-Commerce Site", value: "E-Commerce Site" },
  { label: "Brand Development", value: "Brand Development" },
  {
    label: "Website Upgrades, Hosting and Maintenance",
    value: "Website Upgrades, Hosting and Maintenance",
  },
  {
    label: "Social Media Marketing and Management",
    value: "Social Media Marketing and Management",
  },
  { label: "Marketing Site", value: "Marketing Site" },
  { label: "Not Sure", value: "Not Sure" },
];

const budgetGridInfo: IGridInfoItem[] = [
  { label: "<5K", value: "<5K" },
  { label: "5K-10K", value: "5K-10K" },
  { label: "10K-25K", value: "10K-25K" },
  { label: "25K-50K", value: "25K-50K" },
  { label: "50K+", value: "50K+" },
];

interface IGridButton {
  label: string;
  value: string;
  stateValue: string | string[] | undefined;
  handleChange: (
    val: string
  ) => void | React.Dispatch<React.SetStateAction<string>>;
}

const GridButton = ({
  label,
  value,
  stateValue,
  handleChange,
}: IGridButton) => {
  return (
    <button
      type="button"
      className={`${style.gridButton} ${
        stateValue === value ? style.activeGridButton : ""
      }`}
      onClick={() => handleChange(value)}
    >
      {label}
    </button>
  );
};

const ContactForm = () => {
  const [buttonState, setButtonState] = useState<string>("idle");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setButtonState("loading");
    console.log(data);
    const res = await fetch("/api/work-with-us", {
      method: "POST",
      body: JSON.stringify(data),
    });

    try {
      const resJson = await res.json();
      console.log(resJson.body);
      setButtonState("success");
    } catch (err) {
      console.log({ err });
    }
  };

  const [interestItems, setInterestItems] = useState<string[]>([]);
  const [budget, setBudget] = useState<string>();

  const handleInterestItemsChange = (interestItem: string) => {
    setInterestItems(
      interestItems.includes(interestItem)
        ? interestItems.filter((item) => item !== interestItem)
        : [...interestItems, interestItem]
    );
  };

  return (
    <section className={style.formContainer}>
      <ContentContainer>
        <form className={style.contactForm} onSubmit={handleSubmit(onSubmit)}>
          {formInputInfo.map((info) => (
            <FormInput {...info} register={register} errors={errors} />
          ))}
          <label className={style.gridLabel}>I am looking for...</label>
          <div className={style.interestGrid}>
            {interestsGridInfo.map((info) => (
              <GridButton
                {...info}
                stateValue={interestItems}
                handleChange={handleInterestItemsChange}
              />
            ))}
          </div>
          <label className={style.gridLabel}>My budget is around...</label>
          <div className={style.budgetGrid}>
            {budgetGridInfo.map((info) => (
              <GridButton
                {...info}
                stateValue={budget}
                handleChange={setBudget}
              />
            ))}
          </div>
          <ReactiveButton
            outline
            type="submit"
            buttonState={buttonState}
            idleText="submit"
            loadingText="loading..."
            successText="success!"
            className={style.submitButton}
          />
        </form>
      </ContentContainer>
    </section>
  );
};

export default ContactForm;
