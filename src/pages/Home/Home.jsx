import { MeinLink, Text, Title } from "./Home.styled";

const Home = () => {
  return (
    <div>
      <Title>Ласкаво просимо у світ MiraPlay</Title>
      <Text>Щоб зануритись у світ ігор, будь ласка</Text>
      <MeinLink to="/login">Увійдіть в свій аккаунт</MeinLink>
      <Text>якщо у Вас ще немає власного акаунту, будь ласка</Text>
      <MeinLink to="/register"> Зареєструйтесь </MeinLink>
    </div>
  );
};

export default Home;
