import { Formik } from "formik";
import {
  Btn,
  ErrorText,
  FormRegister,
  Input,
  Label,
  RegisterWrap,
} from "./Register.styled";
import { useRegister } from "../../hooks";
import * as yup from "yup";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";
const schema = yup.object().shape({
  username: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "ім'я має бути Jane"
    )
    .required("Required"),
  email: yup
    .string()
    .matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, "пошта має бути jane@acme.com")
    .required("Required"),
  password: yup.string().required("Required"),
});
const initialValues = {
  username: "",
  email: "",
  password: "",
};

const RegisterForm = () => {
  const { registerMutation, error, isError, isLoading } = useRegister();
  const handleSubmit = (values, { resetForm }) => {
    registerMutation.mutate(values);
    resetForm();
  };
  return (
    <>
      {" "}
      <RegisterWrap>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <FormRegister>
            <Label htmlFor="username">Ім'я</Label>
            <Input id="username" name="username" placeholder="Jane" />
            <ErrorText name="email" component="p" />
            <Label htmlFor="email">Пошта</Label>
            <Input
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
            <ErrorText name="email" component="p" />
            <Label htmlFor="password">Пароль</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder=""
            />
            <Btn type="submit">Відправити</Btn>
          </FormRegister>
        </Formik>
      </RegisterWrap>
      {isLoading && <Loader />}
      {isError && toast.error(error)}
    </>
  );
};

export default RegisterForm;
