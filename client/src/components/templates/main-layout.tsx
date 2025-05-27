import { Outlet, useNavigation } from 'react-router-dom'
import Header from '../molecules/Header'
import Loading from '../../utils/loading';

export default function Layout() {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";

    return (
        <>
            <Header />
            <main>
                 {isLoading ? <Loading /> : <Outlet />}

            </main>
        </>
    )
}
