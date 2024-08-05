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
          </label>
          {errors.name && <span>This field is required</span>}
          <label className={style.formInputContainer}>
            <span className={style.formLabel}>Email:</span>
            <input
              type="email"
              {...register("email", { required: true })}
              className={style.formInput}
              placeholder="johnsmith@email.com"
            />
          </label>
          {errors.email && <span>This field is required</span>}
          <label className={style.formInputContainer}>
            <span className={style.formLabel}>Message:</span>
            <input
              type="textarea"
              {...register("message", { required: true })}
              className={style.formInput}
              placeholder="Tell us about your project..."
            />
          </label>
          {errors.message && <span>This field is required</span>}
          {/* types of service interested in */}
          <label className={style.gridLabel}>I am looking for...</label>
          <div className={style.interestGrid}>
            <input
              type="button"
              value="E-Commerce Site"
              onClick={() =>
                setInterestItems([...interestItems, "E-Commerce Site"])
              }
              className={style.gridButton}
            />
            <input
              type="button"
              value="Brand Development"
              className={style.gridButton}
            />
            <input
              type="button"
              value="Website Upgrades, Hosting and Maintenance"
              className={style.gridButton}
            />
            <input
              type="button"
              value="Social Media Marketing and Management"
              className={style.gridButton}
            />
            <input
              type="button"
              value="Marketing Site"
              className={style.gridButton}
            />
            <input
              type="button"
              value="Not Sure"
              className={style.gridButton}
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
