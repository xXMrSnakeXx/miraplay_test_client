import { Formik } from "formik";
import * as yup from "yup";
import {
  Btn,
  ErrorText,
  FormLogin,
  Input,
  Label,
  LoginWrap,
} from "./LoginForm.styled";
import { useLogin } from "../../hooks";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";
const schema = yup.object().shape({
  email: yup
    .string()
    .matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, "пошта має бути jane@acme.com")
    .required("Required"),
  password: yup.string().required("Required"),
});
const initialValues = {
  email: "",
  password: "",
};
const LoginForm = () => {
  const { loginMutation, error, isError, isLoading } = useLogin();
  const handleSubmit = (values, { resetForm }) => {
    loginMutation.mutate(values);
    resetForm();
  };
  return (
    <>
      <LoginWrap>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <FormLogin>
            <Label htmlFor="email">Пошта </Label>
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
              placeholder="jane123456"
            />
            <Btn type="submit">Відправити</Btn>
          </FormLogin>
        </Formik>
      </LoginWrap>
      {isLoading && <Loader />}
      {isError && toast.error(error)}
    </>
  );
};

export default LoginForm;
