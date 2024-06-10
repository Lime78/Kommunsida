import { createHashRouter } from 'react-router-dom'
import Root from './root.jsx'
import LandingPage from './LandingPage.jsx'
import CartPage from './CartPage.jsx'
import AdminPage from './AdminPage.jsx'

const router = createHashRouter([
	{

		path: "/",


		element: <Root />,

        
		children: [
			{
                path: '/',
                element: <LandingPage />
            },
			{
				path: '/CartPage',
				element: <CartPage />
			},{
				path: '/AdminPage',
				element: <AdminPage />
			}
			
		]
	},
	
]);

export default router