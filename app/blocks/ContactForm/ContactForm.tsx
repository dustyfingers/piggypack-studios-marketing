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
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <section className={style.formContainer}>
      <ContentContainer>
        <form className={style.contactForm} onSubmit={handleSubmit(onSubmit)}>
          <label>
            Name:
            <input
              {...register("name", { required: true })}
              className={style.formInput}
            />
          </label>
          {errors.name && <span>This field is required</span>}
          <label>
            Email:
            <input
              type="email"
              {...register("email", { required: true })}
              className={style.formInput}
            />
          </label>
          {errors.email && <span>This field is required</span>}
          <label>
            Message:
            <input
              type="textarea"
              {...register("message", { required: true })}
              className={style.formInput}
            />
          </label>
          {errors.message && <span>This field is required</span>}
          <input type="submit" value="submit" />
        </form>
      </ContentContainer>
    </section>
  );
};

export default ContactForm;
