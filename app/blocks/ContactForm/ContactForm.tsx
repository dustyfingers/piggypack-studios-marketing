"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import style from "./component.module.css";
import ContentContainer from "@/app/components/ContentContainer/ContentContainer";

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

  return (
    <section className={style.formContainer}>
      <ContentContainer width={100}>
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
          <input type="submit" value="submit" className={style.submitButton} />
        </form>
      </ContentContainer>
    </section>
  );
};

export default ContactForm;
