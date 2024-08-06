"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import style from "./component.module.css";
import ContentContainer from "@/app/components/ContentContainer/ContentContainer";
import { useState } from "react";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await fetch("/api/work-with-us", {
      method: "POST",
      body: JSON.stringify(data),
    });

    try {
      const resJson = await res.json();
      console.log(resJson.body);
    } catch (err) {
      console.log({ err });
    }
    console.log(data);
  };

  const [interestItems, setInterestItems] = useState<string[]>([]);
  const [budget, setBudget] = useState<string>();

  const handleInterestItemsChange = (interestItem: string) => {
    let newInterestItems: string[] = [];
    if (interestItems.includes(interestItem)) {
      newInterestItems = interestItems.filter((item) => item !== interestItem);
    } else {
      newInterestItems = interestItems;
      newInterestItems.push(interestItem);
    }
    setInterestItems(newInterestItems);
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
            {errors.name && <span>Name is required</span>}
          </label>

          <label className={style.formInputContainer}>
            <span className={style.formLabel}>Email:</span>
            <input
              type="email"
              {...register("email", { required: true })}
              className={style.formInput}
              placeholder="johnsmith@email.com"
            />
            {errors.email && <span>Email is required</span>}
          </label>

          <label className={style.formInputContainer}>
            <span className={style.formLabel}>Message:</span>
            <input
              type="textarea"
              {...register("message", { required: true })}
              className={style.formInput}
              placeholder="Tell us about your project..."
            />
            {errors.message && <span>Message is required</span>}
          </label>

          {/* types of service interested in */}
          <label className={style.gridLabel}>I am looking for...</label>
          <div className={style.interestGrid}>
            <input
              type="button"
              value="E-Commerce Site"
              onClick={() => handleInterestItemsChange("E-Commerce Site")}
              className={`${style.gridButton} ${
                interestItems.includes("E-Commerce Site")
                  ? style.activeGridButton
                  : ""
              }`}
            />
            <input
              type="button"
              value="Brand Development"
              onClick={() => handleInterestItemsChange("Brand Development")}
              className={`${style.gridButton} ${
                interestItems.includes("Brand Development")
                  ? style.activeGridButton
                  : ""
              }`}
            />
            <input
              type="button"
              value="Website Upgrades, Hosting and Maintenance"
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
            />
            <input
              type="button"
              value="Social Media Marketing and Management"
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
            />
            <input
              type="button"
              value="Marketing Site"
              onClick={() => handleInterestItemsChange("Marketing Site")}
              className={`${style.gridButton} ${
                interestItems.includes("Marketing Site")
                  ? style.activeGridButton
                  : ""
              }`}
            />
            <input
              type="button"
              value="Not Sure"
              onClick={() => handleInterestItemsChange("Not Sure")}
              className={`${style.gridButton} ${
                interestItems.includes("Not Sure") ? style.activeGridButton : ""
              }`}
            />
          </div>
          {/* estimated budget */}
          <label className={style.gridLabel}>My budget is around...</label>
          <div className={style.budgetGrid}>
            <input type="button" value="5K-10K" className={style.gridButton} />
            <input type="button" value="10K-25K" className={style.gridButton} />
            <input type="button" value="25K+" className={style.gridButton} />
          </div>
          <input type="submit" value="submit" className={style.submitButton} />
        </form>
      </ContentContainer>
    </section>
  );
};

export default ContactForm;
