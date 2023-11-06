import { useStyletron } from "baseui";
import { Button } from "baseui/button";
import { useAuth } from "../../Auth/AuthContext";
import { useNavigate } from "react-router";

export default function Homepage() {
  const [css, $theme] = useStyletron();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div
      className={css({
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: $theme.colors.accent100,
        paddingTop: $theme.sizing.scale800,
      })}
    >
      <h2
        className={css({
          ...$theme.typography.DisplayMedium,
        })}
      >
        Homepage
      </h2>
      <div>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
}
