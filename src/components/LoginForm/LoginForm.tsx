// import { MouseEvent, useState, ChangeEvent } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { LoginFormContainer, Title, InputsContainer } from "./styles";
import { LOGIN_FORM_NAMES } from "./types";

function LoginForm() {
  // Валидация
  const validationSchema = Yup.object().shape({
    [LOGIN_FORM_NAMES.EMAIL]: Yup.string()
      .required("Email field is required")
      .email("This field should be in email format"),
    [LOGIN_FORM_NAMES.PASSWORD]: Yup.string()
      .required("Password field is required")
      .min(5, "Password field should contain minimum 5 characters")
      .max(15, "Password field should contain maximum 15 characters"),
  });

  const formik = useFormik({
    initialValues: {
      [LOGIN_FORM_NAMES.EMAIL]: "",
      [LOGIN_FORM_NAMES.PASSWORD]: "",
    },
    validationSchema: validationSchema,
    validateOnMount: false,
    validateOnChange: false,
    onSubmit: async (values, helpers) => {
      console.log("Submit works");
      // values  - обьект, в котором у вас будут лежать значения которые вы вводили в элементы формы, на момент нажатия на кнопку с типом submit
      console.log(values);
      // вспомогательные функции для контроля элементов
      console.log(helpers);
      // helpers.resetForm();
    },
  });
  
  //////////////////////////////////////////////////////////////////////////
  // КОНТРОЛЬ ИНПУТОВ С ПОМОШЬЮ useState()
  // const [emailValue, setEmailValue] = useState<string>("");
  // const [passwordValue, setPasswordValue] = useState<string>("");

  // const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setEmailValue(event.target.value);
  // };

  // const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPasswordValue(event.target.value);
  // };

  // const login = (event: MouseEvent): void => {
  // event.preventDefault();
  // console.log("Data to send on server", {
  //   email: emailValue,
  //   password: passwordValue,
  // });
  // };
  //////////////////////////////////////////////////////////////////////////

  return (
    <LoginFormContainer onSubmit={formik.handleSubmit}>
      <Title>Login form</Title>
      <InputsContainer>
        <Input
          id="email-id"
          name={LOGIN_FORM_NAMES.EMAIL}
          type="text"
          placeholder="Enter your email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_NAMES.EMAIL]}
        />
        <Input
          id="password-id"
          name={LOGIN_FORM_NAMES.PASSWORD}
          type="password"
          placeholder="Enter your password"
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_NAMES.PASSWORD]}
        />
      </InputsContainer>
      <Button disabled={formik.isSubmitting} name="Login" type="submit" />
    </LoginFormContainer>
  );
}

export default LoginForm;
