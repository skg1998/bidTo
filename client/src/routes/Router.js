import { Route, Switch } from "react-router-dom";

/****Layouts*****/
import MainLayout from "../layouts/MainLayout"
import AdminLayout from "../layouts/AdminLayout";
/****End Layouts*****/

/*****Pages******/
//Main-Layout
import Home from "../views/Home";
import Products from "../views/Products";
import Login from "../views/Login";
import Signup from "../views/Signup";
import ForgotPassword from "../views/ForgotPassword";
import Error404 from "../views/404";

//Admin-Layout
import Dashboard from "../views/Dashboard/Dashboard";
import ScheduleBidding from "../views/Dashboard/ScheduleBidding";
import DataTable from "../views/Dashboard/BiddingTable";
import ProfilePage from "../views/Dashboard/Profile";
/***** End Pages ******/

/*****Routes******/
const DashboardRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={matchProps => (
				<AdminLayout>
					<Component {...matchProps} />
				</AdminLayout>
			)}
		/>
	);
};

const MainRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={matchProps => (
				<MainLayout>
					<Component {...matchProps} />
				</MainLayout>
			)}
		/>
	);
};

const MainRouter = () => {
	return (
		<div>
			<Switch>
				<MainRoute exact path="/" component={Home} />
				<MainRoute path="/products" component={Products} />
				<MainRoute path="/login" component={Login} />
				<MainRoute path="/signup" component={Signup} />
				<MainRoute path="/forgot-password" component={ForgotPassword} />

				<DashboardRoute exact path="/dashboard" component={Dashboard} />
				<DashboardRoute path="/dashboard/schedulebidding" component={ScheduleBidding} />
				<DashboardRoute path="/dashboard/table" component={DataTable} />
				<DashboardRoute path="/dashboard/profile" component={ProfilePage} />
				<MainRoute path="*" component={Error404} />
			</Switch>
		</div>
	);
}

export default MainRouter;