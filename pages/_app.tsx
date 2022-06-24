import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Login from './login'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../config/firebase'

function MyApp({ Component, pageProps }: AppProps) {
	const [loggedInUser, loading, _error] = useAuthState(auth)

	if (loading) return <h1>LOADING........</h1>

	if (!loggedInUser) return <Login />

	return <Component {...pageProps} />
}

export default MyApp
