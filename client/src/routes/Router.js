import { Route, Switch } from "react-router-dom";

/****Layouts*****/
import MainLayout from "../layouts/MainLayout"
import AdminLayout from "../layouts/AdminLayout";
/****End Layouts*****/

/*****Pages******/
//Main-Layout
import Home from "../views/Home/Home";
import BidCheckoutDetail from "../views/Checkout/BidCheckoutDetail";
import Order from '../views/Order/order'
import WishList from '../views/WishList/wishList';
import About from "../views/Home/About";
import Products from "../views/Products/Products";
import Product from "../views/Product/Product";
import Login from "../views/Auth/Login";
import Signup from "../views/Auth/Signup";
import ForgotPassword from "../views/Auth/ForgotPassword";
import Error404 from "../views/Error/404";

//Admin-Layout
import Dashboard from "../views/Dashboard/Dashboard";
import ScheduleBidding from "../views/Dashboard/ScheduleBidding/ScheduleBidding";
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
				<MainRoute path="/product/:id" component={Product} />
				<MainRoute path="/cart" component={BidCheckoutDetail} />
				<MainRoute path="/login" component={Login} />
				<MainRoute path="/signup" component={Signup} />
				<MainRoute path="/forgot-password" component={ForgotPassword} />
				<MainRoute path="/about" component={About} />
				<MainRoute path="/orders" component={Order} />
				<MainRoute path="/wishlist" component={WishList} />

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