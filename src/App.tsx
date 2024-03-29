import { useCallback, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import TutorialPage from "./pages/TutorialPage";
import AuthPage from "./pages/AuthPage";
import { AuthContext, UserContext } from "./utils/context";
import ProfilePage from "./pages/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage";
import ErrorBoundary from "./components/ErrorBoundary";
import ReviewsPage from "./pages/ReviewsPage";
import styles from "./AppDark.module.css";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState({
		fullname: "",
		birthday: new Date(),
		email: "",
		username: "",
	});

	const toggleAuth = useCallback(() => {
		if (isLoggedIn === false) {
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}
	}, [isLoggedIn]);

	const setAuthUser = (user: any) => {
		setUser(user);
	};

	return (
		<div className={"App " + styles.dark}>
			<ErrorBoundary>
				<AuthContext.Provider value={{ loggedIn: isLoggedIn, toggleAuth }}>
					<UserContext.Provider value={{ ...user, setAuthUser }}>
						<BrowserRouter>
							<Routes>
								<Route path="/" element={<HomePage />} />
								<Route path="/tutorial" element={<TutorialPage />} />

								<Route path="/reviews" element={<ReviewsPage />} />

								<Route path="/my-profile" element={<ProfilePage />} />
								<Route path="/login" element={<AuthPage />} />
								<Route
									path="/logout"
									element={<AuthPage removeAuth={true} />}
								/>
								<Route path="/register" element={<RegistrationPage />} />

								<Route path="*" element={<NotFoundPage />} />
							</Routes>
						</BrowserRouter>
					</UserContext.Provider>
				</AuthContext.Provider>
			</ErrorBoundary>
		</div>
	);
}

export default App;
