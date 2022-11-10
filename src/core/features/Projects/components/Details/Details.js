import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../../../../shared/Loading/Loading";
import './Details.css'
import { GetApi } from "../../../../services/Helpers";


const custumeState = (states, action) => {
    switch (action.type) {
        case 'LOADING':
            return {
                ...states, loading: true, error: false
            }
        case 'FETCHING':
            return {
                ...states, loading: false, error: false, data: action.payload
            }
        case 'ERROR':
            return {
                ...states, loading: false, error: true
            }

        default: throw new Error()
    }

}
const optionalImage = './assets/image-porfolio.jpg'
const apiUrl = process.env.REACT_APP_API_REPO
const userName = process.env.REACT_APP_NAME


const Details = () => {
    const [state, setState] = useReducer(custumeState, {
        data: [], loading: true, error: false
    })
    const repo = useParams()

    useEffect(() => {
        setState({ type: 'LOADING' })
        GetApi(apiUrl + `${userName}/${repo.name}/languages`)
        .then(response => response.json())
        .then(result => {
            setState({type: 'FETCHING', payload: result})
        })
        .catch(() => {
            setState({ type: 'ERROR' })
        })
    },)

    return (
        <section className="container-fluid">
            {
                state.loading ?
                    <div className="text-center pt-5">
                        <Loader />
                    </div> : state.Error ? <div className="container text-center pt-5 bg-danger">
                        <h3 className="h3 fw-bold pt-3">Connection error</h3>
                    </div> :
                        (
                            <article className={state.loading ? "display-hidden" : "container-fluid project-appear"}>
                                <section className=" d-lg-flex d-md-block d-sm-block g-2">
                                    <div className="card">
                                    <img src={optionalImage} className="card-img-top img-thumbnail w-75 h-75" alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">{repo.name}</h5>
                                        <p className="card-text">
                                            Private: {repo.private} <br />
                                            Description: {repo.description} <br />
                                            Created at: {repo.created_at} <br />
                                            Updated at: {repo.updated_at} <br />
                                            Clone url: <a href={repo.clone_url} className="nav-link">{repo.name}</a>
                                            Size: {repo.size} Kb <b />
                                            Languages: {repo.language} <b />
                                            Visibility: {repo.visibility} <b />

                                        </p>
                                    </div>
                                </div>

                                <div >
                                    <h1>Graficas</h1>
                                </div>
                                </section>
                                
                            </article>
                        )
            }
        </section>
    );
};


export default Details;