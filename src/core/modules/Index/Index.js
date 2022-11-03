import Body from "./components/Body";
import './Index.css';

const Index = () => {
    return (
        <div className="container-fluid text-center ps-lg-5 mt-lg-3 pt-sm-1 pt-md-1 mb-lg-3 pe-lg-5 index-apper">
            <div class="card text-start shadow ">
                <div className="container-fluid d-lg-flex d-md-block d-sm-block mt-3">
                    <img className=" card-img-top img-thumbnail rounded-circle w-25 h-25 " src="./assets/Curriculum.jpg" alt="Title" loading="lazy" decoding="async" />
                    <h3 className=" m-auto ">MAIKEL BARRIOS INSUA</h3>
                </div>
                <div className="card-body">
                    <Body />
                </div>
            </div>
        </div>
    );
};

export default Index;