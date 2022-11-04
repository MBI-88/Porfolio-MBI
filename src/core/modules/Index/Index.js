import { useState } from "react";
import { Loader } from "../../shared/Loading/Loading";
import Body from "./components/Body";
import './Index.css';


const Index = () => {
    const [loading, setLoading] = useState(true)
    setTimeout(() => {
        setLoading(false)

    }, 1000)
    return (
        <>
            {loading ?
                <div className="container-fluid text-center pt-5">
                    <Loader />
                </div>
                : (
                    <div className={loading ? "display-hidden": "container-fluid text-center ps-lg-5 mt-lg-3 pt-sm-1 pt-md-1 mb-lg-3 pe-lg-5 rounded-5 index-appear"}>
                        <div className="card text-start shadow ">
                            <div className="container-fluid d-lg-flex d-md-block d-sm-block p-3 bg-header-cv">
                                <div className="p-2">
                                    <img className="card-img-top img-thumbnail rounded-circle w-75 bg-warning" src="./assets/Porfolio-300x400.jpg" alt="Title" loading="lazy" decoding="async" />
                                </div>
                                <h1 className="h1 m-auto fw-bolder text-warning">MAIKEL BARRIOS INSUA</h1>
                            </div>
                            <div className="card-body">
                                <Body />
                            </div>
                        </div>
                    </div>
                )}
        </>

    );
};

export default Index;