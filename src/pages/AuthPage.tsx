import LoginForm from "../components/LoginForm";
import TitleSection from "../components/TitleSection";


const AuthPage = () => {


  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "28px",
      }}
    >
      <TitleSection />
      <LoginForm  />
    </div>
  );
};

export default AuthPage;
