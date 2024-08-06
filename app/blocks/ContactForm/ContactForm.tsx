"use client";
import { useState } from "react";
import ReactiveButton from "reactive-button";
import { SubmitHandler, useForm } from "react-hook-form";

import style from "./component.module.css";
import ContentContainer from "@/app/components/ContentContainer/ContentContainer";

type Inputs = {
  name: string;
  email: string;
  message: string;
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
    console.log(data);
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
          <label className={style.formInputContainer}>
            <span className={style.formLabel}>Name:</span>
            <input
              {...register("name", { required: true })}
              className={style.formInput}
              placeholder="John Smith"
            />
            {errors.name && (
              <span className={style.formError}>Name is required</span>
            )}
          </label>

          <label className={style.formInputContainer}>
            <span className={style.formLabel}>Email:</span>
            <input
              type="email"
              {...register("email", { required: true })}
              className={style.formInput}
              placeholder="johnsmith@email.com"
            />
            {errors.email && (
              <span className={style.formError}>Email is required</span>
            )}
          </label>

          <label className={style.formInputContainer}>
            <span className={style.formLabel}>Message:</span>
            <input
              type="textarea"
              {...register("message", { required: true })}
              className={style.formInput}
              placeholder="Tell us about your project..."
            />
            {errors.message && (
              <span className={style.formError}>Message is required</span>
            )}
          </label>

          {/* types of service interested in */}
          <label className={style.gridLabel}>I am looking for...</label>
          <div className={style.interestGrid}>
            <button
              type="button"
              onClick={() => handleInterestItemsChange("E-Commerce Site")}
              className={`${style.gridButton} ${
                interestItems.includes("E-Commerce Site")
                  ? style.activeGridButton
                  : ""
              }`}
            >
              E-Commerce Site
            </button>
            <button
              type="button"
              onClick={() => handleInterestItemsChange("Brand Development")}
              className={`${style.gridButton} ${
                interestItems.includes("Brand Development")
                  ? style.activeGridButton
                  : ""
              }`}
            >
              Brand Development
            </button>
            <button
              type="button"
              onClick={() =>
                handleInterestItemsChange(
                  "Website Upgrades, Hosting and Maintenance"
                )
              }
              className={`${style.gridButton} ${
                interestItems.includes(
                  "Website Upgrades, Hosting and Maintenance"
                )
                  ? style.activeGridButton
                  : ""
              }`}
            >
              Website Upgrades, Hosting and Maintenance
            </button>
            <button
              type="button"
              onClick={() =>
                handleInterestItemsChange(
                  "Social Media Marketing and Management"
                )
              }
              className={`${style.gridButton} ${
                interestItems.includes("Social Media Marketing and Management")
                  ? style.activeGridButton
                  : ""
              }`}
            >
              Social Media Marketing and Management
            </button>
            <button
              type="button"
              value=""
              onClick={() => handleInterestItemsChange("Marketing Site")}
              className={`${style.gridButton} ${
                interestItems.includes("Marketing Site")
                  ? style.activeGridButton
                  : ""
              }`}
            >
              Marketing Site
            </button>
            <button
              type="button"
              onClick={() => handleInterestItemsChange("Not Sure")}
              className={`${style.gridButton} ${
                interestItems.includes("Not Sure") ? style.activeGridButton : ""
              }`}
            >
              Not Sure
            </button>
          </div>
          {/* estimated budget */}
          <label className={style.gridLabel}>My budget is around...</label>
          <div className={style.budgetGrid}>
            <button
              type="button"
              className={`${style.gridButton} ${
                budget === "<5K" ? style.activeGridButton : ""
              }`}
              onClick={() => setBudget("<5K")}
            >
              &gt;5K
            </button>
            <button
              type="button"
              className={`${style.gridButton} ${
                budget === "5K-10K" ? style.activeGridButton : ""
              }`}
              onClick={() => setBudget("5K-10K")}
            >
              5K-10K
            </button>
            <button
              type="button"
              className={`${style.gridButton} ${
                budget === "10K-25K" ? style.activeGridButton : ""
              }`}
              onClick={() => setBudget("10K-25K")}
            >
              10K-25K
            </button>
            <button
              type="button"
              className={`${style.gridButton} ${
                budget === "25K+" ? style.activeGridButton : ""
              }`}
              onClick={() => setBudget("25K+")}
            >
              25K+
            </button>
          </div>
          <ReactiveButton
            outline
            type="submit"
            buttonState={buttonState}
            idleText="submit"
            loadingText="loading..."
            successText="success!"
            className={style.submitButton}
            // block={false}
          />
        </form>
      </ContentContainer>
    </section>
  );
};

export default ContactForm;
