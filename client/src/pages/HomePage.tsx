import CryptoDashboard from '../components/molecules/CryptoDashboard'
import { useLoaderData } from 'react-router-dom';
import { getCryptos } from '../services/cryptoService';
import { Crypto } from '../domain/models/models';

export default function HomePage() {
    const cryptos = useLoaderData() as Crypto[];
    

    
    return (<>
        <CryptoDashboard cryptos={cryptos} />
    </>
    )
}

export async function loader() {
    const cryptos = await getCryptos();
    return cryptos;
}