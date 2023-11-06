import Homepage from "./pages/Homepage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { AuthProvider, useAuth } from "./Auth/AuthContext";
import SignIn from "./Components/SignIn";

function RequireAuth({ children }: { children: any }) {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/login" />;
  }
  return children;
}
function App() {
  const { user } = useAuth();
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Homepage />
              </RequireAuth>
            }
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <SignIn />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
