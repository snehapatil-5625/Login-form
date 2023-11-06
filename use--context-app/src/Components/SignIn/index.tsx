import { useStyletron } from "baseui";
import { Input } from "baseui/input";
import { FormControl } from "baseui/form-control";
import { Button } from "baseui/button";
import { useState } from "react";
import { useAuth } from "../../Auth/AuthContext";
import { useNavigate } from "react-router";

export default function SignIn() {
  const [css, $theme] = useStyletron();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!email) {
      setEmailError("Email is required");
      return;
    }
    if (!password) {
      setPasswordError("Password is required");
      return;
    }
    const userData = { email, password };
    login(userData);
    navigate("/");
    console.log(userData);
  };
  return (
    <div
      className={css({
        height: "100%",
        maxWidth: "400px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      })}
    >
      <h3
        className={css({
          ...$theme.typography.HeadingMedium,
        })}
      >
        Sign in
      </h3>
      <div
        className={css({
          width: "100%",
        })}
      >
        <FormControl label={() => "Email"} error={emailError}>
          <Input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (!e.target.value) {
                setEmailError("Email is required");
              } else {
                setEmailError("");
              }
            }}
          />
        </FormControl>

        <FormControl label={() => "Password"} error={passwordError}>
          <Input
            value={password}
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
              if (!e.target.value) {
                setPasswordError("Password is required");
              } else {
                setPasswordError("");
              }
            }}
          />
        </FormControl>
      </div>

      <Button
        onClick={handleSubmit}
        overrides={{
          BaseButton: {
            style: {
              width: "100%",
              marginTop: $theme.sizing.scale500,
            },
          },
        }}
      >
        Log in
      </Button>
    </div>
  );
}
