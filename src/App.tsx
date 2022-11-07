// import { Navigation } from './components/Navigations/Navigation';

export interface AppProps {}
export const App = ({}: AppProps) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <header>
                <h1 className="text-red-500 font-bold">Vite Stater</h1>
            </header>
            <div className="flex flex-col justify-center items-center gap-2">
                <div className="flex justify-center items-center gap-2">
                    <p>Content</p>
                </div>
            </div>
        </div>
    );
};
