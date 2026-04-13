import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px'}}>
            <h1>404</h1>
            <p>Page Not Found</p>
            <button 
            style={{
                backgroundColor: 'red',
                color: 'white',
                padding: '10px',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer'
            }}
            onClick={() => navigate('/')}>Go to Home</button>
        </div>
    )
}

