import { BrowserRouter as MainRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { SecondPage } from './pages';

export interface RouterProps {}

export const Router = ({}: RouterProps) => {
    return (
        <MainRouter>
            <Routes>
                <Route path="/second" element={<SecondPage />} />
                <Route path="/" element={<App />} />
            </Routes>
        </MainRouter>
    );
};
